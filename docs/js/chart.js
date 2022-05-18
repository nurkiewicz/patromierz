// google.charts.load('current', { packages: ['corechart', 'line'], language: 'pl' });

// function drawBasic(data, column, data2, id, label, format) {
//     google.charts.setOnLoadCallback(() => {
//         var dt = new google.visualization.DataTable();
//         dt.addColumn('date', '');
//         dt.addColumn('number', label + " 357");
//         dt.addColumn('number', label + " RNŚ");
//         let d1 = data.map(row => [row[0], row[column], null]);
//         let d2 = data2.map(row => [row[0], null, row[column]]);
//         dt.addRows(d1.concat(d2));
//         var options = {
//             vAxis: {
//                 format: format
//             },
//             legend: {
//                 position: 'none'
//             }
//         };
//         var chart = new google.visualization.LineChart(document.getElementById(id));
//         chart.draw(dt, options);
//     });
// }

// function drawCharts(data, data2) {
//     drawBasic(data, 1, data2, 'chart_monthly', 'Miesięcznie', 'currency');
//     drawBasic(data, 2, data2, 'chart_supporters', 'Patroni');
//     drawBasic(data, 3, data2, 'chart_average', 'Średnie wsparcie', 'currency');
//     drawBasic(data, 4, data2, 'chart_total', 'Łącznie', 'currency');
// }


google.charts.load('current', { packages: ['corechart', 'line'], language: 'pl' });

function drawBasic(data, column, id, label, format) {
    google.charts.setOnLoadCallback(() => {
        var dt = new google.visualization.DataTable();
        dt.addColumn('date', '');
        dt.addColumn('number', label);
        dt.addRows(data.map(row => [new Date(row[0] * 1000), row[column]]).filter(row => row[1]));
        var options = {
            vAxis: {
                format: format
            },
            legend: {
                position: 'none'
            }
        };
        var chart = new google.visualization.LineChart(document.getElementById(id));
        chart.draw(dt, options);
    });
}

function drawCharts(data) {
    drawBasic(data, 1, 'chart_monthly', 'Miesięcznie', 'currency');
    drawBasic(data, 2, 'chart_supporters', 'Patroni');
    drawBasic(data, 3, 'chart_average', 'Średnie wsparcie', 'currency');
    drawBasic(data, 4, 'chart_total', 'Łącznie', 'currency');
}