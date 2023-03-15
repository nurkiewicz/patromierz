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

<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/f/FundacjaZwierzecaPolana.js"></script>
<script type="text/javascript" src="data/d/dwochtypow.js"></script>
<script type="text/javascript" src="data/p/pmJezus.js"></script>
<script type="text/javascript" src="data/s/Samolyk.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/z/ZewOceanu.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/p/pixel.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/r/RejsDookolaSwiata.js"></script>
<script type="text/javascript" src="data/m/marcinstrzyzewskioRosji.js"></script>
<script type="text/javascript" src="data/p/pelnizycia.js"></script>
<script type="text/javascript" src="data/p/przygarnijkota.js"></script>
<script type="text/javascript" src="data/s/SebastianAntonowicz.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/b/BliskoRahamim.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/m/mateuszlachowski.js"></script>
<script type="text/javascript" src="data/p/PolskieArchiwumX.js"></script>
<script type="text/javascript" src="data/h/hubertwiecek.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Zew Oceanu - dookoła świata, raz jeszcze", -1000], ["Marcin Zieliński", -815], ["Historia Realna - Piotr Zychowicz", -715], ["Sebastian Antonowicz", -580], ["Poglebiarka.pl", -400], ["PIXEL", -296], ["Marcin Strzyżewski", -293], ["Robert Skassa Prowadzi Mnie Jezus", -220], ["Niedźwiecka o Zmierzchu", -202], ["Polskie Archiwum X", -200], ["Blisko Rahamim", 235], ["Rejs Dookoła Świata - SV Crystal", 250], ["Dom Pełni Życia Gliwice", 260], ["Przygarnij Kota", 275], ["Hubert Więcek", 280], ["Langusta na palmie", 395], ["Karolina Korwin Piotrowska ", 565], ["Fundacja Zwierzęca Polana", 721], ["Mateusz Lachowski", 749], ["Radio Nowy Świat", 2266]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','palhajstv','Vlogcasha','VirtualDream','sekielski','historiarealna','accantus','dwochtypow','brzmienie-swiata','planetaabstrakcja','rockserwisfm','radionaukowe','Zmierzchu','TERENWIZJA','Samolyk'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
