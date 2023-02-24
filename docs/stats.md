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

<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/k/KatarzynaBlog.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/z/zyciewartejestrozmowy.js"></script>
<script type="text/javascript" src="data/h/hejto.js"></script>
<script type="text/javascript" src="data/c/czabanrobiraban.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/b/businessupdate.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/s/skopzzor.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/m/miejsceslowa.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/k/KTS.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/v/velesar.js"></script>
<script type="text/javascript" src="data/d/DudekoHistorii.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/ś/ŚmiemWątpić.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/d/dwochtypow.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/z/znokautujbukmachera.js"></script>
<script type="text/javascript" src="data/a/AlphaPolska.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["życie warte jest rozmowy", -4990], ["KTS Weszło", -2000], ["Business Update Podcast", -690], ["Velesar", -686], ["Znokautuj bukmachera", -605], ["Alpha Polska", -500], ["Marcin Zieliński", -420], ["Planeta Abstrakcja", -420], ["Virtual Dream - Piotr Łój", -405], ["hejto.pl", -356], ["Radio Naukowe - podcast Karoliny Głowackiej", 500], ["SkopzzoR", 505], ["Piotr Czaban", 510], ["Radio 357", 585], ["Karolina Korwin Piotrowska ", 750], ["Śmiem Wątpić", 1045], ["Dariusz Rosiak", 1060], ["Katarzyna Nowak", 1140], ["Miejsce Słowa", 1290], ["Dudek o Historii", 1420]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','palhajstv','VirtualDream','Vlogcasha','historiarealna','sekielski','accantus','dwochtypow','znokautujbukmachera','planetaabstrakcja','brzmienie-swiata','rockserwisfm','radionaukowe','Zmierzchu','TERENWIZJA'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
