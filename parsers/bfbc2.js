const { MessageEmbed } = require("discord.js");

/**
 * @param {jsonExample} state
 * @returns {MessageEmbed} Discord Message Embed
 */
module.exports = (state) => {
  const map = getMapData(state.map);

  const embed = new MessageEmbed()
    .setColor("#2ed573")
    .setAuthor(state.name)
    .setThumbnail(map.image)
    .addField("Map", map.name, true)
    .addField("Gamemode", state.raw.gametype, true)
    .addField(
      "Rounds",
      `${state.raw.roundsplayed}/${state.raw.roundstotal}`,
      true
    )
    .addField("Players", `${state.raw.numplayers}/${state.maxplayers}`, false)
    .addField(
      "Team 1",
      state.players.filter((m) => m.team === 1).map((m) => m.name),
      true
    )
    .addField(
      "Team 2",
      state.players.filter((m) => m.team === 2).map((m) => m.name),
      true
    );

  return embed;
};

/**
 * @param {String} level
 */
function getMapData(level) {
  switch (level.toLowerCase()) {
    case "levels/bc1_harvest_day_cq":
      return {
        name: "Harvest Day",
        image:
          "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bfbc2/bc1_harvest_day_cq.jpg",
      };

    case "levels/bc1_harvest_day_gr":
      return {
        name: "Harvest Day",
        image:
          "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bfbc2/bc1_harvest_day_cq.jpg",
      };

    case "levels/bc1_oasis_cq":
      return {
        name: "Oasis",
        image:
          "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bfbc2/bc1_oasis_cq.jpg",
      };

    case "levels/bc1_oasis_gr":
      return {
        name: "Oasis",
        image:
          "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bfbc2/bc1_oasis_cq.jpg",
      };

    case "levels/mp_001":
      return {
        name: "Panama Canal",
        image:
          "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bfbc2/mp_001.png",
      };

    case "levels/mp_002":
      return {
        name: "Valparaiso",
        image:
          "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bfbc2/mp_002.jpg",
      };

    case "levels/mp_003":
      return {
        name: "Laguna Alta",
        image:
          "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bfbc2/mp_003.png",
      };

    case "levels/mp_004":
      return {
        name: "Isla Inocentes",
        image:
          "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bfbc2/mp_004.jpeg",
      };

    case "levels/mp_005":
      return {
        name: "Atacama Desert",
        image:
          "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bfbc2/mp_005.jpeg",
      };

    case "levels/mp_005gr":
      return {
        name: "Atacama Desert",
        image:
          "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bfbc2/mp_005.jpeg",
      };

    case "levels/mp_006":
      return {
        name: "Arica Harbor",
        image:
          "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bfbc2/mp_006.jpg",
      };

    case "levels/mp_006cq":
      return {
        name: "Arica Harbor",
        image:
          "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bfbc2/mp_006.jpg",
      };

    case "levels/mp_007":
      return {
        name: "White Pass",
        image:
          "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bfbc2/mp_007.jpg",
      };

    case "levels/mp_007gr":
      return {
        name: "White Pass",
        image:
          "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bfbc2/mp_007.jpg",
      };

    case "levels/mp_008":
      return {
        name: "Nelson Bay",
        image:
          "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bfbc2/mp_008.jpeg",
      };

    case "levels/mp_008cq":
      return {
        name: "Nelson Bay",
        image:
          "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bfbc2/mp_008.jpeg",
      };

    case "levels/mp_009cq":
      return {
        name: "Laguna Presa",
        image:
          "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bfbc2/mp_009cq.jpg",
      };

    case "levels/mp_009gr":
      return {
        name: "Laguna Presa",
        image:
          "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bfbc2/mp_009cq.jpg",
      };

    case "levels/mp_012cq":
      return {
        name: "Port Valdez",
        image:
          "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bfbc2/mp_012cq.jpg",
      };

    case "levels/mp_012gr":
      return {
        neme: "Port Valdez",
        image:
          "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bfbc2/mp_012cq.jpg",
      };

    case "levels/mp_sp_002gr":
      return {
        name: "Cold War",
        image:
          "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bfbc2/mp_sp_002gr.jpg",
      };

    case "levels/mp_sp_005cq":
      return {
        name: "Heavy Metal",
        image:
          "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bfbc2/mp_sp_005cq.jpeg",
      };

    default:
      return {
        name: level,
        image:
          "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bfbc2/unknown.jpg",
      };
  }
}

const jsonExample = {
  name: "TEST SERVER",
  map: "Levels/MP_002",
  password: false,
  raw: {
    numplayers: 4,
    gametype: "RUSH",
    roundsplayed: 1,
    roundstotal: 2,
    teams: [
      {
        tickets: 96,
      },
      {
        tickets: 1459,
      },
    ],
    targetscore: 0,
    status: "AcceptingPlayers",
    ranked: true,
    punkbuster: true,
    uptime: 2425,
    roundtime: 2425,
    ip: "0.0.0.0:00000",
    punkbusterversion: "v1.905 | A1382 C2.305",
    joinqueue: true,
    region: "EU",
    version: "851434",
  },
  maxplayers: 32,
  players: [
    {
      clanTag: "",
      name: "",
      guid: "",
      team: 1,
      squad: 1,
      kills: 0,
      deaths: 0,
      score: 0,
      ping: 13,
    },
  ],
  bots: [],
  connect: "0.0.0.0:00000",
  ping: 13,
};
