---
title: "tiffcenter | Patromierz"
permalink: /tiffcenter
---

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="data/t/tiffcenter.js"></script>
<script type="text/javascript" src="js/chart.js"></script>

# [TIFF Center](https://patronite.pl/tiffcenter)

## Miesięczne wsparcie

<div id="chart_monthly" class="chart"></div>

## Patroni

<div id="chart_supporters" class="chart"></div>

## Łącznie

<div id="chart_total" class="chart"></div>

## Średnie wsparcie

<div id="chart_average" class="chart"></div>

## Wzrost dzienny

<div id="chart_increase" class="chart"></div>

Średnia z 28 dni

<script type="text/javascript">
    window.onload = () => drawCharts(profiles["tiffcenter"]);
</script>

Ostatnia aktualizacja: {{ "now" | date: "%Y-%m-%d %H:%M" }}.