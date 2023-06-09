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

<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/d/dorotabawolek.js"></script>
<script type="text/javascript" src="data/p/projektsukces.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/m/MarcinMajewski.js"></script>
<script type="text/javascript" src="data/d/dwochtypow.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/u/ubogapodcast.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/c/czilera.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/h/historiaw5minut.js"></script>
<script type="text/javascript" src="data/p/prawnik.przedsiebiorcow.js"></script>
<script type="text/javascript" src="data/a/astrofaza.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/z/zyciewartejestrozmowy.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["życie warte jest rozmowy", -5460], ["Radio 357", -1195], ["Dolnośląski Inspektorat Ochrony Zwierząt", -735], ["Historia Realna - Piotr Zychowicz", -555], ["Projekt Sukces", -499], ["Astrofaza", -415], ["Jarosław Wolski", -396], ["Cash", -375], ["Pal Hajs TV", -325], ["TERENWIZJA", -320], ["Karolina Korwin Piotrowska ", 420], ["Usłyszeć Na Czas", 460], ["Podcast Wojenne Historie", 470], ["CzileraInzyniera", 485], ["UBoga Podcast", 510], ["Witold Gadowski", 545], ["Historia w 5 minut (HW5M)", 550], ["Marcin Majewski", 600], ["Prawnik.przedsiebiorcow", 740], ["Dorota Bawołek", 2000]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','palhajstv','VirtualDream','Vlogcasha','sekielski','accantus','radionaukowe','karolinakp','rockserwisfm','Zmierzchu','brzmienie-swiata','poglebiarka','dwochtypow','Podcastwojennehistorie','planetaabstrakcja'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
