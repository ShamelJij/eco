import { Requests } from "./requests.js";
let myRequests = new Requests();
export class Events {
  clickIds = ["showSolar"];

  /**
   * @param {Array<string>} eventIds ["showBtnId"]
   * @param {Number} sliceLength the amount of chars to slice from every id name
   * @param {string} eventName "click", "change", "scroll"
   */
  assignEvents(eventIds, sliceLength, eventName) {
    for (let i = 0; i < eventIds.length - 1; i++) {
      let eventFunction = "";
      // -- if slice == 0 then there will be no change
      if (sliceLength === 0) {
        eventFunction = eventIds[i];
      } else {
        eventFunction = eventIds[i].slice(0, -sliceLength);
      }
      console.log(eventIds[i]);
      document
        .getElementById(eventIds[i])
        .addEventListener(eventName, eval("this." + eventFunction), false);
    }
  }
  showSolar() {
    // document.getElementById("inputForm").className = "d-block";
    console.log(myRequests.getSolar());
    document.getElementById("responseObject").innerText = JSON.stringify(
      myRequests.getSolar().response
    );
  }
}
