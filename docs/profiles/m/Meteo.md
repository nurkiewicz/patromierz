---
title: "Meteo | Patromierz"
permalink: /Meteo
---

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="data/m/Meteo.js"></script>
<script type="text/javascript" src="js/chart.js"></script>

# ["Sorry. Taki mamy klimat", czyli pogoda pod oknem Jarosława Turały](https://patronite.pl/Meteo)

## Miesięczne wsparcie

<div id="chart_monthly" class="chart"></div>

## Patroni

<div id="chart_supporters" class="chart"></div>

## Łącznie

<div id="chart_total" class="chart"></div>

## Średnie wsparcie

<div id="chart_average" class="chart"></div>

<script type="text/javascript">
    window.onload = () => drawCharts(profiles["Meteo"]);
</script>

Ostatnia aktualizacja: {{ "now" | date: "%Y-%m-%d %H:%M" }}.