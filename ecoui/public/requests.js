
/**
 * @param {string} method POST/PUT/DELETE/GET
 * @param {string} url https://example.com/user/list
 */
function sendHTTPRequest(method, url) {
  let promise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.onload = function () {
      if (xhr.status != 200) {
        // analyze HTTP status of the response
        alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
      } else {
        // show the result
        console.log(`Done, got ${xhr.response.length} bytes`); // response is the server response
        resolve(xhr.response);
        // console.log(JSON.stringify(xhr.response.data));
      }
    };
    xhr.send();
  });
  return promise;
}

/**
 * GET /json file
 * @return {Array.<Objects>}
 */
async function getSolar() {
  return this.sendHTTPRequest("GET", "https://reqres.in/api/users");
}

/**
 * POST inventories/persons/locations
 *
 * @param {Object} postObj
 */
// function post(postObj) {
//   let xhr = new XMLHttpRequest();
//   let jsonPostObj = JSON.stringify(postObj);
//   xhr.open("POST", "http://localhost:8080/" + id);
//   xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
//   xhr.send(jsonPostObj);

//   xhr.onload = function () {
//     if (xhr.status === 201) {
//       console.log("Post successfully created!");
//     } else if (xhr.status === 400) {
//       console.log("400 (Bad Request)");
//     }
//   };
// }

/**
 * PUT /inventories or /persons or /locations
 *
 * @param {Object} postObj
 * @param {string} id
 */
function put(putObj) {
  console.log(putObj);
  let xhr = new XMLHttpRequest();
  let jsonPutObj = JSON.stringify(putObj);
  xhr.open("PUT", "/addDevice");
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  xhr.send(jsonPutObj);

  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log("Put successfully done!");
      if (this.data === "device") {
        initDevice();
      }
    } else if (xhr.status === 400) {
      console.log("invalid PUT REQUEST");
    } else if (xhr.status === 404) {
      console.log("not found");
    }
  };
}

/**
 * DELETE /inventories/{id} or /persons/{id} or /locations/{id}
 * db are inventories or persons or locations
 * @param db
 */
function del(id) {
  let xhr = new XMLHttpRequest();
  xhr.open("DELETE", "http://localhost:8080/" + id);
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  xhr.send();

  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log("Delete successful!");
      initDevice();
    } else if (xhr.status === 404) {
      alert("not found");
      initDevice();
    }
  };
}

/**
 * GET /devices
 * @return {Array.<Objects>}
 */
async function getAllDevices() {
  return this.sendHTTPRequest("GET", "/devices");;
}

/**
 * GET /inventories/id or /persons/id or /locations/id
 * @param {string} id
 * @return {string} JSON
 */
async function getById(id) {
  return this.sendHTTPRequest(
    "GET",
    "http://localhost:8080/get/" + id
  );
}

async function post(url, json) {
  let promise = new Promise(function (resolve, reject) {
    let req = new XMLHttpRequest();
    req.open('post', url);
    req.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    req.onload = function () {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        reject(Error(req.statusText));
      }
    };
    req.onerror = function () {
      reject(Error("Network Error"));
    }; 
    req.send(JSON.stringify(json));
  });
  return promise;
}

async function addDevice(device) {
  return post("/addDevice", device)
}

async function updateDevice(device) {
  return post("/updateDevice", device);
}

async function deleteDevice(device) {
  return post("/deleteDevice", device);
}  
