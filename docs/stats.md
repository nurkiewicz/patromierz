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
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/f/fundacjamyzwami.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/d/Demonidias.js"></script>
<script type="text/javascript" src="data/m/majastasko.js"></script>
<script type="text/javascript" src="data/m/MarcinMajewski.js"></script>
<script type="text/javascript" src="data/l/LigaSuperbohaterow.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/m/mocniwduchu.js"></script>
<script type="text/javascript" src="data/a/anitawu.js"></script>
<script type="text/javascript" src="data/l/lkslodz.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/f/fundacjajudyta.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/s/stowarzyszeniemudita.js"></script>
<script type="text/javascript" src="data/a/AlphaPolska.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            drawMulti(
                ['radionowyswiat','radionowyswiat','DariuszRosiak','DariuszRosiak','DIOZ','DIOZ','langustanapalmie','langustanapalmie','dzialzagraniczny','dzialzagraniczny','marcinzielinski','marcinzielinski','UsłyszećNaCzas','UsłyszećNaCzas','sekielski','sekielski','historiarealna','historiarealna','VirtualDream','VirtualDream'], 
                1, 'top_but_two', 'currency');
            drawHorizontal([["Fundacja My z Wami", -480], ["Brzmienie Świata z lotu Drozda", -450], ["Anitawu", -415], ["Dolnośląski Inspektorat Ochrony Zwierząt", -340], ["Langusta na palmie", -325], ["Stowarzyszenie Mudita. Spa dla mam", -307], ["Grupa Filmowa Darwin ", -242], ["Demonidias", -220], ["ŁKS Łódź", -220], ["Mocni w Duchu", -220], ["Pal Hajs TV", 430], ["Maja Staśko", 490], ["Marcin Majewski", 520], ["Alpha Polska", 555], ["Marcin Zieliński", 575], ["Fundacja dla Szczeniąt Judyta", 605], ["Radio Nowy Świat", 967], ["Liga Superbohaterów", 1120], ["Radio 357", 1953], ["Virtual Dream - Piotr Łój", 6835]], 'largest_changes');
    };
</script>
