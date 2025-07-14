---
title: Globalne statystyki patronite.pl | Patromierz
---

# Największe wzrosty i spadki wsparcia miesięcznego

Ostatnie 7 dni.

<div id="largest_changes" class="chart"></div>

# Radio 357 vs. Nowy Świat vs. Wnet, wsparcie miesięczne

<div id="two_radios" class="chart"></div>

# Top 20 wsparcie miesięcznie, z wyjątkiem 357, RNŚ i Wnet

<div id="top_but_two" class="chart"></div>

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="js/chart.js"></script>

<script type="text/javascript" src="data/s/SciFun.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/a/astrolife.js"></script>
<script type="text/javascript" src="data/l/LigaSuperbohaterow.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/b/BoskiPrysznic.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/s/SOWINSKY.js"></script>
<script type="text/javascript" src="data/w/wolnerzeki.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/r/radek-karbowski.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/d/dajherbate.js"></script>
<script type="text/javascript" src="data/m/mowisie.js"></script>
<script type="text/javascript" src="data/y/YouMyGod.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/w/wasikowska.js"></script>
<script type="text/javascript" src="data/k/kidsalert.js"></script>
<script type="text/javascript" src="data/c/Cronica.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Radio Wnet", -2480], ["Uwaga Naukowy Bełkot", -1182], ["Dolnośląski Inspektorat Ochrony Zwierząt", -595], ["Boski Prysznic", -350], ["Mówi Się", -350], ["BezPlanu", -320], ["Liga Superbohaterów", -300], ["Usłyszeć Na Czas", -300], ["YouMyGod", -300], ["EWA WĄSIKOWSKA-TOMCZYŃSKA", -270], ["Fundacja Wzajemnie Pomocni", 400], ["Cronica", 500], ["Fundacja DAJ HERBATĘ", 510], ["KidsAlert", 730], ["Dział Zagraniczny", 745], ["Wolne Rzeki", 758], ["Radek Karbowski", 960], ["Podcast Wojenne Historie", 1480], ["SciFun", 1938], ["Radio Nowy Świat", 5800]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','karolinakp','NaukowyBelkot','SciFun','Podcastwojennehistorie','DIOZ','radionaukowe','WzajemniePomocni','podkastamerykanski','podcastex','Vlogcasha','accantus','brzmienie-swiata','sekielski','rockserwisfm','palhajstv','SOWINSKY','Zmierzchu','astrolife'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
