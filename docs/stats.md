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

<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/p/portaldominikanie.js"></script>
<script type="text/javascript" src="data/s/stomilolsztynpl.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/m/mlodyfree.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/r/radioem.js"></script>
<script type="text/javascript" src="data/d/drpiotrnapierala.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/u/urbexhistory.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/n/NoiseMagazine.js"></script>
<script type="text/javascript" src="data/a/AgnieszkaCegielska.js"></script>
<script type="text/javascript" src="data/c/Cronica.js"></script>
<script type="text/javascript" src="data/w/warowniajomsborg.js"></script>
<script type="text/javascript" src="data/w/WachU.js"></script>
<script type="text/javascript" src="data/k/krzysztofmazur.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/p/profesor.matczak.js"></script>
<script type="text/javascript" src="data/n/napisykoncowe.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Krzysztof Mazur. Geoekonomia", -1025], ["Radio Wnet", -790], ["Witold Gadowski", -560], ["Napisy Końcowe", -550], ["Urbex History", -522], ["Fundacja Historyczna - Warownia Jomsborg", -500], ["WachU", -484], ["stomilolsztynpl", -410], ["Langusta na palmie", -335], ["NOISE Magazine", -260], ["Cronica", 500], ["Agnieszka Cegielska", 509], ["Mlodyfree", 520], ["Radio eM 107,6 fm", 540], ["Marcin Zieliński | Fundacja Rozpal Wiarę", 715], ["Radio Nowy Świat", 741], ["Dział Zagraniczny", 860], ["Piotr Napierała", 890], ["Dolnośląski Inspektorat Ochrony Zwierząt", 900], ["Profesor Matczak", 1545]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','DIOZ','karolinakp','langustanapalmie','Podcastwojennehistorie','marcinzielinski','radionaukowe','Gadowski','Vlogcasha','WzajemniePomocni','sekielski','podcastex','accantus','palhajstv','rockserwisfm','brzmienie-swiata','podkastamerykanski','poglebiarka','portaldominikanie'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
