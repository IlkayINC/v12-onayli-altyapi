const Discord = require("discord.js");

exports.run = (client, message) => {
  let motion = new Discord.MessageEmbed()

    .addField("İstatistikler", `Alt kısımdaki alandan bilgilerim görünebilir.`)
    .addField(
      "**__Hizmet__**",
      ` <:mx_info:914092445619327016>  Toplam sunucu: **${
        client.guilds.cache.size
      }**  \n <:mx_info:914092445619327016>  Toplam kullanıcı: **${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}**  \n <:mx_info:914092445619327016>  Toplam kanal: **${
        client.channels.cache.size
      }**`
    )
    .addField(
      "**__Geliştirme__**",
      `<:mx_developer:914092442238722078> Bot geliştiricileri : <@742614467589832806> & <@846075573646131232> \n<:mx_developer:914092442238722078> Kodlar: <@742614467589832806>`
    )
    .addField(
      "**__Sürümler__**",
      `<:mx_discordjs:918820684346560563> Discord.js sürümü: **v${Discord.version}** \n <:mx_nodejs:918820677795074059> Node.js sürümü: **${process.version}**`
    )

    .setTimestamp()
    .setColor("RANDOM");
  message.channel.send(motion);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["bot-bilgi", "i"]
};

exports.help = {
  name: "istatistik",
  description: "Türkiyenin Saatini Gösterir ",
  usage: "gç"
};
