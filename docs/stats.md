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

<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/g/globstory.js"></script>
<script type="text/javascript" src="data/p/patronite-pl-tadeusz-wozniak.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/r/raczek.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/p/psxextreme.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/i/igorjanke.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/a/azyldlapapug.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/k/karolinabacapogorzelska.js"></script>
<script type="text/javascript" src="data/m/miliholicy.js"></script>
<script type="text/javascript" src="data/m/MateuszChrobok.js"></script>
<script type="text/javascript" src="data/o/obywatelregiec.js"></script>
<script type="text/javascript" src="data/s/stekbzdur.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/r/RadoslawPyffel.js"></script>
<script type="text/javascript" src="data/z/zestoickimspokojem.js"></script>
<script type="text/javascript" src="data/w/wmiedzyczasie.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Igor Janke. Układ Otwarty", -1060], ["Tadeusz Woźniak", -1000], ["Damian Duda", -975], ["Radio Nowy Świat", -703], ["Globstory ", -600], ["Radosław Pyffel", -520], ["Ze stoickim spokojem", -505], ["Obywatel Regiec", -500], ["Dolnośląski Inspektorat Ochrony Zwierząt", -480], ["Langusta na palmie", -380], ["Dwie Lewe Ręce", 425], ["Karolina Baca-Pogorzelska", 434], ["PSX Extreme", 450], ["Miliholicy", 480], ["Azyl dla papug", 500], ["Tomasz Raczek", 510], ["Podcast Wojenne Historie", 775], ["Stek Bzdur", 865], ["Mateusz Chrobok", 992], ["Radio Wnet", 1100]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','dzialzagraniczny','langustanapalmie','dlr','karolinakp','marcinzielinski','radionaukowe','Podcastwojennehistorie','wszewko','Gadowski','sekielski','palhajstv','Vlogcasha','accantus','Zmierzchu','UsłyszećNaCzas','BezPlanu','poglebiarka','rockserwisfm'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
