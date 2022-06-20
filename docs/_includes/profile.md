<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
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

<script type="text/javascript">
    window.onload = () => drawCharts(profiles["{{ include.name }}"]);
</script>
