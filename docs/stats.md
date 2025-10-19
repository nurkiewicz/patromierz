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

<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>
<script type="text/javascript" src="data/t/tetrycy.js"></script>
<script type="text/javascript" src="data/f/FundacjaPrimum.js"></script>
<script type="text/javascript" src="data/d/DziejeNevendaar.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/s/swiatusy.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/w/WarszawskiKlubGo.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/e/Exen.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/c/centruminterwencyjne.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/s/SciFun.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/p/pkod.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/z/zydoteka.js"></script>
<script type="text/javascript" src="data/k/Karczmarz.js"></script>
<script type="text/javascript" src="data/n/niewiemalesiedowiem.js"></script>
<script type="text/javascript" src="data/w/wasikowska.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/j/jakubwiech.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/p/puchaczowka.js"></script>
<script type="text/javascript" src="data/w/wei.org.pl.js"></script>
<script type="text/javascript" src="data/d/darlovia.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Radio Nowy Świat", -1946], ["Radio Wnet", -1500], ["Nie wiem, ale się dowiem", -815], ["Orkiestra Kamiliańska", -500], ["Dział Zagraniczny", -410], ["Uwaga Naukowy Bełkot", -391], ["Warsaw Enterprise Institute", -310], ["Darłovia Darłowo", -300], ["Światusy", -290], ["Interwencyjne Centrum Pomocy Kotom", -255], ["Jakub Wiech", 401], ["Ośrodek Leczenia i Rehabilitacji Dzikich Zwierząt \"Puchaczówka\"", 450], ["Karczmarz", 452], ["Fundacja po DRUGIE", 460], ["EWA WĄSIKOWSKA-TOMCZYŃSKA", 470], ["Żydoteka", 500], ["Fundacja Primum", 506], ["DziejeNevendaar", 550], ["Warszawski Klub Go", 550], ["Exen", 860]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','Podcastwojennehistorie','NaukowyBelkot','SciFun','tetrycy','DIOZ','radionaukowe','niewiemalesiedowiem','WzajemniePomocni','marcinzielinski','podkastamerykanski','Gadowski','Fundacja_po_DRUGIE','podcastex','Vlogcasha','Zmierzchu','brzmienie-swiata','poglebiarka','accantus'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
