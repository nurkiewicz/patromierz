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

<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/p/papierwdole666.js"></script>
<script type="text/javascript" src="data/d/dwochtypow.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/s/spalmyto.js"></script>
<script type="text/javascript" src="data/f/fundacjajudyta.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/z/znokautujbukmachera.js"></script>
<script type="text/javascript" src="data/s/sailoceans.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/m/michalkrol.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/z/zakazanehistorie.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/m/miloszszymanski.js"></script>
<script type="text/javascript" src="data/m/miloteam.js"></script>
<script type="text/javascript" src="data/d/dr-damian-parol.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/m/Morskie-Opowieści.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            drawMulti(
                ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','palhajstv','VirtualDream','historiarealna','sekielski','dwochtypow','planetaabstrakcja','znokautujbukmachera','rockserwisfm','brzmienie-swiata','TERENWIZJA','Zmierzchu','darwin','radionaukowe','miloszszymanski','wolskiowojnie'], 
                1, 'top_but_two', 'currency');
            drawHorizontal([["Langusta na palmie", -975], ["Dolnośląski Inspektorat Ochrony Zwierząt", -815], ["Miłosz Sowiński", -699], ["Historia Realna - Piotr Zychowicz", -430], ["TERENWIZJA", -410], ["Sekielski Brothers Studio", -365], ["Usłyszeć Na Czas", -330], ["Morskie Opowieści", -300], ["Papierwdole", -242], ["Jachtem przez Świat - SailOceans", -210], ["Michał Król", 580], ["Dwóch Typów Podcast", 605], ["Znokautuj bukmachera", 605], ["Fundacja dla Szczeniąt Judyta", 685], ["Spalmy to!", 965], ["dr Damian Parol", 980], ["ZAKAZANE HISTORIE", 1000], ["Radio Naukowe - podcast Karoliny Głowackiej", 1110], ["Radio Nowy Świat", 2034], ["Radio 357", 4600]], 'largest_changes');
    };
</script>
