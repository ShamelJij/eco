import { Events } from "./events.js";
import { Requests } from "./requests.js";
import { ChartClass } from "./solar.js";
let myRequests = new Requests();
let myEvents = new Events();
let chartClass = new ChartClass();
myEvents.assignEvents(["showSolar"], 0, "click");
chartClass.showChart(chartClass.myChart);
document
  .getElementById("englishPage")
  .addEventListener("click", showEnglishPage);
function showEnglishPage() {
  location.replace("./indexEnglisch.html");
}
