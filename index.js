const Discord = require("discord.js");
const config = require("./botconfig.json");
const bot = new Discord.Client();


bot.on('ready', async () => {
    console.log("Online")
    bot.user.setActivity("IStayThatWay on YouTube", {type: "WATCHING"});
});

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === 'dm') return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}test`){
        return message.channel.send("Testing 1234!")
    }

    if(cmd === `${prefix}hello`){
        return message.reply("Hi!")
    }
})

bot.login(config.token);    