const { prefix, commands_enabled, token, frequency } = require("./config/config.json");
const servers = require("./config/servers.json");
const parsers = require("./parsers");
const Gamedig = require("gamedig");
const Discord = require("discord.js");
const bot = new Discord.Client();

// Collection to store sent message ID's
const collection = new Discord.Collection();

bot.on("ready", async () => {
  bot.user.setStatus("online");
  bot.user.setPresence({
    status: "online",
    afk: false,
    activity: {
      name: `${servers.length} servers`,
      type: "WATCHING",
    },
  });
  console.log(`Logged in as ${bot.user.tag}!`);
  setInterval(fetchStatus, frequency * 60 * 1000);
});

bot.on("message", async (message) => {
  if (!commands_enabled) return;
  if (message.author.bot || !message.guild) return;
  if (!message.content.startsWith(prefix)) return;
  const [CMD_NAME, ...args] = message.content
    .trim()
    .substring(prefix.length)
    .split(/\s+/);

  if (CMD_NAME === "status") {
    fetchStatus(message.channel);
  }
});

/**
 * @param {Discord.TextChannel} channel
 */
const fetchStatus = async (channel) => {
  servers.forEach((server) => {
    Gamedig.query({
      type: server.game,
      host: server.host,
      port: server.port,
    })
      .then((state) => {
        let embed;
        switch (server.game) {
          case "bfbc2":
            embed = parsers.BFBC2(state);
            break;

          case "bf3":
            embed = parsers.BF3(state);
            break;
        }
        if (embed) {
          embed.setFooter("Server Monitor").setTimestamp();
          sendEmbed(channel, embed, server);
        }
      })
      .catch((error) => {
        const embed = new Discord.MessageEmbed()
          .setColor("#eb4d4b")
          .setAuthor(server.name)
          .setDescription("**Status:** Offline")
          .setFooter("Server Monitor")
          .setTimestamp();

        sendEmbed(channel, embed, server);
      });
  });
};

/**
 * @param {Discord.TextChannel} channel
 * @param {Discord.MessageEmbed} embed
 */
function sendEmbed(channel, embed, server) {
  if (channel) channel.send(embed);
  // command is executed
  else {
    // retrieve previous message
    const prevId = collection.get(servers.indexOf(server));
    if (prevId) {
      // previous message found
      bot.channels.cache
        .get(server.embed_channel)
        .messages.fetch(prevId)
        .then((msg) => msg.edit(embed));
    } else {
      // send a new embed and save to collection
      bot.channels.cache
        .get(server.embed_channel)
        .send(embed)
        .then((sentMsg) => {
          collection.set(servers.indexOf(server), sentMsg.id);
        });
    }
  }
}

bot.login(token);
