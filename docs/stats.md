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

<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/m/MarcinMajewski.js"></script>
<script type="text/javascript" src="data/n/napisykoncowe.js"></script>
<script type="text/javascript" src="data/f/fundacjaernesta.js"></script>
<script type="text/javascript" src="data/m/MateuszChrobok.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/u/ubogapodcast.js"></script>
<script type="text/javascript" src="data/s/stekbzdur.js"></script>
<script type="text/javascript" src="data/w/wmiedzyczasie.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/n/nrgeek.js"></script>
<script type="text/javascript" src="data/p/patronite-pl-tadeusz-wozniak.js"></script>
<script type="text/javascript" src="data/r/RadoslawPyffel.js"></script>
<script type="text/javascript" src="data/b/BezSchematu.js"></script>
<script type="text/javascript" src="data/m/miliholicy.js"></script>
<script type="text/javascript" src="data/m/moje-waterloo.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/i/igorjanke.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Igor Janke. Układ Otwarty", -1035], ["Wojciech Szewko", -1020], ["Tadeusz Woźniak", -1000], ["Radio Nowy Świat", -966], ["Damian Duda", -815], ["Napisy Końcowe", -600], [" Fundacja Medycyny Prenatalnej - im. Ernesta Wójcickiego", -520], ["UBoga Podcast", -470], ["NRGeek", -370], ["Dolnośląski Inspektorat Ochrony Zwierząt", -335], ["Bez/Schematu", 480], ["Karolina Korwin Piotrowska ", 480], ["Radosław Pyffel", 510], ["Dwie Lewe Ręce", 575], ["Marcin Majewski", 635], ["Miliholicy", 730], ["Donoszę uprzejmie", 820], ["Stek Bzdur", 842], ["Mateusz Chrobok", 992], ["Podcast Wojenne Historie", 1085]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','dzialzagraniczny','langustanapalmie','dlr','karolinakp','marcinzielinski','radionaukowe','Podcastwojennehistorie','wszewko','Gadowski','sekielski','palhajstv','Vlogcasha','accantus','Zmierzchu','UsłyszećNaCzas','BezPlanu','poglebiarka','rockserwisfm'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
