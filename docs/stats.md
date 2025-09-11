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

<script type="text/javascript" src="data/p/profesor.matczak.js"></script>
<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/k/kajtekfotografuje.js"></script>
<script type="text/javascript" src="data/n/niewiemalesiedowiem.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/m/motoambulans.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/d/dajherbate.js"></script>
<script type="text/javascript" src="data/t/tetrycy.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/z/zyciewartejestrozmowy.js"></script>
<script type="text/javascript" src="data/m/madamemonday.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/v/VolleyWyszkow.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/k/kidsalert.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/j/jakubwiech.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/s/SciFun.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/a/astrolife.js"></script>
<script type="text/javascript" src="data/p/Percival.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Dariusz Rosiak", -1100], ["PERCIVAL SCHUTTENBACH", -1026], ["SciFun", -913], ["Nie wiem, ale się dowiem", -520], ["Uwaga Naukowy Bełkot", -493], ["Profesor Matczak", -440], ["Radio Wnet", -440], ["Joanna Flis", -435], ["Marcin Zieliński | Fundacja Rozpal Wiarę", -390], ["Tetrycy", -390], ["Niedźwiecka o Zmierzchu", 454], ["Borkoś", 455], ["Kajetan Pasak", 515], ["Dział Zagraniczny", 540], ["Jakub Wiech", 632], ["Radio Nowy Świat", 645], ["UKS Volley Wyszków", 740], ["życie warte jest rozmowy", 1330], ["KidsAlert", 1510], ["Podkast amerykański", 2120]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','karolinakp','Podcastwojennehistorie','NaukowyBelkot','SciFun','tetrycy','radionaukowe','marcinzielinski','Gadowski','podkastamerykanski','podcastex','Vlogcasha','accantus','sekielski','Zmierzchu','Fundacja_po_DRUGIE','palhajstv','dajherbate','astrolife'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
