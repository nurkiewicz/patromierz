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
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/p/PrawoMarcina.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/d/dwochtypow.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/l/lechiarugby.js"></script>
<script type="text/javascript" src="data/n/NiechToSzlak.js"></script>
<script type="text/javascript" src="data/s/SebastianAntonowicz.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/m/miejsceslowa.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/p/PwM.js"></script>
<script type="text/javascript" src="data/k/kyudo.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/s/samiecbeta.js"></script>
<script type="text/javascript" src="data/g/gospodarpg.js"></script>
<script type="text/javascript" src="data/p/przezswiatnafazie.js"></script>
<script type="text/javascript" src="data/j/JackDaniels.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/i/igorjanke.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/d/DziejeNevendaar.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Miejsce Słowa", -1420], ["Radio Nowy Świat", -1039], ["Polki w medycynie", -1000], ["Langusta na palmie", -515], ["DziejeNevendaar", -500], ["Dariusz Rosiak", -490], ["Dolnośląski Inspektorat Ochrony Zwierząt", -380], ["TERENWIZJA", -380], ["Marcin Zieliński | Fundacja Rozpal Wiarę", -325], ["Rugby Club Lechia Gdańsk", -300], ["kyudo", 500], ["Niech to Szlak", 600], ["Przez Świat na Fazie", 620], ["Dwie Lewe Ręce", 675], ["Sebastian Antonowicz", 800], ["Samiec Beta", 1020], ["Gospoda RPG", 1030], ["Igor Janke. Układ Otwarty", 1155], ["Prawo Marcina", 1500], ["Rafał \"Jack Daniels\" Gładysz", 2050]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','palhajstv','Vlogcasha','VirtualDream','sekielski','accantus','radionaukowe','Zmierzchu','rockserwisfm','brzmienie-swiata','historiarealna','karolinakp','poglebiarka','dwochtypow','planetaabstrakcja'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
