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

<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/a/anitawu.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/s/spragnieni.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/p/PawelJezowski.js"></script>
<script type="text/javascript" src="data/d/DEREVO.js"></script>
<script type="text/javascript" src="data/k/krzysztofwojczal.js"></script>
<script type="text/javascript" src="data/p/psychodeliki.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/h/HokejoweSocios.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/m/Marcin_Przybylek.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/t/TwojaPasja.js"></script>
<script type="text/javascript" src="data/a/arhneu.js"></script>
<script type="text/javascript" src="data/d/DudekoHistorii.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/p/przezswiatnafazie.js"></script>
<script type="text/javascript" src="data/k/KarolFjalkowski.js"></script>
<script type="text/javascript" src="data/t/Toniebajka.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Radio Nowy Świat", -1589], ["Radio 357", -1566], ["Radio Naukowe - podcast Karoliny Głowackiej", -565], ["Przez Świat na Fazie", -525], ["Dolnośląski Inspektorat Ochrony Zwierząt", -420], ["Polskie Towarzystwo Psychodeliczne", -375], ["Dudek o Historii", -355], ["Zagłębie Sosnowiec Hokej", -300], ["Karol Fjałkowski", -300], ["Anitawu", -270], ["arhn.eu", 465], ["Marcin Sergiusz Przybyłek", 500], ["SPRAGNIENI & PODOBNI OD ZAWSZE", 500], ["Fundacja Twoja Pasja", 512], ["BezPlanu", 770], ["De Revolutionibus Books", 930], ["Toniebajka. Księgarnia z TYM potykaczem", 1355], ["Radio Wnet", 1500], ["Krzysztof Wojczal", 1599], ["Kremlinka Show🟥 Codzienny Ekonomiczny Przegląd 🟥 Paweł Jeżowski  🟥 Mateusz Lech 🟥 Marek Meissner🟥 Łukasz Kobierski", 1756]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['radiownet','DariuszRosiak','DIOZ','dzialzagraniczny','langustanapalmie','dlr','marcinzielinski','karolinakp','radionaukowe','Gadowski','Podcastwojennehistorie','wszewko','sekielski','palhajstv','UsłyszećNaCzas','Zmierzchu','planetaabstrakcja','accantus','BezPlanu','Vlogcasha'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
