---
title: Globalne statystyki | Patromierz
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

<script type="text/javascript" src="data/w/Wiez.js"></script>
<script type="text/javascript" src="data/m/marcinstrzyzewskioRosji.js"></script>
<script type="text/javascript" src="data/k/kyudo.js"></script>
<script type="text/javascript" src="data/w/WachU.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/d/drfranc.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/p/ProjektDeepSouth.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/j/jaroslawrogowski.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/m/miloszszymanski.js"></script>
<script type="text/javascript" src="data/r/RadoslawPyffel.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/l/Las-Na-Zawsze.js"></script>
<script type="text/javascript" src="data/h/historiakolonii.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/e/eunomia.astrology.js"></script>
<script type="text/javascript" src="data/n/neybero.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/z/znokautujbukmachera.js"></script>
<script type="text/javascript" src="data/s/Samolyk.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/m/michalmarszal.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/p/podziemnetypy.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            drawMulti(
                ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','sekielski','historiarealna','palhajstv','TERENWIZJA','planetaabstrakcja','VirtualDream','michalmarszal','brzmienie-swiata','znokautujbukmachera','darwin','wolskiowojnie','rockserwisfm','miloszszymanski','Zmierzchu'], 
                1, 'top_but_two', 'currency');
            drawHorizontal([["Neybero", -2000], ["Radio 357", -1307], ["Franc Zalewski", -1070], ["Las Na Zawsze | Fundacja", -1000], ["Projekt Deep South - USA jakich nie znasz!", -900], ["Więź", -505], ["Podziemne Typy", -400], ["Eunomia", -375], ["TERENWIZJA", -315], ["Tomasz Samołyk", -305], ["WachU", 380], ["Dariusz Rosiak", 445], ["Marcin Strzyżewski", 486], ["Historia Kolonii", 500], ["kyudo", 500], ["Jarosław Wolski", 612], ["Langusta na palmie", 785], ["Jarosław  Rogowski", 1020], ["Radosław Pyffel", 1040], ["Radio Nowy Świat", 1701]], 'largest_changes');
    };
</script>
