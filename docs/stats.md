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

<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/s/SzkolaPitagoLasa.js"></script>
<script type="text/javascript" src="data/r/radioem.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/a/ayumi12.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/k/kidsalert.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/n/niewiemalesiedowiem.js"></script>
<script type="text/javascript" src="data/f/filozofiatakbardzo.js"></script>
<script type="text/javascript" src="data/z/zameknadaje.js"></script>
<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/d/dajherbate.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/s/SciFun.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/p/profesor.matczak.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/t/techspresso.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/t/tetrycy.js"></script>
<script type="text/javascript" src="data/m/Modzelewski.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["SciFun", -1032], ["Dariusz Rosiak", -970], ["Nie wiem, ale się dowiem", -720], ["Uwaga Naukowy Bełkot", -572], ["Filozofia tak bardzo", -500], ["Radio Zamek Nadaje", -418], ["Profesor Matczak", -290], ["Podcast Wojenne Historie", -285], ["Witold Gadowski", -275], ["Karol Modzelewski", -270], ["TECHSPRESSO.CAFE", 330], ["Fundacja DAJ HERBATĘ", 400], ["Natalia Dudek", 450], ["Karolina Korwin Piotrowska ", 490], ["Dział Zagraniczny", 525], ["Radio Naukowe - podcast Karoliny Głowackiej", 550], ["Niedźwiecka o Zmierzchu", 774], ["Szkoła PitagoLasa", 1200], ["KidsAlert", 1260], ["Podkast amerykański", 3010]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','karolinakp','Podcastwojennehistorie','niewiemalesiedowiem','NaukowyBelkot','SciFun','tetrycy','DIOZ','radionaukowe','marcinzielinski','Gadowski','podkastamerykanski','podcastex','Vlogcasha','accantus','rockserwisfm','sekielski','radioem','Zmierzchu'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
