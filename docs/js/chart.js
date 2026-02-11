function createCanvas(containerId) {
    const container = document.getElementById(containerId);
    const canvas = document.createElement('canvas');
    container.appendChild(canvas);
    return canvas;
}

function decodeHtml(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
}

function currencyFormat(value) {
    if (value == null) return '';
    return new Intl.NumberFormat('pl-PL', { maximumFractionDigits: 0 }).format(value) + ' zł';
}

const zoomOptions = {
    zoom: {
        drag: {
            enabled: true,
            backgroundColor: 'rgba(21, 120, 120, 0.15)',
            borderColor: 'rgba(21, 120, 120, 0.4)',
            borderWidth: 1
        },
        mode: 'x'
    }
};

function drawBasic(data, column, id, label, format) {
    const canvas = createCanvas(id);
    const isCurrency = format === 'currency';

    const chart = new Chart(canvas, {
        type: 'line',
        data: {
            datasets: [{
                label: label,
                data: data.snapshots
                    .map(row => ({ x: new Date(row[0] * 1000), y: row[column] }))
                    .filter(p => p.y != null),
                borderColor: 'rgb(21, 120, 120)',
                backgroundColor: 'rgba(21, 120, 120, 0.08)',
                borderWidth: 1.5,
                pointRadius: 0,
                pointHitRadius: 8,
                tension: 0.15,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'nearest', intersect: false },
            scales: {
                x: {
                    type: 'time',
                    time: {
                        tooltipFormat: 'yyyy-MM-dd',
                        displayFormats: { month: 'MMM yyyy', year: 'yyyy' }
                    }
                },
                y: {
                    ticks: { callback: isCurrency ? v => currencyFormat(v) : undefined }
                }
            },
            plugins: {
                legend: { display: false },
                zoom: zoomOptions,
                tooltip: {
                    callbacks: {
                        label: ctx => label + ': ' + (isCurrency ? currencyFormat(ctx.parsed.y) : ctx.parsed.y)
                    }
                }
            }
        }
    });

    canvas.addEventListener('dblclick', () => chart.resetZoom());
}

function drawMulti(profileNames, column, id, format) {
    const canvas = createCanvas(id);
    const isCurrency = format === 'currency';

    const datasets = profileNames.map(name => {
        const profile = profiles[name];
        return {
            label: decodeHtml(profile.name),
            data: profile.snapshots
                .map(row => ({ x: new Date(row[0] * 1000), y: row[column] }))
                .filter(p => p.y != null),
            borderWidth: 1.5,
            pointRadius: 0,
            pointHitRadius: 8,
            tension: 0.15,
            fill: false
        };
    });

    const chart = new Chart(canvas, {
        type: 'line',
        data: { datasets },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'nearest', intersect: false },
            scales: {
                x: {
                    type: 'time',
                    time: {
                        tooltipFormat: 'yyyy-MM-dd',
                        displayFormats: { month: 'MMM yyyy', year: 'yyyy' }
                    }
                },
                y: {
                    ticks: { callback: isCurrency ? v => currencyFormat(v) : undefined }
                }
            },
            plugins: {
                legend: { position: 'bottom' },
                zoom: zoomOptions,
                tooltip: {
                    callbacks: {
                        label: ctx => {
                            const val = isCurrency ? currencyFormat(ctx.parsed.y) : ctx.parsed.y;
                            return ctx.dataset.label + ': ' + val;
                        }
                    }
                }
            }
        }
    });

    canvas.addEventListener('dblclick', () => chart.resetZoom());
}

function drawHorizontal(data, id) {
    const container = document.getElementById(id);
    container.style.height = Math.max(500, data.length * 28) + 'px';
    const canvas = createCanvas(id);

    const labels = data.map(d => decodeHtml(d[0]));
    const values = data.map(d => d[1]);

    new Chart(canvas, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Zmiana w ciągu 7 dni',
                data: values,
                backgroundColor: values.map(v =>
                    v >= 0 ? 'rgba(75, 192, 120, 0.7)' : 'rgba(255, 99, 132, 0.7)'
                ),
                borderColor: values.map(v =>
                    v >= 0 ? 'rgb(75, 192, 120)' : 'rgb(255, 99, 132)'
                ),
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: ctx => currencyFormat(ctx.parsed.x)
                    }
                }
            },
            scales: {
                x: {
                    ticks: { callback: v => currencyFormat(v) }
                }
            }
        }
    });
}

function makeTable(data) {
    function currencyFormatter(currency) {
        if (!currency) {
            return '';
        }
        var sansDec = currency.toFixed(0);
        var formatted = sansDec.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return `${formatted} zł`;
    }

    function dateFormatter(date) {
        return date.toISOString().substring(0, 10);
    }

    const gridOptions = {
        rowData: data.snapshots.map(row => {
            return {
                date: new Date(row[0] * 1000),
                monthly: row[1],
                supporters: row[2],
                average: row[3],
                total: row[4],
                increase: row[5]
            }
        }).reverse(),
        domLayout: 'autoHeight',
        columnDefs: [
            { field: "date", headerName: 'Data', valueFormatter: params => dateFormatter(params.data.date) },
            { field: "monthly", headerName: 'Wsparcie', valueFormatter: params => currencyFormatter(params.data.monthly) },
            { field: "supporters", headerName: 'Patroni', },
            { field: "total", headerName: 'Łącznie', valueFormatter: params => currencyFormatter(params.data.total) },
            { field: "increase", headerName: 'Wzrost (28 dni)', valueFormatter: params => currencyFormatter(params.data.increase) },
        ],
        defaultColDef: { sortable: true, filter: false }
    };

    new agGrid.Grid(document.getElementById("table"), gridOptions);
    gridOptions.api.sizeColumnsToFit();
}

function drawCharts(data) {
    drawBasic(data, 1, 'chart_monthly', 'Miesięcznie', 'currency');
    drawBasic(data, 2, 'chart_supporters', 'Patroni');
    drawBasic(data, 3, 'chart_average', 'Średnie wsparcie', 'currency');
    drawBasic(data, 4, 'chart_total', 'Łącznie', 'currency');
    drawBasic(data, 5, 'chart_increase', 'Zmiana dzienna', 'currency');
    makeTable(data);
}
