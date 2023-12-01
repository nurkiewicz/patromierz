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

<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/o/ORB.js"></script>
<script type="text/javascript" src="data/m/malgosiakozlowska.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/k/K3.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/i/IntuicjanaTarot.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/d/dajherbate.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/m/motoambulans.js"></script>
<script type="text/javascript" src="data/a/alinaczyzewska.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/m/moliwukrainie.js"></script>
<script type="text/javascript" src="data/l/lifeonwheelz.js"></script>
<script type="text/javascript" src="data/c/czescdziewczyny.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Dolnośląski Inspektorat Ochrony Zwierząt", -1485], ["Radio Nowy Świat", -854], ["Grupa Filmowa Darwin ", -660], ["K3 podcast Dariusza Bugalskiego", -640], ["Intuicjana Inti Tarot", -500], ["Cześć Dziewczyny!", -500], ["Pal Hajs TV", -420], ["ORB", -330], ["Paweł Moliński", -300], ["Usłyszeć Na Czas", -290], ["Małgosia Kozłowska", 990], ["Alina Czyżewska", 1000], ["Dział Zagraniczny", 1070], ["Marcin Zieliński | Fundacja Rozpal Wiarę", 1110], ["BezPlanu", 1400], ["Fundacja DAJ HERBATĘ", 1410], ["Life On Wheelz - Influencerzy z Misją", 1415], ["Borkoś", 1990], ["Dwie Lewe Ręce", 2125], ["Radio Wnet", 8870]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','radiownet','dlr','karolinakp','wszewko','UsłyszećNaCzas','radionaukowe','Podcastwojennehistorie','sekielski','accantus','palhajstv','Zmierzchu','Vlogcasha','rockserwisfm','brzmienie-swiata','wolskiowojnie'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
