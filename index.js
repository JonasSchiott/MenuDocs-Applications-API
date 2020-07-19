const { checkApplicationStaff, checkApplicationProf, checkApplicationContent, checkApplicationBan } = require('./main/queries/queries')
const { proficientFunction, staffFunction, contentFunction, banFunction } = require('./main/functions/discordBots')
const { webProf, webStaff, webContent, webBan} = require('./main/functions/websites')

// Full Take Imports
module.exports.staffapp = userInfo => checkApplicationStaff(userInfo);
module.exports.profapp = userInfo => checkApplicationProf(userInfo);
module.exports.contentapp = userInfo => checkApplicationContent(userInfo);
module.exports.banapp = userInfo => checkApplicationBan(userInfo);

// Discord Bot Imports
module.exports.botStaffStatus = userInfo => { return staffFunction(userInfo) }
module.exports.botProficientStatus = userInfo => { return proficientFunction(userInfo) }
module.exports.botContentStatus = userInfo => { return contentFunction(userInfo) }
module.exports.botBanStatus = userInfo => { return banFunction(userInfo) }

// Website Imports
module.exports.webProfStatus = userInfo => webProf(userInfo);
module.exports.webStaffStatus = userInfo => webStaff(userInfo);
module.exports.webContentStatus = userInfo => webContent(userInfo);
module.exports.webBanStatus = userInfo => webBan(userInfo);