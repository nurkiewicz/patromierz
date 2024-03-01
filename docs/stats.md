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

<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/d/DudekoHistorii.js"></script>
<script type="text/javascript" src="data/a/alegoria.js"></script>
<script type="text/javascript" src="data/m/MarcinMajewski.js"></script>
<script type="text/javascript" src="data/j/juliaastrolady.com.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/s/skopzzor.js"></script>
<script type="text/javascript" src="data/m/malgosiakozlowska.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/w/wmiedzyczasie.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/r/RadoslawPyffel.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/l/LSDFarm.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/n/napisykoncowe.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/t/tropemwajraka.js"></script>
<script type="text/javascript" src="data/m/motoambulans.js"></script>
<script type="text/javascript" src="data/p/podcasthistoryczny.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/d/drpiotrnapierala.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Borkoś", -1185], ["Małgosia Kozłowska", -1000], ["Marcin Zieliński | Fundacja Rozpal Wiarę", -895], ["Radio 357", -793], ["Radio Nowy Świat", -692], ["Fundacja Alegoria ", -600], ["Podcast Historyczny", -548], ["BezPlanu", -460], ["Wojciech Szewko", -430], ["Dariusz Rosiak", -420], ["TROPEM WAJRAKA", 460], ["Julia Astro Lady", 520], ["SkopzzoR", 575], ["Marcin Majewski", 680], ["Radosław Pyffel", 810], ["Piotr Napierała", 830], ["Dudek o Historii", 936], ["Damian Duda", 1250], ["Napisy Końcowe", 1265], ["LSD Farm Magdalena Michalska", 3200]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['radiownet','DariuszRosiak','DIOZ','dzialzagraniczny','langustanapalmie','dlr','marcinzielinski','karolinakp','radionaukowe','wszewko','sekielski','Podcastwojennehistorie','Gadowski','palhajstv','UsłyszećNaCzas','Zmierzchu','planetaabstrakcja','accantus','BezPlanu','Vlogcasha'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
