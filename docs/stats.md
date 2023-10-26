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

<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/j/JackDaniels.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/m/MIŁOŚNICY.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/m/magda-lassota.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/p/pmJezus.js"></script>
<script type="text/javascript" src="data/h/haartpoland.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/p/paw.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/b/bezdomnypelikan.js"></script>
<script type="text/javascript" src="data/d/DopokiWalczysz.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/p/podrozbezpaszportu.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/k/kacpersztukaracing.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/g/GeekFactor.js"></script>
<script type="text/javascript" src="data/p/PolkaWUgandzie.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/a/agatastrzyzewska.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Magda Lassota", -1035], ["MIŁOŚNICY", -1000], ["Dopóki Walczysz & Kazania...", -500], ["Langusta na palmie", -475], ["Zespół  PAW", -350], ["Rafał \"Jack Daniels\" Gładysz", -200], ["Polka w Ugandzie", -200], ["Agata Strzyżewska", -200], ["Bezdomny Pelikan", -200], ["Fundacja HAART Poland", -200], ["Sekielski Brothers Studio", 445], ["Robert Skassa Prowadzi Mnie Jezus", 500], ["Kacper Sztuka Racing", 510], ["Geek Factor", 735], ["Radio Nowy Świat", 918], ["Radio 357", 1334], ["BezPlanu", 1400], ["Podróż bez Paszportu", 1785], ["Wojciech Szewko", 1850], ["Dwie Lewe Ręce", 2525]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','karolinakp','UsłyszećNaCzas','dlr','radionaukowe','accantus','sekielski','palhajstv','Zmierzchu','Podcastwojennehistorie','wszewko','Vlogcasha','rockserwisfm','brzmienie-swiata','VirtualDream','poglebiarka'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
