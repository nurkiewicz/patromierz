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

<script type="text/javascript" src="data/s/SebastianAntonowicz.js"></script>
<script type="text/javascript" src="data/g/GrupaMoCarta.js"></script>
<script type="text/javascript" src="data/d/dwochtypow.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/s/SOWINSKY.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/j/jakubwiech.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/w/WachU.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/n/nabiwaku.js"></script>
<script type="text/javascript" src="data/a/anitawu.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/c/CezaryGutowski.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            drawMulti(
                [], 
                1, 'top_but_two', 'currency');
            drawHorizontal([["Historia Realna - Piotr Zychowicz", -385], ["WachU", -375], ["Grupa Filmowa Darwin ", -310], ["Grupa MoCarta", -300], ["Cezary Gutowski", -280], ["Jarosław Wolski", -247], ["Planeta Abstrakcja", -230], ["Dolnośląski Inspektorat Ochrony Zwierząt", -225], ["Usłyszeć Na Czas", -220], ["Poglebiarka.pl", -220], ["Anitawu", 220], ["SOWINSKY", 234], ["Sebastian Antonowicz", 250], ["Podcast Wojenne Historie", 365], ["NaBiwaku.eu", 400], ["Marcin Zieliński", 440], ["Niedźwiecka o Zmierzchu", 500], ["Jakub Wiech", 506], ["Dwóch Typów Podcast", 2130], ["Radio 357", 6812]], 'largest_changes');
    };
</script>
