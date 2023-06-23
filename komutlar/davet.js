const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("../ayarlar.json");

exports.run = (client, message) => {
  const chrome = new Discord.MessageEmbed()
    .setTitle("**__Davet Linkleri Altta Belirtilmiştir__**")
    .setColor("GOLD")
    .addField(
      "**__Geliştirme__**",
      `<:mx_developer:914092442238722078> Bot geliştiricileri : <@742614467589832806> & <@846075573646131232> \n<:mx_developer:914092442238722078> Kodlar: <@742614467589832806>`
    )
    .addField("<a:mx_hypesquad:901534430668161055> Linkler",
      " [Discord](https://discord.gg/Tv8QKU2fE5) | [Youtube](https://youtube.com/c/MeraklıBey) | [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=818468518625935381&permissions=8&scope=bot)"
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/913800705771442218/914935693480980520/standard_1.gif"
    )
    .setFooter(
      `${message.author.tag} Tarafından İstendi`,
      message.author.avatarURL()
    );
  message.channel.send(chrome); //DevTR
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "davet"
};
