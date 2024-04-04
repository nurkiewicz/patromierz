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

<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/n/napisykoncowe.js"></script>
<script type="text/javascript" src="data/m/mocniwduchu.js"></script>
<script type="text/javascript" src="data/t/TubaChorzowa.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/r/rfp.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/o/ohbelgon.js"></script>
<script type="text/javascript" src="data/k/KosmosDlaDziewczynek.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/m/madamemonday.js"></script>
<script type="text/javascript" src="data/m/MarcinMajewski.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/d/Diesel.js"></script>
<script type="text/javascript" src="data/k/karolinabacapogorzelska.js"></script>
<script type="text/javascript" src="data/d/DudekoHistorii.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/s/SebastianAntonowicz.js"></script>
<script type="text/javascript" src="data/a/andoria.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/p/PLSE.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/w/Witek_Toldzik_Kupczynski.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Radio Nowy Świat", -1961], ["Dział Zagraniczny", -1480], ["Dudek o Historii", -1212], ["Sebastian Antonowicz", -800], ["Witek Kupczyński", -600], ["Napisy Końcowe", -525], ["Polska Sieć Ekonomii", -500], ["Tuba Chorzowa", -500], ["Joanna Flis", -435], ["Diesel", -420], ["Fundacja Kosmos dla Dziewczynek", 385], ["Mocni w Duchu", 390], ["Rajdy Formuły Pierwszej", 450], ["Podcast Wojenne Historie", 455], ["Marcin Zieliński | Fundacja Rozpal Wiarę", 495], ["Fundacja OhBelgOn", 525], ["Wojciech Szewko", 660], ["Marcin Majewski", 745], ["Andoria Mircze", 800], ["Karolina Baca-Pogorzelska", 1354]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','dzialzagraniczny','langustanapalmie','marcinzielinski','dlr','karolinakp','radionaukowe','Podcastwojennehistorie','wszewko','Gadowski','sekielski','palhajstv','Vlogcasha','UsłyszećNaCzas','accantus','BezPlanu','Zmierzchu','planetaabstrakcja','rockserwisfm'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
