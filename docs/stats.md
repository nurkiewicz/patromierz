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

<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/r/rfp.js"></script>
<script type="text/javascript" src="data/p/poph.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/o/okonserwa.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/z/zyciewartejestrozmowy.js"></script>
<script type="text/javascript" src="data/c/CezaryGutowski.js"></script>
<script type="text/javascript" src="data/k/kuszlewiczwimieniu.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/r/ruchradzionkow.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/s/spalmyto.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/p/panoramahk.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/a/arhneu.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/t/tygodnikpodhalanski.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/r/ReportazZwycinkowSwiata.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Dolnośląski Inspektorat Ochrony Zwierząt", -1075], ["Spalmy to!", -1030], ["Podlaskie Ochotnicze Pogotowie Humanitarne", -1010], ["arhn.eu", -860], ["Cezary Gutowski", -700], ["Radio Wnet", -650], ["Usłyszeć Na Czas", -630], ["Radio Nowy Świat", -609], ["Dwie Lewe Ręce", -575], ["Wojciech Szewko", -520], ["Kuszlewicz w imieniu", 492], ["Witold Gadowski", 510], ["Rajdy Formuły Pierwszej", 550], ["życie warte jest rozmowy", 550], ["Tygodnik Podhalański", 620], ["Panorama kina z Hongkongu i Tajwanu", 720], ["Podcast Wojenne Historie", 790], ["Reportaż z wycinków świata - Monika Białkowska", 968], ["Otwarta Konserwa", 1740], ["Ruch Radzionków", 2000]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','DIOZ','langustanapalmie','dlr','karolinakp','marcinzielinski','Podcastwojennehistorie','wszewko','radionaukowe','Gadowski','sekielski','accantus','palhajstv','Vlogcasha','Zmierzchu','rockserwisfm','poglebiarka','UsłyszećNaCzas','brzmienie-swiata'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
