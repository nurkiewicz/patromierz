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

<script type="text/javascript" src="data/m/maciejorlos.js"></script>
<script type="text/javascript" src="data/b/BezSchematu.js"></script>
<script type="text/javascript" src="data/a/anitawu.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/s/SekcjaGimnastyczna.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/e/ewakaleta.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/r/raczek.js"></script>
<script type="text/javascript" src="data/s/Samolyk.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/z/znokautujbukmachera.js"></script>
<script type="text/javascript" src="data/s/shaysome.js"></script>
<script type="text/javascript" src="data/v/v4slav.js"></script>
<script type="text/javascript" src="data/g/GrupaMoCarta.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/m/MistrzGryOnline.js"></script>
<script type="text/javascript" src="data/l/lkslodz.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/p/przystanekswietlica.js"></script>
<script type="text/javascript" src="data/p/psierociniec.js"></script>
<script type="text/javascript" src="data/m/miloszmiedzyinnymi.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/f/fundacjajudyta.js"></script>
<script type="text/javascript" src="data/f/fundacja_kundelek.js"></script>
<script type="text/javascript" src="data/m/miloszszymanski.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            drawMulti(
                ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','sekielski','historiarealna','planetaabstrakcja','TERENWIZJA','VirtualDream','brzmienie-swiata','znokautujbukmachera','darwin','rockserwisfm','wolskiowojnie','miloszszymanski','Zmierzchu','poglebiarka','Samolyk'], 
                1, 'top_but_two', 'currency');
            drawHorizontal([["Maciej Orłoś", -605], ["ŁKS Łódź", -590], ["Tomasz Raczek", -515], ["Dolnośląski Inspektorat Ochrony Zwierząt", -455], ["Anitawu", -435], ["Przystanek Świetlica dla dzieci uchodźców", -430], ["Miłosz.między.innymi", -380], ["Mistrz Gry Online", -360], ["TERENWIZJA", -305], ["Fundacja Kundelek", -300], ["Viacheslav Zarutskii", 350], ["PSIEROCINIEC", 386], ["Shaysome", 430], ["Sekcja Gimnastyczna", 470], ["Pal Hajs TV", 805], ["Fundacja dla Szczeniąt Judyta", 860], ["Ewa Kaleta", 870], ["Bez/Schematu", 1540], ["Radio Nowy Świat", 1541], ["Grupa MoCarta", 2520]], 'largest_changes');
    };
</script>
