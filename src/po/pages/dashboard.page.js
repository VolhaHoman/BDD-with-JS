
const { SideMenu } = require("../components");
const BasePage = require("./base.page");

class DashboardPage extends BasePage {

    constructor() {
        super('/showcase/angular/appointmentplanner/#/dashboard');
        // this.sideMenu = new SideMenu();
    }
  }
  
  module.exports = DashboardPage;
