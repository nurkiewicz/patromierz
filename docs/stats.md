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

<script type="text/javascript" src="data/z/zakazanehistorie.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/m/motoambulans.js"></script>
<script type="text/javascript" src="data/w/wmiedzyczasie.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/s/sercemiastawarszawa.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/o/odf.js"></script>
<script type="text/javascript" src="data/w/WachU.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/f/fundacjaada.js"></script>
<script type="text/javascript" src="data/a/alphadogz.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/t/twojanowaswiadomosc.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/k/kingayc.js"></script>
<script type="text/javascript" src="data/n/nabiwaku.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/z/zestoickimspokojem.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Marcin Zieliński | Fundacja Rozpal Wiarę", -1020], ["Kinga Żuralska", -800], ["TwojaNowaŚwiadomość ", -510], ["Fundacja Otwarty Dialog", -500], ["Wojciech Szewko", -440], ["NaBiwaku.eu", -400], ["Radio Nowy Świat", -383], ["Alpha Dogz Monika Rakowska", -379], ["Langusta na palmie", -365], ["WachU", -361], ["Ze stoickim spokojem", 565], ["Fundacja ADA", 615], ["Dwie Lewe Ręce", 625], ["Dolnośląski Inspektorat Ochrony Zwierząt", 680], ["Damian Duda", 760], ["Serce Miasta", 810], ["ZAKAZANE HISTORIE", 1005], ["Witold Gadowski", 1015], ["Borkoś", 1065], ["Radio Wnet", 3390]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['radiownet','DariuszRosiak','DIOZ','dzialzagraniczny','langustanapalmie','dlr','marcinzielinski','karolinakp','radionaukowe','wszewko','sekielski','Podcastwojennehistorie','UsłyszećNaCzas','palhajstv','BezPlanu','accantus','Zmierzchu','Gadowski','planetaabstrakcja','Vlogcasha'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
