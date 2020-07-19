const axios = require('axios');

module.exports.checkApplicationStaff = function (userInfo) {
    return axios.get(`https://menudocs-admin.herokuapp.com/staff-applications?uid=${userInfo}`)
}

module.exports.checkApplicationProf = function (userInfo) {
    return axios.get(`https://menudocs-admin.herokuapp.com/proficient-applications?uid=${userInfo}`)
}

module.exports.checkApplicationContent = function (userInfo) {
    return axios.get(`https://menudocs-admin.herokuapp.com/content-creator-applications?uid=${userInfo}`)
}

module.exports.checkApplicationBan = function (userInfo) {
    return axios.get(`https://menudocs-admin.herokuapp.com/ban-appeals?uid=${userInfo}`)
}