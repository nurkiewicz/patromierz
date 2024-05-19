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

<script type="text/javascript" src="data/k/kezu5osiem100.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/e/Exen.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/a/astrolife.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/m/miliholicy.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/q/QTStudio.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/m/motoambulans.js"></script>
<script type="text/javascript" src="data/k/karolinabacapogorzelska.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/s/sailoceans.js"></script>
<script type="text/javascript" src="data/l/LukaszNowacki.js"></script>
<script type="text/javascript" src="data/p/pingwinekrehabilitacji.js"></script>
<script type="text/javascript" src="data/k/KosmosDlaDziewczynek.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/a/automatyczni.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Radio Nowy Świat", -4387], ["Łukasz Nowacki", -2420], ["Witold Gadowski", -1100], ["Dolnośląski Inspektorat Ochrony Zwierząt", -950], ["KEZUVLOG - Poszukując prawdy...", -650], ["AUTOmatyczni", -500], ["Julia Bardini-Cimoch", -437], ["QT Studio", -350], ["Jachtem przez Świat - SailOceans", -332], ["Jarosław Wolski", -332], ["AstroLife", 510], ["Podkast amerykański", 560], ["Karolina Korwin Piotrowska ", 595], ["Borkoś", 675], ["Karolina Baca-Pogorzelska", 1067], ["Fundacja Kosmos dla Dziewczynek", 1100], ["Wojciech Szewko", 1110], ["Miliholicy", 1410], ["Radio Wnet", 2390], ["Exen", 5690]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['radiownet','DariuszRosiak','DIOZ','dzialzagraniczny','langustanapalmie','dlr','karolinakp','marcinzielinski','Podcastwojennehistorie','radionaukowe','wszewko','Gadowski','sekielski','palhajstv','Vlogcasha','accantus','Zmierzchu','UsłyszećNaCzas','BezPlanu','poglebiarka'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
