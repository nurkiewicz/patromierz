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

<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/b/bycurzekajaca.js"></script>
<script type="text/javascript" src="data/p/paweltabletennis.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/b/bliscomamy.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/p/pilka_na_obcasach.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/p/patronite.gdanska_liga_orlikow.js"></script>
<script type="text/javascript" src="data/b/boguslawjasiewicz.js"></script>
<script type="text/javascript" src="data/p/patryk2703.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/b/BartiFishing.js"></script>
<script type="text/javascript" src="data/b/bhpinaczej.js"></script>
<script type="text/javascript" src="data/b/bikesters.js"></script>
<script type="text/javascript" src="data/o/orleta1920.js"></script>
<script type="text/javascript" src="data/p/Pitcher.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/o/orcholskiyoga.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/b/babciaolgaiwnuczkajustyna.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/b/BeeRoyal.js"></script>
<script type="text/javascript" src="data/b/BiznesSluzbaBogu.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/a/ARTANI.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/p/piast_info.js"></script>
<script type="text/javascript" src="data/p/PanTyper.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/p/Pawel-kielek.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Pan Typer", -56225], ["Paweł Kiełek", -56225], ["Piotr Paweł Niemywski", -56225], ["Witold Orcholski", -56225], ["orleta1920", -56225], ["Gdańska Liga Orlikowa", -56225], ["patryk2703", -56225], ["PawelTableTennis", -56225], ["Piast Info", -56225], ["Karolina Pabin", -56225], ["ARTANI.ORG", 55895], ["Barti Fishing", 55895], ["BeeRoyal - Save the bees", 55895], ["Duszpasterstwo TALENT w Archidiecezji Poznańskiej", 55895], ["Babcia Olga i wnuczka Justyna", 55895], ["BHP Inaczej", 55895], ["Bike Sters", 55895], ["BlisCO Mamy ", 55895], ["Bogusław Jasiewicz", 55895], ["Być Kobietą Urzekającą ", 55895]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','radiownet','DIOZ','langustanapalmie','dzialzagraniczny','dlr','marcinzielinski','karolinakp','radionaukowe','wszewko','UsłyszećNaCzas','sekielski','Podcastwojennehistorie','palhajstv','accantus','BezPlanu','Vlogcasha','Zmierzchu','rockserwisfm','planetaabstrakcja'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
