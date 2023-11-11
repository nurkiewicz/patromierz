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
<script type="text/javascript" src="data/i/Inspirawka.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/w/www.piesodnowa.pl.js"></script>
<script type="text/javascript" src="data/n/Nejtan.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/t/twojanowaswiadomosc.js"></script>
<script type="text/javascript" src="data/f/FundacjaNautilus.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/p/poph.js"></script>
<script type="text/javascript" src="data/p/proby.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/o/ogien-przebudzenia.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/w/WachU.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/m/michalkrol.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/u/ubogapodcast.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/k/kyudo.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Dział Zagraniczny", -615], ["UBoga Podcast", -530], ["Fundacja Nautilus", -515], ["TwojaNowaŚwiadomość ", -427], ["Jarosław Wolski", -422], ["Dolnośląski Inspektorat Ochrony Zwierząt", -420], ["Michał Król", -355], ["WachU", -353], ["Inspirawka", -300], ["Fundacja Pies OD-nowa", -300], ["Karolina Korwin Piotrowska ", 500], ["kyudo", 500], ["Świat według Nejtana", 530], ["RADIO ROCKSERWIS FM", 560], ["Podlaskie Ochotnicze Pogotowie Humanitarne", 620], ["Tomasz Dorożała - Służba Apostolska \"Ogień Przebudzenia\"", 900], ["Podcast Wojenne Historie", 1060], ["Wydawnictwo Próby", 1170], ["Sekielski Brothers Studio", 1310], ["Wojciech Szewko", 3800]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','karolinakp','dlr','UsłyszećNaCzas','wszewko','radionaukowe','sekielski','accantus','Podcastwojennehistorie','palhajstv','Zmierzchu','Vlogcasha','rockserwisfm','brzmienie-swiata','VirtualDream','poglebiarka'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
