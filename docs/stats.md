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

<script type="text/javascript" src="data/s/SOWINSKY.js"></script>
<script type="text/javascript" src="data/s/smoczamarta.js"></script>
<script type="text/javascript" src="data/p/podrozbezpaszportu.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/g/GB3.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/k/ksantyp77.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/p/paw.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/r/RadoslawPyffel.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/p/prawnik.przedsiebiorcow.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/l/Latika466.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/c/Connection5d.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/r/radiobest.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/l/LigaSuperbohaterow.js"></script>
<script type="text/javascript" src="data/s/StrefaBycia.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/m/michalmarszal.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/t/TEDENOVELA.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Michał Marszał", -2142], ["Tymek Kucharczyk - kierowca wyścigowy", -2000], ["Radosław Pyffel", -1005], ["Dolnośląski Inspektorat Ochrony Zwierząt", -860], ["Tedenovela", -440], ["Ksantyp77", -370], ["Zespół  PAW", -350], ["Prawnik.przedsiebiorcow", -305], ["Beata i Hubert", -300], ["Latika Opalińska ", -300], ["Marta Kurek", 500], ["Radio BEST", 510], ["SOWINSKY", 548], ["Strefa Bycia", 800], ["Sekielski Brothers Studio", 895], ["Podróż bez Paszportu", 935], ["Liga Superbohaterów", 1090], ["Wojciech Szewko", 1420], ["Radio Nowy Świat", 2509], ["Dwie Lewe Ręce", 3125]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','karolinakp','UsłyszećNaCzas','dlr','radionaukowe','accantus','palhajstv','sekielski','Zmierzchu','Podcastwojennehistorie','Vlogcasha','rockserwisfm','brzmienie-swiata','wszewko','VirtualDream','poglebiarka'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
