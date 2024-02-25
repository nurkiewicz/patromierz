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

<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/g/GTBT.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/l/LSDFarm.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/r/resetobywatelski.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/k/karolinabacapogorzelska.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/r/raczek.js"></script>
<script type="text/javascript" src="data/r/RadoslawPyffel.js"></script>
<script type="text/javascript" src="data/i/irmi.wol.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/h/Hubert_Laskowski.js"></script>
<script type="text/javascript" src="data/n/napisykoncowe.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/f/FundacjaNautilus.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/i/imopeksis.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/z/zakazanehistorie.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["ZAKAZANE HISTORIE", -1200], ["Hubert Laskowski - na drodze do WRC", -1000], ["Radio Wnet", -800], ["Reset Obywatelski", -730], ["Wojciech Szewko", -690], ["Tomasz Raczek", -575], ["Dolnośląski Inspektorat Ochrony Zwierząt", -565], ["Virtual Dream - Piotr Łój", -525], ["Brzmienie Świata z lotu Drozda", -510], ["IMOPEKSIS", -510], ["Karolina Baca-Pogorzelska", 512], ["Irmina Wolniak", 524], ["Fundacja Nautilus", 550], ["Radosław Pyffel", 580], ["Dariusz Rosiak", 690], ["Good Times Bad Times", 890], ["Witold Gadowski", 945], ["Napisy Końcowe", 2355], ["Radio Nowy Świat", 3009], ["LSD Farm Magdalena Michalska", 5210]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['radiownet','DariuszRosiak','DIOZ','dzialzagraniczny','langustanapalmie','dlr','marcinzielinski','karolinakp','radionaukowe','wszewko','sekielski','Podcastwojennehistorie','Gadowski','palhajstv','UsłyszećNaCzas','Zmierzchu','planetaabstrakcja','accantus','BezPlanu','Vlogcasha'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
