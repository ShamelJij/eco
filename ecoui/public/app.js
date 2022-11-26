import { Events } from "./events.js";
import { Requests } from "./requests.js";
import { ChartClass } from "./solar.js";
import { Customlistener } from "./customListener.js";
import { MyTime } from "./myTime.js";
let myRequests = new Requests();
let myEvents = new Events();
let chartClass = new ChartClass();
let myGetRequest = new Customlistener();
let WallOClock = new MyTime();
myEvents.assignEvents(["showSolar"], 0, "click");
chartClass.showChart(chartClass.myChart);

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
    this.setInterval(myGetRequest.myGetRequest(), 1000);
  },
  false
);
