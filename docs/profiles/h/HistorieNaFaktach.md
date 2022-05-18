---
title: "HistorieNaFaktach | Patromierz"
permalink: /HistorieNaFaktach
---

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="data/h/HistorieNaFaktach.js"></script>
<script type="text/javascript" src="js/chart.js"></script>

# [Historie na Faktach](https://patronite.pl/HistorieNaFaktach)

## Miesięczne wsparcie

<div id="chart_monthly" class="chart"></div>

## Patroni

<div id="chart_supporters" class="chart"></div>

## Łącznie

<div id="chart_total" class="chart"></div>

## Średnie wsparcie

<div id="chart_average" class="chart"></div>

<script type="text/javascript">
    window.onload = () => drawCharts(profiles["HistorieNaFaktach"]);
</script>

Ostatnia aktualizacja: {{ "now" | date: "%Y-%m-%d %H:%M" }}.