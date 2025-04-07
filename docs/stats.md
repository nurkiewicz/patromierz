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

<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/r/RadoslawPyffel.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/y/YouMyGod.js"></script>
<script type="text/javascript" src="data/r/racepace.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/c/chrisferrari.js"></script>
<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/h/HokejoweSocios.js"></script>
<script type="text/javascript" src="data/r/ReportazZwycinkowSwiata.js"></script>
<script type="text/javascript" src="data/d/doktor.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/o/ogniwo.js"></script>
<script type="text/javascript" src="data/a/astrolife.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/k/konpoludnie.js"></script>
<script type="text/javascript" src="data/r/radioem.js"></script>
<script type="text/javascript" src="data/m/motoambulans.js"></script>
<script type="text/javascript" src="data/e/elizamichalik.js"></script>
<script type="text/javascript" src="data/a/AgnieszkaCegielska.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Dział Zagraniczny", -860], ["Konwenty Południowe", -700], ["Borkoś", -365], ["Radosław Pyffel", -340], ["Eliza Michalik", -290], ["Langusta na palmie", -220], ["Chris Ferrari", -210], ["Zagłębie Sosnowiec Hokej", -200], ["Fundacja Wzajemnie Pomocni", -200], ["doktor z tiktoka", -200], ["YouMyGod", 324], ["Reportaż z wycinków świata - Monika Białkowska", 374], ["Radio Naukowe - podcast Karoliny Głowackiej", 400], ["Agnieszka Cegielska", 434], ["Karolina Korwin Piotrowska ", 460], ["Witold Gadowski", 525], ["RACE PACE - podcasty o bieganiu", 685], ["Radio Wnet", 1180], ["Spółdzielnia Ogniwo", 2205], ["Uwaga Naukowy Bełkot", 21994]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','karolinakp','Podcastwojennehistorie','radionaukowe','marcinzielinski','NaukowyBelkot','Gadowski','WzajemniePomocni','Vlogcasha','podcastex','palhajstv','podkastamerykanski','sekielski','accantus','brzmienie-swiata','Zmierzchu','ReportazZwycinkowSwiata','astrolife','radioem'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
