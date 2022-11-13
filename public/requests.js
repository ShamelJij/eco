export class Requests {
  //################################################################################
  /**
   * @param {string} method POST/PUT/DELETE/GET
   * @param {string} url
   */
  sendHTTPRequest(method, url) {
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
        }
      };
      xhr.send();
    });
    return promise;
  }

  //--------------------------------------------------------------------------------
  /**
   * GET /inventories or /persons or /locations
   * @return {Array.<Objects>}
   */
  async getSolar() {
    return this.sendHTTPRequest("GET", "http://localhost:8080/solar/");
  }
}
