const { checkApplicationStaff, checkApplicationProf, checkApplicationContent, checkApplicationBan, checkApplications } = require('../queries/queries')
const { acceptedStaffEmbed, rejectedStaffEmbed, noresStaffEmbed } = require('../embeds/staffEmbeds')
const { acceptedProfEmbed, rejectedProfEmbed, noresProfEmbed } = require('../embeds/profEmbeds')
const { acceptedContentEmbed, rejectedContentEmbed, noresContentEmbed } = require('../embeds/contentEmbeds')
const { acceptedBanEmbed, rejectedBanEmbed, noresBanEmbed } = require('../embeds/banEmbeds')
const Discord = require('discord.js')
let staffR;
const notFound = "No Application was Found"
const errorMessage = "System Experienced an Error, Please try again."

module.exports.staffFunction = function (userInfo) {
    return checkApplicationStaff(userInfo).then(response => {
        if (response.data[0]) {
            if (response.data[0].Accepted === true) {
                staffR = acceptedStaffEmbed;
            } else if (response.data[0].Accepted === false) {
                staffR = rejectedStaffEmbed;
            } else {
                staffR = noresStaffEmbed;
            }

        } else {
            staffR = notFound;
        }
        return staffR;
    })
}

let profR;

module.exports.proficientFunction = function (userInfo) {
    return checkApplicationProf(userInfo).then(response => {
        if (response.data[0]) {
            if (response.data[0].Accepted === true) {
                profR = acceptedProfEmbed;
            } else if (response.data[0].Accepted === false) {
                profR = rejectedProfEmbed;
            } else {
                profR = noresProfEmbed;
            }

        } else {
            profR = notFound;
        }
        return profR;
    })
}

let contentR;

module.exports.contentFunction = function (userInfo) {
    return checkApplicationContent(userInfo).then(response => {
        if (response.data[0]) {
            if (response.data[0].Accepted === true) {
                contentR = acceptedContentEmbed;
            } else if (response.data[0].Accepted === false) {
                contentR = rejectedContentEmbed;
            } else {
                contentR = noresContentEmbed;
            }

        } else {
            contentR = notFound;
        }
        return contentR;
    })
}

let banR;

module.exports.banFunction = function (userInfo) {
    return checkApplicationBan(userInfo).then(response => {
        if (response.data[0]) {
            if (response.data[0].Accepted === true) {
                banR = acceptedBanEmbed;
            } else if (response.data[0].Accepted === false) {
                banR = rejectedBanEmbed;
            } else {
                banR = noresBanEmbed;
            }

        } else {
            banR = notFound;
        }
        return banR;
    })
}

module.exports.applicationFunction = function () {
    return checkApplications().then(response => {
        let staffopen;
        let contentopen;
        let profopen;
        let banopen;
        let openEmbed;
        if(response.data) {
            if(response.data.staffapp === true){
                staffopen = "Open"
            } else {
                staffopen = "Closed"
            }
            if (response.data.contentapp === true) {
                contentopen = "Open"
            } else {
                contentopen = "Closed"
            }
            if (response.data.profapp === true) {
                profopen = "Open"
            } else {
                profopen = "Closed"
            }
            if (response.data.banappeal === true) {
                banopen = "Open"
            } else {
                banopen = "Closed"
            }

            openEmbed = new Discord.MessageEmbed()
                .setColor('#1e24d4')
                .setTitle('Application Status')
                .setURL('https://menudocs.org')
                .setAuthor('MenuDocs Application API')
                .setDescription('Open and Closed Applications')
                .addField('Staff Applications', staffopen, true)
                .addField('Content Creator Applications', contentopen, true)
                .addField('Proficient Applications', profopen, true)
                .addField('Ban Appeals', banopen, true)
                .setFooter('MenuDocs Applications');

        } else {
            return errorMessage;
        }
        console.log(openEmbed)
        return openEmbed;
    })
}