async function updateDevicesTable() {
    getAllDevices().then(function (devices) {
        console.log(devices);
        let tableRef = document.getElementById("deviceTableBody");
        tableRef.innerHTML = "";
        devices.forEach(function (device) {
            let newRow = tableRef.insertRow(-1);
            newRow = addDeviceTableCellNoInput(newRow, device['deviceId']);
            newRow = addDeviceTableCellWithInput(newRow, device['deviceId'], "avgDuration", device['avgDuration']);
            newRow = addDeviceTableCellWithInput(newRow, device['deviceId'], "avgConsumption", device['avgConsumption']);
            newRow = addDeviceTableCellWithInput(newRow, device['deviceId'], "name", device['name']);

            let newCell4 = newRow.insertCell(4);
            let button = document.createElement("BUTTON");
            button.className = "btn btn-outline-secondary";
            button.setAttribute("id", "updateDeviceBtn" + device['deviceId']);
            button.setAttribute("onClick", "updateDeviceBtn(this)");
            button.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-pen\" viewBox=\"0 0 16 16\"> \
                         <path d=\"m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1 \
                         -4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 \
                         0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z\"/> \
                         </svg>";
            let button1 = document.createElement("BUTTON");
            button1.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-trash\" viewBox=\"0 0 16 16\"> \
                          <path d=\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"/> \
                          <path fill-rule=\"evenodd\" d=\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 \
                          1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"/> \
                          </svg>";
            button1.className = "btn btn-outline-secondary";
            button1.setAttribute("id", "deleteDeviceBtn" + device['deviceId']);
            button1.setAttribute("onclick", "deleteDeviceBtn(this)");


            let button2 = document.createElement("BUTTON");
            button2.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-check\" viewBox=\"0 0 16 16\"> \
                          <path d=\"M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z\"/> \
                          </svg>";
            button2.className = "btn btn-outline-secondary";
            button2.setAttribute("style", "display: none");
            button2.setAttribute("id", "saveUpdateDeviceBtn" + device['deviceId']);
            button2.setAttribute("onclick", "saveUpdateDeviceBtn(this)");

            let button3 = document.createElement("BUTTON");
            button3.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-x\" viewBox=\"0 0 16 16\"> \
                           <path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"/> \
                          </svg>";
            button3.className = "btn btn-outline-secondary";
            button3.setAttribute("id", "cancelUpdateDeviceBtn" + device['deviceId']);
            button3.setAttribute("style", "display: none");
            button3.setAttribute("onclick", "cancelUpdateDeviceBtn(this)");


            let span = document.createElement("SPAN");
            span.innerHTML = " ";
            let span1 = document.createElement("SPAN");
            span1.innerHTML = " ";
            newCell4.appendChild(button);
            newCell4.appendChild(span);
            newCell4.appendChild(button1);
            newCell4.appendChild(button2);
            newCell4.appendChild(span1);
            newCell4.appendChild(button3);

        });
    });

}

function updateDeviceBtn(element) {
    let deviceId = element.parentElement.parentElement.id;
    let x = document.getElementById("nameSpan" + deviceId);
    x.style.display = "none";
    let x1 = document.getElementById("nameInput" + deviceId);
    x1.style.display = "block";
    let x2 = document.getElementById("avgConsumptionSpan" + deviceId);
    x2.style.display = "none";
    let x3 = document.getElementById("avgConsumptionInput" + deviceId);
    x3.style.display = "block";
    let x4 = document.getElementById("avgDurationSpan" + deviceId);
    x4.style.display = "none";
    let x5 = document.getElementById("avgDurationInput" + deviceId);
    x5.style.display = "block";
    let x6 = document.getElementById("updateDeviceBtn" + deviceId);
    x6.style.display = "none";
    let x7 = document.getElementById("deleteDeviceBtn" + deviceId);
    x7.style.display = "none";
    let x8 = document.getElementById("saveUpdateDeviceBtn" + deviceId);
    x8.style.display = "inline";
    let x9 = document.getElementById("cancelUpdateDeviceBtn" + deviceId);
    x9.style.display = "inline";
}

function cancelUpdateDeviceBtn(element) {
    let deviceId = element.parentElement.parentElement.id;
    let x = document.getElementById("nameSpan" + deviceId);
    x.style.display = "block";
    let x1 = document.getElementById("nameInput" + deviceId);
    x1.style.display = "none";
    let x2 = document.getElementById("avgConsumptionSpan" + deviceId);
    x2.style.display = "block";
    let x3 = document.getElementById("avgConsumptionInput" + deviceId);
    x3.style.display = "none";
    let x4 = document.getElementById("avgDurationSpan" + deviceId);
    x4.style.display = "block";
    let x5 = document.getElementById("avgDurationInput" + deviceId);
    x5.style.display = "none";
    let x6 = document.getElementById("updateDeviceBtn" + deviceId);
    x6.style.display = "inline";
    let x7 = document.getElementById("deleteDeviceBtn" + deviceId);
    x7.style.display = "inline";
    let x8 = document.getElementById("saveUpdateDeviceBtn" + deviceId);
    x8.style.display = "none";
    let x9 = document.getElementById("cancelUpdateDeviceBtn" + deviceId);
    x9.style.display = "none";

}

function deleteDeviceBtn(element) {
    let deviceId = element.parentElement.parentElement.id;
    let name = document.getElementById("nameInput" + deviceId).value;
    let avgConsumption = document.getElementById("avgConsumptionInput" + deviceId).value;
    let avgDuration = document.getElementById("avgDurationInput" + deviceId).value;
    let deviceToDelete = buildDeviceJson(deviceId, name, avgConsumption, avgDuration, true);
    updateDevice(deviceToDelete).then(function(response){
        updateDevicesTable();
    });
}

function saveUpdateDeviceBtn(element) {
    let deviceId = element.parentElement.parentElement.id;
    let name = document.getElementById("nameInput" + deviceId).value;
    let avgConsumption = document.getElementById("avgConsumptionInput" + deviceId).value;
    let avgDuration = document.getElementById("avgDurationInput" + deviceId).value;
    let deviceToUpdate = buildDeviceJson(deviceId, name, avgConsumption, avgDuration, false);

    updateDevice(deviceToUpdate).then(function(){
        updateDevicesTable();
    });
}

function addDeviceTableCellNoInput(row, rowId) {
    let newCell = row.insertCell(0);
    row.setAttribute('id', rowId);
    let newSpan = document.createElement("SPAN");
    newSpan.setAttribute('id', "deviceIdSpan" + rowId);
    newSpan.innerHTML = rowId;
    newCell.appendChild(newSpan);
    return row;
}

function addDeviceTableCellWithInput(row, rowId, attribute, value) {
    let newCell = row.insertCell(1);
    let newSpan = document.createElement("SPAN");
    newSpan.setAttribute("id", attribute + "Span" + rowId);
    newSpan.innerHTML = value;
    let newInput = document.createElement("INPUT");
    newInput.value = value;
    newInput.setAttribute("style", "display: none");
    newInput.setAttribute("id", attribute + "Input" + rowId);
    newCell.appendChild(newSpan);
    newCell.appendChild(newInput);
    return row;
}

function buildDeviceJson(deviceId, name, avgConsumption, avgDuration, deleted) {
    return JSON.parse("{\"deviceId\":\"" + deviceId + "\","
        + "\"name\":\"" + name + "\","
        + "\"avgConsumption\":\"" + avgConsumption + "\","
        + "\"deleted\":\"" + deleted + "\","
        + "\"avgDuration\":\"" + avgDuration + "\"}");
}




