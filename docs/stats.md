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

<script type="text/javascript" src="data/w/wolnerzeki.js"></script>
<script type="text/javascript" src="data/p/profesor.matczak.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>
<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/m/madamemonday.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/s/SOWINSKY.js"></script>
<script type="text/javascript" src="data/s/speakleash.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/r/radek-karbowski.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/a/astrolife.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/m/mowisie.js"></script>
<script type="text/javascript" src="data/w/wasikowska.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/r/radioem.js"></script>
<script type="text/javascript" src="data/b/BezSchematu.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/s/SciFun.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/y/YouMyGod.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/n/niewiemalesiedowiem.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/k/kidsalert.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Uwaga Naukowy Bełkot", -3667], ["Radio Wnet", -1950], ["EWA WĄSIKOWSKA-TOMCZYŃSKA", -470], ["Joanna Flis", -430], ["Mówi Się", -350], ["Usłyszeć Na Czas", -300], ["YouMyGod", -300], ["Dolnośląski Inspektorat Ochrony Zwierząt", -250], ["Speakleash", -240], ["Fundacja Wzajemnie Pomocni", -230], ["Fundacja po DRUGIE", 370], ["KidsAlert", 390], ["Bez/Schematu", 400], ["Profesor Matczak", 550], ["Wolne Rzeki", 641], ["Radek Karbowski", 687], ["Dział Zagraniczny", 1175], ["Podcast Wojenne Historie", 2300], ["SciFun", 2835], ["Radio Nowy Świat", 4880]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','karolinakp','NaukowyBelkot','niewiemalesiedowiem','SciFun','Podcastwojennehistorie','radionaukowe','podkastamerykanski','podcastex','Vlogcasha','accantus','brzmienie-swiata','sekielski','palhajstv','SOWINSKY','Zmierzchu','radioem','astrolife','Fundacja_po_DRUGIE'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
