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

<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/k/K3.js"></script>
<script type="text/javascript" src="data/a/agnieszkazebradziadek.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/l/lkslodz.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/k/kyudo.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/s/SOWINSKY.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/t/teobankologia.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/c/Ciekawehistorie.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/p/piotrzylka.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/u/ubogapodcast.js"></script>
<script type="text/javascript" src="data/k/kartingraport.js"></script>
<script type="text/javascript" src="data/d/dwochtypow.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["UBoga Podcast", -1950], ["Dwóch Typów Podcast", -835], ["Virtual Dream - Piotr Łój", -705], ["Radio 357", -577], ["ŁKS Łódź", -575], ["Usłyszeć Na Czas", -520], ["Piotr Żyłka", -510], ["Marcin Zieliński", -455], ["Teobańkologia", -360], ["Jarosław Wolski", -315], ["kyudo", 500], ["Poglebiarka.pl", 510], ["Ciekawe Historie", 523], ["Karting Raport", 550], ["K3 podcast Dariusza Bugalskiego", 565], ["SOWINSKY", 601], ["Karolina Korwin Piotrowska ", 730], ["Radio Nowy Świat", 908], ["Agnieszka \"Zebra\" Dziadek", 1030], ["Dolnośląski Inspektorat Ochrony Zwierząt", 2810]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','palhajstv','Vlogcasha','VirtualDream','sekielski','accantus','historiarealna','dwochtypow','brzmienie-swiata','planetaabstrakcja','rockserwisfm','radionaukowe','Zmierzchu','TERENWIZJA','poglebiarka'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
