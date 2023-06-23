const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let prefix = "k!";
  let yardım = new Discord.MessageEmbed()
      .setTitle("**__Kirtan__**")
      .setImage(
        "https://cdn.discordapp.com/attachments/914465585931378718/921081403439976498/standard_3.gif"
      
      `
**Kirtan Eğlence Komutları** 
Eğer bot ile bir sorun olursa **!çağır sebep** komutunu kullanınız!`
    )
    .addField(
      "Eğlence Komutları Listesi",
      "> `k!fbi` FBI Gelir \n > `k!token ` Bot'un tokenini verir \n > `k!botlist-ayar botekle-kanal #kanal` Bot Ekleme Kanalını Ayarlar \n > `k!botlist-ayar başvurugiden-kanal #kanal` Başvuruların Giden Kanalı Ayarlar \n > `k!botekle Prefix ID DBL Onay Durumu` Bot Eklersiniz \n > `k!botonayla` Bot Onaylarsınız.")
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
  aliases: ["eğlence"],
  permLevel: 0
};

exports.help = {
  name: "eğlence",
  category: "eğlence",
  description: "Eğlence Komutları Gösterir."
};
