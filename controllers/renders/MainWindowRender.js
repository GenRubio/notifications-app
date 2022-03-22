const Utils = require("../../utils/Utils");

const MainWindowRender = {
  init(ipc) {
    this.setListeners(ipc);
  },
  setListeners(ipc) {
    ipc.on("invokeAction", function (event, data) {
     
    });
  },
};

module.exports = MainWindowRender;
