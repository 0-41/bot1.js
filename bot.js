const Discord = require("discord.js");
const m7md = new Discord.Client();
m7md.on('message', message => {
    if (message.content === prefix + "cdate") {
        var currentTime = new Date(),
            السنة = currentTime.getFullYear(),
            الشهر = currentTime.getMonth() + 1,
            اليوم = currentTime.getDate();
        message.channel.sendMessage( "Date : " + اليوم + "-" + الشهر + "-" +السنة)
    }
});
m7md.login('التوكن')
