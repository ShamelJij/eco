export class Events {
  clickIds = ["showSolar"];

  /**
   * @param {Array<string>} eventIds ["showBtnId"]
   * @param {Number} sliceLength the amount of chars to slice from every id name
   * @param {string} eventName "click", "change", "scroll"
   */
  assignEvents(eventIds, sliceLength, eventName) {
    let eventInputElements = {};
    for (let i = 0; i < eventIds.length; i++) {
      let eventFunction = "";
      // -- if slice == 0 then there will be no change
      if (sliceLength === 0) {
        eventFunction = eventIds[i];
      } else {
        eventFunction = eventIds[i].slice(0, -sliceLength);
      }
      eventInputElements[eventIds[i]] = eval(
        "document.getElementById(" + eventIds[i] + ");"
      );
      document
        .getElementById(eventIds[i])
        .addEventListener(eventName, eval("this." + eventFunction), false);
    }
  }
  showSolar() {
    console.log("something");
  }
}
