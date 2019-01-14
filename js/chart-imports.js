
Highcharts.chart('import-chart', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Switch between different <b>types of weapons</b> to see which of them have been <b>imported</b> by specific countries'
    },
    xAxis: {
        categories: ["Algeria", "Australia", "Azerbaijan", "Bangladesh", "China", "Egypt", "India", "Indonesia", "Iraq", "Israel", "Italy", "Japan", "South Korea", "Oman", "Pakistan", "Qatar", "Saudi Arabia", "Singapore", "Taiwan", "Turkey", "UAE", "United Kingdom", "United States", "Venezuela", "Viet Nam"]
    },
    yAxis: {
        title: {
            text: 'TIVs – SIPRI Trend Indicator Values – expressed in millions'
        }
        // stackLabels: {
        //     enabled: true,
        //     style: {
        //         fontWeight: 'bold',
        //         color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
        //     }
        // }
    },
    legend: {
        align: 'center',
        x: 20,
        verticalAlign: 'top',
        y: 30,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white'
        // borderColor: '#CCC',
        // borderWidth: 1,
        // shadow: false
    },
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal'
            // dataLabels: {
            //   enabled: true,
            //   color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            //   }
        }
    },
    series: [
    {
        color: '#846556',
        name: 'Air defence systems',
        data: [372, 28, 87, 32, 158, 200, 810, 206, 269, 38, 0, 70, 42, 211, 351, 330, 1241, 55, 227, 42, 951, 28, 0, 570, 285]
    },
    {
        color: '#BA9077',
        name: 'Aircraft',
        data: [1519, 3062, 352, 400, 2585, 2657, 10635, 1596, 2542, 1150, 861, 1165, 949, 1186, 1631, 679, 7341, 1326, 1506, 2196, 1130, 1663, 1126, 187, 715]
    },
    {
        color: '#E5B095',
        name: 'Armoured vehicles',
        data: [1085, 50, 683, 616, 0, 673, 503, 360, 904, 176, 0, 6, 0, 28, 500, 347, 2607, 157, 0, 82, 481, 0, 41, 268, 1]
    },
  {
        color: '#74657F',
        name: 'Artillery',
        data: [93, 19, 146, 41, 0, 0, 2, 93, 51, 7, 0, 1, 2, 0, 29, 110, 101, 0, 0, 164, 26, 0, 58, 65, 0]
    },
    {
        color: '#A08EB2',
        name: 'Engines',
        data: [52, 100, 1, 83, 1736, 107, 1359, 89, 115, 154, 133, 187, 416, 43, 213, 16, 175, 58, 53, 183, 116, 180, 324, 5, 55]
    },
    {
        color: '#CEB7E5',
        name: 'Missiles',
        data: [545, 662, 301, 137, 381, 575, 2252, 247, 740, 303, 153, 184, 696, 303, 777, 677, 2385, 379, 515, 313, 2164, 0, 25, 288, 550]
    },
    {
        color: '#95a3a0',
        name: 'Naval weapons',
        data: [14, 28, 0, 0, 125, 17, 141, 69, 0, 0, 0, 83, 37, 19, 1, 0, 0, 31, 3, 108, 19, 0, 30, 0, 0]
    },
    {
        color: '#baceca',
        name: 'Satellites',
        data: [0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0]
    },
    {
        color: '#cfe8e3',
        name: 'Sensors',
        data: [110, 154, 39, 12, 626, 131, 504, 143, 120, 48, 297, 110, 273, 190, 198, 20, 695, 138, 147, 402, 252, 68, 591, 0, 158]
    },
    {
        color: '#3b3f3e',
        name: 'Ships',
        data: [1409, 1456, 298, 918, 176, 2164, 1844, 1197, 187, 600, 550, 0, 825, 566, 447, 34, 84, 0, 396, 0, 1203, 133, 579, 150, 2226]
    },
    {
        color: '#545e5d',
        name: 'Others',
        data: [216, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 175, 6, 0, 0, 30, 0, 156, 0, 0]
    }]
});
