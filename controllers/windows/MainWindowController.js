const { globalShortcut, Menu } = require("electron");
const Window = require("../objects/Window");
const MainWindowMenu = require("../menus/MainWindowMenu");

const CreateWindowController = {
  window: {
    title: "Notification App",
    width: 1128,
    height: 736,
    resizable: true,
    backgroudColor: "#ccc",
    iconUrl: "./icon.ico",
    fileUrl: "./app/views/layouts/app.html",
  },
  init() {
    let mainWindow = Window.init(this.window);
    this.setWindowConfig(mainWindow);
    this.loadFileHandler(mainWindow);
    this.setlisteners(mainWindow);
    this.setWindowKeys(mainWindow);
  },
  setlisteners(mainWindow) {
    mainWindow.webContents.on("did-finish-load", () => {});
    mainWindow.on("closed", (event) => {});
    mainWindow.webContents.on("new-window", (event, url) => {
      event.preventDefault();
    });
  },
  setWindowKeys(mainWindow) {
    globalShortcut.register("f5", function () {
      mainWindow.reload();
    });

    globalShortcut.register("f1", function () {
      mainWindow.toggleDevTools();
    });
  },
  setWindowConfig(mainWindow) {
    mainWindow.setResizable(this.window.resizable);
    mainWindow.setMenu(null);
  },
  loadFileHandler(mainWindow) {
    mainWindow.loadFile(this.window.fileUrl);
    mainWindow.show();
  },
};

module.exports = CreateWindowController;
