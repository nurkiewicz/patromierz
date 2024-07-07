---
title: Globalne statystyki patronite.pl | Patromierz
---

# Największe wzrosty i spadki wsparcia miesięcznego

Ostatnie 7 dni.

<div id="largest_changes" class="chart"></div>

# Radio 357 vs. Nowy Świat vs. Wnet, wsparcie miesięczne

<div id="two_radios" class="chart"></div>

# Top 20 wsparcie miesięcznie, z wyjątkiem 357, RNŚ i Wnet

<div id="top_but_two" class="chart"></div>

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="js/chart.js"></script>

<script type="text/javascript" src="data/r/rfp.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/p/Pyrkon.js"></script>
<script type="text/javascript" src="data/m/maciejjermakow.js"></script>
<script type="text/javascript" src="data/b/BezSchematu.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/e/Exen.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/a/anitawu.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/z/ZaMoimiDrzwiami.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/s/sportowaczwa.js"></script>
<script type="text/javascript" src="data/o/ossolineum.js"></script>
<script type="text/javascript" src="data/w/wimieniutychconiemowia.js"></script>
<script type="text/javascript" src="data/t/TomaszPiekielnik.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/e/ecomode.js"></script>
<script type="text/javascript" src="data/s/spalmyto.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Dariusz Rosiak", -1305], ["Spalmy to!", -955], ["Langusta na palmie", -950], ["Za Moimi Drzwiami ", -850], ["Radio Nowy Świat", -744], ["Exen", -720], ["Dolnośląski Inspektorat Ochrony Zwierząt", -590], ["Sportowa Częstochowa", -550], ["Pyrkon - Fantastyczne Miejsce Spotkań", -500], ["Eco Mode", -500], ["Tomasz Piekielnik", 500], ["Maciej Jermakow - Ósmy bieg", 500], ["Anitawu", 565], ["Dwie Lewe Ręce", 575], ["Rajdy Formuły Pierwszej", 650], ["W imieniu tych co nie mówią", 895], ["Zakład Narodowy im. Ossolińskich", 900], ["Radio Wnet", 980], ["Bez/Schematu", 1000], ["Dział Zagraniczny", 1460]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','DIOZ','langustanapalmie','dlr','karolinakp','marcinzielinski','Podcastwojennehistorie','wszewko','radionaukowe','Gadowski','sekielski','palhajstv','accantus','Vlogcasha','Zmierzchu','UsłyszećNaCzas','rockserwisfm','poglebiarka','brzmienie-swiata'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
