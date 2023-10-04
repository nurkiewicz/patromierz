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
<script type="text/javascript" src="data/z/zakazanehistorie.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/k/KosmosDlaDziewczynek.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/w/Wiez.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/f/fundacja_kaczkowskiego.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/a/arhneu.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/m/mateuszlachowski.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/t/TwojaPasja.js"></script>
<script type="text/javascript" src="data/w/WachU.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/h/historiaw5minut.js"></script>
<script type="text/javascript" src="data/z/zestoickimspokojem.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/m/mowisie.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/a/agent1procent.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/m/mieczyslaw_lusiak.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Mateusz Lachowski", -1277], ["arhn.eu", -1180], ["Dwie Lewe Ręce", -1175], ["ZAKAZANE HISTORIE", -980], ["Agent 1%", -500], ["Historia w 5 minut (HW5M)", -500], ["Ze stoickim spokojem", -485], ["Mówi Się", -400], ["TERENWIZJA", -330], ["Fundacja Kosmos dla Dziewczynek", -310], ["Dolnośląski Inspektorat Ochrony Zwierząt", 380], ["Fundacja Kaczkowskiego - Projekt PaKa", 450], ["Więź", 460], ["Karolina Korwin Piotrowska ", 475], ["Fundacja Twoja Pasja", 488], ["Radio Naukowe - podcast Karoliny Głowackiej", 630], ["Mieczysław Łusiak SJ", 690], ["Radio Nowy Świat", 775], ["WachU", 875], ["Studio Accantus", 1490]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','karolinakp','UsłyszećNaCzas','radionaukowe','accantus','palhajstv','Zmierzchu','Podcastwojennehistorie','rockserwisfm','sekielski','Vlogcasha','brzmienie-swiata','VirtualDream','dlr','poglebiarka','planetaabstrakcja'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
