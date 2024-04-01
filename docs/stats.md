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

<script type="text/javascript" src="data/p/proby.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/t/TubaChorzowa.js"></script>
<script type="text/javascript" src="data/f/fundacja_kaczkowskiego.js"></script>
<script type="text/javascript" src="data/a/andoria.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/k/KosmosDlaDziewczynek.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/t/tropemwajraka.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/k/karolinabacapogorzelska.js"></script>
<script type="text/javascript" src="data/m/MarcinMajewski.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/d/DudekoHistorii.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/s/SebastianAntonowicz.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/w/Witek_Toldzik_Kupczynski.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/d/Diesel.js"></script>
<script type="text/javascript" src="data/r/rfp.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Radio Nowy Świat", -2126], ["Dudek o Historii", -1328], ["Sebastian Antonowicz", -800], ["Tuba Chorzowa", -500], ["Witek Kupczyński", -500], ["Wydawnictwo Próby", -450], ["Dariusz Rosiak", -425], ["Diesel", -420], ["Dział Zagraniczny", -390], ["Fundacja Kaczkowskiego - Projekt PaKa", -310], ["Wojciech Szewko", 420], ["Marcin Zieliński | Fundacja Rozpal Wiarę", 445], ["Marcin Majewski", 490], ["Radio Wnet", 510], ["Andoria Mircze", 750], ["Podcast Wojenne Historie", 790], ["Fundacja Kosmos dla Dziewczynek", 810], ["TROPEM WAJRAKA", 955], ["Rajdy Formuły Pierwszej", 1070], ["Karolina Baca-Pogorzelska", 1094]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','dzialzagraniczny','langustanapalmie','marcinzielinski','dlr','karolinakp','radionaukowe','Podcastwojennehistorie','wszewko','Gadowski','sekielski','palhajstv','Vlogcasha','UsłyszećNaCzas','BezPlanu','accantus','Zmierzchu','planetaabstrakcja','rockserwisfm'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
