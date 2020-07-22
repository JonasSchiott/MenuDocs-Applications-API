const { get } = require('axios');

module.exports = {
    checkApplicationStaff = async (userInfo) => {
        return await get(`https://menudocs-admin.herokuapp.com/staff-applications?uid=${userInfo}`);
    },

    checkApplicationProf = async (userInfo) => {
        return await get(`https://menudocs-admin.herokuapp.com/proficient-applications?uid=${userInfo}`);
    },

    checkApplicationContent = async (userInfo) => {
        return await get(`https://menudocs-admin.herokuapp.com/content-creator-applications?uid=${userInfo}`);
    },

    checkApplicationBan = async (userInfo) => {
        return await get(`https://menudocs-admin.herokuapp.com/ban-appeals?uid=${userInfo}`);
    },

    checkApplications = async (userInfo) => {
        return await get(`https://menudocs-admin.herokuapp.com/update`);
    },

    updateCheck = async (userInfo) => {
        return await get(`https://menudocs-admin.herokuapp.com/update`);
    }

}
