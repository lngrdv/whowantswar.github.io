Highcharts.chart('explore-trend', {
  chart: {
    type: 'line'
  },
  title: {
    text: '<b>Total amount of arms exports</b> from the top 25 largest exporters'
  },
  // subtitle: {
  //   text: 'Source: WorldClimate.com'
  // },
  xAxis: {
    categories: ['2013', '2014', '2015', '2016', '2017']
  },
  yAxis: {
    title: {
      text: 'TIVs – SIPRI Trend Indicator Values – expressed in millions'
    }
  },
  exporting: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true
      },
      enableMouseTracking: true
    }
  },
  series: [{
    color: '#BCD5D1',
    name: '2013–2017',
    data: [26954, 26780, 28522, 32262, 31106]
  }]
});