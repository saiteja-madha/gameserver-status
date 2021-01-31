const { QueryResult } = require("gamedig");
const { MessageEmbed } = require("discord.js");

/**
 * @param {QueryResult} state
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
    case "levels/mp_002":
      return {
        name: "Valparaiso",
        image: "https://imgur.com/fcc5ZCs.jpg",
      };

    case "levels/mp_004":
      return {
        name: "Isla Inocentes",
        image: "https://imgur.com/xeTBcRP",
      };
    case "levels/mp_006":
      return {
        name: "Arica Harbor",
        image: "https://imgur.com/PJaZp5M",
      };
    case "levels/mp_007gr":
      return {
        name: "White Pass",
        image: "https://imgur.com/hKsKPdP",
      };
    case "levels/mp_008":
      return {
        name: "Nelson Bay",
        image: "https://imgur.com/HvSUOtJ",
      };
    case "levels/mp_009gr":
      return {
        name: "Laguna Presa",
        image: "https://imgur.com/grGrBiA",
      };
    case "levels/mp_012gr":
      return {
        neme: "Port Valdez",
        image: "https://imgur.com/nCezj1K",
      };
    case "levels/mp_005gr":
      return {
        name: "Atacama Desert",
        image: "https://imgur.com/PIlcYaB",
      };
    case "levels/bc1_harvest_day_gr":
      return {
        name: "Harvest Day",
        image: "https://imgur.com/3GMZNsf",
      };
    case "levels/bc1_oasis_gr":
      return {
        name: "Oasis",
        image: "https://imgur.com/bScDFK7",
      };
    case "levels/mp_sp_002gr":
      return {
        name: "Cold War",
        image: "https://imgur.com/9LAg3DH",
      };
    case "levels/mp_001":
      return {
        name: "Panama Canal",
        image: "https://imgur.com/MdjzgLe",
      };
    case "levels/mp_003":
      return {
        name: "Laguna Alta",
        image: "https://imgur.com/AoHbIG8",
      };
    case "levels/mp_005":
      return {
        name: "Atacama Desert",
        image: "https://imgur.com/PIlcYaB",
      };
    case "levels/mp_006cq":
      return {
        name: "Arica Harbor",
        image: "https://imgur.com/PJaZp5M",
      };
    case "levels/mp_007":
      return {
        name: "White Pass",
        image: "https://imgur.com/hKsKPdP",
      };
    case "levels/mp_008cq":
      return {
        name: "Nelson Bay",
        image: "https://imgur.com/HvSUOtJ",
      };
    case "levels/mp_009cq":
      return {
        name: "Laguna Presa",
        image: "https://imgur.com/grGrBiA",
      };
    case "levels/mp_012cq":
      return {
        name: "Port Valdez",
        image: "https://imgur.com/nCezj1K",
      };
    case "levels/bc1_oasis_cq":
      return {
        name: "Oasis",
        image: "https://imgur.com/bScDFK7",
      };
    case "levels/bc1_harvest_day_cq":
      return {
        name: "Harvest Day",
        image: "https://imgur.com/3GMZNsf",
      };
    case "levels/mp_sp_005cq":
      return {
        name: "Heavy Metal",
        image: "https://imgur.com/5v9GqMz",
      };

    default:
      return {
        name: level,
        image: "https://imgur.com/fcc5ZCs.jpg",
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
