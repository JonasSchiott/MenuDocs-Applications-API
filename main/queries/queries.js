const { get } = require('axios');

module.exports.checkApplicationStaff = function (userInfo) {
    return get(`https://menudocs-admin.herokuapp.com/staff-applications?uid=${userInfo}`)
}

module.exports.checkApplicationProf = function (userInfo) {
    return get(`https://menudocs-admin.herokuapp.com/proficient-applications?uid=${userInfo}`)
}

module.exports.checkApplicationContent = function (userInfo) {
    return get(`https://menudocs-admin.herokuapp.com/content-creator-applications?uid=${userInfo}`)
}

module.exports.checkApplicationBan = function (userInfo) {
    return get(`https://menudocs-admin.herokuapp.com/ban-appeals?uid=${userInfo}`)
}

module.exports.checkApplications = function () {
    return get(`https://menudocs-admin.herokuapp.com/update`)
}

module.exports.updateCheck = function () {
    return get(`https://menudocs-admin.herokuapp.com/update`)
}