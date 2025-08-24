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
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/d/dajherbate.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/d/dobropolski.js"></script>
<script type="text/javascript" src="data/p/profesor.matczak.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/a/astrolife.js"></script>
<script type="text/javascript" src="data/r/ReportazZwycinkowSwiata.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/t/tetrycy.js"></script>
<script type="text/javascript" src="data/c/CezaryGutowski.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/s/SOWINSKY.js"></script>
<script type="text/javascript" src="data/x/xpiotrxpiotr.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/p/planszopia.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/s/SciFun.js"></script>
<script type="text/javascript" src="data/b/BezSchematu.js"></script>
<script type="text/javascript" src="data/r/racepace.js"></script>
<script type="text/javascript" src="data/n/niewiemalesiedowiem.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/m/mowisie.js"></script>
<script type="text/javascript" src="data/d/DudekoHistorii.js"></script>
<script type="text/javascript" src="data/l/lkslodz.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Dudek o Historii", -2134], ["Radio Wnet", -1920], ["Cezary Gutowski", -620], ["Uwaga Naukowy Bełkot", -452], ["Dariusz Rosiak", -350], ["ŁKS Łódź", -335], ["Podkast amerykański", -290], ["Radio Nowy Świat", -280], ["Pal Hajs TV", -240], ["Mówi Się", -230], ["W poszukiwaniu Oblicza Boga", 220], ["Planszopia - pułtuski klub gier planszowych", 225], ["RACE PACE - podcasty o bieganiu", 225], ["Karolina Korwin Piotrowska ", 350], ["Tetrycy", 370], ["Dawid Dobropolski", 373], ["Radio Naukowe - podcast Karoliny Głowackiej", 375], ["Reportaż z wycinków świata - Monika Białkowska", 384], ["Bez/Schematu", 1040], ["Profesor Matczak", 1190]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','karolinakp','Podcastwojennehistorie','niewiemalesiedowiem','NaukowyBelkot','SciFun','tetrycy','radionaukowe','podkastamerykanski','podcastex','Vlogcasha','accantus','sekielski','palhajstv','Fundacja_po_DRUGIE','SOWINSKY','astrolife','dajherbate','Zmierzchu'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
