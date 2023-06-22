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

<script type="text/javascript" src="data/k/kartingraport.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/d/dwochtypow.js"></script>
<script type="text/javascript" src="data/k/kezu5osiem100.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/m/mateuszlachowski.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/s/slowfashionsale.js"></script>
<script type="text/javascript" src="data/m/malgosiakozlowska.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/u/urbexhistory.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/s/SOWINSKY.js"></script>
<script type="text/javascript" src="data/p/prawnik.przedsiebiorcow.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/h/hubertwiecek.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/d/DanielPetryczkiewicz.js"></script>
<script type="text/javascript" src="data/z/ziarnoswiadomosci.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/k/KosmosDlaDziewczynek.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/l/lepsiezycie.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Małgosia Kozłowska", -1000], ["KEZUVLOG - Poszukując prawdy...", -870], ["Hubert Więcek", -500], ["Virtual Dream - Piotr Łój", -435], ["Karting Raport", -350], ["Planeta Abstrakcja", -350], ["Daniel Petryczkiewicz", -330], ["Pal Hajs TV", -300], ["Slow Fashion SALE ", -300], ["Sekielski Brothers Studio", -260], ["Stowarzyszenie lePsie życie", 660], ["Marcin Zieliński | Fundacja Rozpal Wiarę", 675], ["Prawnik.przedsiebiorcow", 685], ["Karolina Korwin Piotrowska ", 725], ["Urbex History", 865], ["Usłyszeć Na Czas", 870], ["Mateusz Lachowski", 912], ["Ziarno świadomości", 1000], ["SOWINSKY", 1429], ["Fundacja Kosmos dla Dziewczynek", 4340]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','palhajstv','VirtualDream','Vlogcasha','sekielski','karolinakp','accantus','radionaukowe','Zmierzchu','rockserwisfm','brzmienie-swiata','poglebiarka','dwochtypow','Podcastwojennehistorie','planetaabstrakcja'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
