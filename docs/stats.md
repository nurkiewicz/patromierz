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

<script type="text/javascript" src="data/m/Modzelewski.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/a/astrolife.js"></script>
<script type="text/javascript" src="data/f/fisherman.angles.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/i/IntuicjanaTarot.js"></script>
<script type="text/javascript" src="data/c/CezaryGutowski.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/i/igorjanke.js"></script>
<script type="text/javascript" src="data/f/fundacjaernesta.js"></script>
<script type="text/javascript" src="data/m/Magnus.js"></script>
<script type="text/javascript" src="data/p/psalmnakazdydzien.js"></script>
<script type="text/javascript" src="data/d/dwochtypow.js"></script>
<script type="text/javascript" src="data/k/KosmosDlaDziewczynek.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/s/SOWINSKY.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/a/anitawu.js"></script>
<script type="text/javascript" src="data/k/K3.js"></script>
<script type="text/javascript" src="data/d/DziejeNevendaar.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/j/JanekSpiewak.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/n/newsblotter.js"></script>
<script type="text/javascript" src="data/k/Karczmarz.js"></script>
<script type="text/javascript" src="data/j/jakubwiech.js"></script>
<script type="text/javascript" src="data/m/MarcinMajewski.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Dariusz Rosiak", -1065], ["Jakub Wiech", -1000], ["Radio Nowy Świat", -839], ["Dolnośląski Inspektorat Ochrony Zwierząt", -630], ["Usłyszeć Na Czas", -610], ["DziejeNevendaar", -310], [" Fundacja Medycyny Prenatalnej - im. Ernesta Wójcickiego", -295], ["Jazz - Alternatywa - Koncerty - Warsztaty", -250], ["SOWINSKY", -249], ["BezPlanu", -200], ["Radio 357", 270], ["Magnus", 300], ["Karol Modzelewski", 305], ["Newsblotter - Mikrodawki wiedzy psychodelicznej", 325], ["Dział Zagraniczny", 475], ["Dwie Lewe Ręce", 500], ["Psalm Na Każdy Dzień", 500], ["Karolina Korwin Piotrowska ", 580], ["Radio Naukowe - podcast Karoliny Głowackiej", 645], ["Intuicjana Inti Tarot", 800]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['langustanapalmie','dzialzagraniczny','marcinzielinski','karolinakp','accantus','brzmienie-swiata','dlr','dwochtypow','historiarealna','astrolife','darwin','CezaryGutowski','Gadowski','K3','JanekSpiewak','igorjanke','Karczmarz','anitawu','MarcinMajewski','KosmosDlaDziewczynek'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
