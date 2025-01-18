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

<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/p/portaldominikanie.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/w/WachU.js"></script>
<script type="text/javascript" src="data/p/profesor.matczak.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/r/rfp.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/n/napisykoncowe.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/a/anitawu.js"></script>
<script type="text/javascript" src="data/z/zyciewartejestrozmowy.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/d/drpiotrnapierala.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/s/Samolyk.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/s/smartgasm.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/k/K3.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/w/warowniajomsborg.js"></script>
<script type="text/javascript" src="data/r/RamseyUnited.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Dariusz Rosiak", -615], ["K3 podcast Dariusza Bugalskiego", -590], ["WachU", -575], ["Fundacja Historyczna - Warownia Jomsborg", -480], ["Napisy Końcowe", -425], ["Tomasz Samołyk", -365], ["Langusta na palmie", -365], ["Rajdy Formuły Pierwszej", -330], ["Smartgasm", -280], ["życie warte jest rozmowy", -260], ["Piotr Napierała", 620], ["Dolnośląski Inspektorat Ochrony Zwierząt", 635], ["Anitawu", 695], ["Pal Hajs TV", 870], ["Marcin Zieliński | Fundacja Rozpal Wiarę", 960], ["Dział Zagraniczny", 1160], ["Ramsey United - YouTube", 1560], ["Radio Nowy Świat", 1586], ["Profesor Matczak", 1805], ["Radio Wnet", 2360]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','DIOZ','karolinakp','langustanapalmie','Podcastwojennehistorie','radionaukowe','marcinzielinski','Gadowski','Vlogcasha','WzajemniePomocni','sekielski','podcastex','accantus','palhajstv','rockserwisfm','brzmienie-swiata','podkastamerykanski','poglebiarka','portaldominikanie'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
