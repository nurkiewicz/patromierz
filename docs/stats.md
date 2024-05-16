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
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/m/madamemonday.js"></script>
<script type="text/javascript" src="data/s/Samolyk.js"></script>
<script type="text/javascript" src="data/k/karolinabacapogorzelska.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/z/ZGlowaWGwiazdach.js"></script>
<script type="text/javascript" src="data/m/miliholicy.js"></script>
<script type="text/javascript" src="data/k/kezu5osiem100.js"></script>
<script type="text/javascript" src="data/e/Exen.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/l/LukaszNowacki.js"></script>
<script type="text/javascript" src="data/d/dobrywieczoreuropo.js"></script>
<script type="text/javascript" src="data/a/astrolife.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/s/SzparuMen.js"></script>
<script type="text/javascript" src="data/o/OMZRIK.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Radio Nowy Świat", -2532], ["Łukasz Nowacki", -2460], ["KEZUVLOG - Poszukując prawdy...", -710], ["Dolnośląski Inspektorat Ochrony Zwierząt", -700], ["Planeta Abstrakcja", -410], ["Tomasz Samołyk", -370], ["SzparuMen", -317], ["Joanna Flis", -315], ["Dariusz Rosiak", -305], ["OMZRiK", -290], ["Karol Wójcicki | Z głową w gwiazdach", 520], ["Podcast Wojenne Historie", 605], ["AstroLife", 750], ["Dwie Lewe Ręce", 775], ["Dobry wieczór Europo!", 793], ["Wojciech Szewko", 910], ["Karolina Baca-Pogorzelska", 1285], ["Miliholicy", 1670], ["Radio Wnet", 1820], ["Exen", 2820]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','dzialzagraniczny','langustanapalmie','dlr','karolinakp','marcinzielinski','Podcastwojennehistorie','radionaukowe','wszewko','Gadowski','sekielski','palhajstv','Vlogcasha','accantus','Zmierzchu','UsłyszećNaCzas','BezPlanu','poglebiarka','rockserwisfm'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
