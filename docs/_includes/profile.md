<script src="https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns@3/dist/chartjs-adapter-date-fns.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-zoom@2/dist/chartjs-plugin-zoom.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/ag-grid-community@32.3.3/dist/ag-grid-community.min.noStyle.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ag-grid-community@32.3.3/styles/ag-grid.css"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ag-grid-community@32.3.3/styles/ag-theme-alpine.css"/>
<script type="text/javascript" src="data/{{ include.prefix }}/{{ include.name }}.js"></script>
<script type="text/javascript" src="js/chart.js"></script>



## Miesięczne wsparcie

<div id="chart_monthly" class="chart"></div>

## Patroni

<div id="chart_supporters" class="chart"></div>

## Łącznie

<div id="chart_total" class="chart"></div>

## Średnie wsparcie

<div id="chart_average" class="chart"></div>

## Wzrost dzienny (średnia z 28 dni)

<div id="chart_increase" class="chart"></div>

## Dane źródłowe

<div id="table" class="ag-theme-alpine"></div>

<script type="text/javascript">
    window.onload = () => drawCharts(profiles["{{ include.name }}"]);
</script>
