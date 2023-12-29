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

<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/a/agnieszkapatelska.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/a/Armatki.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/m/mafiapl.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/m/MiejscaWeWroclawiu.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/m/maltreting.js"></script>
<script type="text/javascript" src="data/n/newsmepl.js"></script>
<script type="text/javascript" src="data/m/malgofrej.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/p/patronater.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/m/MichalFilipek.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/p/prawicowo.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/p/powiedzsiostro.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/m/MarekMucharski.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/a/agnieszkazielinska.js"></script>
<script type="text/javascript" src="data/m/magazyndesu.js"></script>
<script type="text/javascript" src="data/a/Ailes.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/a/akirawiktoria.js"></script>
<script type="text/javascript" src="data/p/permakulturaifolk.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/m/my-mobile.js"></script>
<script type="text/javascript" src="data/p/portal.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/a/agna28.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Grupa Ailes", -54858], ["Armatki.net", -54858], ["agna28", -54858], ["RytmyNatury | Agnieszka Patelska-Rabenda", -54858], ["Agnieszka Zielińska", -54858], ["AKira - Wiktoria Poriazow", -54858], ["Tomasz Sebastian", -52915], ["Portal", -52915], ["Powiedz, Siostro", -52915], ["Prawicowo.pl", -52915], ["Mafia PL ", 53515], ["Magazyn Desu", 53515], ["Malgo Frej", 53515], ["Maltreting", 53515], ["Marek Mucharski", 53530], ["Michał Filipek", 53530], ["Miejsca we Wrocławiu ", 53530], ["My-mobile.pl", 53530], ["newsme.pl", 53530], ["Permakultura i folk", 56420]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','radiownet','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','dlr','karolinakp','radionaukowe','wszewko','UsłyszećNaCzas','sekielski','Podcastwojennehistorie','palhajstv','accantus','Vlogcasha','Zmierzchu','BezPlanu','rockserwisfm','planetaabstrakcja'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
