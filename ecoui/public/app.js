import { Events } from "./events.js";
// import { ChartClass } from "./solar.js";
import { CustomListener } from "./customListener.js";
import { MyTime } from "./myTime.js";
import { InitPage } from "./initPage.js";
let myEvents = new Events();
// let chartClass = new ChartClass();
let myGetRequest = new CustomListener();
let WallOClock = new MyTime();
myEvents.assignEvents(0, "click");
// chartClass.showChart(chartClass.myChart);
/**
 * get input from form as an object
 *
 * @return {deviceData}
 */
function getInputDevice() {
  let deviceForm = ["deviceLabel", "deviceSerialNumber", "deviceType"];
  let deviceData = {};
  for (let i = 0; i < inventoryForm.length; i++) {
    deviceData[deviceForm[i]] = document.getElementById(deviceForm[i]).value;
  }
  return deviceData;
}



let objArray;
document
  .getElementById("showExampleTable")
  .addEventListener("click", myEvents.showExampleTable);
//this will show time on the planing page
window.addEventListener("load", function () {
  this.setInterval(function () {
    WallOClock.showTime();
  }, 1000);
});

//this is a custom listener that starts every second and will start a get-request every 15 minutes according to gmt time
myGetRequest.myFirstRequest();
window.addEventListener(
  "load",
  function () {
    //very important example of bind to not lose (this) context
    this.setInterval(myGetRequest.myGetRequest.bind(myGetRequest), 1000);
    updateDevicesTable();
  },
  false
);
