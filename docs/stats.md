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

<script type="text/javascript" src="data/r/RadoslawPyffel.js"></script>
<script type="text/javascript" src="data/w/WachU.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/s/SciFun.js"></script>
<script type="text/javascript" src="data/c/centrumochronymokradel.js"></script>
<script type="text/javascript" src="data/m/malgosiakozlowska.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/s/StrataCzasu.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/p/Patrykb.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/d/DEREVO.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/c/CubaMSF.js"></script>
<script type="text/javascript" src="data/n/niewiemalesiedowiem.js"></script>
<script type="text/javascript" src="data/m/MilenaSzalkowska.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/t/tetrycy.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Nie wiem, ale się dowiem", -1710], ["Małgosia Kozłowska", -1000], ["SciFun", -517], ["Radio Wnet", -450], ["Radosław Pyffel", -405], ["Patryk Bajda", -300], ["Marcin Zieliński | Fundacja Rozpal Wiarę", -180], ["Tetrycy", -180], ["De Revolutionibus Books", -165], ["Strata Czasu", -155], ["Podkast amerykański", 270], ["Misja Camajuaní", 300], ["Milena Szałkowska", 395], ["Radio Naukowe - podcast Karoliny Głowackiej", 434], ["Centrum Ochrony Mokradeł", 515], ["Historia Realna - Piotr Zychowicz", 570], ["WachU", 585], ["Sekielski Brothers Studio", 960], ["Fundacja po DRUGIE", 3240], ["Radio Nowy Świat", 5019]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','Podcastwojennehistorie','NaukowyBelkot','SciFun','tetrycy','niewiemalesiedowiem','DIOZ','radionaukowe','WzajemniePomocni','marcinzielinski','podkastamerykanski','Gadowski','Fundacja_po_DRUGIE','podcastex','Vlogcasha','brzmienie-swiata','Zmierzchu','accantus','poglebiarka'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
