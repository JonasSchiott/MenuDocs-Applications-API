const Discord = require('discord.js')

// Ban Embeds
module.exports.acceptedBanEmbed = new Discord.MessageEmbed()
    .setColor('#14d902')
    .setTitle(`Ban Appeal Accepted!`)
    .setURL('https://menudocs.org')
    .setAuthor(`MenuDocs Ban Appeals`)
    .setDescription('Congratulations!')
    .addField(`Congratulations, Your Ban Appeal was Accepted!`, "😁")
    .addField(`Come Rejoin!`, `https://menudocs.link/discord`)
    .setFooter(`We can't wait to see you back!`);

module.exports.rejectedBanEmbed = new Discord.MessageEmbed()
    .setColor('#14d902')
    .setTitle(`Ban Appeal Rejected`)
    .setURL('https://menudocs.org')
    .setAuthor(`MenuDocs Ban Appeals`)
    .setDescription(`We're sorry`)
    .addField('Sadly your Ban Appeal was not accepted, If you feel wronged, please try again in a few weeks.', "🙁")
    .setFooter(`See you next time!`);

module.exports.noresBanEmbed = new Discord.MessageEmbed()
    .setColor('#e3cc00')
    .setTitle('No Response')
    .setURL('https://menudocs.org')
    .setAuthor(`MenuDocs Ban Appeals`)
    .setDescription(`Not Yet!`)
    .addField('There is currently no response! Keep those fingers crossed!', "🤞")
    .setFooter('Try again later!');