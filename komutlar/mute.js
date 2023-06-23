const Discord = require("discord.js");
const ms = require("ms");
const ayarlar = require("../ayarlar.json");
const prefix = ayarlar.prefix;

//MUTELENDİGİ ZAMAN VERİLECEK ROLU  BURAYA YAZINIZ...

module.exports.run = async (bot, message, args, channel) => {
  let mutekisi = message.guild.member(
    message.mentions.users.first() || message.guild.members.cache.get(args[0])
  );
  if (!mutekisi)
    return message.channel.send(
      new Discord.MessageEmbed().setDescription(
        `<a:YanpSnennleGif:819270147834904676> Hani bir kullanıcı etiketlede bende muteliyim \nDoğru Kullanım; \`${prefix}mute <@kullanıcı> <1sn/1dk/1sa/1g>\``
      )
    );
  if (mutekisi.hasPermission("MANAGE_MESSAGES"))
    return message.reply(
      `<a:YanpSnennleGif:819270147834904676> Yetkili mutelemekte neymiş! \nDoğru Kullanım; \`${prefix}mute <@kullanıcı> <1sn/1dk/1sa/1g>\``
    );
  let muterol = message.guild.roles.cache.find(`name`, "🚫 • Susturuldun");
  if (!muterol) {
    try {
      muterol = await message.guild.roles.create({
        name: "🚫 • Susturuldun",
        color: "#000000",
        permissions: []
      });
      message.guild.channels.cache.forEach(async (channel, id) => {
        await channel.createOverwrite(muterol, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    } catch (e) {
      console.log(e.stack);
    }
  }
  let mutezaman = args[1]
    .replace(`sn`, `s`)
    .replace(`dk`, `m`)
    .replace(`sa`, `h`)
    .replace(`g`, `d`);

  if (!mutezaman)
    return message.channel.send(
      new Discord.MessageEmbed().setDescription(
        `<a:YanpSnennleGif:819270147834904676> Zaman girki bende onun mahkemede hapiste ne kadar yatacağına karar vereyim. \nDoğru Kullanım; \`${prefix}mute <@kullanıcı> <1sn/1dk/1sa/1g>\``
      )
    );

  await mutekisi.roles.add(muterol.id);
  message.channel.send(
    new Discord.MessageEmbed().setDescription(
      `Cezalanan Kişi: <@${mutekisi.id}> \nCeza Süresi: ${
        args[1]
      } \nSusturan Yetkili: ${message.author.id}`
    )
  );
  setTimeout(function() {
    mutekisi.roles.remove(muterol.id);
    message.channel.send(
      new Discord.MessageEmbed().setDescription(
        `<a:YanpSnennleGif:819270147834904676> <@${mutekisi.id}> Kullanıcısının cezası bitti!`
      )
    );
  }, ms(mutezaman));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "mute",
  description: "Etiketlediğiniz kişiye belirttiğiniz süre kadar mute atar.",
  usage: "mute <@kullanıcı> <1sn/1dk/1sa/1g>"
};
//Takma Oyuncu
