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

<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/m/MarcinMajewski.js"></script>
<script type="text/javascript" src="data/k/Karczmarz.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/f/fundacjaernesta.js"></script>
<script type="text/javascript" src="data/a/astrolife.js"></script>
<script type="text/javascript" src="data/e/ejberzwykrywaczem.js"></script>
<script type="text/javascript" src="data/c/CezaryGutowski.js"></script>
<script type="text/javascript" src="data/j/jakubwiech.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/j/JanekSpiewak.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/u/urbexhistory.js"></script>
<script type="text/javascript" src="data/k/KosmosDlaDziewczynek.js"></script>
<script type="text/javascript" src="data/z/zyciebezstresu.js"></script>
<script type="text/javascript" src="data/k/krzysztofwojczal.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/k/K3.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/i/igorjanke.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/a/anitawu.js"></script>
<script type="text/javascript" src="data/d/dawidkamizela.js"></script>
<script type="text/javascript" src="data/i/IntuicjanaTarot.js"></script>
<script type="text/javascript" src="data/m/Modzelewski.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/d/dwochtypow.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/d/DziejeNevendaar.js"></script>
<script type="text/javascript" src="data/m/Magnus.js"></script>
<script type="text/javascript" src="data/r/RomanFicek.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Jakub Wiech", -1000], ["Radio Nowy Świat", -847], ["Dolnośląski Inspektorat Ochrony Zwierząt", -580], ["Usłyszeć Na Czas", -480], ["DziejeNevendaar", -310], [" Fundacja Medycyny Prenatalnej - im. Ernesta Wójcickiego", -295], ["Marcin Zieliński | Fundacja Rozpal Wiarę", -235], ["Ejber z wykrywaczem na magnesie", -200], ["Urbex History", -200], ["BezPlanu", -150], ["Krzysztof Wojczal", 157], ["Karolina Korwin Piotrowska ", 160], ["Roman Ficek", 200], ["Dawid Kamizela", 210], ["Życie Bez Stresu - Technika Uwalniania", 250], ["Magnus", 300], ["Karol Modzelewski", 315], ["Dział Zagraniczny", 410], ["Dwie Lewe Ręce", 475], ["Intuicjana Inti Tarot", 800]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['langustanapalmie','dzialzagraniczny','marcinzielinski','karolinakp','accantus','brzmienie-swiata','dlr','dwochtypow','historiarealna','astrolife','darwin','CezaryGutowski','Gadowski','K3','JanekSpiewak','igorjanke','Karczmarz','anitawu','MarcinMajewski','KosmosDlaDziewczynek'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
