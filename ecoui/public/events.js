export class Events {
  globalInventoryId = 0;

  clickIds = [
    "showSolar",
    "showDeviceManagementBtn",
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
    const d = async () => {
      const a = getSolar();
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

  async showExampleTable() {
    let objArray = {};
    const d = async () => {
      const a = getSolar();
      return a.data;
    };
    objArray = await d();
    console.log(objArray);
    document.getElementById("exampleTable").className =
      "d-block m-2 table table-bordered table-striped table-highlight";
    document.getElementById("tableDiv").className = "d-block";
    // document.getElementById("exampleTable").className = "d-block m-2";
    let tableBody = document.getElementById("exampleTableBody");
    let obj = {};
    for (let i = 0; i < objArray.length; i++) {
      let newRow = tableBody.insertRow(tableBody.length);
      obj = objArray[i];
      console.log(newRow);
      let cell1 = newRow.insertCell(0);
      cell1.innerText = obj.id;
      let cell2 = newRow.insertCell(1);
      cell2.innerText = obj.first_name;
      let cell3 = newRow.insertCell(2);
      cell3.innerText = obj.last_name;
      let cell4 = newRow.insertCell(3);
      cell4.innerText = obj.email;
      const lastCell = document.createElement("div");
      lastCell.className = "text-center row";
      const editBtn = document.createElement("button");
      editBtn.className = "btn btn-success col-2 mx-2";
      editBtn.innerHTML = "E";
      editBtn.addEventListener("click", this.editItem);
      const deleteBtn = document.createElement("button");
      deleteBtn.classList = "btn btn-danger col-2 mx-2";
      deleteBtn.innerHTML = "D";
      deleteBtn.addEventListener("click", this.deleteItem);
      lastCell.appendChild(editBtn);
      lastCell.appendChild(deleteBtn);
      console.log(lastCell);
      let cell5 = newRow.insertCell(4);
      cell5.innerHTML = lastCell.innerHTML;
    }
  }
  //these are the btn click listener
  showDeviceManagementBtn() {
    var x = document.getElementById("showDeviceTable");
    x.style.display = "block";
  }

  saveDeviceBtn() {
    let deviceName = document.getElementById('deviceName').value;
    let deviceId = document.getElementById('deviceId').value;
    let avgConsumption = document.getElementById('avgConsumption').value;
    let avgDuration = document.getElementById('avgDuration').value;
    let device = buildDeviceJson(deviceId, deviceName, avgConsumption, avgDuration, false);
    console.log(device);
    addDevice(device).then(function() {
      updateDevicesTable()
    });
  }

  deviceCancelUpdateBtn() {
    var x = document.getElementById("showDeviceTable");
    x.style.display = "none";
  }

  addDevices() {
    console.log("addDevices (get all devices)");
  }
}