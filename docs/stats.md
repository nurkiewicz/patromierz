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

<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/h/hubertwiecek.js"></script>
<script type="text/javascript" src="data/k/kyudo.js"></script>
<script type="text/javascript" src="data/d/DudekoHistorii.js"></script>
<script type="text/javascript" src="data/w/wmiedzyczasie.js"></script>
<script type="text/javascript" src="data/a/anitawu.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/s/spalmyto.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/d/dwochtypow.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/s/SilentHeroesPL.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/w/www.japaczesercem.pl.js"></script>
<script type="text/javascript" src="data/m/mowisie.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/m/motoambulans.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/c/Ciekawehistorie.js"></script>
<script type="text/javascript" src="data/r/RomanFicek.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/v/v4slav.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/p/PawelJezowski.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Dudek o Historii", -1936], ["Hubert Więcek", -1150], ["Viacheslav Zarutskii", -1100], ["Sekielski Brothers Studio", -1085], ["Usłyszeć Na Czas", -800], ["Radio 357", -635], ["Anitawu", -590], ["Ciekawe Historie", -580], ["SilentHeroesPL", -500], ["Ja Pacze Sercem", -500], ["Roman Ficek", 368], ["Paweł Jeżowski", 380], ["Damian Duda", 415], ["Spalmy to!", 440], ["Mówi Się", 450], ["kyudo", 500], ["Karolina Korwin Piotrowska ", 515], ["Borkoś", 740], ["Langusta na palmie", 1290], ["Radio Nowy Świat", 2781]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','palhajstv','karolinakp','accantus','VirtualDream','radionaukowe','Vlogcasha','sekielski','rockserwisfm','Zmierzchu','brzmienie-swiata','Podcastwojennehistorie','planetaabstrakcja','poglebiarka','dwochtypow'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
