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

<script type="text/javascript" src="data/s/SluzbaOgienMilosci.js"></script>
<script type="text/javascript" src="data/s/SciFun.js"></script>
<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/f/FundacjaNautilus.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/r/rozgrywka.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/i/instytutr.js"></script>
<script type="text/javascript" src="data/t/tetrycy.js"></script>
<script type="text/javascript" src="data/s/szpila.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/k/K3.js"></script>
<script type="text/javascript" src="data/a/agnieszkakozak75.js"></script>
<script type="text/javascript" src="data/o/osada.earth.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/n/niewiemalesiedowiem.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/k/kanalkomediowy.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/z/zyciewartejestrozmowy.js"></script>
<script type="text/javascript" src="data/a/astrolife.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>
<script type="text/javascript" src="data/d/dajherbate.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/b/BezSchematu.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/j/jakubwiech.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Kolektyw Szpila", -1250], ["Radio Wnet", -770], ["Radio Nowy Świat", -479], ["Karolina Korwin Piotrowska ", -450], ["SciFun", -418], ["Grzegorz Miecznikowski", -350], ["Agnieszka Kozak", -315], ["Bez/Schematu", -300], ["Fundacja Wzajemnie Pomocni", -290], ["Osada.Earth", -280], ["Nie wiem, ale się dowiem", 380], ["Instytut Reportażu", 390], ["Kanał Komediowy", 400], ["Rozgrywka", 400], ["K3 podcast Dariusza Bugalskiego", 410], ["życie warte jest rozmowy", 440], ["Jakub Wiech", 652], ["Fundacja Nautilus", 695], ["Dariusz Rosiak", 1095], ["Dział Zagraniczny", 1250]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','karolinakp','Podcastwojennehistorie','NaukowyBelkot','SciFun','tetrycy','radionaukowe','marcinzielinski','WzajemniePomocni','podkastamerykanski','podcastex','Vlogcasha','accantus','rockserwisfm','sekielski','palhajstv','Fundacja_po_DRUGIE','astrolife','dajherbate'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
