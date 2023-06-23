const Discord = require("discord.js");

exports.run = (client, message, args) => {
  message.delete();

  let question = args.join(" ");

  let user = message.author.username;

  if (!question)
    return message.channel
      .send(
        new Discord.MessageEmbed().addField(`:x: **Yazı Yazman Gerek** :x:`)
      )
      .then(m => m.delete(5000));

  console.log(
    "Oylama komutu " +
      message.author.username +
      "#" +
      message.author.discriminator +
      " tarafından kullanıldı."
  );
  message.channel
    .send(`@everyone`,
      new Discord.MessageEmbed()

        .setColor("GRAY")
        .setTimestamp()

        .setFooter(
          `${message.author.tag} Oylama yaptı.`,
          message.author.avatarURL()
        )
        .setTitle(`${message.guild.name} Sunucu Oylaması`)
        .addField(`**__Oylama Var!__**`, `**${question}**`)
    )
    .then(function(message) {
      message.react("✅");

      message.react("❌");
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oylama"],

  permLevel: 2
};

exports.help = {
  name: "oylama",
  description: "Oylama yapmanızı sağlar.",
  usage: "oylama <oylamaismi>"
};
