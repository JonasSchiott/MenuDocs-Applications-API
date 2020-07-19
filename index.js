const { checkApplicationStaff, checkApplicationProf, checkApplicationContent, checkApplicationBan, checkApplicationStatus } = require('./main/queries/queries')
const { proficientFunction, staffFunction, contentFunction, banFunction, applicationFunction, updateFunction } = require('./main/functions/discordBots')
const { webProf, webStaff, webContent, webBan, webApplicationCheck, webUpdate } = require('./main/functions/websites')

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
module.exports.botApplicationStatus = () => applicationFunction();
module.exports.botUpdates = () => updateFunction();

// Website Imports
module.exports.webProfStatus = userInfo => webProf(userInfo);
module.exports.webStaffStatus = userInfo => webStaff(userInfo);
module.exports.webContentStatus = userInfo => webContent(userInfo);
module.exports.webBanStatus = userInfo => webBan(userInfo);
module.exports.webApplicationStatus = () => webApplicationCheck();
module.exports.webUpdates = () => webUpdate();
