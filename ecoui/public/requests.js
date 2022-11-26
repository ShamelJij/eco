export class Requests {
  /**
   * @param {string} method POST/PUT/DELETE/GET
   * @param {string} url https://example.com/user/list
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
          console.log(JSON.stringify(xhr.response.data[2]));
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
  async getSolar() {
    return this.sendHTTPRequest("GET", "https://reqres.in/api/users");
  }
}
