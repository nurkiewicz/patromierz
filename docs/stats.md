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

<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/m/menedzerplus.js"></script>
<script type="text/javascript" src="data/r/ruchradzionkow.js"></script>
<script type="text/javascript" src="data/p/Percival.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/b/BasiaiKasia.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/r/RadoslawPyffel.js"></script>
<script type="text/javascript" src="data/r/RomanFicek.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/a/AgnieszkaCegielska.js"></script>
<script type="text/javascript" src="data/n/Niedzwiadki.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/k/Kramer.js"></script>
<script type="text/javascript" src="data/e/ewakaleta.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/d/DziejeNevendaar.js"></script>
<script type="text/javascript" src="data/m/motoambulans.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/t/tygodnikpodhalanski.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/n/napisykoncowe.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Menedżer Plus | Mariusz Chrapko", -2600], ["Radio Wnet", -1440], ["Radio Nowy Świat", -1126], ["Usłyszeć Na Czas", -510], ["Dolnośląski Inspektorat Ochrony Zwierząt", -480], ["DziejeNevendaar", -450], ["Borkoś", -380], ["Dariusz Rosiak", -350], ["Niedźwiadki Chemart Przemyśl", -300], ["Radosław Pyffel", -290], ["Roman Ficek", 325], ["Wojciech Szewko", 480], ["Ruch Radzionków", 570], ["Kasia i Basia", 590], ["Napisy Końcowe", 600], ["Grzegorz Kramer", 620], ["Ewa Kaleta", 717], ["Tygodnik Podhalański", 920], ["PERCIVAL SCHUTTENBACH", 1026], ["Agnieszka Cegielska", 1801]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','DIOZ','langustanapalmie','dlr','karolinakp','Podcastwojennehistorie','marcinzielinski','wszewko','radionaukowe','Gadowski','sekielski','accantus','palhajstv','Vlogcasha','Zmierzchu','rockserwisfm','poglebiarka','brzmienie-swiata','UsłyszećNaCzas'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
