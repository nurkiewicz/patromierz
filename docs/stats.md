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

<script type="text/javascript" src="data/d/dajherbate.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/g/GustawChiny.js"></script>
<script type="text/javascript" src="data/a/astrolife.js"></script>
<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/p/psychodeliki.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/t/tropemwajraka.js"></script>
<script type="text/javascript" src="data/c/chrisferrari.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/k/Karodance.js"></script>
<script type="text/javascript" src="data/k/kocia-wyspa.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/k/kanalkomediowy.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/r/radioem.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/k/katolik-chorzow.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Radio Nowy Świat", -1267], ["Uwaga Naukowy Bełkot", -897], ["Radio Wnet", -540], ["TROPEM WAJRAKA", -500], ["Historia Realna - Piotr Zychowicz", -380], ["Pal Hajs TV", -340], ["Karolina Tomczak", -300], ["Fundacja DAJ HERBATĘ", -300], ["Fundacja po DRUGIE", -280], ["Polskie Towarzystwo Psychodeliczne", -275], ["Fundacja Kocia Wyspa", 270], ["Podkast amerykański", 270], ["Karolina Korwin Piotrowska ", 290], ["Katolik Chorzów", 290], ["Kanał Komediowy", 345], ["Fundacja Wzajemnie Pomocni", 410], ["Gustaw Chiny", 460], ["Dariusz Rosiak", 615], ["Chris Ferrari", 840], ["Podcast Wojenne Historie", 1390]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','karolinakp','NaukowyBelkot','Podcastwojennehistorie','radionaukowe','marcinzielinski','WzajemniePomocni','podkastamerykanski','podcastex','Vlogcasha','accantus','palhajstv','Zmierzchu','radioem','astrolife','Fundacja_po_DRUGIE','BezPlanu','dajherbate','UsłyszećNaCzas'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
