export class ChartClass {
  constructor() {
    let labels = this.getHours();
    let d1 = [];
    let d2 = [];
    for (let i = 0; i < 90; i++) {
      d1[i] = Math.round(Math.random() * (250 - 50) + 50);
    }
    for (let j = 0; j < 90; j++) {
      d2[j] = Math.round(Math.random() * (250 - 50) + 50);
    }
    let data = {
      labels: labels,
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: [0, 30, ...d1, 300],
        },
        {
          label: "My second dataset",
          backgroundColor: "rgb(255, 165, 0)",
          borderColor: "rgb(255, 165, 0)",
          data: [0, 20, ...d2, 300],
        },
      ],
    };

    let config = {
      type: "line",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value, index, values) => {
                console.log(values);
                return `${value} kWh`;
              },
            },
          },
        },
      },
    };

    const myChart = new Chart(document.getElementById("myChart"), config);
  }
  async getSolar() {
    console.log("getSolar is pressed");
    let solarJSON = await requests.getSolar();
    document.getElementById(solarBoard).value = solarJSON;
  }

  showChart(chart) {
    $("#myChartDiv").append(chart);
  }
  getHours() {
    const arr = [];
    console.log(Math.round(Math.random() * (300 - 0) + 0));
    //24 hours can be set a variable
    for (let i = 0; i < 24; i++) {
      for (let j = 0; j < 4; j++) {
        arr.push(`${i}:${j === 0 ? `00` : 15 * j}`);
      }
    }
    const d = new Date("2022-10-17T00:00:00"),
      h = d.getHours(),
      m = 15 * Math.floor(d.getMinutes() / 15),
      stamp = `${h}:${m === 0 ? `00` : m}`;
    const pos = arr.indexOf(stamp);
    let timeList = [];
    if (pos > -1) {
      timeList = [...arr.slice(pos), ...arr.slice(0, pos)];
    }
    return timeList;
  }
}
