const { MessageEmbed } = require("discord.js");

/**
 * @param {jsonExample} state
 * @returns {MessageEmbed} Discord Message Embed
 */
module.exports = (state) => {
  const map = getMapData(state.map);
  const mode = getGameModeData(state.raw.gametype)

  const embed = new MessageEmbed()
    .setColor("#2ed573")
    .setAuthor(state.name)
    .setThumbnail(map.image)
    .addField("Map", map.name, true)
    .addField("Gamemode", mode.name, true)
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
    case "mp_001":
      return {
        name: "Grand Bazaar",
        image: "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bf3/MP_001.jpg",
      };
    
    case "mp_003":
      return {
        name: "Teheran Highway",
        image: "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bf3/MP_003.jpg",
      };
    
    case "mp_007":
      return {
        neme: "Caspian Border",
        image: "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bf3/MP_007.jpg",
      };
    
    case "mp_011":
      return {
        name: "Seine Crossing",
        image: "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bf3/MP_011.jpg",
      };
    
    case "mp_012":
      return {
        name: "Operation Firestorm",
        image: "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bf3/MP_012.jpg",
      };
    
    case "mp_013":
      return {
        name: "Damavand Peak",
        image: "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bf3/MP_013.jpg",
      };
    
    case "mp_017":
      return {
        name: "Noshahr Canals",
        image: "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bf3/MP_017.jpg",
      };
    
    case "mp_018":
      return {
        name: "Kharg Island",
        image: "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bf3/MP_018.jpg",
      };
    
    case "mp_subway":
      return {
        name: "Operation Metro",
        image: "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bf3/MP_Subway.jpg",
      };

    // Back to Karkand

    case "xp1_001":
      return {
        name: "Strike at Karkand",
        image: "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bf3/XP1_001.jpg",
      };
    
    case "xp1_002":
      return {
        name: "Gulf of Oman",
        image: "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bf3/XP1_002.jpg",
      };

    case "xp1_003":
      return {
        name: "Sharqi Peninsula",
        image: "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bf3/XP1_003.jpg",
      };
    
    case "xp1_004":
      return {
        name: "Wake Island",
        image: "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bf3/XP1_004.jpg",
      };

    // Close Quarters

    case "xp2_factory":
      return {
        name: "Scrapmetal",
        image: "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bf3/XP2_Factory.jpg",
      };

    case "xp2_office":
      return {
        name: "Operation 925",
        image: "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bf3/XP2_Office.jpg",
      };

    case "xp2_palace":
      return {
        name: "Donya Fortress",
        image: "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bf3/XP2_Palace.jpg",
      };

    case "xp2_skybar":
      return {
        name: "Ziba Tower",
        image: "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bf3/XP2_Skybar.jpg",
      };

    // Armored Kill

    case "xp3_desert":
      return {
        name: "Bandar Desert",
        image: "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bf3/XP3_Desert.jpg",
      };

    case "xp3_alborz":
      return {
        name: "Alborz Mountains",
        image: "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bf3/XP3_Alborz.jpg",
      };

    case "xp3_shield":
      return {
        name: "Armored Shield",
        image: "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bf3/XP3_Shield.jpg",
      };

    case "xp3_valley":
      return {
        name: "Death Valley",
        image: "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bf3/XP3_Valley.jpg",
      };

    // Aftermath

    case "xp4_quake":
      return {
        name: "Epicenter",
        image: "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bf3/XP4_Quake.jpg",
      };

    case "xp4_fd":
      return {
        name: "Markaz Monolith",
        image: "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bf3/XP4_FD.jpg",
      };

    case "xp4_parl":
      return {
        name: "Azadi Palace",
        image: "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bf3/XP4_Parl.jpg",
      };

    case "xp4_rubble":
      return {
        name: "Talah Market",
        image: "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bf3/XP4_Rubble.jpg",
      };

    // End Game

    case "XP5_001":
      return {
        name: "Operation Riverside",
        image: "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bf3/XP5_001.jpg",
      };

    case "XP5_002":
      return {
        name: "Nebandan Flats",
        image: "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bf3/XP5_002.jpg",
      };
    case "XP5_003":
      return {
        name: "Kiasar Railroad",
        image: "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bf3/XP5_003.jpg",
      };
    case "XP5_004":
      return {
        name: "Sabalan Pipeline",
        image: "https://raw.githubusercontent.com/saiteja-madha/gameserver-status/main/assets/bf3/XP5_004.jpg",
      };

    default:
      return {
        name: level,
        image: "https://imgur.com/fcc5ZCs.jpg",
      };
  }
}

/**
 * @param {String} gametype
 */
function getGameModeData(gametype) {
  switch (gametype) {
    case "ConquestLarge0":
      return {
        name: "Conquest 64",
        intendedPlayerCount: 64,
      };

    case "ConquestSmall0":
      return {
        name: "Conquest",
        intendedPlayerCount: 32,
      };

    case "ConquestAssaultLarge0":
      return {
        name: "Conquest Assault 64",
        intendedPlayerCount: 64,
      };

    case "ConquestAssaultSmall0":
      return {
        name: "Conquest Assault",
        intendedPlayerCount: 32,
      };

    case "ConquestAssaultSmall1":
      return {
        name: "Conquest Assault (alt.)",
        intendedPlayerCount: 32,
      };

    case "RushLarge0":
      return {
        name: "Rush",
        intendedPlayerCount: 32,
      };

    case "SquadRush0":
      return {
        name: "Squad Rush",
        intendedPlayerCount: 8,
      };

    case "SquadDeathMatch0":
      return {
        name: "Squad Deathmatch",
        intendedPlayerCount: 16,
      };

    case "TeamDeathMatch0":
      return {
        name: "Team Deathmatch",
        intendedPlayerCount: 24,
      };

    case "TeamDeathMatchC0":
      return {
        name: "Team DM Close Quarters",
        intendedPlayerCount: 24,
      };

    case "CaptureTheFlag0":
      return {
        name: "Capture The Flag",
        intendedPlayerCount: 32,
      };

    case "AirSuperiority0":
      return {
        name: "Air Superiority",
        intendedPlayerCount: 24,
      };

    case "TankSuperiority0":
      return {
        name: "Tank Superiority",
        intendedPlayerCount: 24,
      };

    case "Domination0":
      return {
        name: "Conquest Domination",
        intendedPlayerCount: 24,
      };

    case "GunMaster0":
      return {
        name: "GunMaster",
        intendedPlayerCount: 24,
      };

    case "Scavenger0":
      return {
        name: "Scavenger",
        intendedPlayerCount: 24,
      };

    default:
      return {
        name: gametype,
        intendedPlayerCount: 64,
      };
  }
}

const jsonExample = {
  name: "TEST SERVER",
  map: "XP5_002",
  password: false,
  raw: {
    numplayers: 2,
    gametype: "CaptureTheFlag0",
    roundsplayed: 2,
    roundstotal: 10,
    teams: [],
    targetscore: 0,
    status: "",
    ranked: true,
    punkbuster: false,
    uptime: 535346,
    roundtime: 5727,
    ip: "0.0.0.0:00000",
    punkbusterversion: "",
    joinqueue: true,
    region: "NAm",
    pingsite: "lax",
    country: "US",
    quickmatch: true,
    version: "3065862",
  },
  maxplayers: 32,
  players: [
    {
      name: "",
      guid: "",
      team: 2,
      squad: 1,
      kills: 0,
      deaths: 0,
      score: 0,
      rank: 145,
      ping: 49,
    },
  ],
  bots: [],
  connect: "0.0.0.0:00000",
  ping: 13,
};
