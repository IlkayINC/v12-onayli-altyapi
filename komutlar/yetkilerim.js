const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let user = message.mentions.members.first();

  if (!user) user = message.member;

  let x;
  let x2;
  let x3;
  let x4;
  let x5;
  let x6;
  let x7;
  let x8;
  let x9;
  let x10;
  let x11;
  let x12;
  let x13;
  let x14;
  let x15;
  let x16;

  //yönetici
  if (user.hasPermission("ADMINISTRATOR")) x = "✅";
  if (!user.hasPermission("ADMINISTRATOR")) x = "❌";

  //Denetim kaydı
  if (user.hasPermission("VIEW_AUDIT_LOG")) x2 = "✅";
  if (!user.hasPermission("VIEW_AUDIT_LOG")) x2 = "❌";

  //Sunucuyu yönet
  if (user.hasPermission("MANAGE_GUILD")) x3 = "✅";
  if (!user.hasPermission("MANAGE_GUILD")) x3 = "❌";

  //Rolleri yönet
  if (user.hasPermission("MANAGE_ROLES")) x4 = "✅";
  if (!user.hasPermission("MANAGE_ROLES")) x4 = "❌";

  //Kanalları yönet
  if (user.hasPermission("MANAGE_CHANNELS")) x5 = "✅";
  if (!user.hasPermission("MANAGE_CHANNELS")) x5 = "❌";

  //üyeleri at
  if (user.hasPermission("KICK_MEMBERS")) x6 = "✅";
  if (!user.hasPermission("KICK_MEMBERS")) x6 = "❌";

  //üyeleri yasakla
  if (user.hasPermission("BAN_MEMBERS")) x7 = "✅";
  if (!user.hasPermission("BAN_MEMBERS")) x7 = "❌";

  //mesajları yönet
  if (user.hasPermission("MANAGE_MESSAGES")) x8 = "✅";
  if (!user.hasPermission("MANAGE_MESSAGES")) x8 = "❌";

  //kullanıcı adlarını yönet
  if (user.hasPermission("MANAGE_NICKNAMES")) x9 = "✅";
  if (!user.hasPermission("MANAGE_NICKNAMES")) x9 = "❌";

  //emojileri yönet
  if (user.hasPermission("MANAGE_EMOJIS")) x10 = "✅";
  if (!user.hasPermission("MANAGE_EMOJIS")) x10 = "❌";

  if (user.hasPermission("MANAGE_WEBHOOKS")) x11 = "✅";
  if (!user.hasPermission("MANAGE_WEBHOOKS")) x11 = "❌";

  //Kanalları Görüntüle
  if (user.hasPermission("VİEW_CHANNELS")) x12 = "✅";
  if (!user.hasPermission("VİEW_CHANNELS")) x12 = "❌";
  
  //Sunucuyu Yönet
  if (user.hasPermission("ADMINISTRATOR")) x13 = "✅";
  if (!user.hasPermission("ADMINISTRATOR")) x13 = "❌";
  
  //Davet Oluştur
  if (user.hasPermission("CREATE_INVITE")) x14 = "✅";
  if (!user.hasPermission("CREATE_INVITE")) x14 = "❌";
  
  //Kullanıcı Adı Değiştir
  if (user.hasPermission("CHANGE_NICKNAME")) x15 = "✅";
  if (!user.hasPermission("CHANGE_NICKNAME")) x15 = "❌";
  
  //Mesaj Gönder
  if (user.hasPermission("SEND_MESSAGE")) x16 = "✅";
  if (!user.hasPermission("SEND_MESSAGE")) x16 = "❌";
  
  let embed = new Discord.MessageEmbed()

    .setColor("RED")
    .setTitle(`${user.user.tag} adlı kullanıcının bu sunucudaki yetkileri:`)
    .setDescription(
      `${x12} Kanalları Görüntüle\n${x5} Kanalları Yönet\n${x4} Rolleri Yönet\n${x10} Emojileri Yönet\n${x2} Denetim Kaydını Görüntüle\n${x11} Webhook'ları Yönet\n${x13} Sunucuyu Yönet\n${x14} Davet Oluştur\n${x15} Kullanıcı Adı Değiştir\n${x9} Kullanıcı Adlarını Yönet\n${x6} Üyeleri At\n${x7} Üyeleri Yasakla\n${x16} Mesaj Gönder\n${x} Yönetici\n${x2} Denetim Kaydını Görüntüle\n${x3} Sunucuyu Yönet\n${x8} Mesajları Yönet\n${x9} Kullanıcı Adlarını Yönet\n${x11} Webhook'ları Yönet`
    )
    .addField(
      "Eğer Başında ❌ Varsa onlara yetkin yok demektir. \n Ama Başında ✅ Varsa o yetkideki herşeyi yapabilirsin!(Eğlenirken dikkat et.Bazen çok eğlenenler bir tarumar oluyor).",
      `Senin Yetkilerin`
    );
  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["izinler", "yetkilerim"],
  permLevel: 0
};

exports.help = {
  name: "yetkiler",
  description:
    "Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.",
  usage: "yetkilerim"
};
