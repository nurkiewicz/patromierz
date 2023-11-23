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

<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/c/Ciekawehistorie.js"></script>
<script type="text/javascript" src="data/w/www.piesodnowa.pl.js"></script>
<script type="text/javascript" src="data/e/EvangelistLucasSzczepaniak.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/z/zyciewartejestrozmowy.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/p/portaldominikanie.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/k/KucharzMaciej.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/a/AlekTemkin.js"></script>
<script type="text/javascript" src="data/i/imopeksis.js"></script>
<script type="text/javascript" src="data/9/9kier.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/l/lifeonwheelz.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Dolnośląski Inspektorat Ochrony Zwierząt", -850], ["Langusta na palmie", -665], ["Łukasz Szczepaniak ", -480], ["Fundacja Pies OD-nowa", -350], ["życie warte jest rozmowy", -350], ["9kier", -300], ["Aleksander Temkin", -300], ["Radio Naukowe - podcast Karoliny Głowackiej", -300], ["TERENWIZJA", -290], ["dominikanie.pl", -270], ["IMOPEKSIS", 595], ["BezPlanu", 600], ["Ciekawe Historie", 683], ["Kucharz Maciej", 700], ["Dział Zagraniczny", 1130], ["Dwie Lewe Ręce", 1175], ["Radio 357", 1253], ["Radio Nowy Świat", 2859], ["Life On Wheelz - Influencerzy z Misją", 4690], ["Radio Wnet", 18390]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','dlr','karolinakp','UsłyszećNaCzas','wszewko','radionaukowe','sekielski','Podcastwojennehistorie','accantus','palhajstv','Zmierzchu','Vlogcasha','rockserwisfm','brzmienie-swiata','radiownet','wolskiowojnie'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
