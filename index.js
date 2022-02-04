const d = require('discord.js');
const client = new d.Client({
  intents: [ 'GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS' ]
});
client._role = require('./r.json');

client.on('ready', () => console.log('bot hazır'));

client.on('guildMemberAdd', async (member) => {
  const user = member.user;
  if (user.flags.has('EARLY_SUPPORTER')) {
    member.guild.members.cache.get(user.id).roles.add(client._role.early).then(() => {
      member.guild.channels.cache.get(client._role.log).send({ 
        content: `:+1: **${user.tag}** kullanıcı sunucuya girdi ve ona **EARLY_SUPPORTER** rozet rolünü verdim!`
      });
    }).catch((e) => {
      member.guild.channels.cache.get(client._role.log).send({
        content: `:x: **${user.tag}** kullanıcısı sunucuya girdi fakat rol veremedim, yetkim yok veya herhangi bir hata oluştu... Hata mesajı: **${e.message}**`
      });
    });
  } else if (user.flags.has('DISCORD_EMPLOYEE')) {
    member.guild.members.cache.get(user.id).roles.add(client._role.staff).then(() => {
      member.guild.channels.cache.get(client._role.log).send({ 
        content: `:+1: **${user.tag}** kullanıcı sunucuya girdi ve ona **DISCORD_EMPLOYEE** rozet rolünü verdim!`
      });
    }).catch((e) => {
      member.guild.channels.cache.get(client._role.log).send({
        content: `:x: **${user.tag}** kullanıcısı sunucuya girdi fakat rol veremedim, yetkim yok veya herhangi bir hata oluştu... Hata mesajı: **${e.message}**`
      });
    });
  } else if (user.flags.has('HYPESQUAD_EVENTS')) {
    member.guild.members.cache.get(user.id).roles.add(client._role.events).then(() => {
      member.guild.channels.cache.get(client._role.log).send({ 
        content: `:+1: **${user.tag}** kullanıcı sunucuya girdi ve ona **HYPESQUAD_EVENTS** rozet rolünü verdim!`
      });
    }).catch((e) => {
      member.guild.channels.cache.get(client._role.log).send({
        content: `:x: **${user.tag}** kullanıcısı sunucuya girdi fakat rol veremedim, yetkim yok veya herhangi bir hata oluştu... Hata mesajı: **${e.message}**`
      });
    });
  } else if (user.flags.has('HOUSE_BRAVERY')) {
    member.guild.members.cache.get(user.id).roles.add(client._role.bravery).then(() => {
      member.guild.channels.cache.get(client._role.log).send({ 
        content: `:+1: **${user.tag}** kullanıcı sunucuya girdi ve ona **HOUSE_BRAVERY** rozet rolünü verdim!`
      });
    }).catch((e) => {
      member.guild.channels.cache.get(client._role.log).send({
        content: `:x: **${user.tag}** kullanıcısı sunucuya girdi fakat rol veremedim, yetkim yok veya herhangi bir hata oluştu... Hata mesajı: **${e.message}**`
      });
    });
  } else if (user.flags.has('HOUSE_BRILLIANCE')) {
    member.guild.members.cache.get(user.id).roles.add(client._role.brilli).then(() => {
      member.guild.channels.cache.get(client._role.log).send({ 
        content: `:+1: **${user.tag}** kullanıcı sunucuya girdi ve ona **HOUSE_BRILLIANCE** rozet rolünü verdim!`
      });
    }).catch((e) => {
      member.guild.channels.cache.get(client._role.log).send({
        content: `:x: **${user.tag}** kullanıcısı sunucuya girdi fakat rol veremedim, yetkim yok veya herhangi bir hata oluştu... Hata mesajı: **${e.message}**`
      });
    });
  } else if (user.flags.has('HOUSE_BALANCE')) {
    member.guild.members.cache.get(user.id).roles.add(client._role.balance).then(() => {
      member.guild.channels.cache.get(client._role.log).send({ 
        content: `:+1: **${user.tag}** kullanıcı sunucuya girdi ve ona **HOUSE_BALANCE** rozet rolünü verdim!`
      });
    }).catch((e) => {
      member.guild.channels.cache.get(client._role.log).send({
        content: `:x: **${user.tag}** kullanıcısı sunucuya girdi fakat rol veremedim, yetkim yok veya herhangi bir hata oluştu... Hata mesajı: **${e.message}**`
      });
    });
  } else if (user.flags.has('BUGHUNTER_LEVEL_1')) {
    member.guild.members.cache.get(user.id).roles.add(client._role.lvl1).then(() => {
      member.guild.channels.cache.get(client._role.log).send({ 
        content: `:+1: **${user.tag}** kullanıcı sunucuya girdi ve ona **BUGHUNTER_LEVEL_1** rozet rolünü verdim!`
      });
    }).catch((e) => {
      member.guild.channels.cache.get(client._role.log).send({
        content: `:x: **${user.tag}** kullanıcısı sunucuya girdi fakat rol veremedim, yetkim yok veya herhangi bir hata oluştu... Hata mesajı: **${e.message}**`
      });
    });
  } else if (user.flags.has('BUGHUNTER_LEVEL_2')) {
    member.guild.members.cache.get(user.id).roles.add(client._role.lvl2).then(() => {
      member.guild.channels.cache.get(client._role.log).send({ 
        content: `:+1: **${user.tag}** kullanıcı sunucuya girdi ve ona **BUGHUNTER_LEVEL_2** rozet rolünü verdim!`
      });
    }).catch((e) => {
      member.guild.channels.cache.get(client._role.log).send({
        content: `:x: **${user.tag}** kullanıcısı sunucuya girdi fakat rol veremedim, yetkim yok veya herhangi bir hata oluştu... Hata mesajı: **${e.message}**`
      });
    });
  } else if (user.flags.has('EARLY_VERIFIED_DEVELOPER')) {
    member.guild.members.cache.get(user.id).roles.add(client._role.dev).then(() => {
      member.guild.channels.cache.get(client._role.log).send({ 
        content: `:+1: **${user.tag}** kullanıcı sunucuya girdi ve ona **EARLY_VERIFIED_DEVELOPER** rozet rolünü verdim!`
      });
    }).catch((e) => {
      member.guild.channels.cache.get(client._role.log).send({
        content: `:x: **${user.tag}** kullanıcısı sunucuya girdi fakat rol veremedim, yetkim yok veya herhangi bir hata oluştu... Hata mesajı: **${e.message}**`
      });
    });
  } else if (user.flags.has('VERIFIED_DEVELOPER')) {
    member.guild.members.cache.get(user.id).roles.add(client._role.dev).catch(() => {});  
  } else if (user.flags.has('PARTNERED_SERVER_OWNER')) {
    member.guild.members.cache.get(user.id).roles.add(client._role.partner).then(() => {
      member.guild.channels.cache.get(client._role.log).send({ 
        content: `:+1: **${user.tag}** kullanıcı sunucuya girdi ve ona **PARTNERED_SERVER_OWNER** rozet rolünü verdim!`
      });
    }).catch((e) => {
      member.guild.channels.cache.get(client._role.log).send({
        content: `:x: **${user.tag}** kullanıcısı sunucuya girdi fakat rol veremedim, yetkim yok veya herhangi bir hata oluştu... Hata mesajı: **${e.message}**`
      });
    });
  }
});

client.login(client._role.token);
