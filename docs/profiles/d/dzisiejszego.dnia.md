---
title: dzisiejszego.dnia | Patromierz
permalink: /dzisiejszego.dnia
---

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="data/d/dzisiejszego.dnia.js"></script>
<script type="text/javascript" src="js/chart.js"></script>

# [dzisiejszego.dnia](https://patronite.pl/dzisiejszego.dnia)

## Miesięczne wsparcie

<div id="chart_monthly" class="chart"></div>

## Patroni

<div id="chart_supporters" class="chart"></div>

## Łącznie

<div id="chart_total" class="chart"></div>

## Średnie wsparcie

<div id="chart_average" class="chart"></div>

<script type="text/javascript">
    window.onload = () => drawCharts(profiles["dzisiejszego.dnia"]);
</script>

Ostatnia aktualizacja: {{ "now" | date: "%Y-%m-%d %H:%M" }}.