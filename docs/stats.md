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

<script type="text/javascript" src="data/r/ReportazZwycinkowSwiata.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/p/panoramahk.js"></script>
<script type="text/javascript" src="data/n/nitya.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/r/ruchradzionkow.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/t/tygodnikpodhalanski.js"></script>
<script type="text/javascript" src="data/b/Beekeeperpl.js"></script>
<script type="text/javascript" src="data/o/okonserwa.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/r/rfp.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/p/poph.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/s/spalmyto.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/z/zyciewartejestrozmowy.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Radio Nowy Świat", -1021], ["Podlaskie Ochotnicze Pogotowie Humanitarne", -930], ["Spalmy to!", -890], ["Dolnośląski Inspektorat Ochrony Zwierząt", -850], ["Usłyszeć Na Czas", -670], ["Radio Wnet", -580], ["Beekeeper pl", -500], ["Wojciech Szewko", -490], ["Podcastex", -441], ["Pal Hajs TV", -440], ["życie warte jest rozmowy", 540], ["Witold Gadowski", 560], ["Rajdy Formuły Pierwszej", 570], ["Tygodnik Podhalański", 600], ["Podcast Wojenne Historie", 660], ["Panorama kina z Hongkongu i Tajwanu", 730], ["Reportaż z wycinków świata - Monika Białkowska", 760], ["Nitya Patrycja Pruchnik", 1030], ["Otwarta Konserwa", 1890], ["Ruch Radzionków", 1900]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','DIOZ','langustanapalmie','dlr','karolinakp','marcinzielinski','Podcastwojennehistorie','wszewko','radionaukowe','Gadowski','sekielski','accantus','palhajstv','Vlogcasha','Zmierzchu','rockserwisfm','poglebiarka','UsłyszećNaCzas','brzmienie-swiata'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
