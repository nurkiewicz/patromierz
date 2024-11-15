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

<script type="text/javascript" src="data/s/strefaanime.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/t/totylkoteoria.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/a/AgnieszkaCegielska.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/r/resetobywatelski.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/c/centruminterwencyjne.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/b/budzimy-kosciol.js"></script>
<script type="text/javascript" src="data/k/Klinowski.js"></script>
<script type="text/javascript" src="data/h/hs3.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/e/Exen.js"></script>
<script type="text/javascript" src="data/t/TEDENOVELA.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Exen", -900], ["Dolnośląski Inspektorat Ochrony Zwierząt", -795], ["Tedenovela", -560], ["Reset Obywatelski", -560], ["Dział Zagraniczny", -535], ["Fundacja Nowa Pięćdziesiątnica", -500], ["Radio Nowy Świat", -350], ["Langusta na palmie", -325], ["Hackerspace Trójmiasto", -320], ["Planeta Abstrakcja", -320], ["Łukasz Sakowski // To Tylko Teoria", 485], ["Marcin Zieliński | Fundacja Rozpal Wiarę", 500], ["Mateusz Klinowski", 502], ["Agnieszka Cegielska", 525], ["Witold Gadowski", 670], ["Fundacja Wzajemnie Pomocni", 890], ["Interwencyjne Centrum Pomocy Kotom", 895], ["Strefa Anime", 1134], ["Podcast Wojenne Historie", 1815], ["Radio Wnet", 3100]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','langustanapalmie','DIOZ','karolinakp','Podcastwojennehistorie','radionaukowe','marcinzielinski','Gadowski','sekielski','accantus','WzajemniePomocni','podcastex','rockserwisfm','poglebiarka','Zmierzchu','palhajstv','Vlogcasha','brzmienie-swiata','podkastamerykanski'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
