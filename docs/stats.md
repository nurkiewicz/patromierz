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

<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>
<script type="text/javascript" src="data/w/wyrokizabrakmilosci-przybyla.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/ś/ŚmiemWątpić.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/s/smok.tajwanski.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/f/forumogadka.js"></script>
<script type="text/javascript" src="data/a/animalhelper.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/t/tetrycy.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/w/wmiedzyczasie.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/p/puchaczowka.js"></script>
<script type="text/javascript" src="data/n/niewiemalesiedowiem.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/b/BezSchematu.js"></script>
<script type="text/javascript" src="data/z/zoltenapisy.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/m/MalgorzaTaOdJezyCzaja.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/p/PLAKACIARY.js"></script>
<script type="text/javascript" src="data/s/SciFun.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/w/WachU.js"></script>
<script type="text/javascript" src="data/m/mateuszlachowski.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Tetrycy", -3770], ["Nie wiem, ale się dowiem", -1560], ["Mateusz Lachowski", -1013], ["Radio Nowy Świat", -925], ["Dariusz Rosiak", -850], ["SciFun", -820], ["Damian Duda", -660], ["PLAKACIARY", -520], ["WachU", -519], ["Dolnośląski Inspektorat Ochrony Zwierząt", -415], ["MałgorzaTa Od Jeży Czaja", 395], ["Bez/Schematu", 400], ["Śmiem Wątpić", 420], ["ŻÓŁTE NAPISY", 485], ["Ośrodek Leczenia i Rehabilitacji Dzikich Zwierząt \"Puchaczówka\"", 500], ["Marta Przybyła", 550], ["smok tajwański 臺灣龍", 752], ["Animal Helper", 825], ["Forumogadka", 875], ["Dział Zagraniczny", 880]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','Podcastwojennehistorie','NaukowyBelkot','SciFun','DIOZ','radionaukowe','tetrycy','niewiemalesiedowiem','WzajemniePomocni','marcinzielinski','podkastamerykanski','Gadowski','Fundacja_po_DRUGIE','podcastex','Vlogcasha','Zmierzchu','brzmienie-swiata','poglebiarka','accantus'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
