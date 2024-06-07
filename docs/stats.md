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

<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/t/tygodnikpodhalanski.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/d/dzieci-świata.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/e/Exen.js"></script>
<script type="text/javascript" src="data/a/AdrianKostera.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/p/przygodyantka.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/n/Niedzwiadki.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/w/wmiedzyczasie.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/m/marzenaerm.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/b/bozonrecords.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/s/szopowisko.js"></script>
<script type="text/javascript" src="data/p/podcasthistoryczny.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/s/SzkolaPitagoLasa.js"></script>
<script type="text/javascript" src="data/t/Toniebajka.js"></script>
<script type="text/javascript" src="data/l/LigaSuperbohaterow.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Langusta na palmie", -1040], ["Szkoła PitagoLasa", -720], ["Radio Naukowe - podcast Karoliny Głowackiej", -630], ["Bozon Records", -510], ["Podcast Historyczny", -462], ["Dolnośląski Inspektorat Ochrony Zwierząt", -460], ["Toniebajka. Księgarnia z TYM potykaczem", -402], ["Liga Superbohaterów", -400], ["Marzena Erm", -355], ["Przygody Antka", -300], ["Fundacja Szopowisko", 550], ["Damian Duda", 600], ["Adrian Kostera", 620], ["Niedźwiadki Chemart Przemyśl", 800], ["Dzieci Świata - Marzena Figiel", 1013], ["Dariusz Rosiak", 1015], ["Exen", 1130], ["Radio Nowy Świat", 1209], ["Tygodnik Podhalański", 1240], ["Radio Wnet", 1270]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['radiownet','DariuszRosiak','DIOZ','dzialzagraniczny','langustanapalmie','dlr','karolinakp','marcinzielinski','Podcastwojennehistorie','wszewko','radionaukowe','Gadowski','sekielski','palhajstv','Vlogcasha','Zmierzchu','accantus','UsłyszećNaCzas','BezPlanu','rockserwisfm'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
