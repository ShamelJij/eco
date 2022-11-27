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
    "addDevices",
    "showExampleTable",
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
  //getter and setter for table row id
  setRowId(Id) {
    globalInventoryId = Id;
  }

  getRowId() {
    let gid = globalInventoryId;
    return gid;
  }
  //this function is yet to be implemented
  showSolar() {
    // document.getElementById("inputForm").className = "d-block";
    const d = async () => {
      const a = await myRequests.getSolar();
      console.log(a.data);
      document.getElementById("responseObject").innerText = JSON.stringify(
        a.data
      );
    };
    d();
  }
  deleteItem() {
    console.log("delete item");
  }
  editItem() {
    console.log("edit item");
  }
  //example for showing a table from JSON
  /*
   *  getting an Object array - Object[] from getRequest
   *  @param {<Array>}
   */

  showExampleTable(objArray) {
    console.log("showExampleTable");
    document.getElementById("exampleTable").className = "d-block m-2";
    // document.getElementById("exampleTable").className = "d-block m-2";
    let obj = {};
    let objKeys = [];
    let tableBody = document.getElementById("exampleTableBody");
    let cells = [];
    let newRow = tableBody.insertRow(tableBody.length);
    for (let i = 0; i < objArray.length; i++) {
      obj = objArray[i];
      objKeys = Object.keys(obj);
      for (let j = 0; j < objKeys.length - 1; j++) {
        cells[j] = newRow.insertCell(i);
        cells[j].innerHTML = eval("obj." + objKeys[j]);
      }
      cells[objKeys.length] = newRow.insertCell(objKeys.length);
      const lastCell = document.createElement("div");
      lastCell.className = "text-center d-flex justify-content-around";
      const editBtn = document.createElement("button");
      editBtn.className = "btn btn-success";
      editBtn.innerText = "E";
      editBtn.addEventListener("click", this.editItem);
      const deleteBtn = document.createElement("button");
      deleteBtn.classList = "btn btn-danger";
      deleteBtn.innerText = "D";
      deleteBtn.addEventListener("click", this.deleteItem);
    }
  }
  //these are the btn click listener
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

  addDevices() {
    console.log("addDevices (get all devices)");
  }
}
