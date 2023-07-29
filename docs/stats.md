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

<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/m/maopowiedziane.js"></script>
<script type="text/javascript" src="data/m/MIŁOŚNICY.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/a/agatastrzyzewska.js"></script>
<script type="text/javascript" src="data/g/grandeconnection.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/c/CoensCave.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/d/dwochtypow.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/m/malgosiakozlowska.js"></script>
<script type="text/javascript" src="data/w/wywiad-z-czlowiekiem-radio-war.js"></script>
<script type="text/javascript" src="data/n/newsblotter.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/g/GB3.js"></script>
<script type="text/javascript" src="data/z/zuzabaum.js"></script>
<script type="text/javascript" src="data/c/CSM.js"></script>
<script type="text/javascript" src="data/v/VendettaGMOnline.js"></script>
<script type="text/javascript" src="data/o/odf.js"></script>
<script type="text/javascript" src="data/p/panjakubnadaje.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Radio 357", -1301], ["CSM/worship", -1100], ["Langusta na palmie", -560], ["Małgosia Kozłowska", -540], ["Agata Strzyżewska", -510], ["Wywiad z Człowiekiem", -501], ["Brzmienie Świata z lotu Drozda", -475], ["Coens Cave", -366], ["Mao Powiedziane", -300], ["ZUZA BAUM", -300], ["Newsblotter - Mikrodawki wiedzy psychodelicznej", 350], ["GRANDE CONNECTION", 359], ["Vendetta GM Online", 400], ["Pan Jakub Nadaje", 428], ["Fundacja Otwarty Dialog", 500], ["Karolina Korwin Piotrowska ", 575], ["Dwie Lewe Ręce", 900], ["Radio Nowy Świat", 965], ["MIŁOŚNICY", 975], ["Tymek Kucharczyk - kierowca wyścigowy", 2160]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','palhajstv','karolinakp','radionaukowe','accantus','VirtualDream','rockserwisfm','Vlogcasha','sekielski','Zmierzchu','brzmienie-swiata','Podcastwojennehistorie','planetaabstrakcja','poglebiarka','dwochtypow'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
