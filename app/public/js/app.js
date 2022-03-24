let $ = (jQuery = require("jquery"));
require('bootstrap');
require('@fortawesome/fontawesome-free/js/fontawesome.js');
window.toastr = require('toastr');
var ipc = require('electron').ipcRenderer;
const datepicker = require("js-datepicker");

const Render = {
  component(folder, view) {
    const component = $("[data-" + folder + "='" + view + "']");
    const viewData = component.data(folder);
    switch (folder) {
      case "page":
        component.load("../pages/" + viewData + ".html");
        break;
      case "component":
        component.load("../components/" + viewData + ".html");
        break;
      case "partial":
        component.load("../partials/" + viewData + ".html");
        break;
    }
  },
};
