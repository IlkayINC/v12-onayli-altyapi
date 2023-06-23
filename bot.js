const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const http = require("http");
const db = require("quick.db");
const moment = require("moment");
const express = require("express");
const ayarlar = require("./ayarlar.json");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
const log = message => {
  console.log(` ${message}`);
};
require("./util/eventLoader.js")(client);



var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});


client.elevation = message => {
  if(!message.guild) {
    return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};
//----------------------------------\\

client.on("ready", () => {
  var oynuyorkısımları = [
    "Kirtan Botun Deneme Botudur!"
    ]
    setInterval(function() {
    
    var random = Math.floor(Math.random()*(oynuyorkısımları.length-0+1)+0);
    client.user.setActivity(oynuyorkısımları[random], { type: 'LISTENING' });
    }, 2 * 3000);
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${client.user.username}`
  );
  //------------------------------------\\
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Şu an ` +
      client.channels.cache.size +
      ` adet kanala, ` +
      client.guilds.cache.size +
      ` adet sunucuya ve ` +
      client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString() +
      ` kullanıcıya hizmet veriliyor!`
  );
});
//----------------------------------------------------------------------------------\\
client.on("message", async msg => {
  const i = await db.fetch(`otocvp_${msg.guild.id}`);
  if (i == "acik") {
    if (
      msg.content.toLowerCase() == "ii" ||
      msg.content.toLowerCase() == "iyi" ||
      msg.content.toLowerCase() == "iyidir" ||
      msg.content.toLowerCase() == "iyiyim" ||
      msg.content.toLowerCase() == "iyi sen"
    ) {
      try {
        return msg.reply("**Bende İyiyim, Sağol.** ^^");
      } catch (err) {
        console.log(err);
      }
    }
    if (
      msg.content.toLowerCase() == "bok gibi" ||
      msg.content.toLowerCase() == "kötü" ||
      msg.content.toLowerCase() == "iğrenç" ||
      msg.content.toLowerCase() == "kötüyüm" ||
      msg.content.toLowerCase() == "kötüyüm sen"
    ) {
      try {
        return msg.reply("Neden kötüsün dostum? Dahada kötü oldum :sob:");
      } catch (err) {
        console.log(err);
      }
    }
    if (
      msg.content.toLowerCase() == "nasıl çalışıyorsun" ||
      msg.content.toLowerCase() == "yardım" ||
      msg.content.toLowerCase() == "<@857981728756334634>" ||
      msg.content.toLowerCase() == "Kirtan" ||
      msg.content.toLowerCase() == "çalış"
    ) {
      try {
        return msg.reply(
          "Beni kullanmaya mı çalışıyorsun? Hemen sana bahsedeyim. Prefix yani ön ekim `k!` \n Benimle ilgili bilgiyi `k!yardım ` yazarak alabilirsin."
        );
      } catch (err) {
        console.log(err);
      }
    }
  } else if (i == "kapali") {
  }
  if (!i) return;
});
//-------------Bot Eklenince Bir Kanala Mesaj Gönderme Komutu ---------------\\

const emmmmbed = new Discord.MessageEmbed()
  .setThumbnail()
  .setImage(
    "https://cdn.discordapp.com/attachments/913800705771442218/914935693480980520/standard_1.gif"
  )
  .addField(
    `__Beni Sunucuna Eklediğin İçin Teşekkür Ederim!__ <:mx_kalp:912360765900615690>`,
    `**Selamlar, Ben Kirtan. Öncelikle Beni Sunucuna Eklediğin İçin Teşekkürlerimi Sunarım.**`
  )
  .addField(
    `<a:mx_hypesquad:901534430668161055> Nasıl Çalışıyorum?`,
    `**Beni Kullanmak İçin \`k!yardım\` yazmanız yeterlidir.**`
  )
  .addField("<a:mx_hypesquad:901534430668161055> Linkler",
  " [Discord](https://discord.gg/Tv8QKU2fE5) | [Youtube](https://youtube.com/c/MeraklıBey) | [Botu Davet Et](https://discordapp.com/oauth2/authorize?client_id=857981728756334634&scope=bot&permissions=8)"
)
  .setFooter(`Kirtan | Gelişmiş Türkçe Bot | 2021`)
  .setTimestamp();

client.on("guildCreate", guild => {
  let defaultChannel = "";
  guild.channels.cache.forEach(channel => {
    if (channel.type == "text" && defaultChannel == "") {
      if (channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
        defaultChannel = channel;
      }
    }
  });

  defaultChannel.send(emmmmbed);
});

//----------------------------------------------------------------\\
client.interaction = {};
const DiscordButtons = require('discord-buttons'); 
const ButtonPages = require('discord-button-pages'); 
DiscordButtons(client);

client.on('clickButton', (button) => {
  ButtonPages.buttonInteractions(button, client.interaction);
});

client.on('message', msg => {
  if (msg.content === 'k!yardım') {
    const embed1 = new Discord.MessageEmbed()
        .setTitle('__**Kirtan**__')
        .setImage(
          "https://cdn.discordapp.com/attachments/914465585931378718/921081403439976498/standard_3.gif"
        )
        .setDescription(
          `
    **Kirtan Komut Listesi** 
    Eğer bot ile bir sorun olursa **!çağır sebep** komutunu kullanınız!`
        )
        .addField("Selamlar :wave:", "<a:krmz:827501946612482048> Botumuz olan **Kirtan** artık butonlu yardım menüsüne geçmiştir. Hangi kategorinin hangi sayfada olduğunu aşağıda görebilirsiniz.")
        .addField("Sayfalar","<:902997785056530503:924680934442270721> **Moderasyon** \n > Moderasyon Komutları **Sayfa 2**'de yer alıyor. \n <:908431109577113691:924680935331475516> **Eğlence** \n > Eğlence Komutları **Sayfa 3**'de yer alıyor. \n <:902997818950688839:924680934664601612> **Abone Rol** \n > Abone Rol Komutları **Sayfa 4**'de yer alıyor. \n <:922024738207965194:924680935641866300> **Kullanıcı** \n > Kullanıcı komutları **Sayfa 5**'de yer alıyor. \n <:922025047747596319:924680936019361843> **Sunucu Kurma Sistemi** \n > Sunucu Kurma Komutları **Sayfa 6**'da yer alıyor. \n <:903735334427303998:924680934958182461> **Botlist Sistemi** \n > Botlist komutları **Sayfa 7**'de yer alıyor.")
        .setColor('BLUE');
        
    const embed2 = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle("**__Sayfa 2, Moderasyon__**")
    .setImage("https://cdn.discordapp.com/attachments/913800705771442218/914935693480980520/standard_1.gif")
    .setDescription(
      `
**Kirtan Moderasyon Komutları** 
Eğer bot ile bir sorun olursa **!çağır sebep** komutunu kullanınız!`
    )
    .addField(
      "Moderasyon Komutları Listesi",
      "> `k!reklam` Reklam Engel Sistemini Açar \n > `k!küfür` Küfür Engel Sistemini Açar \n > `k!otorol` Otorolü ayarlar \n > `k!sayaç` Sayaç Sistemini ayarlar \n > `k!mod-log` Mod Log Sistemini Açar \n > `k!sil` Seçilen Miktarda Mesaj Siler \n > `k!sa-as` Otomatik sa-as Sistemini Açar \n > `k!otocevap` Otocevap ayarlarını Aktif Eder \n > `k!oylama` Oylama Başlatır")
    .addField("<a:mx_hypesquad:901534430668161055> Linkler",
      " [Discord](https://discord.gg/Tv8QKU2fE5) | [Youtube](https://youtube.com/c/MeraklıBey) | [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=857981728756334634&scope=bot&permissions=8)"
    )

    .setThumbnail(client.user.avatarURL());
        
    const embed3 = new Discord.MessageEmbed()
    .setTitle("**__Sayfa 3, Eğlence__**")
    .setImage(
      "https://cdn.discordapp.com/attachments/914465585931378718/921081403439976498/standard_3.gif")
   .setDescription( 
    `
**Kirtan Eğlence Komutları** 
Eğer bot ile bir sorun olursa **!çağır sebep** komutunu kullanınız!`
  )
  .addField(
    "Eğlence Komutları Listesi",
    "> `k!fbi` FBI Gelir \n > `k!token ` Bot'un tokenini verir \n > `k!aşkölçer @etiket` Aşk Ölçer :flushed: \n > `k!atam` Dene ve Gör Reis. \n > `k!balıktut` Balık Tutarsınız \n > `k!boks-makinesi` Boks Makinesine Vurursunuz \n > `k!vine` Komik Paylaşımlar")
  .addField("<a:mx_hypesquad:901534430668161055> Linkler",
    " [Discord](https://discord.gg/Tv8QKU2fE5) | [Youtube](https://youtube.com/c/MeraklıBey) | [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=818468518625935381&permissions=8&scope=bot)"
  )
  .setThumbnail(client.user.avatarURL());
        const embed4 = new Discord.MessageEmbed()
        .setColor("YELLOW")
        .setTitle("**__Sayfa 4, Abone Rol Sistemi__**")
        .setImage(
          "https://cdn.discordapp.com/attachments/913800705771442218/914935693480980520/standard_1.gif"
        )
        .setDescription(
          `
    **Kirtan Abone Rol Komutları** 
    Eğer bot ile bir sorun olursa **!çağır sebep** komutunu kullanınız!`
        )
        .addField(
          "Abone Rol Komutları Listesi",
          "> `k!abone-yetkili-rol` Abone Yetkilisini ayarlar \n > `k!abone-rol` Abone rolü ayarlar \n > `k!abone-log` Abone Log ayarlar \n > `k!abone` Abone Rolü Verir")
        .addField("<a:mx_hypesquad:901534430668161055> Linkler",
          " [Discord](https://discord.gg/Tv8QKU2fE5) | [Youtube](https://youtube.com/c/MeraklıBey) | [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=818468518625935381&permissions=8&scope=bot)"
        )
        
        .setThumbnail(client.user.avatarURL());
    const embed5 = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setTitle("**__Sayfa 5, Kullanıcı__**")
    .setImage(
      "https://cdn.discordapp.com/attachments/914465585931378718/921081403439976498/standard_3.gif"
    )
    .setDescription(
      `
**Kirtan Kullanıcı Komutları** 
Eğer bot ile bir sorun olursa **!çağır sebep** komutunu kullanınız!`
    )
    .addField(
      "Kullanıcı Komutları Listesi",
      "> `k!profil` Profilinizi Görüntüler \n > `k!avatar` Avatarınızı Kanala Atar \n > `k!say` Sunucunun Toplam Üyesini Gösterir \n > `k!afk` AFK Olursunuz \n > `k!yetkilerim` Yetkilerinizi Görürsünüz. \n > `k!i` Botun İstatistikleri \n > `k!çağır` Yapımcıya Mesaj Atar \n > `k!davet` Kirtan'ı Sunucuna Davet Et!")
    .addField("<a:mx_hypesquad:901534430668161055> Linkler",
      " [Discord](https://discord.gg/Tv8QKU2fE5) | [Youtube](https://youtube.com/c/MeraklıBey) | [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=818468518625935381&permissions=8&scope=bot)"
    )

    .setThumbnail(client.user.avatarURL());
    const embed6 = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setTitle("**__Sayfa 6, Sunucu Kurma Sistemi__**")
    .setImage(
      "https://cdn.discordapp.com/attachments/914465585931378718/921081403439976498/standard_3.gif"
    )
    .setDescription(
      `
**Kirtan Sunucu Kurma Komutları** 
Eğer bot ile bir sorun olursa **!çağır sebep** komutunu kullanınız!`
    )
    .addField(
      "Sunucu Kurma Komutları Listesi",
      "> `k!sunucu-kur-botlist` Botlist Sunucusu Kurar \n > `k!sunucu-kur-normal` Normal Sunucu Kurar \n > `k!sunucu-kur-youtube` YouTube Sunucusu Kurar")
    .addField("<a:mx_hypesquad:901534430668161055> Linkler",
      " [Discord](https://discord.gg/Tv8QKU2fE5) | [Youtube](https://youtube.com/c/MeraklıBey) | [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=818468518625935381&permissions=8&scope=bot)"
    )

    .setThumbnail(client.user.avatarURL());
    const embed7 = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setTitle("**__Sayfa 7, Botlist Sistemi__**")
    .setImage(
      "https://cdn.discordapp.com/attachments/914465585931378718/921081403439976498/standard_3.gif"
    )
    .setDescription(
      `
**Kirtan Botlist Komutları** 
Eğer bot ile bir sorun olursa **!çağır sebep** komutunu kullanınız!`
    )
    .addField(
      "Botlist Komutları Listesi",
      "> `k!botlist-ayarlar yetkili @rol` Botlist Yetkilisini ayarlar \n > `k!botlist-ayarlar botlog-kanal #kanal` Botlog Kanalını ayarlar \n > `k!botlist-ayarlar botekle-kanal #kanal` Bot Ekleme Kanalını ayarlar \n > `k!botlist-ayarlar başvurugiden-kanal #kanal` Başvuruların Giden Kanalı ayarlar \n > `k!botekle Prefix ID DBL Onay Durumu` Bot Eklersiniz \n > `k!botonayla` Bot Onaylarsınız.")
    .addField("<a:mx_hypesquad:901534430668161055> Linkler",
      " [Discord](https://discord.gg/Tv8QKU2fE5) | [Youtube](https://youtube.com/c/MeraklıBey) | [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=818468518625935381&permissions=8&scope=bot)"
    )

    const embedPages = [embed1, embed2, embed3, embed4, embed5, embed6, embed7];
    ButtonPages.createPages(client.interaction, msg, embedPages, 60 * 1000, "blurple", "👉", "👈", "❌");
  }

});

//---------------------------------------------------------------------------------\\

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.on("guildMemberRemove", async member => {
  const channel = db.fetch(`sayaçKanal_${member.guild.id}`);
  if (db.has(`sayacsayı_${member.guild.id}`) == false) return;
  if (db.has(`sayaçKanal_${member.guild.id}`) == false) return;

  member.guild.channels.cache
    .get(channel)
    .send(
      `📤 **${member.user.tag}** Sunucudan ayrıldı! \`${db.fetch(
        `sayacsayı_${member.guild.id}`
      )}\` üye olmamıza son \`${db.fetch(`sayacsayı_${member.guild.id}`) -
        member.guild.memberCount}\` üye kaldı!`
    );
});
client.on("guildMemberAdd", async member => {
  const channel = db.fetch(`sayaçKanal_${member.guild.id}`);
  if (db.has(`sayacsayı_${member.guild.id}`) == false) return;
  if (db.has(`sayaçKanal_${member.guild.id}`) == false) return;

  member.guild.channels.cache
    .get(channel)
    .send(
      `📥 **${member.user.tag}** Sunucuya Katıldı! \`${db.fetch(
        `sayacsayı_${member.guild.id}`
      )}\` üye olmamıza son \`${db.fetch(`sayacsayı_${member.guild.id}`) -
        member.guild.memberCount}\` üye kaldı!`
    );
});

///////////////////////////////////SA-AS

client.on("message", async msg => {
  const i = await db.fetch(`ssaass_${msg.guild.id}`);
  if (i == "acik") {
    if (
      msg.content.toLowerCase() == "sa" ||
      msg.content.toLowerCase() == "s.a" ||
      msg.content.toLowerCase() == "selamun aleyküm" ||
      msg.content.toLowerCase() == "sea" ||
      msg.content.toLowerCase() == "selam"
    ) {
      try {
        return msg.reply("**Aleyküm Selam Hoşgeldin, Nasılsın?**");
      } catch (err) {
        console.log(err);
      }
    }
  } else if (i == "kapali") {
  }
  if (!i) return;
});

//////////////afk

const { DiscordAPIError } = require("discord.js");

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.includes(`afk`)) return;

  if (await db.fetch(`afk_${message.author.id}`)) {
    db.delete(`afk_${message.author.id}`);
    db.delete(`afk_süre_${message.author.id}`);

    const embed = new Discord.MessageEmbed()

      .setColor("GREEN")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(`${message.author.username} Artık \`AFK\` Değilsin.`);

    message.channel.send(embed);
  }

  var USER = message.mentions.users.first();
  if (!USER) return;
  var REASON = await db.fetch(`afk_${USER.id}`);

  if (REASON) {
    let süre = await db.fetch(`afk_süre_${USER.id}`);

    const afk = new Discord.MessageEmbed()

      .setColor("GOLD")
      .setDescription(
        `**BU KULLANICI AFK**\n\n**Afk Olan Kullanıcı :** \`${USER.tag}\`\n\n**Sebep :** \`${REASON}\``
      );

    message.channel.send(afk);
  }
});

/////////////////////////////////

client.on("guildDelete", guild => {
  let Crewembed = new Discord.MessageEmbed()

    .setColor("RED")
    .setTitle(" ATILDIM !")
    .addField("Sunucu Adı:", guild.name)
    .addField("Sunucu sahibi", guild.owner)
    .addField("Sunucudaki Kişi Sayısı:", guild.memberCount);

  client.channels.cache.get("927093846632980490").send(Crewembed);
});

client.on("guildCreate", guild => {
  let Crewembed = new Discord.MessageEmbed()

    .setColor("GREEN")
    .setTitle("EKLENDİM !")
    .addField("Sunucu Adı:", guild.name)
    .addField("Sunucu sahibi", guild.owner)
    .addField("Sunucudaki Kişi Sayısı:", guild.memberCount);

  client.channels.cache.get("927093846632980490").send(Crewembed);
});

///////////////////////////////////REKLAMENLGEL
client.on("message", async msg => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;

  let i = await db.fetch(`reklam_${msg.guild.id}`);
  if (i == "acik") {
    const reklam = [
      ".com",
      ".net",
      ".edu.tr",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".me",
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      ".org",
      ".com.tr",
      ".biz",
      "net",
      ".rf.gd",
      ".az",
      ".party",
      "discord.gg",
      ".site.com"
    ];
    if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
      try {
        if (!msg.member.hasPermission("MANAGE_WEBHOOKS")) {
          msg.delete();
          let embed = new Discord.MessageEmbed()
            .setColor(0xffa300)
            .setFooter("Kirtan Reklam Sistemi", client.user.avatarURL())
            .setAuthor(
              msg.guild.owner.user.username,
              msg.guild.owner.user.avatarURL()
            )
            .setDescription(
              "Kirtan, " +
                `***${msg.guild.name}***` +
                " adlı sunucunuzda reklam yakaladım."
            )
            .addField(
              "Reklam Yapan Kişi",
              "Kullanıcı: " + msg.author.tag + "\nID: " + msg.author.id,
              true
            )
            .addField("Engellenen reklam", msg.content, true)
            .setTimestamp();
          msg.guild.owner.user.send(embed);
          return msg.channel
            .send(
              `${msg.author}, Küfür Yapmak Yasak! Senin Mesajını Özelden Kurucumuza Gönderdim.`
            )
            .then(msg => msg.delete(25000));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});
////////////////////KÜFÜR

client.on("message", async msg => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;

  let i = await db.fetch(`küfürFiltre_${msg.guild.id}`);
  if (i == "acik") {
    const küfür = [
      "amcık",
      "orr...",
      "girsin",
      "yarrak",
      "orospu",
      "o.ç",
      "oç",
      "oc",
      "piç",
      "sikerim",
      "sikik",
      "amına",
      "pezevenk",
      "yavşak",
      "ananı",
      "anandır",
      "orospu",
      "donaltmak",
      "evladı",
      "göt",
      "am*",
      "porno",
      "po",
      "sikişmiş",
      "domal",
      "domaltır",
      "ananıs kim",
      "girsin",
      "çük",
      "ç*k",
      "peç",
      "yarra",
      "p*ç",
      "sik",
      "s*kerim",
      "s*k",
      "pipi",
      "siki miki",
      "sokarım",
      "aq",
      "sokuk",
      "yarak",
      "bacını",
      "karını",
      "amk",
      "aq",
      "mk",
      "anaskm"
    ];
    if (küfür.some(word => msg.content.toLowerCase().includes(word))) {
      try {
        if (!msg.member.hasPermission("MANAGE_WEBHOOKS")) {
          msg.delete();
          let embed = new Discord.MessageEmbed()
            .setColor(0xffa300)
            .setFooter("Kirtan Küfür Sistemi", client.user.avatarURL())
            .setAuthor(
              msg.guild.owner.user.username,
              msg.guild.owner.user.avatarURL()
            )
            .setDescription(
              "Kirtan, " +
                `***${msg.guild.name}***` +
                " adlı sunucunuzda küfür yakaladım."
            )
            .addField(
              "Küfür Eden Kişi",
              "Kullanıcı: " + msg.author.tag + "\nID: " + msg.author.id,
              true
            )
            .addField("Engellenen mesaj", msg.content, true)
            .setTimestamp();
          msg.guild.owner.user.send(embed);
          return msg.channel
            .send(
              `${msg.author}, Küfür Etmek Yasak! Senin Mesajını Özelden Kurucumuza Gönderdim.`
            )
            .then(msg => msg.delete(25000));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});

///////////////////////////////////////////////////

//////////////////////////MODLOG///////////////////
client.on("messageDelete", async message => {
  if (message.author.bot || message.channel.type == "dm") return;

  let log = message.guild.channels.cache.get(
    await db.fetch(`log_${message.guild.id}`)
  );

  if (!log) return;

  const embed = new Discord.MessageEmbed()

    .setTitle(message.author.username + " | Mesaj Silindi")

    .addField("Kullanıcı: ", message.author)

    .addField("Kanal: ", message.channel)

    .addField("Mesaj: ", "" + message.content + "");

  log.send(embed);
});


client.on("channelCreate", async channel => {
  let modlog = await db.fetch(`log_${channel.guild.id}`);

  if (!modlog) return;

  const entry = await channel.guild
    .fetchAuditLogs({ type: "CHANNEL_CREATE" })
    .then(audit => audit.entries.first());

  let kanal;

  if (channel.type === "text") kanal = `<#${channel.id}>`;

  if (channel.type === "voice") kanal = `\`${channel.name}\``;

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem**", "Kanal Oluşturma")

    .addField("**Kanalı Oluşturan Kişi**", `<@${entry.executor.id}>`)

    .addField("**Oluşturduğu Kanal**", `${kanal}`)

    .setTimestamp()

    .setColor("RANDOM")

    .setFooter(
      `Sunucu: ${channel.guild.name} - ${channel.guild.id}`,
      channel.guild.iconURL()
    )

    .setThumbnail(channel.guild.iconUR);

  client.channels.cache.get(modlog).send(embed);
});

client.on("channelDelete", async channel => {
  let modlog = await db.fetch(`log_${channel.guild.id}`);

  if (!modlog) return;

  const entry = await channel.guild
    .fetchAuditLogs({ type: "CHANNEL_DELETE" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem**", "Kanal Silme")

    .addField("**Kanalı Silen Kişi**", `<@${entry.executor.id}>`)

    .addField("**Silinen Kanal**", `\`${channel.name}\``)

    .setTimestamp()

    .setColor("RANDOM")

    .setFooter(
      `Sunucu: ${channel.guild.name} - ${channel.guild.id}`,
      channel.guild.iconURL()
    )

    .setThumbnail(channel.guild.iconURL);

  client.channels.cache.get(modlog).send(embed);
});

client.on("roleCreate", async role => {
  let modlog = await db.fetch(`log_${role.guild.id}`);

  if (!modlog) return;

  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_CREATE" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem**", "Rol Oluşturma")

    .addField("**Rolü oluşturan kişi**", `<@${entry.executor.id}>`)

    .addField("**Oluşturulan rol**", `\`${role.name}\` **=** \`${role.id}\``)

    .setTimestamp()

    .setFooter(
      `Sunucu: ${role.guild.name} - ${role.guild.id}`,
      role.guild.iconURL
    )

    .setColor("RANDOM")

    .setThumbnail(role.guild.iconURL);

  client.channels.cache.get(modlog).send(embed);
});

client.on("roleDelete", async role => {
  let modlog = await db.fetch(`log_${role.guild.id}`);

  if (!modlog) return;

  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_DELETE" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem**", "Rol Silme")

    .addField("**Rolü silen kişi**", `<@${entry.executor.id}>`)

    .addField("**Silinen rol**", `\`${role.name}\` **=** \`${role.id}\``)

    .setTimestamp()

    .setFooter(
      `Sunucu: ${role.guild.name} - ${role.guild.id}`,
      role.guild.iconURL
    )

    .setColor("RANDOM")

    .setThumbnail(role.guild.iconURL);

  client.channels.cache.get(modlog).send(embed);
});

client.on("emojiCreate", async emoji => {
  let modlog = await db.fetch(`log_${emoji.guild.id}`);

  if (!modlog) return;

  const entry = await emoji.guild
    .fetchAuditLogs({ type: "EMOJI_CREATE" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem**", "Emoji Oluşturma")

    .addField("**Emojiyi oluşturan kişi**", `<@${entry.executor.id}>`)

    .addField("**Oluşturulan emoji**", `${emoji} - İsmi: \`${emoji.name}\``)

    .setTimestamp()

    .setColor("RANDOM")

    .setFooter(
      `Sunucu: ${emoji.guild.name} - ${emoji.guild.id}`,
      emoji.guild.iconURL
    )

    .setThumbnail(emoji.guild.iconURL);

  client.channels.cache.get(modlog).send(embed);
});

client.on("emojiDelete", async emoji => {
  let modlog = await db.fetch(`log_${emoji.guild.id}`);

  if (!modlog) return;

  const entry = await emoji.guild
    .fetchAuditLogs({ type: "EMOJI_DELETE" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem**", "Emoji Silme")

    .addField("**Emojiyi silen kişi**", `<@${entry.executor.id}>`)

    .addField("**Silinen emoji**", `${emoji}`)

    .setTimestamp()

    .setFooter(
      `Sunucu: ${emoji.guild.name} - ${emoji.guild.id}`,
      emoji.guild.iconURL
    )

    .setColor("RANDOM")

    .setThumbnail(emoji.guild.iconURL);

  client.channels.cache.get(modlog).send(embed);
});

client.on("emojiUpdate", async (oldEmoji, newEmoji) => {
  let modlog = await db.fetch(`log_${oldEmoji.guild.id}`);

  if (!modlog) return;

  const entry = await oldEmoji.guild
    .fetchAuditLogs({ type: "EMOJI_UPDATE" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem**", "Emoji Güncelleme")

    .addField("**Emojiyi güncelleyen kişi**", `<@${entry.executor.id}>`)

    .addField(
      "**Güncellenmeden önceki emoji**",
      `${oldEmoji} - İsmi: \`${oldEmoji.name}\``
    )

    .addField(
      "**Güncellendikten sonraki emoji**",
      `${newEmoji} - İsmi: \`${newEmoji.name}\``
    )

    .setTimestamp()

    .setColor("RANDOM")

    .setFooter(
      `Sunucu: ${oldEmoji.guild.name} - ${oldEmoji.guild.id}`,
      oldEmoji.guild.iconURL
    )

    .setThumbnail(oldEmoji.guild.iconURL);

  client.channels.cache.get(modlog).send(embed);
});

client.on("guildBanAdd", async (guild, user) => {
  let modlog = await db.fetch(`log_${guild.id}`);

  if (!modlog) return;

  const entry = await guild
    .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem**", "Yasaklama")

    .addField("**Kullanıcıyı yasaklayan yetkili**", `<@${entry.executor.id}>`)

    .addField("**Yasaklanan kullanıcı**", `**${user.tag}** - ${user.id}`)

    .addField("**Yasaklanma sebebi**", `${entry.reason}`)

    .setTimestamp()

    .setColor("RANDOM")

    .setFooter(`Sunucu: ${guild.name} - ${guild.id}`, guild.iconURL)

    .setThumbnail(guild.iconURL);

  client.channels.cache.get(modlog).send(embed);
});

client.on("guildBanRemove", async (guild, user) => {
  let modlog = await db.fetch(`log_${guild.id}`);

  if (!modlog) return;

  const entry = await guild
    .fetchAuditLogs({ type: "MEMBER_BAN_REMOVE" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem**", "Yasak kaldırma")

    .addField("**Yasağı kaldıran yetkili**", `<@${entry.executor.id}>`)

    .addField("**Yasağı kaldırılan kullanıcı**", `**${user.tag}** - ${user.id}`)

    .setTimestamp()

    .setColor("RANDOM")

    .setFooter(`Sunucu: ${guild.name} - ${guild.id}`, guild.iconURL)

    .setThumbnail(guild.iconURL);

  client.channels.cache.get(modlog).send(embed);
});

//////////////////////////////MODLOG///////////////////////////

//////////////////////////////OTOROL

client.on("guildMemberAdd", member => {
  let rol = db.fetch(`autoRole_${member.guild.id}`);
  if (!rol) return;
  let kanal = db.fetch(`autoRoleChannel_${member.guild.id}`);
  if (!kanal) return;

  member.roles.add(member.guild.roles.cache.get(rol));
  let embed = new Discord.MessageEmbed()
    .setDescription(
      "> <a:yrnex_hypes:794222389584068618> **Sunucuya yeni katılan** **" +
        member.user.username +
        "** **Kullanıcısına** <@&" +
        rol +
        "> **Rolü verildi** <a:yrnex_tiks:798275047047168041>"
    )
    .setColor("RANDOM"); //.setFooter(`<@member.id>`)
  member.guild.channels.cache.get(kanal).send(embed);
});

//////////////////////////////////////////////////

client.on("ready", async () => {
  let botVoiceChannel = client.channels.cache.get("924257203215564820");
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Ses Kanalına bağlanıldı!`);
  if (botVoiceChannel)
    botVoiceChannel
      .join()
      .catch(err => console.error(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Ses kanalına bağlanılamadı!`));
});


client.login(ayarlar.token);
