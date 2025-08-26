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

<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/s/SciFun.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/w/wolnesady.js"></script>
<script type="text/javascript" src="data/o/osada.earth.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/c/CezaryGutowski.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/k/K3.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/d/dobropolski.js"></script>
<script type="text/javascript" src="data/t/tetrycy.js"></script>
<script type="text/javascript" src="data/p/portaldominikanie.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/r/ReportazZwycinkowSwiata.js"></script>
<script type="text/javascript" src="data/w/wahanie.js"></script>
<script type="text/javascript" src="data/p/profesor.matczak.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/k/kanalkomediowy.js"></script>
<script type="text/javascript" src="data/m/madamemonday.js"></script>
<script type="text/javascript" src="data/d/DudekoHistorii.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Dudek o Historii", -2170], ["Radio Wnet", -2080], ["Cezary Gutowski", -620], ["dominikanie.pl", -530], ["Dariusz Rosiak", -415], ["Osada.Earth", -380], ["Uwaga Naukowy Bełkot", -328], ["Pal Hajs TV", -300], ["Niedźwiecka o Zmierzchu", -284], ["Wahanie - Szumowski i Giza - podcast", -250], ["Joanna Flis", 240], ["Dawid Dobropolski", 291], ["K3 podcast Dariusza Bugalskiego", 310], ["Tetrycy", 310], ["Reportaż z wycinków świata - Monika Białkowska", 384], ["Kanał Komediowy", 500], ["Fundacja Wolne Sądy", 500], ["Fundacja Wzajemnie Pomocni", 540], ["Dział Zagraniczny", 860], ["Profesor Matczak", 1130]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','karolinakp','Podcastwojennehistorie','NaukowyBelkot','SciFun','tetrycy','DIOZ','radionaukowe','marcinzielinski','WzajemniePomocni','Gadowski','podkastamerykanski','podcastex','Vlogcasha','accantus','poglebiarka','rockserwisfm','sekielski','portaldominikanie'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
