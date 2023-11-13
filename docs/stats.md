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

<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/p/proby.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/f/fundacjaduchleona.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/b/BezSchematu.js"></script>
<script type="text/javascript" src="data/m/michalkrol.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/o/ogien-przebudzenia.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/r/radioaskfm.js"></script>
<script type="text/javascript" src="data/w/wasikowska.js"></script>
<script type="text/javascript" src="data/t/tomaszkwiecinski.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/p/papina.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/f/FundacjaNautilus.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/i/Inspirawka.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/r/radioem.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Fundacja Nautilus", -650], ["Radio AskFM", -570], ["Dolnośląski Inspektorat Ochrony Zwierząt", -520], ["Paweł Rupala", -500], ["Virtual Dream - Piotr Łój", -450], ["Tomasz Kwieciński", -450], ["Michał Król", -425], ["Inspirawka", -350], ["EWA WĄSIKOWSKA-TOMCZYŃSKA", -350], ["Fundacja Duch Leona", -305], ["Radio eM 107,6 fm", 570], ["Podcast Wojenne Historie", 580], ["Bez/Schematu", 600], ["Witold Gadowski", 655], ["Radio Nowy Świat", 662], ["Tomasz Dorożała - Służba Apostolska \"Ogień Przebudzenia\"", 900], ["Sekielski Brothers Studio", 1045], ["Wojciech Szewko", 1200], ["BezPlanu", 1260], ["Wydawnictwo Próby", 1490]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','karolinakp','dlr','UsłyszećNaCzas','wszewko','radionaukowe','sekielski','accantus','Podcastwojennehistorie','palhajstv','Zmierzchu','Vlogcasha','rockserwisfm','brzmienie-swiata','poglebiarka','VirtualDream'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
