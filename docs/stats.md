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

<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/a/arhneu.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/r/resetobywatelski.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/s/StrefaBycia.js"></script>
<script type="text/javascript" src="data/l/lifeonwheelz.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/w/www.takdlacpk.org.js"></script>
<script type="text/javascript" src="data/p/portaldominikanie.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/t/totylkoteoria.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/o/outriders.js"></script>
<script type="text/javascript" src="data/z/zwierzecisie.js"></script>
<script type="text/javascript" src="data/p/potemotem.js"></script>
<script type="text/javascript" src="data/r/ralindel.js"></script>
<script type="text/javascript" src="data/c/cudotworcy.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/e/Exen.js"></script>
<script type="text/javascript" src="data/j/jakubwiech.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Outriders", -1050], ["arhn.eu", -555], ["Jakub Wiech", -473], ["Cash", -370], ["Jarosław Wolski", -351], ["Radio Nowy Świat", -350], ["Reset Obywatelski", -350], ["Potem-o-tem ", -324], ["Strefa Bycia", -320], ["Dolnośląski Inspektorat Ochrony Zwierząt", -300], ["Łukasz Sakowski // To Tylko Teoria", 455], ["ralindel", 462], ["Stowarzyszenie Tak Dla CPK", 500], ["Dorota Sumińska", 550], ["Irmina i Marcin Śliwińscy | CUDO.twórcy", 560], ["Fundacja Wzajemnie Pomocni", 930], ["Life On Wheelz - Influencer z Misją", 1025], ["Karolina Korwin Piotrowska ", 2305], ["Exen", 2770], ["Radio Wnet", 4520]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','DIOZ','langustanapalmie','karolinakp','Podcastwojennehistorie','radionaukowe','marcinzielinski','Gadowski','sekielski','accantus','WzajemniePomocni','rockserwisfm','poglebiarka','Zmierzchu','palhajstv','podcastex','Vlogcasha','brzmienie-swiata','portaldominikanie'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
