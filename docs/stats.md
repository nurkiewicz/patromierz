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
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/s/SOWINSKY.js"></script>
<script type="text/javascript" src="data/l/LubieMojeZycie.js"></script>
<script type="text/javascript" src="data/n/Napromieniowani.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/a/astrolife.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/a/arhneu.js"></script>
<script type="text/javascript" src="data/m/mowisie.js"></script>
<script type="text/javascript" src="data/t/tomaszlis.js"></script>
<script type="text/javascript" src="data/m/mocniwduchu.js"></script>
<script type="text/javascript" src="data/p/pkod.js"></script>
<script type="text/javascript" src="data/r/radioem.js"></script>
<script type="text/javascript" src="data/i/IzaMichalewicz.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/s/SciFun.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/m/Modzelewski.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/a/azyldlakrolikow.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/d/dobrywieczoreuropo.js"></script>
<script type="text/javascript" src="data/n/niewiemalesiedowiem.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Radio Nowy Świat", -1366], ["Mówi Się", -960], ["Uwaga Naukowy Bełkot", -459], ["Radio Wnet", -350], ["SOWINSKY", -331], ["Dobry wieczór Europo!", -290], ["Mocni w Duchu", -290], ["Nie wiem, ale się dowiem", -285], ["Iza Michalewicz", -250], ["Karol Modzelewski", -250], ["Tomasz Lis", 320], ["Napromieniowani.pl", 330], ["Karolina Korwin Piotrowska ", 365], ["LubieMojeZycie", 370], ["arhn.eu", 500], ["Orkiestra Kamiliańska", 500], ["Dział Zagraniczny", 555], ["Fundacja Azyl dla Królików", 630], ["SciFun", 745], ["Podcast Wojenne Historie", 985]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','karolinakp','NaukowyBelkot','SciFun','Podcastwojennehistorie','langustanapalmie','radionaukowe','marcinzielinski','WzajemniePomocni','Gadowski','podkastamerykanski','podcastex','Vlogcasha','accantus','poglebiarka','palhajstv','SOWINSKY','radioem','astrolife'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
