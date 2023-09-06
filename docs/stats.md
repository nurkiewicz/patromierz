---
title: Globalne statystyki patronite.pl | Patromierz
---

# Największe wzrosty i spadki wsparcia miesięcznego

Ostatnie 7 dni.

<div id="largest_changes" class="chart"></div>

# Radio 357 vs. Radio Nowy Świat, wsparcie miesięczne

<div id="two_radios" class="chart"></div>

# Top 20 wsparcie miesięcznie, z wyjątkiem 357 i RNŚ

<div id="top_but_two" class="chart"></div>

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="js/chart.js"></script>

<script type="text/javascript" src="data/k/K3.js"></script>
<script type="text/javascript" src="data/i/igorjanke.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/d/dwochtypow.js"></script>
<script type="text/javascript" src="data/j/JanekSpiewak.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/a/astrolife.js"></script>
<script type="text/javascript" src="data/c/CezaryGutowski.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/a/anitawu.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/k/KosmosDlaDziewczynek.js"></script>
<script type="text/javascript" src="data/m/MarcinMajewski.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/k/Karczmarz.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['langustanapalmie','dzialzagraniczny','marcinzielinski','karolinakp','accantus','brzmienie-swiata','dlr','dwochtypow','historiarealna','astrolife','darwin','CezaryGutowski','Gadowski','K3','JanekSpiewak','igorjanke','Karczmarz','anitawu','MarcinMajewski','KosmosDlaDziewczynek'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
