const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let prefix = "!";
  let yardım = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setTitle("**__Kirtan__**")
    .setImage(
      "https://cdn.discordapp.com/attachments/913800705771442218/914935693480980520/standard_1.gif"
    )
    .setDescription(
      `
**Kitran Abone Rol Komutları** 
Eğer bot ile bir sorun olursa **!çağır sebep** komutunu kullanınız!`
    )
    .addField(
      "Abone Rol Komutları Listesi",
      "> `k!abone-yetkili-rol` Abone Yetkilisini Ayarlar \n > `k!abone-rol` Abone rolü ayarlar \n > `k!abone-log` Abone Log Ayarlar \n > `k!abone` Abone Rolü Verir")
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
  aliases: ["abone-yardım"],
  permLevel: 0
};

exports.help = {
  name: "abone-yardım",
  category: "abone-yardım",
  description: "Eğlence Komutları Gösterir."
};
