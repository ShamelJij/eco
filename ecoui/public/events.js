import { Requests } from "./requests.js";
let myRequests = new Requests();
export class Events {
  globalInventoryId = 0;

  clickIds = [
    "showSolar",
    "showDeviceManagementBtn",
    "updateDeviceBtn",
    "saveDeviceBtn",
    "deviceCancelUpdateBtn",
  ];

  /**
   * @param {Number} sliceLength the amount of chars to slice from every id name
   * @param {string} eventName "click", "change", "scroll"
   */
  assignEvents(sliceLength, eventName) {
    let eventIds = this.clickIds;
    for (let i = 0; i < eventIds.length; i++) {
      let eventFunction = "";
      // -- if slice == 0 then there will be no change
      if (sliceLength === 0) {
        eventFunction = eventIds[i];
      } else {
        eventFunction = eventIds[i].slice(0, -sliceLength);
      }
      document
        .getElementById(eventIds[i])
        .addEventListener(eventName, eval("this." + eventFunction), false);
    }
  }
  setRowId(Id) {
    globalInventoryId = Id;
  }

  getRowId() {
    let gid = globalInventoryId;
    return gid;
  }
  showSolar() {
    // document.getElementById("inputForm").className = "d-block";
    console.log(myRequests.getSolar());
    document.getElementById("responseObject").innerText = JSON.stringify(
      myRequests.getSolar().response
    );
  }
  showDeviceManagementBtn() {
    console.log("showDeviceManagementBtn");
  }
  updateDeviceBtn() {
    console.log("updateDeviceBtn");
  }
  saveDeviceBtn() {
    console.log("saveDeviceBtn");
  }
  deviceCancelUpdateBtn() {
    console.log("deviceCancelUpdateBtn");
  }
}
