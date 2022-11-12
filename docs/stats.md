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

<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/w/wolnesady.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/p/potemotem.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/z/zyciewartejestrozmowy.js"></script>
<script type="text/javascript" src="data/z/znokautujbukmachera.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/t/TSMTB.js"></script>
<script type="text/javascript" src="data/g/GrupaMoCarta.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/m/miloszszymanski.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/f/fundacjajudyta.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/p/przystanekswietlica.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/a/AgnieszkaMorysiak.js"></script>
<script type="text/javascript" src="data/l/LigaSuperbohaterow.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            drawMulti(
                ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','sekielski','historiarealna','palhajstv','planetaabstrakcja','VirtualDream','TERENWIZJA','brzmienie-swiata','rockserwisfm','darwin','wolskiowojnie','znokautujbukmachera','miloszszymanski','Zmierzchu','poglebiarka'], 
                1, 'top_but_two', 'currency');
            drawHorizontal([["Dolnośląski Inspektorat Ochrony Zwierząt", -1025], ["Potem-o-tem ", -1000], ["Fundacja Wolne Sądy", -950], ["Marcin Zieliński", -650], ["Znokautuj bukmachera", -640], ["Brzmienie Świata z lotu Drozda", -490], ["Usłyszeć Na Czas", -470], ["Grupa MoCarta", -325], ["Dariusz Rosiak", -315], ["Stowarzyszenie Trójmiejskie Ścieżki MTB", -310], ["Przystanek Świetlica dla dzieci uchodźców", 540], ["Virtual Dream - Piotr Łój", 595], ["Agnieszka Morysiak", 600], ["Radio Naukowe - podcast Karoliny Głowackiej", 670], ["Radio Nowy Świat", 730], ["Langusta na palmie", 760], ["Liga Superbohaterów", 790], ["Fundacja dla Szczeniąt Judyta", 1010], ["Radio 357", 1298], ["życie warte jest rozmowy", 5340]], 'largest_changes');
    };
</script>
