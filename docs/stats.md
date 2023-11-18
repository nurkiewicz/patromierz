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

<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/p/PawelJezowski.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/l/lifeonwheelz.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/h/hubertwiecek.js"></script>
<script type="text/javascript" src="data/l/liberalizm.net.js"></script>
<script type="text/javascript" src="data/p/papina.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/r/radioaskfm.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/t/tomaszkwiecinski.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/a/aktogry.js"></script>
<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/m/motoambulans.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/l/luksusowetorebki.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Liberalizm.net", -1247], ["Paweł Jeżowski. Kremlinka Show.", -760], ["Virtual Dream - Piotr Łój", -610], ["Radio AskFM", -570], ["Hubert Więcek", -500], ["Paweł Rupala", -500], ["Tomasz Kwieciński", -450], ["Dolnośląski Inspektorat Ochrony Zwierząt", -410], ["Dział Zagraniczny", -385], ["Poglebiarka.pl", -380], ["LUKSUSOWE TOREBKI by Lux&Happy", 665], ["AktoGry", 695], ["Witold Gadowski", 755], ["Borkoś", 825], ["BezPlanu", 1270], ["Uwaga Naukowy Bełkot", 1339], ["Dwie Lewe Ręce", 1400], ["Radio Nowy Świat", 1666], ["Jarosław Wolski", 3170], ["Life On Wheelz - Influencerzy z Misją", 3590]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','karolinakp','dlr','UsłyszećNaCzas','wszewko','radionaukowe','sekielski','accantus','Podcastwojennehistorie','palhajstv','Zmierzchu','Vlogcasha','rockserwisfm','brzmienie-swiata','wolskiowojnie','poglebiarka'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
