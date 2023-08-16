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
<script type="text/javascript" src="data/p/pgfseko.js"></script>
<script type="text/javascript" src="data/p/przezswiatnafazie.js"></script>
<script type="text/javascript" src="data/k/KamilInvest.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/m/mieczyslaw_lusiak.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/w/wmiedzyczasie.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/o/ogien-przebudzenia.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/u/urbexhistory.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/a/anitawu.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/p/PawelJezowski.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/w/www.piesodnowa.pl.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/m/MonikaRajska.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Radio 357", -1566], ["Radio Nowy Świat", -962], ["Urbex History", -604], ["Przez Świat na Fazie", -590], ["Mieczysław Łusiak SJ", -515], ["Piotr Sękowski", -500], ["Dolnośląski Inspektorat Ochrony Zwierząt", -480], ["Anitawu", -450], ["Pal Hajs TV", -410], ["Planeta Abstrakcja", -330], ["Langusta na palmie", 355], ["Monika Rajska", 396], ["Kamil Inwestycje", 441], ["Karolina Korwin Piotrowska ", 480], ["Tomasz Dorożała - Służba Apostolska \"Ogień Przebudzenia\"", 490], ["Dwie Lewe Ręce", 575], ["Fundacja Pies OD-nowa", 720], ["Dział Zagraniczny", 1165], ["Paweł Jeżowski", 1200], ["Damian Duda", 1385]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','karolinakp','palhajstv','radionaukowe','accantus','VirtualDream','sekielski','rockserwisfm','Zmierzchu','Vlogcasha','brzmienie-swiata','Podcastwojennehistorie','poglebiarka','planetaabstrakcja','dlr'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
