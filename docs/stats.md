---
title: Globalne statystyki patronite.pl | Patromierz
---

# Największe wzrosty i spadki wsparcia miesięcznego

Ostatnie 7 dni.

<div id="largest_changes" class="chart"></div>

# Radio 357 vs. Nowy Świat vs. Wnet, wsparcie miesięczne

<div id="two_radios" class="chart"></div>

# Top 20 wsparcie miesięcznie, z wyjątkiem 357, RNŚ i Wnet

<div id="top_but_two" class="chart"></div>

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="js/chart.js"></script>

<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/t/tygodnikpodhalanski.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/k/karta.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/z/zyciewartejestrozmowy.js"></script>
<script type="text/javascript" src="data/n/niechzyja.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/j/jaroslawrogowski.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/k/kuszlewiczwimieniu.js"></script>
<script type="text/javascript" src="data/i/instytutr.js"></script>
<script type="text/javascript" src="data/s/specjalistka.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/b/bushcraftowy.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/n/napisykoncowe.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/s/szot.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/b/Bogprojektkobieta.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/m/MagazynAnityGargas.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/s/strajk.js"></script>
<script type="text/javascript" src="data/s/SzkolaPitagoLasa.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Tygodnik Podhalański", -980], ["Jarosław Rogowski", -950], ["Radio Nowy Świat", -659], ["Wojtek Szot - Zdaniem Szota", -505], ["strajk.eu", -500], ["Niech Żyją!", -463], ["Bushcraftowy", -435], ["Kuszlewicz w imieniu", -426], ["Napisy Końcowe", -410], ["Bógprojektkobieta", -400], ["Marta Knasiecka", 825], ["Instytut Reportażu", 940], ["Fundacja Wzajemnie Pomocni", 960], ["Dział Zagraniczny", 965], ["Magazyn Anity Gargas", 990], ["życie warte jest rozmowy", 1010], ["Szkoła PitagoLasa", 1140], ["Radio Wnet", 1390], ["Fundacja Ośrodka KARTA", 2145], ["Podcast Wojenne Historie", 2200]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','DIOZ','langustanapalmie','dlr','karolinakp','Podcastwojennehistorie','marcinzielinski','radionaukowe','wszewko','Gadowski','sekielski','accantus','palhajstv','Vlogcasha','Zmierzchu','rockserwisfm','poglebiarka','brzmienie-swiata','UsłyszećNaCzas'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
