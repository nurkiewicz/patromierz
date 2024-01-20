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

<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/b/BezSchematu.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/p/psychodeliki.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/l/LM.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/o/OMZRIK.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/m/maciejkawecki.js"></script>
<script type="text/javascript" src="data/l/Leszek-Korzeniecki.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/w/WachU.js"></script>
<script type="text/javascript" src="data/m/motoambulans.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/m/metanoia.js"></script>
<script type="text/javascript" src="data/s/SOWINSKY.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Metanoia", -1000], ["Usłyszeć Na Czas", -820], ["Lans Macabre", -650], ["Radio Nowy Świat", -643], ["Leszek Korzeniecki", -500], ["OMZRiK", -435], ["Jarosław Wolski", -427], ["Dwie Lewe Ręce", -400], ["WachU", -324], ["Polskie Towarzystwo Psychodeliczne", -320], ["Podcast Wojenne Historie", 640], ["Sekielski Brothers Studio", 720], ["Wojciech Szewko", 880], ["Marcin Zieliński | Fundacja Rozpal Wiarę", 970], ["SOWINSKY", 992], ["Maciej Kawecki - This is IT", 1015], ["Dział Zagraniczny", 1230], ["Borkoś", 2065], ["Bez/Schematu", 2640], ["Radio Wnet", 5470]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['radiownet','DariuszRosiak','DIOZ','dzialzagraniczny','langustanapalmie','dlr','marcinzielinski','karolinakp','radionaukowe','wszewko','Podcastwojennehistorie','sekielski','UsłyszećNaCzas','palhajstv','BezPlanu','accantus','Zmierzchu','planetaabstrakcja','Vlogcasha','rockserwisfm'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
