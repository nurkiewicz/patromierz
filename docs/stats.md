---
title: Globalne statystyki | Patromierz - statystyki Patronite.pl
---

# Największe wzrosty i spadki, ostatnie 7 dni

<div id="largest_changes" class="chart"></div>

# Radio 357 vs. Radio Nowy Świat, wsparcie miesięczne

<div id="two_radios" class="chart"></div>

# Top 20 wsparcie miesięcznie, z wyjątkiem 357 i RNŚ

<div id="top_but_two" class="chart"></div>

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="js/chart.js"></script>

<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/z/znokautujbukmachera.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/a/aska-lawicka.js"></script>
<script type="text/javascript" src="data/t/twojanowaswiadomosc.js"></script>
<script type="text/javascript" src="data/n/nrgeek.js"></script>
<script type="text/javascript" src="data/a/AdrianKostera.js"></script>
<script type="text/javascript" src="data/m/miloszmiedzyinnymi.js"></script>
<script type="text/javascript" src="data/p/Pyrkon.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/m/michalmarszal.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/m/madamemonday.js"></script>
<script type="text/javascript" src="data/k/Koteria.js"></script>
<script type="text/javascript" src="data/k/kampermaniak.js"></script>
<script type="text/javascript" src="data/w/WspolnotaRTCK.js"></script>
<script type="text/javascript" src="data/n/NoiseMagazine.js"></script>
<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/a/anitawu.js"></script>
<script type="text/javascript" src="data/s/spalmyto.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/d/demagog.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/c/chaosiinnepietra.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/c/Coryllus.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/p/podrozodbyta.js"></script>
<script type="text/javascript" src="data/r/Regiment73.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/m/marcinstrzyzewskioRosji.js"></script>
<script type="text/javascript" src="data/t/Tenisklub.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/o/odraniemen.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/p/pmm.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/k/krzysztofwojczal.js"></script>
<script type="text/javascript" src="data/z/zyciewartejestrozmowy.js"></script>
<script type="text/javascript" src="data/a/ANOWA.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/c/CzarneOwce.js"></script>
<script type="text/javascript" src="data/c/CezaryGutowski.js"></script>
<script type="text/javascript" src="data/u/ubogapodcast.js"></script>
<script type="text/javascript" src="data/s/szopowisko.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            drawMulti(
                ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','UsłyszećNaCzas','marcinzielinski','sekielski','historiarealna','palhajstv','VirtualDream','planetaabstrakcja','michalmarszal','darwin','TERENWIZJA','brzmienie-swiata','rockserwisfm','znokautujbukmachera','Zmierzchu','pmm','poglebiarka'], 
                1, 'top_but_two', 'currency');
            drawHorizontal([["Dariusz Rosiak", -830],
["Spalmy to!", -435],
["Gabriel Maciejewski", -380],
["Znokautuj bukmachera", -355],
["Uwaga Naukowy Bełkot", -345],
["Sekielski Brothers Studio", -340],
["Demagog ", -330],
["Chaos i inne piętra - Kaja Kowalewska ", -300],
["Virtual Dream - Piotr Łój", -275],
["TwojaNowaŚwiadomość ", -266],
["Pyrkon - Fantastyczne Miejsce Spotkań", -260],
["Joanna Flis", -260],
["Anitawu", -250],
["Radio 357", -238],
["Cezary Gutowski", -210],
["Czarne Owce", -210],
["ANOWA", -200],
["Adrian Kostera", -200],
["NRGeek", -200],
["Polska Misja Medyczna i Radio 357", -200],
["Koteria - Ośrodek dla kotów miejskich ", 200],
["GRH Inf.-Reg. 73", 200],
["KamperManiak", 200],
["Stowarzyszenie Odra-Niemen", 210],
["Pal Hajs TV", 210],
["Radio Naukowe - podcast Karoliny Głowackiej", 210],
["UBoga. Podcast z Ducha strony", 215],
["Wspólnota RTCK", 240],
["Podróż Odbyta", 240],
["NOISE Magazine", 250],
["Fundacja Szopowisko", 305],
["Aśka Ławicka", 350],
["Planeta Abstrakcja", 370],
["Marcin Strzyżewski", 393],
["Krzysztof Wojczal", 433],
["Magazyn Tenisklub", 470],
["Radio Nowy Świat", 539],
["Jarosław Wolski", 612],
["Miłosz.między.innymi", 940],
["życie warte jest rozmowy", 1150]], 'largest_changes');
    };
</script>
