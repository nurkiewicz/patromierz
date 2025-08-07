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

<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/t/tetrycy.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>
<script type="text/javascript" src="data/k/Krajski.js"></script>
<script type="text/javascript" src="data/n/niewiemalesiedowiem.js"></script>
<script type="text/javascript" src="data/p/portaldominikanie.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/b/BezSchematu.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/a/AgnieszkaCegielska.js"></script>
<script type="text/javascript" src="data/d/drpiotrnapierala.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/s/SciFun.js"></script>
<script type="text/javascript" src="data/e/elizamichalik.js"></script>
<script type="text/javascript" src="data/d/dajherbate.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/r/rfp.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["SciFun", -1175], ["Nie wiem, ale się dowiem", -1060], ["Radio Wnet", -640], ["Radio Nowy Świat", -624], ["Dariusz Rosiak", -595], ["Eliza Michalik", -500], ["Uwaga Naukowy Bełkot", -476], ["Dolnośląski Inspektorat Ochrony Zwierząt", -440], ["Sekielski Brothers Studio", -355], ["Agnieszka Cegielska", -341], ["Bez/Schematu", 280], ["Stanisław Krajski", 300], ["Piotr Napierała", 310], ["Karolina Korwin Piotrowska ", 415], ["Fundacja DAJ HERBATĘ", 590], ["Witold Gadowski", 595], ["Fundacja po DRUGIE", 670], ["Rajdy Formuły Pierwszej", 710], ["Podcast Wojenne Historie", 2615], ["Tetrycy", 16845]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','karolinakp','NaukowyBelkot','Podcastwojennehistorie','SciFun','DIOZ','tetrycy','radionaukowe','marcinzielinski','Gadowski','podkastamerykanski','podcastex','Vlogcasha','accantus','brzmienie-swiata','poglebiarka','sekielski','portaldominikanie','palhajstv'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
