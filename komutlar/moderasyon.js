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
**Kitran Moderasyon Komutları** 
Eğer bot ile bir sorun olursa **!çağır sebep** komutunu kullanınız!`
    )
    .addField(
      "Moderasyon Komutları Listesi",
      "> `k!reklam` Reklam Engel Sistemini Açar \n > `k!küfür` Küfür Engel Sistemini Açar \n > `k!otorol` Otorolü Ayarlar \n > `k!sayaç` Sayaç Sistemini Ayarlar \n > `k!mod-log` Mod Log Sistemini Açar \n > `k!sil` Seçilen Miktarda Mesaj Siler \n > `k!sa-as` Otomatik sa-as Sistemini Açar \n > `k!otocevap` Otocevap Ayarını Aktif Eder \n > `k!oylama` Oylama Başlatır")
    .addField("<a:mx_hypesquad:901534430668161055> Linkler",
      " [Discord](https://discord.gg/Tv8QKU2fE5) | [Youtube](https://youtube.com/c/MeraklıBey) | [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=857981728756334634&scope=bot&permissions=8)"
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
  aliases: ["moderasyon"],
  permLevel: 0
};

exports.help = {
  name: "moderasyon",
  category: "moderasyon",
  description: "Eğlence Komutları Gösterir."
};
