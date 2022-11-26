export class MyTime {
  showTime() {
    const weekday = new Date().toLocaleString("de-de", { weekday: "long" });
    const utc = new Date().toUTCString();
    const t = new Date();
    document.getElementById("clock").innerHTML =
      "&nbsp;" +
      weekday +
      " - " +
      t.toLocaleDateString().split("/")[1] +
      "." +
      t.toLocaleDateString().split("/")[0] +
      "." +
      t.toLocaleDateString().split("/")[2] +
      " - " +
      t.toLocaleTimeString("de-de", { hour12: false });
  }
}
