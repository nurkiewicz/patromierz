---
title: Globalne statystyki | Patromierz
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

<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/p/potemotem.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/k/K3.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/j/JulitaIlczyszyn.js"></script>
<script type="text/javascript" src="data/m/Marcin_Przybylek.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/d/dwochtypow.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/s/skadinad.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/t/tenmelon.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/k/kuszlewiczwimieniu.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/z/znokautujbukmachera.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/m/muzeumelektroniki.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/t/TomaszSlowinskiUSA.js"></script>
<script type="text/javascript" src="data/o/outriders.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/m/miloszszymanski.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            drawMulti(
                ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','historiarealna','sekielski','palhajstv','VirtualDream','planetaabstrakcja','brzmienie-swiata','rockserwisfm','TERENWIZJA','wolskiowojnie','darwin','dwochtypow','znokautujbukmachera','miloszszymanski','Zmierzchu'], 
                1, 'top_but_two', 'currency');
            drawHorizontal([["Marcin Sergiusz Przybyłek", -800], ["K3 podcast Dariusza Bugalskiego", -460], ["Tomasz Slowinski USA", -425], ["Sekielski Brothers Studio", -355], ["Jarosław Wolski", -333], ["Potem-o-tem ", -324], ["Julita Ilczyszyn", -300], ["Znokautuj bukmachera", -285], ["tenmelon", -271], ["Langusta na palmie", -260], ["Podcast Wojenne Historie", 565], ["Kuszlewicz w imieniu", 568], ["Pal Hajs TV", 615], ["Witold Gadowski", 715], ["Radio 357", 780], ["Outriders", 855], ["Muzeum Elektroniki", 1000], ["SKĄDINĄD. Podcast Tomasza Stawiszyńskiego", 1000], ["Dwóch Typów Podcast", 1060], ["Radio Nowy Świat", 3896]], 'largest_changes');
    };
</script>
