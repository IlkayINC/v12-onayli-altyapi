const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.channel.send(
      "<<a:ZilGif:819271813825560628>  **Dostum.Önce bir** `Rolleri Yönet`**yetkisini kap gel.**"
    );

  if (!args[0])
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("0x36393E")
        .setDescription(
          "**Oğlum skıntılı mısın? Bir şey söylede onu yapayım!** <a:ZilGif:819271813825560628>  \n> `!otorol ayarla @üye #kanal` **Otorol sistemini uyandırır.** \n>  `!otorol sıfırla` **Otorol sistemini imha eder. Bu kadar!**"
        )
    );

  if (args[0] === "ayarla") {
    var rol = message.mentions.roles.first();
    var rolkanal = message.mentions.channels.first();
    if (!rol)
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("0x36393E")
          .setDescription(
            "**Bir rol etiketle ki İkramlığı belirle!** `!otorol ayarla @rol #kanal` **(Eğer rolü bulamıyorsan etiketleme izninin açık olduğundan veya komutun kullanıldığı kanalı görebildiğinden emin ol)**"
          )
      );
    if (!rolkanal)
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("0x36393E")
          .setDescription(
            "**Hey! Bir kanal ekle de işe başlayayım. Eğer hala başlamadıysam, O kanalı görmüyoru demektir. Belkide körüm? **"
          )
      );

    db.set(`autoRoleChannel_${message.guild.id}`, rolkanal.id);
    db.set(`autoRole_${message.guild.id}`, rol.id);

    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("0x36393E")
        .setDescription(
          "> **Otorol Sistemi uyandırıldı** <:1779_check:823912120700764250>  \n> **Sunucuyu girenlere ikram olarak** <@&" +
            rol +
            "> **Vereceğim.**",
          "> \n> **İkram mesajı** <#" + rolkanal.id + "> **alanına gidecek **"
        )
    );
  }

  if (args[0] === "sıfırla") {
    let user = message.author;
    message.channel
      .send(
        "**Bak bu son şansın! Emin misin değil misin? Eminsen** :white_check_mark: **değilsen** :x: **Tepkisine bas.**"
      )
      .then(async m => {
        await m.react("✅").then(r => {
          let onay = (reaction, user) =>
            reaction.emoji.name === "✅" && user.id == message.author.id;
          let onay2 = m.createReactionCollector(onay);
          onay2.on("collect", async r => {
            db.delete(`autoRoleChannel_${message.guild.id}`);
            db.delete(`autoRole_${message.guild.id}`);
            m.reactions.removeAll();
            m.edit("Otorol kendini imha etti.");
          });
        });
        await m.react("❌").then(r => {
          let onay = (reaction, user) =>
            reaction.emoji.name == "❌" && user.id == message.author.id;
          let onay2 = m.createReactionCollector(onay);
          onay2.on("collect", async r => {
            m.reactions.removeAll();
            m.edit(
              "Otorolü imha etme mahkemesi iptal edildi. Bir sonraki sefere!"
            );
          });
        });
      });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 0
};

exports.help = {
  name: "otorol"
};
