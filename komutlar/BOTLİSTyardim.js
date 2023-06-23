const Discord = require("discord.js");

exports.run = (client, message) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setTimestamp()
      .addField("**Komutları Özel Mesajlarda Kullanılamaz!**");
    return message.author.send(ozelmesajuyari);
  }
  const YRNEXEMBEDD = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setTitle("**__Kirtan__**")
    .setImage(
      "https://cdn.discordapp.com/attachments/914465585931378718/921081403439976498/standard_3.gif"
    )
    .setDescription(
      `
**Kitran Botlist Komutları** 
Eğer bot ile bir sorun olursa **!çağır sebep** komutunu kullanınız!`
    )
    .addField(
      "Botlist Komutları Listesi",
      "> `k!botlist-ayar yetkili @rol` Botlist Yetkilisini Ayarlar \n > `k!botlist-ayar botlog-kanal #kanal` Botlog Kanalını Ayarlar \n > `k!botlist-ayar botekle-kanal #kanal` Bot Ekleme Kanalını Ayarlar \n > `k!botlist-ayar başvurugiden-kanal #kanal` Başvuruların Giden Kanalı Ayarlar \n > `k!botekle Prefix ID DBL Onay Durumu` Bot Eklersiniz \n > `k!botonayla` Bot Onaylarsınız.")
    .addField("<a:mx_hypesquad:901534430668161055> Linkler",
      " [Discord](https://discord.gg/Tv8QKU2fE5) | [Youtube](https://youtube.com/c/MeraklıBey) | [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=818468518625935381&permissions=8&scope=bot)"
    )
    .setFooter(
      `${message.author.tag} Tarafından İstendi.`,
      message.author.avatarURL()
    )
    .setThumbnail(client.user.avatarURL());
  return message.channel.send(YRNEXEMBEDD).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["botlist-yardım","botlist"],
  permLevel: 0
};

exports.help = {
  name: "botlist-sistemi",
  description: "Botun Bot List Komut Listesini Gösterir!",
  usage: "-eğlence"
};
