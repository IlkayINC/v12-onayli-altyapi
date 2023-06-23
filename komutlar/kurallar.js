const Discord = require("discord.js");

exports.run = (client, message) => {
    const kurallar = new Discord.MessageEmbed ()
    .setColor('BLUE')
    .setTitle(`${message.guild.name} Sunucu Kuralları`)
    .addField(":black_small_square: Gerekmiyorsa küfür etme.",`> Cezası: **Mute**`) 
    .addField(":black_small_square: Reklam yapma.",`> Cezası: **Ban**`) 
    .addField(":black_small_square: Kişisel tartışmalarını odalara veya sohbetlere taşıma.",`> Cezası: **Mute**`)
    .addField(":black_small_square: Cinsel, kan, vahşet içerikli paylaşımlar yapma.",`> Cezası: **Mute**`) 
    .addField(":black_small_square: Ticari amaç içeren linkler paylaşma.",`> Cezası: **Ban**`)
    .addField(":black_small_square: İllegal paylaşımlar yapma.",`> Cezası: **Mute**`) 
    .addField(":black_small_square: Spam ve flood yapma.",`> Cezası: **Mute**`)
    .addField(":black_small_square: Kendi sosyal medya hesaplarının reklamını yapma.",`> Cezası: **Ban**`) 
    .addField(":black_small_square: Bu Discord'dan kendi Discord'una adam çekme.",`> Cezası: **Ban**`)
    .addField(":white_small_square: Bir sorunun olursa Yetkililere ulaş. \n :white_small_square: Kurallar değişmez. Eğer uymayan olursa DM'den bizlere bildirin.",`> :warning: **Herkes kuralları okumuş sayılır.**`)
    .setImage("https://cdn.discordapp.com/attachments/913800705771442218/914935693480980520/standard_1.gif")
    .setFooter(`Kirtan`)
    .setThumbnail(client.user.avatarURL());
    message.channel.send(kurallar);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kural"],
  permLevel: 0
};

exports.help = {
  name: "kurallar",
  description: "Botun Komut Listesini Gösterir!",
  usage: "kurallar"
};
