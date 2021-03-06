google.charts.load('current', { packages: ['corechart', 'line', 'bar'], language: 'pl' });

const explorer = { 
    actions: ['dragToZoom', 'rightClickToReset'],
    axis: 'horizontal',
    keepInBounds: true,
    maxZoomIn: 10
}

function buildRow(row, column, idx, seriesCount) {
    let array = Array(1 + seriesCount);
    array.fill(null);
    array[0] = new Date(row[0] * 1000);
    array[1 + idx] = row[column];
    return array;
}

function drawMulti(profileNames, column, id, format) {
    google.charts.setOnLoadCallback(() => {
        var dt = new google.visualization.DataTable();
        dt.addColumn('date', '');
        profileNames.forEach(name => {
            dt.addColumn('number', name);
        });
        profileNames.forEach((name, idx) => {
            let rawData = profiles[name]
                .map(row => buildRow(row, column, idx, profileNames.length))
            dt.addRows(rawData);
        });
        var options = {
            vAxis: {
                format: format
            },
            legend: {
                position: 'right'
            },
            explorer: explorer
        };
        var chart = new google.visualization.LineChart(document.getElementById(id));
        chart.draw(dt, options);
    });
}

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
            },
            explorer: explorer
        };
        var chart = new google.visualization.LineChart(document.getElementById(id));
        chart.draw(dt, options);
    });
}

function drawHorizontal(data, id) {
    google.charts.setOnLoadCallback(() => {
        data.unshift(['Profil', 'Zmiana w ciągu 7 dni']);
        var materialChart = new google.charts.Bar(document.getElementById(id));
        materialChart.draw(google.visualization.arrayToDataTable(data), {
            bars: 'horizontal',
            legend: {
                position: 'none'
            },
            hAxis: {
                format: 'currency'
            },
            vAxis: {
                format: 'currency'
            },
        });
    });
}

function drawCharts(data) {
    drawBasic(data, 1, 'chart_monthly', 'Miesięcznie', 'currency');
    drawBasic(data, 2, 'chart_supporters', 'Patroni');
    drawBasic(data, 3, 'chart_average', 'Średnie wsparcie', 'currency');
    drawBasic(data, 4, 'chart_total', 'Łącznie', 'currency');
    drawBasic(data, 5, 'chart_increase', 'Zmiana dzienna', 'currency');
}
