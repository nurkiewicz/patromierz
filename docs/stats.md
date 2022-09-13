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

<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/a/aska-lawicka.js"></script>
<script type="text/javascript" src="data/m/mieczyslaw_lusiak.js"></script>
<script type="text/javascript" src="data/m/miloteam.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/m/miloszmiedzyinnymi.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/1/182047.js"></script>
<script type="text/javascript" src="data/h/hubertwiecek.js"></script>
<script type="text/javascript" src="data/m/michalmarszal.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/m/miloszszymanski.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/t/tzt.js"></script>
<script type="text/javascript" src="data/s/skadinad.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/p/pmm.js"></script>
<script type="text/javascript" src="data/z/znokautujbukmachera.js"></script>
<script type="text/javascript" src="data/k/KryptoAnalizy.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            drawMulti(
                ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','sekielski','historiarealna','palhajstv','VirtualDream','TERENWIZJA','planetaabstrakcja','michalmarszal','darwin','brzmienie-swiata','rockserwisfm','znokautujbukmachera','Zmierzchu','wolskiowojnie','poglebiarka'], 
                1, 'top_but_two', 'currency');
            drawHorizontal([["Miłosz Sowiński", -678], ["Langusta na palmie", -580], ["TakŻeTego", -573], ["Planeta Abstrakcja", -500], ["Iwona Pietrala", -470], ["Dariusz Rosiak", -445], ["Polska Misja Medyczna i Radio 357", -430], ["Sekielski Brothers Studio", -365], ["Pal Hajs TV", -360], ["Miłosz Szymański", -335], ["Mieczysław Łusiak SJ", 560], ["Historia Realna - Piotr Zychowicz", 565], ["Miłosz.między.innymi", 620], ["Jarosław Wolski", 706], ["Aśka Ławicka", 770], ["Hubert Więcek", 780], ["Kamil Janicki", 830], ["SKĄDINĄD. Podcast Tomasza Stawiszyńskiego", 1080], ["Witold Gadowski", 1280], ["Radio Nowy Świat", 12170]], 'largest_changes');
    };
</script>
