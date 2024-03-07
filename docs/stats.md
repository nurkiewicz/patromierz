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

<script type="text/javascript" src="data/s/SOWINSKY.js"></script>
<script type="text/javascript" src="data/s/Samolyk.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/l/LSDFarm.js"></script>
<script type="text/javascript" src="data/d/DominikMaluje.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/r/radioem.js"></script>
<script type="text/javascript" src="data/s/spoilermaster.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/r/radiospacja.js"></script>
<script type="text/javascript" src="data/m/marzenaerm.js"></script>
<script type="text/javascript" src="data/w/wolnesady.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/d/DEREVO.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/w/wmiedzyczasie.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/w/www.nabitawbutelke.pl.js"></script>
<script type="text/javascript" src="data/n/napisykoncowe.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/o/ObiegRzeczy.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/p/psierociniec.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/k/Karczmarz.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Radio 357", -4593], ["Fundacja Wolne Sądy", -3025], ["Obieg Rzeczy by Fundacja Splot Społeczny", -580], ["Marzena Erm", -565], ["Dolnośląski Inspektorat Ochrony Zwierząt", -500], ["radiospacja", -500], ["nabitawbutelke", -500], ["DOMINIK MALUJE", -499], ["Virtual Dream - Piotr Łój", -390], ["Tomasz Samołyk", -355], ["Witold Gadowski", 490], ["Podcast Wojenne Historie", 490], ["LSD Farm Magdalena Michalska", 520], ["Napisy Końcowe", 520], ["Langusta na palmie", 535], ["Radio eM 107,6 fm", 550], ["Cash", 560], ["Radio Nowy Świat", 761], ["De Revolutionibus Books", 885], ["Marcin Zieliński | Fundacja Rozpal Wiarę", 1020]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['langustanapalmie','marcinzielinski','karolinakp','radionaukowe','sekielski','planetaabstrakcja','Vlogcasha','rockserwisfm','SOWINSKY','Samolyk','wolskiowojnie','podcastex','historiarealna','spoilermaster','VirtualDream','wmiedzyczasie','Karczmarz','darwin','psierociniec','TERENWIZJA'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
