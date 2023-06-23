const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (message.author.id !== message.guild.owner.user.id)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setThumbnail(
          message.author.avatarURL()
            ? message.author.avatarURL({ dynamic: true })
            : "https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png"
        )
        .setImage(
          "https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif"
        )
        .setTitle("Bir hata oldu!")
        .setDescription(
          `>  \`${client.ayarlar.prefix}sunucu-kur\` **kullanmak için,** \`Sunucu Sahibi\` **olmanız gerekiyor.**`
        )
        .addField("Sunucu Sahibi", message.guild.owner.user.tag)
        .setImage(
          "https://cdn.glitch.com/6f5bb25b-c11b-4003-8a39-69490341df18%2FScreenshot_1.png"
        )
    );

  message.channel
    .send(
      new Discord.MessageEmbed()

        .setTitle("Youtube Sunucusu")

        .setThumbnail(
          "https://cdn.discordapp.com/avatars/686185592899633200/6499d2f1c46b106eed1e25892568aa55.webp?size=512"
        )

        .setFooter(
          `Ping: ${client.ws.ping.toFixed(0)}`,
          client.user.avatarURL({ dynamic: true })
        )

        .setDescription(
          `${message.author} **Sunucunun** kurulmasını onaylıyor musun?`
        )
    )
    .then(resulter => {
      resulter.react("✅").then(() => resulter.react("❌"));

      const yesFilter = (reaction, user) => {
        return (
          reaction.emoji.name === "✅" &&
          user.id === message.guild.owner.user.id
        );
      };

      const yes = resulter.createReactionCollector(yesFilter, { time: 0 });

      const noFilter = (reaction, user) => {
        return (
          reaction.emoji.name === "❌" &&
          user.id === message.guild.owner.user.id
        );
      };

      const no = resulter.createReactionCollector(noFilter, { time: 0 });
  
      yes.on("collect", async reaction => {
        message.guild.roles.cache
          .filter(
            a =>
              !a.managed &&
              a.name !== "@everyone" &&
              a.position <
                message.guild.members.cache.get(client.user.id).roles.highest
                  .position
          )
          .forEach(
            role =>
              role.delete("ok boomer") &&
              console.log(role.name + " Sunucular Kuruluyor!")
          );

        message.guild.channels.cache.forEach(a => a.delete());

        message.guild.roles
          .create({ data: { name: "「👑」Kral" }, reason: "ayn" })
          .then(role => {
            role.setPermissions(["ADMINISTRATOR"]);

            role.setColor("#070719");
          });

        message.guild.roles
          .create({ data: { name: "「👑」Yardımcı" }, reason: "ayn" })
          .then(role => {
            role.setPermissions([
              "MANAGE_GUILD",
              "MANAGE_ROLES",
              "KICK_MEMBERS",
              "MANAGE_NICKNAMES",
              "MANAGE_MESSAGES",
              "MUTE_MEMBERS",
              "DEAFEN_MEMBERS"
            ]);

            role.setColor("#3b0b0b");
          });
        message.guild.roles
          .create({ data: { name: "Moderatör" }, reason: "ayn" })
          .then(role => {
            role.setPermissions([
              "MANAGE_GUILD",
              "MANAGE_ROLES",
              "KICK_MEMBERS",
              "MANAGE_NICKNAMES",
              "MANAGE_MESSAGES",
              "MUTE_MEMBERS",
              "DEAFEN_MEMBERS"
            ]);

            role.setColor("#3b0b0b");
          });

        message.guild.roles
          .create({ data: { name: "「🎥」YouTuber" }, reason: "ayn" })
          .then(s => s.setColor("#ff0000"));

        message.guild.roles
          .create({ data: { name: "「👥」Üye" }, reason: "ayn" })
          .then(s => s.setColor("#00ff40"));

        message.guild.roles
          .create({ data: { name: "「🤖」Botlar" }, reason: "ayn" })
          .then(s => s.setColor("#e77e2e"));

        message.guild.channels
          .create("●▬▬▬▬๑「📌」๑▬▬▬▬▬●", { type: "category" })
          .then(parent => {
            message.guild.channels
              .create("📃・kurallar", { type: "text" })
              .then(c => c.setParent(parent.id));

            message.guild.channels
              .create("📢・duyurular", { type: "text" })
              .then(c => c.setParent(parent.id));

            message.guild.channels
              .create("🎬・video-duyuru", { type: "text" })
              .then(c => c.setParent(parent.id));

            message.guild.channels
              .create("💡・video-öneri", { type: "text" })
              .then(c => c.setParent(parent.id));

            message.guild.channels
              .create("🎉・çekiliş", { type: "text" })
              .then(c => c.setParent(parent.id));
          });

        message.guild.channels
          .create("●▬▬▬▬๑「💬」๑▬▬▬▬▬●", { type: "category" })
          .then(parent => {
            message.guild.channels
              .create("💬・sohbet", { type: "text"})
              .then(c => c.setParent(parent.id));

            message.guild.channels
              .create("📸・foto-chat", { type: "text" })
              .then(c => c.setParent(parent.id));

            message.guild.channels
              .create("🤖・bot-komut", { type: "text" })
              .then(c => c.setParent(parent.id));
            
            message.guild.channels
              .create("⛔・ceza-kanıt", { type: "text" })
              .then(c => c.setParent(parent.id));
            
            message.guild.channels
              .create("🚪・gelen-giden", { type: "text" })
              .then(c => c.setParent(parent.id));
          });

        message.guild.channels
          .create("●▬▬▬▬๑「🔊」๑▬▬▬▬▬●", { type: "category" })
          .then(parent => {
            message.guild.channels
              .create("🎧・sesli-sohbet-kuralları", { type: "text" })
              .then(c => c.setParent(parent.id));
                      
            message.guild.channels
              .create("🔊・Sohbet Odası", { type: "voice" })
              .then(a => a.setParent(parent.id));
            
            message.guild.channels
              .create("📃・müzik-kuralları", { type: "text" })
              .then(c => c.setParent(parent.id));
            
            message.guild.channels
              .create("🎶・Müzik Odası", { type: "voice" })
              .then(a => a.setParent(parent.id));
          });

        message.guild.channels
          .create("●▬▬▬▬๑「💤」๑▬▬▬▬▬●", { type: "category" })
          .then(parent => {
            message.guild.channels
              .create("「💤」AFK", { type: "voice" })
              .then(c => c.setParent(parent.id));
          });
      });
      
      const embed17 = new Discord.MessageEmbed()
      .setTitle('İptal Edildi')
      .setDescription('Sunucuda Youtube Sunucusu Kurmam İstendi ama onaylanmadığı için iptal edildi.');
      no.on("collect", async reaction => {
        resulter.edit(embed17).then(youtube => {
          setTimeout(function () {
            youtube.delete()
          }, 10000);
        })
      });
    });
};

exports.conf = {
  enabled: true,

  guildOnly: true,

  aliases: ["sunucukur-youtube"],

  permLevel: 0
};

exports.help = {
  name: "sunucu-kur-youtube"
};
