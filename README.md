## Description
Discord Status Bot that fetches the gameservers status and notifies in discord

## Usage
- Checkout the code
- Install Node js with npm
- Run `npm install` in project folder to install all dependencies
- Edit config.json and servers.json

## Currently Supported Games
- Battlefield Bad Company 2
- Battlefield 3

### Configuration Data:

`token`: Your discord bot token. Get it from [here](https://discord.com/developers/applications/)<br>
`prefix`: Your bot prefix<br>
`commands_enabled`: This will enable/disable the usage of bot commands in your discord channel<br>
`frequency`: Frequency at which the status must be fetched and sent to discord

### Servers Data:

`game`: bfbc2/bf3<br>
`host`: your gameserver IP address<br>
`port`: rcon port<br>
`name`: fallback name. This name will be used when server is offline or not reachable<br>
`embed_channel`: your discord channel ID where the embed will be sent