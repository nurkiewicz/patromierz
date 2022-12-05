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

<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/s/skadinad.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/m/miloszszymanski.js"></script>
<script type="text/javascript" src="data/s/Samolyk.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/z/znokautujbukmachera.js"></script>
<script type="text/javascript" src="data/s/smartgasm.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/v/velesar.js"></script>
<script type="text/javascript" src="data/m/MyslecGlebiej.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/n/nowakonfederacja.js"></script>
<script type="text/javascript" src="data/r/raczek.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/e/elizamichalik.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/c/chinskieautocentrum.js"></script>
<script type="text/javascript" src="data/d/dwochtypow.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/b/BezSchematu.js"></script>
<script type="text/javascript" src="data/z/zvz.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/z/zbigniewholdys.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            drawMulti(
                ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','sekielski','historiarealna','VirtualDream','palhajstv','planetaabstrakcja','brzmienie-swiata','TERENWIZJA','rockserwisfm','darwin','wolskiowojnie','znokautujbukmachera','miloszszymanski','Zmierzchu','Samolyk'], 
                1, 'top_but_two', 'currency');
            drawHorizontal([["SKĄDINĄD. Podcast Tomasza Stawiszyńskiego", -1050], ["Usłyszeć Na Czas", -910], ["Dariusz Rosiak", -845], ["Dolnośląski Inspektorat Ochrony Zwierząt", -840], ["TERENWIZJA", -680], ["Sekielski Brothers Studio", -540], ["Radio Nowy Świat", -526], ["Nowa Konfederacja", -500], ["Smartgasm", -410], ["Myśleć Głębiej", -288], ["Velesar", 567], ["Chińskie Auto Centrum & Damian Chen", 579], ["Tomasz Raczek", 590], ["RADIO ROCKSERWIS FM", 596], ["Dwóch Typów Podcast", 610], ["ZVZ", 630], ["Eliza Michalik", 835], ["Bez/Schematu", 900], ["Zbigniew Hołdys", 1860], ["Radio 357", 3000]], 'largest_changes');
    };
</script>
