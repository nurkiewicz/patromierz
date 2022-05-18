---
title: GlobalnaGra | Patromierz
permalink: /GlobalnaGra
---

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="data/g/GlobalnaGra.js"></script>
<script type="text/javascript" src="js/chart.js"></script>

# [GlobalnaGra](https://patronite.pl/GlobalnaGra)

## Miesięczne wsparcie

<div id="chart_monthly" class="chart"></div>

## Patroni

<div id="chart_supporters" class="chart"></div>

## Łącznie

<div id="chart_total" class="chart"></div>

## Średnie wsparcie

<div id="chart_average" class="chart"></div>

<script type="text/javascript">
    window.onload = () => drawCharts(profiles["GlobalnaGra"]);
</script>

Ostatnia aktualizacja: {{ "now" | date: "%Y-%m-%d %H:%M" }}.