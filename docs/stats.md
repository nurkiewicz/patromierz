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

<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/b/BezSchematu.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/d/DziejeNevendaar.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/m/motoambulans.js"></script>
<script type="text/javascript" src="data/p/pocztaplanszowkowa.js"></script>
<script type="text/javascript" src="data/p/PawelJezowski.js"></script>
<script type="text/javascript" src="data/m/mocniwduchu.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/b/bartekfetysz.js"></script>
<script type="text/javascript" src="data/e/eva_ajbrin.js"></script>
<script type="text/javascript" src="data/m/maciejkawecki.js"></script>
<script type="text/javascript" src="data/p/podcast-religioznawczy.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/e/elizamichalik.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/w/wolnoscwremoncie.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/3/3DStudioByBUSER.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Bez/Schematu", -1620], ["Borkoś", -1135], ["Maciej Kawecki - This is IT", -1015], ["Dolnośląski Inspektorat Ochrony Zwierząt", -925], ["Bartek Fetysz", -520], ["eva ajbrin", -500], ["Podcast Religioznawczy", -500], ["DziejeNevendaar", -450], ["Sekielski Brothers Studio", -400], ["Podcastex", -378], ["Kremlinka Show🟥 Codzienny Ekonomiczny Przegląd 🟥 Paweł Jeżowski  🟥 Mateusz Lech 🟥 Marek Meissner🟥 Łukasz Kobierski", 540], ["Mocni w Duchu", 650], ["3D Studio by Buser", 780], ["Eliza Michalik", 825], ["Radio Wnet", 940], ["Poczta Planszówkowa", 955], ["Dwie Lewe Ręce", 1000], ["Wojciech Szewko", 1150], ["Radio Nowy Świat", 2770], ["Wolność w Remoncie", 5210]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','dzialzagraniczny','langustanapalmie','dlr','marcinzielinski','karolinakp','radionaukowe','wszewko','Podcastwojennehistorie','Gadowski','sekielski','palhajstv','Vlogcasha','Zmierzchu','accantus','UsłyszećNaCzas','BezPlanu','poglebiarka','planetaabstrakcja'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
