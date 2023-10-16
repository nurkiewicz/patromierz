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
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/m/magda-lassota.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/s/smoczamarta.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/o/ORB.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/m/mateuszlachowski.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/c/Connection5d.js"></script>
<script type="text/javascript" src="data/a/alinaczyzewska.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/c/CezaryGutowski.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/p/prawnik.przedsiebiorcow.js"></script>
<script type="text/javascript" src="data/h/hubertwiecek.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/k/KosmosDlaDziewczynek.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Mateusz Lachowski", -952], ["Langusta na palmie", -605], ["Prawnik.przedsiebiorcow", -590], ["kyudo", -500], ["Marta Kurek", -500], ["Cezary Gutowski", -480], ["Marcin Zieliński | Fundacja Rozpal Wiarę", -460], ["Hubert Więcek", -350], ["Beata i Hubert", -300], ["Magda Lassota", -300], ["Fundacja Kosmos dla Dziewczynek", 990], ["Alina Czyżewska", 1005], ["ORB", 1050], ["Sekielski Brothers Studio", 1635], ["BezPlanu", 1850], ["Dariusz Rosiak", 2090], ["Dolnośląski Inspektorat Ochrony Zwierząt", 2185], ["Jarosław Wolski", 2600], ["Wojciech Szewko", 2620], ["Dwie Lewe Ręce", 4450]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','karolinakp','UsłyszećNaCzas','radionaukowe','accantus','dlr','palhajstv','sekielski','Zmierzchu','Podcastwojennehistorie','rockserwisfm','Vlogcasha','brzmienie-swiata','VirtualDream','poglebiarka','wszewko'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
