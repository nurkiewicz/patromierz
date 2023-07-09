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

<script type="text/javascript" src="data/m/Modzelewski.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/k/kulturaposwiecona.js"></script>
<script type="text/javascript" src="data/d/dobre-wiadomosci.js"></script>
<script type="text/javascript" src="data/e/edu-partyzant.js"></script>
<script type="text/javascript" src="data/m/madamemonday.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/k/KosmosDlaDziewczynek.js"></script>
<script type="text/javascript" src="data/d/dwochtypow.js"></script>
<script type="text/javascript" src="data/m/mowisie.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/a/albogruboalbowcale.js"></script>
<script type="text/javascript" src="data/j/JustynaKopinska.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/p/PrawoMarcina.js"></script>
<script type="text/javascript" src="data/h/hubertwiecek.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/m/michalmarszal.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/y/YouMyGod.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Michał Marszał", -2382], ["Prawo Marcina", -2010], ["Radio 357", -1832], ["Justyna Kopińska", -900], ["YouMyGod", -700], ["Dobre Wiadomości", -510], ["Artur Tutka", -500], ["Karol Modzelewski", -465], ["Joanna Flis", -420], ["Pal Hajs TV", -400], ["Albogruboalbowcale", 420], ["Historia Realna - Piotr Zychowicz", 515], ["Fundacja Kosmos dla Dziewczynek", 560], ["Kultura Poświęcona", 629], ["Dwie Lewe Ręce", 650], ["Hubert Więcek", 650], ["Dariusz Rosiak", 970], ["Dolnośląski Inspektorat Ochrony Zwierząt", 1695], ["Mówi Się", 1900], ["Radio Nowy Świat", 6369]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','palhajstv','karolinakp','VirtualDream','sekielski','accantus','Vlogcasha','radionaukowe','rockserwisfm','Zmierzchu','brzmienie-swiata','poglebiarka','planetaabstrakcja','Podcastwojennehistorie','dwochtypow'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
