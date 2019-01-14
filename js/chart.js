
Highcharts.chart('export-chart', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Switch between different <b>types of weapons</b> to see which of them have been <b>exported</b> by specific countries'
    },
    xAxis: {
        categories: ["Australia", "Belarus", "Brazil", "Canada", "China", "Czech Republic", "Finland", "France", "Germany", "Israel", "Italy", "South Korea", "Netherlands", "Norway", "Portugal", "Russia", "South Africa", "Spain", "Sweden", "Switzerland", "Turkey", "UAE", "United Kingdom", "Ukraine", "United States"]
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
        data: [0, 195, 0, 0, 775, 0, 0, 191, 198, 992, 32, 0, 216, 500, 0, 2344, 0, 0, 0, 208, 0, 0, 51, 0, 3318]
    },
    {
        color: '#BA9077',
        name: 'Aircraft',
        data: [130, 369, 213, 231, 2169, 230, 0, 2865, 1065, 292, 1663, 942, 202, 13, 251, 15370, 3, 2623, 330, 740, 24, 123, 4360, 726, 26178]
    },
    {
        color: '#E5B095',
        name: 'Armoured vehicles',
        data: [8, 40, 6, 414, 1604, 129, 231, 274, 1275, 78, 267, 31, 343, 0, 0, 2790, 261, 32, 58, 95, 387, 170, 22, 466, 5740]
    },
  {
        color: '#74657F',
        name: 'Artillery',
        data: [0, 14, 34, 0, 190, 17, 22, 75, 153, 19, 6, 196, 0, 0, 0, 165, 4, 1, 0, 0, 62, 0, 104, 7, 180]
    },
    {
        color: '#A08EB2',
        name: 'Engines',
        data: [0, 0, 0, 446, 1, 0, 61, 495, 832, 0, 1, 0, 0, 0, 3, 2335, 0, 0, 56, 0, 0, 0, 403, 652, 1732]
    },
    {
        color: '#CEB7E5',
        name: 'Missiles',
        data: [15, 12, 26, 4, 1138, 0, 0, 1208, 623, 1327, 145, 26, 3, 112, 0, 3867, 56, 0, 218, 0, 287, 3, 536, 177, 9730]
    },
    {
        color: '#95a3a0',
        name: 'Naval weapons',
        data: [0, 0, 0, 0, 42, 0, 0, 30, 0, 45, 212, 0, 0, 0, 0, 194, 0, 0, 50, 16, 0, 0, 0, 0, 267]
    },
    {
        color: '#baceca',
        name: 'Satellites',
        data: [0, 0, 0, 0, 0, 0, 0, 50, 0, 50, 50, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        color: '#cfe8e3',
        name: 'Sensors',
        data: [0, 23, 0, 0, 244, 72, 0, 1644, 127, 1059, 407, 0, 996, 29, 0, 550, 0, 137, 373, 263, 8, 0, 82, 56, 1665]
    },
    {
        color: '#3b3f3e',
        name: 'Ships',
        data: [310, 0, 0, 0, 2150, 0, 0, 2875, 4210, 358, 752, 590, 1341, 0, 0, 3790, 18, 1468, 172, 0, 396, 22, 1323, 396, 1113]
    },
    {
        color: '#545e5d',
        name: 'Others',
        data: [6, 0, 0, 0, 0, 0, 0, 0, 3, 28, 56, 0, 0, 208, 0, 216, 15, 0, 0, 0, 0, 0, 71, 2, 139]
    }]
});
