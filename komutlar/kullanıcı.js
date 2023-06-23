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
**Kitran Kullanıcı Komutları** 
Eğer bot ile bir sorun olursa **!çağır sebep** komutunu kullanınız!`
    )
    .addField(
      "Kullanıcı Komutları Listesi",
      "> `k!profil` Profilinizi Görüntüler \n > `k!avatar` Avatarınızı Kanala Atar \n > `k!say` Sunucunun Toplam Üyesini Gösterir \n > `k!afk` AFK Olursunuz \n > `k!yetkilerim` Yetkilerinizi Görürsünüz. \n > `k!i` Botun İstatistikleri \n > `k!çağır` Yapımcıya Mesaj Atar \n > `k!davet` Kirtan'ı Sunucuna Davet Et!")
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
  aliases: ["kullanıcı"],
  permLevel: 0
};

exports.help = {
  name: "kullanıcı",
  category: "kullanıcı",
  description: "Eğlence Komutları Gösterir."
};
