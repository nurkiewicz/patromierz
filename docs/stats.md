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

<script type="text/javascript" src="data/w/wolnesady.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/k/K3.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/t/TSMTB.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/b/BezSchematu.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/t/tropemwajraka.js"></script>
<script type="text/javascript" src="data/a/arhneu.js"></script>
<script type="text/javascript" src="data/l/lifeonwheelz.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/a/agatalakomska.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/p/potemotem.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Radio 357", -3420], ["Radio Wnet", -2670], ["Radio Nowy Świat", -1341], ["Usłyszeć Na Czas", -1110], ["Bez/Schematu", -980], ["Life On Wheelz - Influencerzy z Misją", -625], ["Dział Zagraniczny", -540], ["arhn.eu", -515], ["Agata Łakomska", -500], ["Fundacja Wolne Sądy", -500], ["Stowarzyszenie Trójmiejskie Ścieżki MTB", 340], ["Poglebiarka.pl", 365], ["Podcast Wojenne Historie", 370], ["Karolina Korwin Piotrowska ", 380], ["Cash", 410], ["Pal Hajs TV", 460], ["K3 podcast Dariusza Bugalskiego", 495], ["Wojciech Szewko", 580], ["TROPEM WAJRAKA", 920], ["Potem-o-tem ", 2005]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','dzialzagraniczny','langustanapalmie','marcinzielinski','dlr','karolinakp','radionaukowe','Podcastwojennehistorie','wszewko','Gadowski','sekielski','palhajstv','Vlogcasha','UsłyszećNaCzas','BezPlanu','Zmierzchu','accantus','planetaabstrakcja','rockserwisfm'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
