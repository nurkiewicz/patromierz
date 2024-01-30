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

<script type="text/javascript" src="data/k/Konstelacja.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/t/twojanowaswiadomosc.js"></script>
<script type="text/javascript" src="data/s/sercemiastawarszawa.js"></script>
<script type="text/javascript" src="data/d/DominikaWakaWaka.js"></script>
<script type="text/javascript" src="data/p/PawelJezowski.js"></script>
<script type="text/javascript" src="data/t/TEDENOVELA.js"></script>
<script type="text/javascript" src="data/z/zakazanehistorie.js"></script>
<script type="text/javascript" src="data/w/wmiedzyczasie.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/a/alphadogz.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/w/WachU.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/o/odf.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/w/Wiez.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/c/Cronica.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Marcin Zieliński | Fundacja Rozpal Wiarę", -820], ["Kremlinka Show🟥 Codzienny Ekonomiczny Przegląd 🟥 Paweł Jeżowski  🟥 Mateusz Lech 🟥 Marek Meissner🟥 Łukasz Kobierski", -530], ["Fundacja Otwarty Dialog", -500], ["TwojaNowaŚwiadomość ", -399], ["Więź", -390], ["Alpha Dogz Monika Rakowska", -379], ["Cash", -370], ["Dominika WakaWaka", -340], ["WachU", -332], ["Cronica", -300], ["Dariusz Rosiak", 780], ["Serce Miasta", 855], ["Damian Duda", 885], ["Planeta Abstrakcja", 960], ["ZAKAZANE HISTORIE", 980], ["Konstelacja", 1005], ["Tedenovela", 1020], ["Witold Gadowski", 1075], ["Radio Nowy Świat", 1788], ["Radio Wnet", 2390]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['radiownet','DariuszRosiak','DIOZ','dzialzagraniczny','langustanapalmie','dlr','marcinzielinski','karolinakp','radionaukowe','wszewko','sekielski','Podcastwojennehistorie','palhajstv','UsłyszećNaCzas','BezPlanu','planetaabstrakcja','accantus','Zmierzchu','Gadowski','Vlogcasha'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
