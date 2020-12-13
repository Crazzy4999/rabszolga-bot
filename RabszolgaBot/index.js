const Discord = require("discord.js");
const ReactionRole = require("./commands/reactionRole.js");

const bot = new Discord.Client({
    disableEveryone: true,
    unknownCommandResponse: false,
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});

const prefix = "?";

function $(string)
{
    return prefix + string;
}

//commands
bot.on('message', async message =>
{
    if(message.content.includes($("hi")))
    {
        var user = message.member.user;
        var name = user.username;
        message.channel.send("hi " + name);

        const emoji = bot.emojis.resolveID("✅");
        message.react(emoji);

        message.channel.messages.fetch({ limit: 1000 }).then(messages =>
        {
            messages.forEach(message => console.log(message.content))
        })
    }
});

//role registers
const tagRegister = new ReactionRole(bot, "✅", "787465663287132160", "787437829167775755");

bot.login("Nzg3NDcwMzkzMDI3MDY3OTM3.X9Va9A.xhgH06vysNb8yiZOREyJf4Bgk20");