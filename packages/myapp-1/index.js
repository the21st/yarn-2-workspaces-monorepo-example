const { defaultName, logName } = require("@miq/myapp-2");

logName(defaultName);
logName("Jean-Michel");

module.exports = {
  add: (x, y) => {
    return x + y;
  },
};
