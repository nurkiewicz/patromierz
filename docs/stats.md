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

<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/w/wedkujzjulia.js"></script>
<script type="text/javascript" src="data/s/Stankiewicz.js"></script>
<script type="text/javascript" src="data/i/instytutr.js"></script>
<script type="text/javascript" src="data/p/pch24tv.js"></script>
<script type="text/javascript" src="data/s/stowarzyszenie.chartoterapia.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/o/ogrodbellingham.js"></script>
<script type="text/javascript" src="data/z/zestoickimspokojem.js"></script>
<script type="text/javascript" src="data/g/grandeconnection.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/w/WachU.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/h/historyhiking.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/p/PolskieArchiwumX.js"></script>
<script type="text/javascript" src="data/o/outriders.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/m/martindesimmons.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/p/portaldominikanie.js"></script>
<script type="text/javascript" src="data/b/bartekfetysz.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["GRANDE CONNECTION", -687], ["Wędkuj z Julią", -500], ["History Hiking", -460], ["Ze stoickim spokojem", -405], ["Bartek Fetysz", -390], ["Sekielski Brothers Studio", -380], ["PCh24TV", -365], ["Myślnik Stankiewicza — stoicyzm reformowany, podcast i inne", -346], ["WachU", -338], ["Outriders", -300], ["Polskie Archiwum X", 425], ["Katarzyna Bellingham OGRÓD, VLOG, PODCAST, TV", 460], ["Stowarzyszenie Chartoterapia", 490], ["Martin de Simmons", 520], ["Radio Wnet", 680], ["dominikanie.pl", 880], ["Instytut Reportażu", 1415], ["Radio Nowy Świat", 3814], ["Dział Zagraniczny", 5485], ["Dolnośląski Inspektorat Ochrony Zwierząt", 6915]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','DIOZ','karolinakp','langustanapalmie','Podcastwojennehistorie','radionaukowe','marcinzielinski','Gadowski','sekielski','WzajemniePomocni','Vlogcasha','podcastex','accantus','palhajstv','rockserwisfm','brzmienie-swiata','portaldominikanie','poglebiarka','podkastamerykanski'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
