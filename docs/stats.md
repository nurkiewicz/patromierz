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

<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/d/dwochtypow.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/s/SOWINSKY.js"></script>
<script type="text/javascript" src="data/n/neybero.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/m/majalaura.js"></script>
<script type="text/javascript" src="data/m/majastasko.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/n/Nejtan.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/z/znokautujbukmachera.js"></script>
<script type="text/javascript" src="data/p/pixel.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/t/tourdekonstytucja.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/c/czabanrobiraban.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/m/marcinstrzyzewskioRosji.js"></script>
<script type="text/javascript" src="data/z/ZewOceanu.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Maja Laura", -1000], ["Neybero", -1000], ["Dolnośląski Inspektorat Ochrony Zwierząt", -920], ["Virtual Dream - Piotr Łój", -890], ["Grupa Filmowa Darwin ", -789], ["PIXEL", -663], ["Maja Staśko", -490], ["Historia Realna - Piotr Zychowicz", -480], ["Podcastex", -421], ["Sekielski Brothers Studio", -415], ["Tour de Konstytucja", 368], ["Usłyszeć Na Czas", 380], ["SOWINSKY", 454], ["Świat według Nejtana", 490], ["Marcin Strzyżewski", 517], ["Witold Gadowski", 520], ["Piotr Czaban", 660], ["Karolina Korwin Piotrowska ", 720], ["Zew Oceanu - dookoła świata, raz jeszcze", 1000], ["Radio Nowy Świat", 1399]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','palhajstv','VirtualDream','historiarealna','Vlogcasha','sekielski','dwochtypow','accantus','znokautujbukmachera','planetaabstrakcja','brzmienie-swiata','rockserwisfm','TERENWIZJA','Zmierzchu','radionaukowe'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
