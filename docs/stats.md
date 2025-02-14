---
title: Globalne statystyki patronite.pl | Patromierz
---

# Największe wzrosty i spadki wsparcia miesięcznego

Ostatnie 7 dni.

<div id="largest_changes" class="chart"></div>

# Radio 357 vs. Nowy Świat vs. Wnet, wsparcie miesięczne

<div id="two_radios" class="chart"></div>

# Top 20 wsparcie miesięcznie, z wyjątkiem 357, RNŚ i Wnet

<div id="top_but_two" class="chart"></div>

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="js/chart.js"></script>

<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/k/konpoludnie.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/t/tablao.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/w/wmiedzyczasie.js"></script>
<script type="text/javascript" src="data/w/wywiad-z-czlowiekiem-radio-war.js"></script>
<script type="text/javascript" src="data/o/OMZRIK.js"></script>
<script type="text/javascript" src="data/s/speakleash.js"></script>
<script type="text/javascript" src="data/n/niemcywruinie.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/k/kkszaglebiesosnowiec.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/a/AgnieszkaCegielska.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/i/instytutr.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/a/aldo.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/p/pograniczesejny.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/k/Krajski.js"></script>
<script type="text/javascript" src="data/p/portaldominikanie.js"></script>
<script type="text/javascript" src="data/r/reministry.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/w/warowniajomsborg.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Dariusz Rosiak", -740], ["Fundacja Historyczna - Warownia Jomsborg", -500], ["Agnieszka Cegielska", -472], ["Wywiad z Człowiekiem", -471], ["Radek i Ela Siewniak", -400], ["Instytut Reportażu", -370], ["Damian Duda", -300], ["Stanisław Krajski", -290], ["KKS Zagłębie Sosnowiec", -250], ["Tablao Flamenco Warszawa", -240], ["Niemcy w ruinie?", 400], ["OMZRiK", 490], ["Aldona Hartwińska", 560], ["Radio Wnet", 560], ["Fundacja Pogranicze", 630], ["Marcin Zieliński | Fundacja Rozpal Wiarę", 720], ["Konwenty Południowe", 750], ["Karolina Korwin Piotrowska ", 1285], ["Speakleash", 1800], ["Radio Nowy Świat", 3661]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','karolinakp','DIOZ','langustanapalmie','Podcastwojennehistorie','marcinzielinski','radionaukowe','Gadowski','Vlogcasha','WzajemniePomocni','podcastex','sekielski','accantus','palhajstv','brzmienie-swiata','rockserwisfm','podkastamerykanski','poglebiarka','portaldominikanie'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
