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

<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/n/niekochane.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/s/speakleash.js"></script>
<script type="text/javascript" src="data/r/racepace.js"></script>
<script type="text/javascript" src="data/w/www.gorila.pl.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/m/maciejkawecki.js"></script>
<script type="text/javascript" src="data/a/anitawu.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/h/HokejoweSocios.js"></script>
<script type="text/javascript" src="data/s/szopowisko.js"></script>
<script type="text/javascript" src="data/m/malgosiakozlowska.js"></script>
<script type="text/javascript" src="data/d/Djsmierc.js"></script>
<script type="text/javascript" src="data/s/szpila.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["NIEKOCHANE.PL", -1000], ["Langusta na palmie", -605], ["Dariusz Rosiak", -560], ["Zagłębie Sosnowiec Hokej", -400], ["DjSmierc", -399], ["Radio Wnet", -330], ["Anitawu", -275], ["Dolnośląski Inspektorat Ochrony Zwierząt", -260], ["Maciej Kawecki - This is IT", -250], ["Fundacja Szopowisko", -250], ["Grupa Filmowa Darwin ", 310], ["Kolektyw Szpila", 350], ["Fundacja Wzajemnie Pomocni", 370], ["Małgosia Kozłowska", 400], ["Academia Gorila Competition Team", 432], ["Radio Naukowe - podcast Karoliny Głowackiej", 500], ["Karolina Korwin Piotrowska ", 610], ["Speakleash", 630], ["RACE PACE - podcasty o bieganiu", 1559], ["Radio Nowy Świat", 1603]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DariuszRosiak','dzialzagraniczny','dzialzagraniczny','karolinakp','karolinakp','DIOZ','DIOZ','langustanapalmie','Podcastwojennehistorie','Podcastwojennehistorie','radionaukowe','radionaukowe','Gadowski','Gadowski','Vlogcasha','Vlogcasha','podcastex','podcastex','WzajemniePomocni'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
