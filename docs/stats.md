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

<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/s/SOWINSKY.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/g/ghyodo.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/n/NotatnikInwestoraMN.js"></script>
<script type="text/javascript" src="data/n/nitya.js"></script>
<script type="text/javascript" src="data/m/mocniwduchu.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/a/AgnieszkaCegielska.js"></script>
<script type="text/javascript" src="data/s/szopowisko.js"></script>
<script type="text/javascript" src="data/p/podrozbezpaszportu.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/k/K3.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/f/fundacja-ocalenie.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/p/pomagamy-kotom.js"></script>
<script type="text/javascript" src="data/j/jakubwiech.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Marcin Zieliński | Fundacja Rozpal Wiarę", -1070], ["Nitya Patrycja Pruchnik", -1000], ["SOWINSKY", -981], ["Dolnośląski Inspektorat Ochrony Zwierząt", -720], ["Fundacja Szopowisko", -475], ["Wojciech Szewko", -440], ["Dariusz Rosiak", -300], ["Michał Nieradka", -300], ["Gabriel Hyodo", -300], ["Planeta Abstrakcja", -280], ["Fundacja \"Pomagamy kotom, by znalazły dom\"", 450], ["K3 podcast Dariusza Bugalskiego", 460], ["Agnieszka Cegielska", 496], ["Jakub Wiech", 515], ["Mocni w Duchu", 630], ["Podcast Wojenne Historie", 655], ["Podróż bez Paszportu", 665], ["Fundacja Wzajemnie Pomocni", 810], ["Fundacja Ocalenie", 2105], ["Radio Wnet", 3920]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','DIOZ','langustanapalmie','karolinakp','Podcastwojennehistorie','radionaukowe','marcinzielinski','wszewko','Gadowski','sekielski','accantus','palhajstv','Zmierzchu','rockserwisfm','Vlogcasha','poglebiarka','brzmienie-swiata','podkastamerykanski','podcastex'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
