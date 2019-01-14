

// Make monochrome colors
var pieColors = (function () {
    var colors = [],
        base = Highcharts.getOptions().colors[0],
        i;

    for (i = 0; i < 10; i += 1) {
        // Start out with a darkened base color (negative brighten), and end
        // up with a much brighter color
        colors.push(Highcharts.Color('#57698c').brighten((i - 1) / 30).get());
    }
    return colors;
}());

// Build the chart
Highcharts.chart('regions', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
    },
    title: {
        text: 'The <b>imports</b> of major arms, <b>by region</b>, per cent of global share (2013–2017)'
    },
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            colors: pieColors,
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                distance: -50,
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 4
                }
            }
        }
    },
    series: [{
        name: 'Share',
        data: [
            { name: 'Asia and Oceania', y: 42 },
            { name: 'Middle East', y: 32 },
            { name: 'Europe', y: 11 },
            { name: 'Africa', y: 7.2 },
            { name: 'The Americas', y: 7.1 },
            { name: 'Not defined', y: 0.7 }
        ]
    }]
});