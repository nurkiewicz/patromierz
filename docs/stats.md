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

<script type="text/javascript" src="data/m/madamemonday.js"></script>
<script type="text/javascript" src="data/s/serafine.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/k/Klinowski.js"></script>
<script type="text/javascript" src="data/k/krzysztofmazur.js"></script>
<script type="text/javascript" src="data/w/www.takdlacpk.org.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/c/cudotworcy.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/a/arhneu.js"></script>
<script type="text/javascript" src="data/s/SzkolaPitagoLasa.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/p/portaldominikanie.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/k/KosmosDlaDziewczynek.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/d/damianstefaan.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/e/Exen.js"></script>
<script type="text/javascript" src="data/z/ZbigniewDylewski.js"></script>
<script type="text/javascript" src="data/m/myslozbrodnia.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/n/niekochane.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/p/pograniczesejny.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Exen", -2820], ["Krzysztof Mazur. Geoekonomia", -1000], ["Dolnośląski Inspektorat Ochrony Zwierząt", -905], ["Mateusz Klinowski", -502], ["Witold Gadowski", -380], ["DAMIAN'S CORNER", -365], ["Stowarzyszenie Tak Dla CPK", -350], ["Julka \"Serafine\" Sobieska", -340], ["Joanna Flis", -330], ["arhn.eu", -325], ["Szkoła PitagoLasa", 770], ["Fundacja Kosmos dla Dziewczynek", 885], ["Irmina i Marcin Śliwińscy | CUDO.twórcy", 950], ["Radio Wnet", 960], ["Zbigniew Dylewski", 1025], ["NIEKOCHANE.PL", 1025], ["Karolina Korwin Piotrowska ", 1510], ["Fundacja Pogranicze", 1770], ["Myślozbrodnia", 4115], ["Radio Nowy Świat", 6861]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','karolinakp','DIOZ','langustanapalmie','Podcastwojennehistorie','marcinzielinski','radionaukowe','Gadowski','Vlogcasha','WzajemniePomocni','podcastex','sekielski','accantus','palhajstv','rockserwisfm','brzmienie-swiata','podkastamerykanski','poglebiarka','portaldominikanie'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
