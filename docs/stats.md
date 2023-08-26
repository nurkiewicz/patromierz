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

<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/m/MCNWInfo.js"></script>
<script type="text/javascript" src="data/h/hubertwiecek.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/a/arhneu.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/r/resetobywatelski.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/p/potemotem.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/o/ogien-przebudzenia.js"></script>
<script type="text/javascript" src="data/e/EvangelistLucasSzczepaniak.js"></script>
<script type="text/javascript" src="data/s/skadinad.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/s/squash.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/z/zestoickimspokojem.js"></script>
<script type="text/javascript" src="data/m/mateuszlachowski.js"></script>
<script type="text/javascript" src="data/p/piotrzylka.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/w/www.piesodnowa.pl.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Radio 357", -1692], ["Potem-o-tem ", -1012], ["Tomasz Dorożała - Służba Apostolska \"Ogień Przebudzenia\"", -1000], ["Mateusz Lachowski", -644], ["Historia Realna - Piotr Zychowicz", -460], ["Langusta na palmie", -435], ["Poglebiarka.pl", -420], ["Piotr Żyłka", -350], ["Kamil Przybitkowski", -300], ["Sebastian Płocharski / MakeCoffeeNotWar.Info", -272], ["Usłyszeć Na Czas", 370], ["Podcastex", 478], ["Łukasz Szczepaniak ", 500], ["Hubert Więcek", 500], ["Radio Nowy Świat", 806], ["Fundacja Pies OD-nowa", 850], ["Reset Obywatelski", 920], ["arhn.eu", 995], ["Ze stoickim spokojem", 1000], ["SKĄDINĄD. Podcast Tomasza Stawiszyńskiego", 1010]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','karolinakp','palhajstv','radionaukowe','accantus','VirtualDream','sekielski','Zmierzchu','rockserwisfm','brzmienie-swiata','Podcastwojennehistorie','Vlogcasha','poglebiarka','planetaabstrakcja','dlr'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
