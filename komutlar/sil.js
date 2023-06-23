const Discord = require("discord.js");

exports.run = async (yashinu, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply(` "MESAJLARI YÖNET" yetkiniz yok!`);
  if (!args[0] || isNaN(args[0]))
    return message.reply(`Bir miktar giriniz!`);
  message.delete();
  let rexussayi = Number(args[0]);
  let rexussilinen = 0;
  for (var i = 0; i < Math.floor(rexussayi / 100); i++) {
    message.channel.bulkDelete(100).then(r => (rexussilinen += r.size));
    rexussayi = rexussayi - 100;
  }
  if (rexussayi > 0)
    message.channel.bulkDelete(rexussayi).then(r => (rexussilinen += r.size));
  message.channel.send(`\`\`${args[0]}\`\` **Mesaj başarıyla temizlendi** <:mx_tik:914092482076225616> `).then(sil => {
    setTimeout(function () {
      sil.delete()
    }, 5000);
  })
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["temizle", "sil", "clear", "s"],
  permLevel: 0
};

exports.help = {
  name: "temizle",
  description: "Belirtilen miktarda mesajı temizler. (Sınırsız)",
  usage: "temizle <miktar>",
  kategori: "yetkili"
};
