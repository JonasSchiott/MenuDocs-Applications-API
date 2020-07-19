const Discord = require('discord.js')

// Staff Embeds
module.exports.acceptedStaffEmbed = new Discord.MessageEmbed()
    .setColor('#14d902')
    .setTitle(`Application Accepted!`)
    .setURL('https://menudocs.org')
    .setAuthor(`MenuDocs Staff Applications`)
    .setDescription('Congratulations!')
    .addField(`Congratulations, Your Staff Application was Accepted!`, "😁")
    .setFooter(`See you in the Staff Channels!`);

module.exports.rejectedStaffEmbed = new Discord.MessageEmbed()
    .setColor('#14d902')
    .setTitle(`Application Rejected`)
    .setURL('https://menudocs.org')
    .setAuthor(`MenuDocs Staff Applications`)
    .setDescription(`We're sorry`)
    .addField('Sadly your Application was not accepted, Spend some more time around and try again in a few weeks!', "🙁")
    .setFooter(`See you next time!`);

module.exports.noresStaffEmbed = new Discord.MessageEmbed()
    .setColor('#e3cc00')
    .setTitle('No Response')
    .setURL('https://menudocs.org')
    .setAuthor(`MenuDocs Staff Applications`)
    .setDescription(`Not Yet!`)
    .addField('There is currently no response! Keep those fingers crossed!', "🤞")
    .setFooter('Try again later!');