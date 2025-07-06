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

<script type="text/javascript" src="data/s/SciFun.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/a/AdBuster.js"></script>
<script type="text/javascript" src="data/r/radioem.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/h/Helppsiaki.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/p/profesor.matczak.js"></script>
<script type="text/javascript" src="data/r/rozgrywka.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/w/wmiedzyczasie.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/a/AgnieszkaCegielska.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/f/FundacjaNautilus.js"></script>
<script type="text/javascript" src="data/o/ogniwo.js"></script>
<script type="text/javascript" src="data/a/astrolife.js"></script>
<script type="text/javascript" src="data/s/SOWINSKY.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Uwaga Naukowy Bełkot", -1632], ["Radio Wnet", -1020], ["Marcin Zieliński | Fundacja Rozpal Wiarę", -430], ["Dolnośląski Inspektorat Ochrony Zwierząt", -395], ["Damian Duda", -375], ["Pal Hajs TV", -360], ["Helppsiaki", -350], ["Agnieszka Cegielska", -341], ["Spółdzielnia Ogniwo", -330], ["Cash", -310], ["Profesor Matczak", 280], ["Marek AdBuster Hoffmann", 296], ["Rozgrywka", 300], ["SOWINSKY", 387], ["Radio Naukowe - podcast Karoliny Głowackiej", 455], ["Fundacja Nautilus", 550], ["Podcast Wojenne Historie", 1415], ["Radio Nowy Świat", 3258], ["Dział Zagraniczny", 4050], ["SciFun", 12966]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','karolinakp','NaukowyBelkot','SciFun','Podcastwojennehistorie','radionaukowe','WzajemniePomocni','Gadowski','podkastamerykanski','podcastex','Vlogcasha','accantus','brzmienie-swiata','rockserwisfm','palhajstv','SOWINSKY','Zmierzchu','radioem','astrolife'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
