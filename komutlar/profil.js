const Discord = require('discord.js');
const db = require('quick.db');
const moment = require("moment");
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args, tools) => {
let user;

  if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }

    const member = message.guild.member(user);
       
    const embed = new Discord.MessageEmbed()
        .setColor("GREEN")
    
    .setThumbnail(user.avatarURL)
    
    .setTitle(`${user.username}#${user.discriminator} Kullanıcı Bilgi'si`)
    
    .addField("İsim :",`\`\`\`${user.username}#${user.discriminator}\`\`\``)
    .addField("İd :", `\`\`\`${user.id}\`\`\``)
    .addField("Discord Tag :", `#${user.discriminator}`)
    .addField("Hesap Oluşturma Tarihi :", `\`\`\`${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY,')}\`\`\``)
    .addField("Sunucuya Katılma Tarihi :", `\`\`\`${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY')}\`\`\``)
    .addField("Durumu :", `\`\`\`Aktif\`\`\``)
  .setImage('https://cdn.discordapp.com/attachments/913800705771442218/914935693480980520/standard_1.gif')
    message.channel.send({embed});
    }

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: ['profil-bilgi','profilbilgi','kullanıcı-bilgi','kullanıcıbilgi','k-bilgi','kbilgi','kb'], 
  permLevel: 0 
};

exports.help = {
  name: 'profil', 
  description: 'Etiketlediğin / kendi profilin hakkında bilgi verir.',
  usage: 'profil' 
};