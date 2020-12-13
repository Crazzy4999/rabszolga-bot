module.exports = class ReactionRole
{
    constructor(bot, emojiID, msgID, roleID)
    {
        this.bot = bot;
        this.emojiID = emojiID;
        this.msgID = msgID;
        this.roleID = roleID;
        this.addRole();
        this.removeRole();
    }

    addRole()
    {
        this.bot.on("messageReactionAdd", async (reaction, user) =>
        {
            const emoji = this.bot.emojis.resolveID(this.emojiID);
            if(reaction.message.id === this.msgID)
            {
                if(reaction.emoji.name === emoji)
                {
                    let guildMember = reaction.message.guild.member(user);
                    const role = reaction.message.guild.roles.cache.get(this.roleID);
                    guildMember.roles.add(role);
                }
            }
        })
    }

    removeRole()
    {
        this.bot.on("messageReactionRemove", async (reaction, user) =>
        {
            const emoji = this.bot.emojis.resolveID(this.emojiID);
            if(reaction.message.id === this.msgID)
            {
                if(reaction.emoji.name === emoji)
                {
                    let guildMember = reaction.message.guild.member(user);
                    const role = reaction.message.guild.roles.cache.get(this.roleID);
                    guildMember.roles.remove(role);
                }
            }
        })
    }
}