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

<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/k/kyudo.js"></script>
<script type="text/javascript" src="data/w/WachU.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/m/mateuszrybak.js"></script>
<script type="text/javascript" src="data/3/3DStudioByBUSER.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/c/Cronica.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/r/radiobest.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/p/potemotem.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/s/SebastianAntonowicz.js"></script>
<script type="text/javascript" src="data/p/prawnik.przedsiebiorcow.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/m/Modzelewski.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/w/wSercuBoga.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/d/DziejeNevendaar.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Sebastian Antonowicz", -802], ["Radio 357", -555], ["DziejeNevendaar", -500], ["Prawnik.przedsiebiorcow", -455], ["Cronica", -220], ["Dolnośląski Inspektorat Ochrony Zwierząt", -190], ["Karol Modzelewski", -180], ["Virtual Dream - Piotr Łój", -165], ["Jarosław Wolski", -164], ["3D Studio by Buser", -150], ["Witold Gadowski", 325], ["Studio Accantus", 350], ["Mateusz Rybak", 380], ["kyudo", 500], ["W SERCU BOGA - Agnieszka i Krzysztof Stanisławscy", 500], ["WachU", 570], ["Radio BEST", 570], ["Marcin Zieliński | Fundacja Rozpal Wiarę", 580], ["Radio Nowy Świat", 672], ["Potem-o-tem ", 1000]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','karolinakp','radionaukowe','palhajstv','accantus','Zmierzchu','Podcastwojennehistorie','rockserwisfm','sekielski','dlr','brzmienie-swiata','Vlogcasha','VirtualDream','poglebiarka','planetaabstrakcja'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
