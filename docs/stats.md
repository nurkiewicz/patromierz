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

<script type="text/javascript" src="data/n/niewiemalesiedowiem.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>
<script type="text/javascript" src="data/k/kgonciarz.js"></script>
<script type="text/javascript" src="data/d/dajherbate.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/w/wolnomularstwo.js"></script>
<script type="text/javascript" src="data/s/schm.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/f/FundacjaNautilus.js"></script>
<script type="text/javascript" src="data/f/fundacjakapucynska.js"></script>
<script type="text/javascript" src="data/t/tetrycy.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/b/BezSchematu.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/s/SciFun.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/t/Tytus.chmielewski.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/r/radioem.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/k/K3.js"></script>
<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/m/MistrzGryOnline.js"></script>
<script type="text/javascript" src="data/w/www.twojdomjesttamgdziety.pl.js"></script>
<script type="text/javascript" src="data/j/Jakimowicz.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/c/cak-gniazdo.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Bez/Schematu", -1000], ["Podcast Wojenne Historie", -990], ["Nie wiem, ale się dowiem", -990], ["Tetrycy", -950], ["Krzysztof Gonciarz", -635], ["Podkast amerykański", -620], ["Fundacja Nautilus", -585], ["RADIO ROCKSERWIS FM", -520], ["Tytus Chmielewski", -515], ["Centrum Aktywizmu Klimatycznego \"Gniazdo\" w Warszawie", -500], ["Fundacja DAJ HERBATĘ", 415], ["Marcin Jakimowicz", 430], ["Mistrz Gry Online", 460], ["wolnomularstwo.pl", 500], ["Fundacja Kapucyńska im. bł. Aniceta Koplińskiego", 542], ["Twój dom jest tam gdzie TY", 562], ["K3 podcast Dariusza Bugalskiego", 580], ["Stowarzyszenie na rzecz Chłopców i Mężczyzn", 705], ["Fundacja po DRUGIE", 1190], ["Radio Nowy Świat", 5577]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','Podcastwojennehistorie','NaukowyBelkot','SciFun','DIOZ','radionaukowe','tetrycy','niewiemalesiedowiem','WzajemniePomocni','podkastamerykanski','marcinzielinski','Fundacja_po_DRUGIE','Gadowski','dajherbate','podcastex','Vlogcasha','radioem','Zmierzchu','brzmienie-swiata'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
