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

<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/p/PLAKACIARY.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/m/MalgorzaTaOdJezyCzaja.js"></script>
<script type="text/javascript" src="data/p/puchaczowka.js"></script>
<script type="text/javascript" src="data/w/www.japaczesercem.pl.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/w/wyrokizabrakmilosci-przybyla.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/s/SciFun.js"></script>
<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/t/tetrycy.js"></script>
<script type="text/javascript" src="data/w/WachU.js"></script>
<script type="text/javascript" src="data/f/forumogadka.js"></script>
<script type="text/javascript" src="data/m/mateuszlachowski.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/s/schroniskopegasus.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/a/animalhelper.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/d/dajherbate.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/n/napisykoncowe.js"></script>
<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>
<script type="text/javascript" src="data/w/wmiedzyczasie.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/n/niewiemalesiedowiem.js"></script>
<script type="text/javascript" src="data/r/rfp.js"></script>
<script type="text/javascript" src="data/s/smok.tajwanski.js"></script>
<script type="text/javascript" src="data/c/chlopibaba.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Tetrycy", -3705], ["Nie wiem, ale się dowiem", -1385], ["Mateusz Lachowski", -1109], ["Schronisko Pegasus", -1000], ["SciFun", -976], ["WachU", -666], ["Radio Nowy Świat", -661], ["Damian Duda", -560], ["Rajdy Formuły Pierwszej", -530], ["PLAKACIARY", -520], ["Ja Pacze Sercem", 350], ["Marta Przybyła", 360], ["Napisy Końcowe", 365], ["smok tajwański 臺灣龍", 376], ["Fundacja DAJ HERBATĘ", 425], ["MałgorzaTa Od Jeży Czaja", 445], ["CHŁOP I BABA", 505], ["Ośrodek Leczenia i Rehabilitacji Dzikich Zwierząt \"Puchaczówka\"", 600], ["Forumogadka", 730], ["Animal Helper", 825]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','Podcastwojennehistorie','NaukowyBelkot','SciFun','DIOZ','radionaukowe','tetrycy','niewiemalesiedowiem','WzajemniePomocni','podkastamerykanski','marcinzielinski','Gadowski','Fundacja_po_DRUGIE','podcastex','Vlogcasha','Zmierzchu','brzmienie-swiata','poglebiarka','accantus'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
