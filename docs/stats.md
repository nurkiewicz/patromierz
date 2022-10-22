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

<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/b/BezSchematu.js"></script>
<script type="text/javascript" src="data/k/kyudo.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/w/WachU.js"></script>
<script type="text/javascript" src="data/w/WspolnotaRTCK.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/p/pfencrypto.js"></script>
<script type="text/javascript" src="data/1/14wdechownaminute.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/f/fundacjajudyta.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/a/artsby_onikag.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/z/znokautujbukmachera.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/l/luksusowetorebki.js"></script>
<script type="text/javascript" src="data/g/GrupaMoCarta.js"></script>
<script type="text/javascript" src="data/m/miloszszymanski.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/m/michalmarszal.js"></script>
<script type="text/javascript" src="data/h/hubertwiecek.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/f/FundacjaFilmowaPowolany.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/h/historiakolonii.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            drawMulti(
                ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','sekielski','historiarealna','palhajstv','planetaabstrakcja','TERENWIZJA','VirtualDream','brzmienie-swiata','znokautujbukmachera','wolskiowojnie','darwin','rockserwisfm','miloszszymanski','Zmierzchu','poglebiarka'], 
                1, 'top_but_two', 'currency');
            drawHorizontal([["Michał Marszał", -8020], ["Historia Kolonii", -750], ["Bez/Schematu", -440], ["Wspólnota RTCK", -420], ["LUKSUSOWE TOREBKI by Lux&Happy", -375], ["Pfen Crypto", -358], ["Fundacja Filmowa Powołany", -300], ["Hubert Więcek", -280], ["Grupa Filmowa Darwin ", -267], ["Dolnośląski Inspektorat Ochrony Zwierząt", -265], ["Podcast Wojenne Historie", 390], ["WachU", 430], ["artsby_onikag", 500], ["kyudo", 500], ["14 wdechów na minutę - Łukasz Krasoń", 620], ["Dariusz Rosiak", 975], ["Radio 357", 1213], ["Grupa MoCarta", 1505], ["Fundacja dla Szczaniąt Judyta", 1765], ["Radio Nowy Świat", 3487]], 'largest_changes');
    };
</script>
