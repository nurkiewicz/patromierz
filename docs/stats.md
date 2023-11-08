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

<script type="text/javascript" src="data/l/lkslodz.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/m/Marcin_Przybylek.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/b/BezSchematu.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/n/Nejtan.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/a/akademiagitary.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/h/hubertwiecek.js"></script>
<script type="text/javascript" src="data/p/psychodeliki.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/a/agatastrzyzewska.js"></script>
<script type="text/javascript" src="data/t/twojanowaswiadomosc.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/b/bigbookcafe.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Langusta na palmie", -820], ["Radio 357", -627], ["Dział Zagraniczny", -595], ["Bez/Schematu", -560], ["TwojaNowaŚwiadomość ", -438], ["Akademia Gitary - W Szponach Gitary", -340], ["Marcin Sergiusz Przybyłek", -310], ["Hubert Więcek", -280], ["ŁKS Łódź", -250], ["Big Book Cafe", -240], ["Agata Strzyżewska", 550], ["Marcin Zieliński | Fundacja Rozpal Wiarę", 590], ["RADIO ROCKSERWIS FM", 625], ["Podcastex", 638], ["Świat według Nejtana", 650], ["Dolnośląski Inspektorat Ochrony Zwierząt", 715], ["Podcast Wojenne Historie", 815], ["Polskie Towarzystwo Psychodeliczne", 835], ["Radio Nowy Świat", 1224], ["Wojciech Szewko", 3560]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','karolinakp','dlr','UsłyszećNaCzas','radionaukowe','wszewko','accantus','sekielski','Podcastwojennehistorie','palhajstv','Zmierzchu','Vlogcasha','rockserwisfm','brzmienie-swiata','VirtualDream','poglebiarka'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
