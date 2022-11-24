---
title: Globalne statystyki | Patromierz
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
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/m/Marcin_Przybylek.js"></script>
<script type="text/javascript" src="data/w/wei.org.pl.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/h/hadzbe.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/g/GrupaMoCarta.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/s/Samolyk.js"></script>
<script type="text/javascript" src="data/z/znokautujbukmachera.js"></script>
<script type="text/javascript" src="data/j/jakubwiech.js"></script>
<script type="text/javascript" src="data/e/ewakaleta.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/k/K3.js"></script>
<script type="text/javascript" src="data/a/AlphaPolska.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/p/popaswpieprz.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/i/Izrealia.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/m/miloszszymanski.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/c/czabanrobiraban.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/s/szopowisko.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/k/kyudo.js"></script>
<script type="text/javascript" src="data/l/Leno_Music.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            drawMulti(
                ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','sekielski','historiarealna','VirtualDream','palhajstv','planetaabstrakcja','TERENWIZJA','brzmienie-swiata','rockserwisfm','darwin','wolskiowojnie','znokautujbukmachera','miloszszymanski','Zmierzchu','Samolyk'], 
                1, 'top_but_two', 'currency');
            drawHorizontal([["Fundacja Szopowisko", -775], ["Dariusz Rosiak", -580], ["Po pas w pieprz. Kambodżańska odyseja.", -510], ["kyudo", -500], ["Sekielski Brothers Studio", -485], ["Warsaw Enterprise Insitutue", -390], ["Hadzbe", -310], ["Grupa MoCarta", -300], ["Izrealia - Agata Tarnowska", -300], ["Leno Music", -300], ["Piotr Czaban", 390], ["Jakub Wiech", 419], ["Tomasz Samołyk", 450], ["K3 podcast Dariusza Bugalskiego", 460], ["Ewa Kaleta", 465], ["Alpha Polska", 500], ["Marcin Sergiusz Przybyłek", 500], ["Podcast Wojenne Historie", 660], ["Radio 357", 1267], ["Radio Nowy Świat", 1375]], 'largest_changes');
    };
</script>
