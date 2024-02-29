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

<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/m/motoambulans.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/r/RadoslawPyffel.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/s/Samolyk.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/l/LSDFarm.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/w/wmiedzyczasie.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/t/tropemwajraka.js"></script>
<script type="text/javascript" src="data/j/juliaastrolady.com.js"></script>
<script type="text/javascript" src="data/s/skopzzor.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/s/SOWINSKY.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/n/napisykoncowe.js"></script>
<script type="text/javascript" src="data/m/MarcinMajewski.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/m/malgosiakozlowska.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/t/teobankologia.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/d/drpiotrnapierala.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Borkoś", -1090], ["Małgosia Kozłowska", -1000], ["Marcin Zieliński | Fundacja Rozpal Wiarę", -920], ["Wojciech Szewko", -860], ["BezPlanu", -480], ["Dariusz Rosiak", -480], ["Dolnośląski Inspektorat Ochrony Zwierząt", -470], ["Teobańkologia", -460], ["Dwie Lewe Ręce", -450], ["Pal Hajs TV", -280], ["TROPEM WAJRAKA", 450], ["SkopzzoR", 515], ["Julia Astro Lady", 520], ["Piotr Napierała", 610], ["Marcin Majewski", 650], ["Radosław Pyffel", 750], ["Damian Duda", 1175], ["Napisy Końcowe", 1225], ["LSD Farm Magdalena Michalska", 3350], ["Radio Nowy Świat", 3648]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['radiownet','langustanapalmie','marcinzielinski','karolinakp','radionaukowe','wszewko','sekielski','Podcastwojennehistorie','Gadowski','palhajstv','UsłyszećNaCzas','Zmierzchu','planetaabstrakcja','accantus','Vlogcasha','rockserwisfm','motoambulans','poglebiarka','SOWINSKY','Samolyk'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
