---
title: matrik | Patromierz
permalink: /matrik
---

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="data/m/matrik.js"></script>
<script type="text/javascript" src="js/chart.js"></script>

# [matrik](https://patronite.pl/matrik)

## Miesięczne wsparcie

<div id="chart_monthly" class="chart"></div>

## Patroni

<div id="chart_supporters" class="chart"></div>

## Łącznie

<div id="chart_total" class="chart"></div>

## Średnie wsparcie

<div id="chart_average" class="chart"></div>

<script type="text/javascript">
    window.onload = () => drawCharts(profiles["matrik"]);
</script>

Ostatnia aktualizacja: {{ "now" | date: "%Y-%m-%d %H:%M" }}.