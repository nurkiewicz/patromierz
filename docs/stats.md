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

<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/k/kyudo.js"></script>
<script type="text/javascript" src="data/d/DzikieRadio.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/a/anatom.js"></script>
<script type="text/javascript" src="data/l/lifeonwheelz.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/p/pralniaduszy.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/j/JanekSpiewak.js"></script>
<script type="text/javascript" src="data/k/KL.js"></script>
<script type="text/javascript" src="data/a/aska-lawicka.js"></script>
<script type="text/javascript" src="data/m/marzenaerm.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/k/K3.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/l/luksusowetorebki.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/i/IntuicjanaTarot.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/d/dajherbate.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["DzikieRadio®", -755], ["Intuicjana Inti Tarot", -750], ["K3 podcast Dariusza Bugalskiego", -575], ["Wojciech Szewko", -520], ["Anatom", -500], ["Jan Śpiewak", -420], ["Aśka Ławicka", -380], ["TERENWIZJA", -360], ["Pralnia Duszy", -317], ["Kultura Liberalna", -300], ["LUKSUSOWE TOREBKI by Lux&Happy", 770], ["Fundacja DAJ HERBATĘ", 785], ["Dział Zagraniczny", 905], ["kyudo", 1100], ["Marzena Erm", 1100], ["Life On Wheelz - Influencerzy z Misją", 1135], ["BezPlanu", 1700], ["Radio 357", 2154], ["Dwie Lewe Ręce", 2375], ["Radio Wnet", 8970]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','radiownet','marcinzielinski','dlr','karolinakp','UsłyszećNaCzas','wszewko','radionaukowe','sekielski','Podcastwojennehistorie','accantus','palhajstv','Zmierzchu','Vlogcasha','rockserwisfm','BezPlanu','brzmienie-swiata'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
