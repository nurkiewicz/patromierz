---
title: "dotykobecnosci | Patromierz"
permalink: /dotykobecnosci
---

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="data/d/dotykobecnosci.js"></script>
<script type="text/javascript" src="js/chart.js"></script>

# [Dotyk Obecności](https://patronite.pl/dotykobecnosci)

## Miesięczne wsparcie

<div id="chart_monthly" class="chart"></div>

## Patroni

<div id="chart_supporters" class="chart"></div>

## Łącznie

<div id="chart_total" class="chart"></div>

## Średnie wsparcie

<div id="chart_average" class="chart"></div>

<script type="text/javascript">
    window.onload = () => drawCharts(profiles["dotykobecnosci"]);
</script>

Ostatnia aktualizacja: {{ "now" | date: "%Y-%m-%d %H:%M" }}.