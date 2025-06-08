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

<script type="text/javascript" src="data/e/eucharisticatv.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>
<script type="text/javascript" src="data/n/ntnsnowandmore.js"></script>
<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/s/SOWINSKY.js"></script>
<script type="text/javascript" src="data/t/trzech.panow.K.js"></script>
<script type="text/javascript" src="data/w/wolnerzeki.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/a/astrolife.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/p/profesor.matczak.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/o/odb.js"></script>
<script type="text/javascript" src="data/d/dajherbate.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/a/arhneu.js"></script>
<script type="text/javascript" src="data/r/radioem.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/z/zyciewartejestrozmowy.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/p/Percival.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/k/kacpersztukaracing.js"></script>
<script type="text/javascript" src="data/s/szpila.js"></script>
<script type="text/javascript" src="data/m/muzykaliturgiczna.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["PERCIVAL SCHUTTENBACH", -1085], ["Podcast Wojenne Historie", -915], ["Muzyka Liturgiczna", -777], ["życie warte jest rozmowy", -510], ["EucharisticaTV", -500], ["Kacper Sztuka Racing", -500], ["Dział Zagraniczny", -420], ["Pal Hajs TV", -380], ["NTN Snow & More", -350], ["Dariusz Rosiak", -335], ["arhn.eu", 410], ["Trzech Panów K", 410], ["Wolne Rzeki", 466], ["Odbudowani.", 500], ["Sekielski Brothers Studio", 940], ["Kolektyw Szpila", 1000], ["Karolina Korwin Piotrowska ", 1170], ["Profesor Matczak", 1545], ["Radio Nowy Świat", 1776], ["Radio Wnet", 3330]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','karolinakp','NaukowyBelkot','Podcastwojennehistorie','radionaukowe','WzajemniePomocni','Gadowski','podcastex','podkastamerykanski','Vlogcasha','accantus','palhajstv','SOWINSKY','Zmierzchu','radioem','astrolife','Fundacja_po_DRUGIE','BezPlanu','dajherbate'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
