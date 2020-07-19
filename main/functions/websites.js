const { checkApplicationStaff, checkApplicationProf, checkApplicationContent, checkApplicationBan } = require('../queries/queries')

module.exports.webProf = function (userInfo) {
    return checkApplicationProf(userInfo).then(response => {
        const ProfBase = response.data[0]
        return ProfBase;
    })
}

module.exports.webStaff = function (userInfo) {
    return checkApplicationStaff(userInfo).then(response => {
        const StaffBase = response.data[0]
        return StaffBase;
    })
}

module.exports.webContent = function (userInfo) {
    return checkApplicationContent(userInfo).then(response => {
        const ContentBase = response.data[0]
        return ContentBase;
    })
}

module.exports.webBan = function (userInfo) {
    return checkApplicationBan(userInfo).then(response => {
        const BanBase = response.data[0]
        return BanBase;
    })
}