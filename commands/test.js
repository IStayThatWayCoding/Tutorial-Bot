const Discord = require('discord.js');
const config = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    message.reply("testing!")
}

module.exports.config = {
    name: "test",
    description: "test out this command!", 
    usage: "!test",
    accessableby: "Members",
    aliases: ['t', 'test']
}