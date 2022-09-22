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

<script type="text/javascript" src="data/h/hubertwiecek.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/m/Mazby.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/w/WachU.js"></script>
<script type="text/javascript" src="data/k/koroluk.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/s/smile.js"></script>
<script type="text/javascript" src="data/m/michalmarszal.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/z/znokautujbukmachera.js"></script>
<script type="text/javascript" src="data/i/igorjanke.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/m/majastasko.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/n/neybero.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/s/SekcjaGimnastyczna.js"></script>
<script type="text/javascript" src="data/l/LukaszRybarskiYES.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            drawMulti(
                ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','sekielski','historiarealna','palhajstv','TERENWIZJA','VirtualDream','planetaabstrakcja','michalmarszal','darwin','brzmienie-swiata','rockserwisfm','znokautujbukmachera','wolskiowojnie','Zmierzchu','poglebiarka'], 
                1, 'top_but_two', 'currency');
            drawHorizontal([["Radio 357", -1070], ["Fundacja Smile Together", -1000], ["Historia Realna - Piotr Zychowicz", -730], ["Sekielski Brothers Studio", -615], ["Maja Staśko", -540], ["Marcin Zieliński", -370], ["Łukasz Rybarski YES:)", -360], ["Virtual Dream - Piotr Łój", -340], ["Hubert Więcek", -280], ["Dariusz Rosiak", -270], ["WachU", 475], ["Jarosław Wolski", 491], ["Mazby", 500], ["Koroluk", 500], ["Witold Gadowski", 635], ["Igor Janke. Układ Otwarty", 725], ["Neybero", 1000], ["Dolnośląski Inspektorat Ochrony Zwierząt", 1550], ["Sekcja Gimnastyczna", 2295], ["Radio Nowy Świat", 5752]], 'largest_changes');
    };
</script>
