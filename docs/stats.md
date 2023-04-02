---
title: Globalne statystyki patronite.pl | Patromierz
---

# Największe wzrosty i spadki wsparcia miesięcznego

Ostatnie 7 dni.

<div id="largest_changes" class="chart"></div>

# Radio 357 vs. Radio Nowy Świat, wsparcie miesięczne

<div id="two_radios" class="chart"></div>

# Top 20 wsparcie miesięcznie, z wyjątkiem 357 i RNŚ

<div id="top_but_two" class="chart"></div>

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="js/chart.js"></script>

<script type="text/javascript" src="data/d/dwochtypow.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/m/michalmarszal.js"></script>
<script type="text/javascript" src="data/r/reministry.js"></script>
<script type="text/javascript" src="data/b/BezSchematu.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/t/teobankologia.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/k/kyudo.js"></script>
<script type="text/javascript" src="data/1/14wdechownaminute.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/m/mocniwduchu.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/z/zyciewartejestrozmowy.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/k/ksaweryknotz.js"></script>
<script type="text/javascript" src="data/g/gieniutkowofundacja.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/s/spalmyto.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["życie warte jest rozmowy", -4900], ["Radio 357", -4108], ["Dwóch Typów Podcast", -770], ["Bez/Schematu", -720], ["Michał Marszał", -400], ["Mocni w Duchu", -380], ["Fundacja prosiaczka Eugeniusza Gieniutkowo", -300], ["Radek i Ela Siewniak", -300], ["Podcastex", -270], ["Spalmy to!", -260], ["14 wdechów na minutę - Łukasz Krasoń", 500], ["kyudo", 500], ["Ksawery Knotz OFMCap", 550], ["Teobańkologia", 570], ["Langusta na palmie", 575], ["Karolina Korwin Piotrowska ", 790], ["Dolnośląski Inspektorat Ochrony Zwierząt", 800], ["Virtual Dream - Piotr Łój", 995], ["Radio Nowy Świat", 1118], ["Dariusz Rosiak", 1130]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','palhajstv','Vlogcasha','VirtualDream','sekielski','accantus','historiarealna','dwochtypow','brzmienie-swiata','radionaukowe','rockserwisfm','planetaabstrakcja','Zmierzchu','TERENWIZJA','poglebiarka'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
