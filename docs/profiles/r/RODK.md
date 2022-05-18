---
title: RODK | Patromierz
permalink: /RODK
---

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="data/r/RODK.js"></script>
<script type="text/javascript" src="js/chart.js"></script>

# [RODK](https://patronite.pl/RODK)

## Miesięczne wsparcie

<div id="chart_monthly" class="chart"></div>

## Patroni

<div id="chart_supporters" class="chart"></div>

## Łącznie

<div id="chart_total" class="chart"></div>

## Średnie wsparcie

<div id="chart_average" class="chart"></div>

<script type="text/javascript">
    window.onload = () => drawCharts(profiles["RODK"]);
</script>

Ostatnia aktualizacja: {{ "now" | date: "%Y-%m-%d %H:%M" }}.