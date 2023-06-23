const Discord = require("discord.js");
const fs = require("fs");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  const db = require("quick.db");

  let prefix = ayarlar.prefix;
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply(`"YÖNETİCİ" almadan yasak aslanım dur orda!`);

  if (!args[0]) {
    return message.reply(
      "Lütfen sayı giriniz. Misal: k!sayaç-ayarla 10"
    );
  }

  if (args[0] === "kapat") {
    if (db.has(`sayacsayı_${message.guild.id}`) === true) {
      db.delete(`sayacsayı_${message.guild.id}`);

      if (db.has(`sayaçKanal_${message.guild.id}`) === true) {
        db.delete(`sayaçKanal_${message.guild.id}`);
        message.channel.send(
          "Sayaç kanalı başarılı bir şekilde kapatıldı. <:mx_tik:914092482076225616> "
        );
        return;
      }

      message.channel.send("Sayaç sıfırlandı.");
      return;
    }
    message.channel.send(`Sayaçı ayarlamadın.`);
    return;
  }

  if (isNaN(args[0])) {
    return message.reply("Lütfen **sayı** giriniz!");
  }

  if (args[0] <= message.guild.memberCount) {
    const embed = new Discord.MessageEmbed();
    return message.reply(
      "Lütfen **sunucu üyelerinden fazla** bir sayı giriniz!"
    );
  }

  db.set(`sayacsayı_${message.guild.id}`, args[0]);

  const embed = new Discord.MessageEmbed()
  .setTimestamp().setDescription(`
Sayaç başarıyla aktif edildi. \n Sayaç: **${args[0]}**
Sayacı kapatmak için **${prefix}sayaç kapat** yazmanız yeterlidir.
Sayaç kanalını ayarlamak için **k!sayaç-kanal-ayarla #kanal** yazmanız yeterlidir.
`);
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sayacayarla", "sayac", "sayaç"],
  permLevel: 0
};

exports.help = {
  name: "sayaç-ayarla",
  description: "Sayacı ayarlar.",
  usage: "sayaç-çayarla <sayı>"
};
