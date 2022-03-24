import { HomePageController } from "./controllers/HomePageController.js";
import { TableController } from "./controllers/TableController.js";

document.addEventListener("DOMContentLoaded", () => {
  onDocumentReady();
});

function onDocumentReady() {
  initControllers();
}

function initControllers() {
  HomePageController.init();
  TableController.init();
}
