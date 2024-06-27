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

<script type="text/javascript" src="data/k/krzysztofmazur.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/m/MarcinMajewski.js"></script>
<script type="text/javascript" src="data/o/outriders.js"></script>
<script type="text/javascript" src="data/p/portaldominikanie.js"></script>
<script type="text/javascript" src="data/z/zohanowaty.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/e/Exen.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/r/ruchradzionkow.js"></script>
<script type="text/javascript" src="data/s/schroniskopegasus.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/w/wywiad-z-czlowiekiem-radio-war.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/k/K3.js"></script>
<script type="text/javascript" src="data/d/DziejeNevendaar.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/s/skopzzor.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/w/wasikowska.js"></script>
<script type="text/javascript" src="data/i/igorjanke.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/s/SOWINSKY.js"></script>
<script type="text/javascript" src="data/h/HubertawkowiMilionerzy.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/s/siostryrzeki.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Wojciech Szewko", -810], ["Radio Wnet", -710], ["Radio Nowy Świat", -662], ["Dolnośląski Inspektorat Ochrony Zwierząt", -535], ["K3 podcast Dariusza Bugalskiego", -535], ["Zohanowaty", -500], ["Hubertawkowi Milionerzy", -375], ["BezPlanu", -370], ["Dariusz Rosiak", -365], ["Siostry Rzeki", -340], ["SkopzzoR", 380], ["dominikanie.pl", 415], ["Schronisko Pegasus", 420], ["Wywiad z Człowiekiem", 501], ["Igor Janke. Układ Otwarty", 530], ["Outriders", 565], ["EWA WĄSIKOWSKA-TOMCZYŃSKA", 630], ["Krzysztof Mazur. Geoekonomia", 850], ["Ruch Radzionków", 940], ["DziejeNevendaar", 1500]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','DIOZ','langustanapalmie','dlr','karolinakp','marcinzielinski','wszewko','Gadowski','sekielski','accantus','Vlogcasha','Zmierzchu','UsłyszećNaCzas','rockserwisfm','brzmienie-swiata','BezPlanu','MarcinMajewski','Exen','SOWINSKY'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
