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

<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/f/fundacjaernesta.js"></script>
<script type="text/javascript" src="data/e/elizamichalik.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/d/dajherbate.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/l/loverowi.js"></script>
<script type="text/javascript" src="data/w/www.piesodnowa.pl.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/z/zestoickimspokojem.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/p/psalmnakazdydzien.js"></script>
<script type="text/javascript" src="data/d/dobranowina.js"></script>
<script type="text/javascript" src="data/n/newsblotter.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Dariusz Rosiak", -1035], ["Radio 357", -622], ["Dolnośląski Inspektorat Ochrony Zwierząt", -620], ["Radio Nowy Świat", -564], [" Fundacja Medycyny Prenatalnej - im. Ernesta Wójcickiego", -290], ["Langusta na palmie", -290], ["Jarosław Wolski", -277], ["DobraNowina.net", -265], ["Loverowi", -260], ["TERENWIZJA", -220], ["Eliza Michalik", 330], ["Newsblotter - Mikrodawki wiedzy psychodelicznej", 345], ["Dwie Lewe Ręce", 350], ["Fundacja Pies OD-nowa", 350], ["Fundacja DAJ HERBATĘ", 450], ["Psalm Na Każdy Dzień", 500], ["Karolina Korwin Piotrowska ", 530], ["Dział Zagraniczny", 600], ["Radio Naukowe - podcast Karoliny Głowackiej", 685], ["Ze stoickim spokojem", 1025]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','karolinakp','palhajstv','radionaukowe','accantus','VirtualDream','Zmierzchu','sekielski','rockserwisfm','Podcastwojennehistorie','brzmienie-swiata','Vlogcasha','dlr','poglebiarka','planetaabstrakcja'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
