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

<script type="text/javascript" src="data/s/StrataCzasu.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/k/Krajski.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/d/dwochtypow.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/a/agnieszkazebradziadek.js"></script>
<script type="text/javascript" src="data/s/strzelnicatv.js"></script>
<script type="text/javascript" src="data/f/FundacjaNautilus.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/t/twojanowaswiadomosc.js"></script>
<script type="text/javascript" src="data/d/DajBadyla.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/m/malgosiakozlowska.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/b/bigbookcafe.js"></script>
<script type="text/javascript" src="data/a/adiv.js"></script>
<script type="text/javascript" src="data/s/szopowisko.js"></script>
<script type="text/javascript" src="data/u/ubogapodcast.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/f/FRAGOUT.js"></script>
<script type="text/javascript" src="data/m/martindesimmons.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Agnieszka \"Zebra\" Dziadek", -945], ["Dariusz Rosiak", -685], ["Martin de Simmons", -570], ["Strata Czasu", -500], ["Fundacja Nautilus", -450], ["Stanisław Krajski", -370], ["Sekielski Brothers Studio", -370], ["UBoga Podcast", -340], ["Daj Badyla", -270], ["Grupa Filmowa Darwin ", -264], ["AdiV - @adirunning na TikTok", 540], ["TwojaNowaŚwiadomość ", 545], ["Strzelnica Tv", 550], ["Fundacja Szopowisko", 550], ["Big Book Cafe", 610], ["FRAG OUT! Magazine", 630], ["Karolina Korwin Piotrowska ", 670], ["Małgosia Kozłowska", 970], ["Radio 357", 2056], ["Radio Nowy Świat", 3386]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','palhajstv','Vlogcasha','VirtualDream','sekielski','radionaukowe','rockserwisfm','historiarealna','Zmierzchu','brzmienie-swiata','dwochtypow','planetaabstrakcja','poglebiarka','TERENWIZJA','karolinakp'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
