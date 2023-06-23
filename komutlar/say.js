const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var tagdakiler = 0;
  let tag = "maraqsız";
message.guild.members.cache.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }
  })    
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0
     let botlar = message.guild.members.cache.filter(m => m.user.bot).size;
    let textChannels = message.guild.channels.cache.filter(m => m.type == "text").size;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let  çevrimiçi = message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size
    const kobs  = new Discord.MessageEmbed()
        .setColor("#00a5ff")
        .setThumbnail(client.user.avatarURL())
        .addField(` **Sunucudaki Toplam Üye Sayısı**`,`**\`\`\`${message.guild.memberCount}\`\`\`**`)
        .addField(`**Seslideki Üye Sayısı**`,`**\`\`\`${count}\`\`\`**`)
        .addField(`**Boost Sayısı**`,`**\`\`\`${message.guild.premiumSubscriptionCount}\`\`\`**`)
        .setFooter(`${message.author.tag} - Tarafından Kullanıldı`)
        .setTitle(`Kirtan`, client.user.avatarURL())
        .setImage('https://cdn.discordapp.com/attachments/913800705771442218/914935693480980520/standard_1.gif')
    message.channel.send(kobs);

} 

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Say',
    usage: 'say'
}