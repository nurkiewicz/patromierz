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

<script type="text/javascript" src="data/w/WachU.js"></script>
<script type="text/javascript" src="data/z/znokautujbukmachera.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/m/miloszszymanski.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/e/ewakaleta.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/z/Zrozumiec-Elektronike.js"></script>
<script type="text/javascript" src="data/d/dwochtypow.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/f/fundacjajudyta.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/g/GrupaMoCarta.js"></script>
<script type="text/javascript" src="data/j/jakubwiech.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/n/niewszystkojedno.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            drawMulti(
                ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','palhajstv','historiarealna','VirtualDream','sekielski','dwochtypow','planetaabstrakcja','TERENWIZJA','rockserwisfm','brzmienie-swiata','Zmierzchu','darwin','znokautujbukmachera','wolskiowojnie','miloszszymanski'], 
                1, 'top_but_two', 'currency');
            drawHorizontal([["Usłyszeć Na Czas", -1330], ["WachU", -550], ["Historia Realna - Piotr Zychowicz", -520], ["Sekielski Brothers Studio", -500], ["Ewa Kaleta", -493], ["Marcin Zieliński", -470], ["Nie wszystko jedno", -400], ["Dolnośląski Inspektorat Ochrony Zwierząt", -345], ["Grupa MoCarta", -325], ["Jarosław Wolski", -284], ["Jakub Wiech", 506], ["Niedźwiecka o Zmierzchu", 588], ["Fundacja dla Szczeniąt Judyta", 670], ["Pal Hajs TV", 900], ["Znokautuj bukmachera", 1310], ["Dariusz Rosiak", 1980], ["Piotr Górecki", 2070], ["Dwóch Typów Podcast", 2515], ["Radio Nowy Świat", 3354], ["Radio 357", 40041]], 'largest_changes');
    };
</script>
