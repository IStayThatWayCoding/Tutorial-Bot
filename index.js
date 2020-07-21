const Discord = require("discord.js");
const config = require("./botconfig.json");
const bot = new Discord.Client();


bot.on('ready', async () => {
    console.log("Online")
});

bot.login(config.token);    