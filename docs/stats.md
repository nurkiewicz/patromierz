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
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/n/Niedzwiadki.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/m/MarcinMajewski.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/g/gruszetniklublin.js"></script>
<script type="text/javascript" src="data/i/instytutr.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/r/RejsDookolaSwiata.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/t/tubawyszkowa.pl.js"></script>
<script type="text/javascript" src="data/w/wei.org.pl.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/a/aryo.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/m/mateuszlachowski.js"></script>
<script type="text/javascript" src="data/m/marcinstrzyzewskioRosji.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/p/profesor.matczak.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Radio Nowy Świat", -1267], ["Dwie Lewe Ręce", -425], ["Rejs Dookoła Świata - Sailing Crystal", -250], ["Dział Zagraniczny", -235], ["Dolnośląski Inspektorat Ochrony Zwierząt", -210], ["Niedźwiadki Chemart Przemyśl", -200], ["Tuba Wyszkowa", -200], ["Profesor Matczak", -195], ["Pal Hajs TV", -190], ["Poglebiarka.pl", -190], ["Warsaw Enterprise Insitutue", 300], ["Witold Gadowski", 310], ["Marcin Strzyżewski", 350], ["Radio Naukowe - podcast Karoliny Głowackiej", 460], ["Gruszętnik Lublin", 535], ["Aryo", 570], ["Podcast Wojenne Historie", 595], ["Instytut Reportażu", 930], ["Mateusz Lachowski", 1084], ["Fundacja Wzajemnie Pomocni", 1680]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','DIOZ','langustanapalmie','dlr','karolinakp','Podcastwojennehistorie','marcinzielinski','radionaukowe','wszewko','Gadowski','sekielski','accantus','palhajstv','Vlogcasha','Zmierzchu','rockserwisfm','brzmienie-swiata','poglebiarka','MarcinMajewski'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
