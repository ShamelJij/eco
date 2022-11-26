import { Events } from "./events.js";
let myEvents = new Events();
export class InitPage {
  page = "";
  elementsIds = [];
  elements = {};
  constructor(page) {
    this.page = page;
    this.elementsIds = [
      page + "TableIsEmpty",
      page + "Delete",
      page + "DeletedName",
      "addPersonTableIsEmpty",
      "addLocationTableIsEmpty",
    ];
    for (let i = 0; i < this.elementsIds.length; i++) {
      this.elements[this.elementsIds[i]] = document.getElementById(
        this.elementsIds[i]
      );
    }
  }
  async initPage(objArray) {
    let data = objArray[0].form;
    let tableIsEmpty = document.getElementById(this.page + "TableIsEmpty");
    this.clearTable();

    if (!objArray || objArray.length == 0) {
      let x = tableIsEmpty.className;
      x = x.replace("d-block", "");
      x = x.replace("d-none", "");
      x = x.trim();
      tableIsEmpty.className = x + " d-block";
    }
    // sonst: neue Reihe zufügen für jeden Eintrag
    else {
      let x = tableIsEmpty.className;
      x = x.replace("d-block", "");
      x = x.replace("d-none", "");
      x = x.trim();
      tableIsEmpty.className = x + " d-none";
      let sortedList = objArray.sort(function (a, b) {
        if (data === "person") {
          if (a.deviceName < b.deviceName) {
            return -1;
          }
          if (a.deviceName > b.deviceName) {
            return 1;
          }
          return 0;
        }
      });
      //insertNewRaw(obj);
      for (let i = 0; i < sortedList.length; i++) {
        this.insertNewRaw(sortedList[i]);
      }
    }
  }

  insertNewRaw(obj) {
    let schema = [];
    let objKeys = Object.keys(obj);
    for (let i = 0; i < objKeys.length - 5; i++) {
      schema[i] = objKeys[i + 3];
    }
    let table = document
      .getElementById(obj.form + "Table")
      .getElementsByTagName("tbody")[0];
    let newRow = table.insertRow(table.length);
    let cells = [];
    for (let i = 0; i < schema.length; i++) {
      cells[i] = newRow.insertCell(i);
      cells[i].innerHTML = eval("obj." + schema[i]);
    }
    cells[schema.length] = newRow.insertCell(schema.length);
    cells[schema.length].innerHTML =
      '<div class="text-center d-flex justify-content-around">' +
      //here we have a problem with addEventListener
      '<button onclick="editDevice(' +
      "'" +
      obj._id +
      "'" +
      ')" class="btn btn-secondary" data-toggle="tooltip" data-placement="left" title="bearbeiten">E</button>&nbsp;' +
      '<div data-toggle="tooltip" data-placement="left">D<button   class="btn btn-danger" data-toggle="modal"  title="löschen" data-target="#delete' +
      obj.form +
      //here we have a problem with addEventListener
      'Model" onclick="myEvents.setRowID(' +
      "'" +
      obj._id +
      "'" +
      ')"></button></div>' +
      "</div>";
  }

  clearTable() {
    const formTable = document.getElementById(this.page + "TableBody");
    formTable.innerHTML = "";
  }
}
