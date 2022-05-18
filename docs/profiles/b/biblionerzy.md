---
title: "biblionerzy | Patromierz"
permalink: /biblionerzy
---

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="data/b/biblionerzy.js"></script>
<script type="text/javascript" src="js/chart.js"></script>

# [Biblionerzy.pl - quiz biblijny](https://patronite.pl/biblionerzy)

## Miesięczne wsparcie

<div id="chart_monthly" class="chart"></div>

## Patroni

<div id="chart_supporters" class="chart"></div>

## Łącznie

<div id="chart_total" class="chart"></div>

## Średnie wsparcie

<div id="chart_average" class="chart"></div>

<script type="text/javascript">
    window.onload = () => drawCharts(profiles["biblionerzy"]);
</script>

Ostatnia aktualizacja: {{ "now" | date: "%Y-%m-%d %H:%M" }}.