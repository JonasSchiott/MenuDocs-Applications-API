const Discord = require('discord.js')

// Content Embeds
module.exports.acceptedContentEmbed = new Discord.MessageEmbed()
    .setColor('#14d902')
    .setTitle(`Application Accepted!`)
    .setURL('https://menudocs.org')
    .setAuthor(`MenuDocs Content Creator Applications`)
    .setDescription('Congratulations!')
    .addField(`Congratulations, Your Content Creator Application was Accepted!`, "😁")
    .setFooter(`Hope to see some amazing content!`);

module.exports.rejectedContentEmbed = new Discord.MessageEmbed()
    .setColor('#14d902')
    .setTitle(`Application Rejected`)
    .setURL('https://menudocs.org')
    .setAuthor(`MenuDocs Content Creator Applications`)
    .setDescription(`We're sorry`)
    .addField('Sadly your Application was not accepted, Spend some more time around and try again in a few weeks!', "🙁")
    .setFooter(`See you next time!`);

module.exports.noresContentEmbed = new Discord.MessageEmbed()
    .setColor('#e3cc00')
    .setTitle('No Response')
    .setURL('https://menudocs.org')
    .setAuthor(`MenuDocs Content Creator Applications`)
    .setDescription(`Not Yet!`)
    .addField('There is currently no response! Keep those fingers crossed!', "🤞")
    .setFooter('Try again later!');