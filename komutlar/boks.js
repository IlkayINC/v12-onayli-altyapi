const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Komutları Özel Mesajlarda Kullanılamaz!**");
    return message.author.send(ozelmesajuyari);
  }

  let repliess = [
    "Boks Makinesi Sonucu : **Boks makinesi kırıldı :D=3000** !",
    "Boks Makinesi Sonucu : **Çok yavaş vurdun bir daha dene :smile: 100** !",
    "Boks Makinesi Sonucu : **Eh,yani 900** !",
    "Boks Makinesi Sonucu : **1000** !",
    "Boks Makinesi Sonucu : **OMG. 8000 :100:**!",
    "Boks Makinesi Sonucu : **Vurmadın ki!! 0 :poop:**",
    "Boks Makinesi Sonucu : **Boks Makinesi Param Parça oldu. 5000 :rocket:** ",
    "Boks Makinesi Sonucu : **Boks Makinesine Kafa Attın Bravo 4000 :ok_hand:** ",
    "Boks Makinesi Sonucu : **Boks Makinesi Yokki 0 :smile:**",
    "Boks Makinesi Sonucu : **NAPTIN SEN KENDİNE NİYE VURUYON... -100 :head_bandage:**",
    "Boks Makinesi Sonucu : **Acayip yavaş vurdun :nauseated_face: =50** !",
    "Boks Makinesi Sonucu : **Çok iyi! :boxing_glove: =2000** !",
    "Boks Makinesi Sonucu : **Daha iyisini yapabilirsin! :muscle: =700** !",
    "Boks Makinesi Sonucu : **Daha iyisini yapabilirsin! :muscle: = 550** !",
    "Boks Makinesi Sonucu : **Niye 1000 değil :D=999** !",
    "Boks Makinesi Sonucu : **Orta! :crown:=1250** !",
    "Boks Makinesi Sonucu : **Yine iyisin :white_check_mark: =1150** !",
    "Boks Makinesi Sonucu : **Fena değil :smile: =1200** !"
  ];

  let reesult = Math.floor(Math.random() * repliess.length);

  const embed111 = new Discord.MessageEmbed()
    .setTitle("🥊 Boks Makinesine Vurdun veee..")
    .setDescription(repliess[reesult])
    .setColor("PURPLE")
    .setFooter(`${message.author.username} `, message.author.avatarURL);

  message.channel.send(embed111);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["boks", "boks-makinesi"],
  permLevel: 0
};

exports.help = {
  name: "boks-makinesi",
  description: "Boks Makinesi İle Oyna",
  usage: "kp"
};
