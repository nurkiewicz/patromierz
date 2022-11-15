---
title: Globalne statystyki | Patromierz
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

<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/l/LigaSuperbohaterow.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/m/majastasko.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/a/anitawu.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/d/Demonidias.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/m/manuelagretkowska.js"></script>
<script type="text/javascript" src="data/m/MarcinMajewski.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/a/AlphaPolska.js"></script>
<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/d/drpiotrnapierala.js"></script>
<script type="text/javascript" src="data/f/fundacjamyzwami.js"></script>
<script type="text/javascript" src="data/m/mocniwduchu.js"></script>
<script type="text/javascript" src="data/f/fundacjajudyta.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            drawMulti(
                ['radionowyswiat','radionowyswiat','DariuszRosiak','DariuszRosiak','DIOZ','DIOZ','langustanapalmie','langustanapalmie','dzialzagraniczny','dzialzagraniczny','marcinzielinski','marcinzielinski','UsłyszećNaCzas','UsłyszećNaCzas','sekielski','sekielski','historiarealna','historiarealna','VirtualDream','palhajstv'], 
                1, 'top_but_two', 'currency');
            drawHorizontal([["Brzmienie Świata z lotu Drozda", -495], ["Fundacja My z Wami", -480], ["Langusta na palmie", -330], ["Manuela Gretkowska", -285], ["Piotr Napierała", -220], ["Mocni w Duchu", -220], ["Anitawu", -215], ["Podcastex", -205], ["Demonidias", -200], ["Fundacja po DRUGIE", -200], ["Pal Hajs TV", 460], ["Fundacja dla Szczeniąt Judyta", 485], ["Maja Staśko", 490], ["Marcin Majewski", 500], ["Alpha Polska", 505], ["Marcin Zieliński", 625], ["Liga Superbohaterów", 810], ["Radio Nowy Świat", 950], ["Radio 357", 1338], ["Virtual Dream - Piotr Łój", 6180]], 'largest_changes');
    };
</script>
