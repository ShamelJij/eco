export class Customlistener {
  timerval = 0;
  myFirstRequest() {
    console.log("this is getRequest number: " + this.timerval);
  }
  myGetRequest() {
    const utc = new Date().toUTCString();
    let minutes = utc.split(" ")[4].split(":")[1];
    let seconds = utc.split(" ")[4].split(":")[2];
    if (
      (minutes == "00" && seconds == "00") ||
      (minutes == "15" && seconds == "00") ||
      (minutes == "30" && seconds == "00") ||
      (minutes == "45" && seconds == "00")
    ) {
      this.timerval = ++this.timerval;
      return;
    } else {
      return;
    }
  }
}
