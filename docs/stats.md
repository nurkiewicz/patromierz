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

<script type="text/javascript" src="data/p/pomagamy-kotom.js"></script>
<script type="text/javascript" src="data/m/mocniwduchu.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/g/grandeconnection.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/n/NotatnikInwestoraMN.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/1/1elemento.js"></script>
<script type="text/javascript" src="data/r/ralindel.js"></script>
<script type="text/javascript" src="data/m/mkwadratpodcast.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/k/KL.js"></script>
<script type="text/javascript" src="data/m/michaltopor.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/p/prawdziwachorwacja.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/w/wolnesady.js"></script>
<script type="text/javascript" src="data/o/okonserwa.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/f/fundacja-ocalenie.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Wojciech Szewko", -420], ["Dolnośląski Inspektorat Ochrony Zwierząt", -260], ["Otwarta Konserwa", -220], ["Prawdziwa Chorwacja", -216], ["Michał Nieradka", -200], ["MKwadrat Podcast", -200], ["Fundacja Wolne Sądy", -200], ["GRANDE CONNECTION", -197], ["Kultura Liberalna", -195], ["Fundacja Primo Elemento", -150], ["Karolina Korwin Piotrowska ", 200], ["Michał Topór", 200], ["Fundacja \"Pomagamy kotom, by znalazły dom\"", 200], ["ralindel", 218], ["Podcastex", 234], ["Witold Gadowski", 370], ["Poglebiarka.pl", 515], ["Mocni w Duchu", 575], ["Radio Wnet", 990], ["Fundacja Ocalenie", 1470]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','DIOZ','langustanapalmie','karolinakp','Podcastwojennehistorie','radionaukowe','marcinzielinski','wszewko','Gadowski','sekielski','accantus','palhajstv','Zmierzchu','Vlogcasha','rockserwisfm','poglebiarka','brzmienie-swiata','podkastamerykanski','podcastex'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
