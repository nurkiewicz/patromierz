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

<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/s/strajk.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/w/wasikowska.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/p/podcasthistoryczny.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/t/Toniebajka.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/m/MIŁOŚNICY.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/s/skopzzor.js"></script>
<script type="text/javascript" src="data/l/LukaszNowacki.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/n/Niedzwiadki.js"></script>
<script type="text/javascript" src="data/e/Exen.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/r/RomanFicek.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/w/wmiedzyczasie.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/t/tygodnikpodhalanski.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Marcin Zieliński | Fundacja Rozpal Wiarę", -740], ["Radio Nowy Świat", -603], ["BezPlanu", -500], ["Podcast Historyczny", -434], ["Łukasz Nowacki", -430], ["Dolnośląski Inspektorat Ochrony Zwierząt", -410], ["Langusta na palmie", -405], ["Toniebajka. Księgarnia z TYM potykaczem", -360], ["EWA WĄSIKOWSKA-TOMCZYŃSKA", -320], ["Radio Wnet", -310], ["Roman Ficek", 475], ["Witold Gadowski", 485], ["strajk.eu", 520], ["Damian Duda", 615], ["SkopzzoR", 630], ["Dariusz Rosiak", 700], ["Niedźwiadki Chemart Przemyśl", 950], ["MIŁOŚNICY", 1000], ["Tygodnik Podhalański", 1240], ["Exen", 1600]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','dzialzagraniczny','langustanapalmie','dlr','karolinakp','marcinzielinski','Podcastwojennehistorie','wszewko','radionaukowe','Gadowski','sekielski','palhajstv','Vlogcasha','accantus','Zmierzchu','UsłyszećNaCzas','poglebiarka','rockserwisfm','BezPlanu'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
