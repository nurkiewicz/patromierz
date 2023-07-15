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

<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/o/otwieramyoczy.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/s/skadinad.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/a/adamszolc.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/a/arhneu.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/k/kyudo.js"></script>
<script type="text/javascript" src="data/m/mowisie.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/a/annamaruszeczko.js"></script>
<script type="text/javascript" src="data/g/GrunwaldPoznan.js"></script>
<script type="text/javascript" src="data/m/michalmarszal.js"></script>
<script type="text/javascript" src="data/m/motoaddicts.js"></script>
<script type="text/javascript" src="data/o/ogien-przebudzenia.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/d/dwochtypow.js"></script>
<script type="text/javascript" src="data/k/kwantowo.js"></script>
<script type="text/javascript" src="data/p/prawnik.przedsiebiorcow.js"></script>
<script type="text/javascript" src="data/i/IMlahti.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Adam Szolc", -2500], ["Radio 357", -1351], ["SKĄDINĄD. Podcast Tomasza Stawiszyńskiego", -1120], ["kyudo", -1000], ["arhn.eu", -995], ["Anna Maruszeczko", -800], ["Magda Skorek", -500], ["Dolnośląski Inspektorat Ochrony Zwierząt", -450], ["Kwantowo.pl", -410], ["Cash", -390], ["WKS Grunwald Poznań", 580], ["Moto Addicts", 600], ["Marcin Zieliński | Fundacja Rozpal Wiarę", 625], ["Otwieramy Oczy", 685], ["Mówi Się", 830], ["Tomasz Dorożała - Służba Apostolska \"Ogień Przebudzenia\"", 835], ["Dwie Lewe Ręce", 900], ["Prawnik.przedsiebiorcow", 1195], ["Michał Marszał", 2087], ["Radio Nowy Świat", 6792]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','palhajstv','karolinakp','VirtualDream','sekielski','accantus','radionaukowe','Vlogcasha','rockserwisfm','Zmierzchu','brzmienie-swiata','Podcastwojennehistorie','planetaabstrakcja','poglebiarka','dwochtypow'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
