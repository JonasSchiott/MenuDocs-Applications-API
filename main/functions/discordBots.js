const { checkApplicationStaff, checkApplicationProf, checkApplicationContent, checkApplicationBan } = require('../queries/queries')
const { acceptedStaffEmbed, rejectedStaffEmbed, noresStaffEmbed } = require('../embeds/staffEmbeds')
const { acceptedProfEmbed, rejectedProfEmbed, noresProfEmbed } = require('../embeds/profEmbeds')
const { acceptedContentEmbed, rejectedContentEmbed, noresContentEmbed } = require('../embeds/contentEmbeds')
const { acceptedBanEmbed, rejectedBanEmbed, noresBanEmbed } = require('../embeds/banEmbeds')
let staffR;
const notFound = "No Application was Found"

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