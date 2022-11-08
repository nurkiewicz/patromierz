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

<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/p/pmm.js"></script>
<script type="text/javascript" src="data/u/ubogapodcast.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/t/TSMTB.js"></script>
<script type="text/javascript" src="data/l/LigaSuperbohaterow.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/l/letsgotry.js"></script>
<script type="text/javascript" src="data/w/www.evrepair.pl.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/z/zyciewartejestrozmowy.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/z/znokautujbukmachera.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/k/Krajski.js"></script>
<script type="text/javascript" src="data/p/przystanekswietlica.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/m/miloszszymanski.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/z/Zmywak.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/f/fundacjajudyta.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            drawMulti(
                ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','sekielski','historiarealna','palhajstv','planetaabstrakcja','VirtualDream','TERENWIZJA','brzmienie-swiata','rockserwisfm','darwin','wolskiowojnie','znokautujbukmachera','miloszszymanski','Zmierzchu','poglebiarka'], 
                1, 'top_but_two', 'currency');
            drawHorizontal([["życie warte jest rozmowy", -990], ["Znokautuj bukmachera", -720], ["Dolnośląski Inspektorat Ochrony Zwierząt", -430], ["Sekielski Brothers Studio", -425], ["LetsGoTry", -408], ["Zmywak", -355], ["Stowarzyszenie Trójmiejskie Ścieżki MTB", -280], ["Misja: Ukraina | Polska Misja Medyczna", -275], ["EV REPAIR GARAGE", -250], ["Grupa Filmowa Darwin ", -248], ["Przystanek Świetlica dla dzieci uchodźców", 540], ["Radio Naukowe - podcast Karoliny Głowackiej", 555], ["UBoga Podcast", 560], ["Liga Superbohaterów", 610], ["Stanisław Krajski", 615], ["Marcin Zieliński", 760], ["Langusta na palmie", 905], ["Dariusz Rosiak", 945], ["Fundacja dla Szczeniąt Judyta", 1265], ["Radio Nowy Świat", 1685]], 'largest_changes');
    };
</script>
