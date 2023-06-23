const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let prefix = "!";
  let yardım = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setTitle("**__Kirtan__**")
    .setImage(
      "https://cdn.discordapp.com/attachments/914465585931378718/921081403439976498/standard_3.gif"
    )
    .setDescription(
      `
**Kitran Sunucu Kurma Komutları** 
Eğer bot ile bir sorun olursa **!çağır sebep** komutunu kullanınız!`
    )
    .addField(
      "Sunucu Kurma Komutları Listesi",
      "> `k!sunucu-kur-botlist` Botlist Sunucusu Kurar \n > `k!sunucu-kur-normal` Normal Sunucu Kurar \n > `k!sunucu-kur-youtube` YouTube Sunucusu Kurar")
    .addField("<a:mx_hypesquad:901534430668161055> Linkler",
      " [Discord](https://discord.gg/Tv8QKU2fE5) | [Youtube](https://youtube.com/c/MeraklıBey) | [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=818468518625935381&permissions=8&scope=bot)"
    )
    .setFooter(
      `${message.author.tag} Tarafından İstendi.`,
      message.author.avatarURL()
    )
    .setThumbnail(client.user.avatarURL());
  message.channel.send(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucukur-sistem"],
  permLevel: 0
};

exports.help = {
  name: "sunucu-kurma-sistemi",
  category: "sunucu-kurma",
  description: "Eğlence Komutları Gösterir."
};
