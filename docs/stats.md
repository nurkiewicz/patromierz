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

<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/m/madamemonday.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/f/filozofiatakbardzo.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/t/tetrycy.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/a/agerecontra.js"></script>
<script type="text/javascript" src="data/s/SciFun.js"></script>
<script type="text/javascript" src="data/c/czabanrobiraban.js"></script>
<script type="text/javascript" src="data/k/kidsalert.js"></script>
<script type="text/javascript" src="data/z/zyciewartejestrozmowy.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/k/kajtekfotografuje.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/n/niewiemalesiedowiem.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/w/wolnerzeki.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/r/radioem.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/j/jakubwiech.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/p/Percival.js"></script>
<script type="text/javascript" src="data/v/VolleyWyszkow.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/w/wasikowska.js"></script>
<script type="text/javascript" src="data/p/profesor.matczak.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Radio Wnet", -1830], ["PERCIVAL SCHUTTENBACH", -999], ["Nie wiem, ale się dowiem", -845], ["SciFun", -724], ["Profesor Matczak", -690], ["Uwaga Naukowy Bełkot", -517], ["Dolnośląski Inspektorat Ochrony Zwierząt", -465], ["Joanna Flis", -405], ["Piotr Czaban", -400], ["Marcin Zieliński | Fundacja Rozpal Wiarę", -400], ["KidsAlert", 370], ["Wolne Rzeki", 380], ["EWA WĄSIKOWSKA-TOMCZYŃSKA", 440], ["Kajetan Pasak", 495], ["Filozofia tak bardzo", 500], ["Agere Contra", 570], ["Jakub Wiech", 575], ["życie warte jest rozmowy", 1230], ["Podkast amerykański", 1510], ["UKS Volley Wyszków", 1770]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','karolinakp','Podcastwojennehistorie','niewiemalesiedowiem','NaukowyBelkot','SciFun','tetrycy','DIOZ','radionaukowe','marcinzielinski','Gadowski','podkastamerykanski','podcastex','Vlogcasha','accantus','brzmienie-swiata','rockserwisfm','sekielski','radioem'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
