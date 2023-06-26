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

<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/k/KosmosDlaDziewczynek.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/b/bigbookcafe.js"></script>
<script type="text/javascript" src="data/m/MistrzGryOnline.js"></script>
<script type="text/javascript" src="data/z/ziarnoswiadomosci.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/p/prawnik.przedsiebiorcow.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/d/DudekoHistorii.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/z/ZieloneOkno.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/h/hubertwiecek.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/k/kyudo.js"></script>
<script type="text/javascript" src="data/d/dwochtypow.js"></script>
<script type="text/javascript" src="data/d/DziejeNevendaar.js"></script>
<script type="text/javascript" src="data/m/mestoslaw.js"></script>
<script type="text/javascript" src="data/k/K3.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/j/JackDaniels.js"></script>
<script type="text/javascript" src="data/c/CoensCave.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Rafał \"Jack Daniels\" Gładysz", -2000], ["kyudo", -1000], ["Virtual Dream - Piotr Łój", -620], ["K3 podcast Dariusza Bugalskiego", -565], ["Mistrz Gry Online", -540], ["Hubert Więcek", -500], ["Dudek o Historii", -490], ["Mestosław", -450], ["Cash", -395], ["Coens Cave", -350], ["Zielone Okno", 380], ["Big Book Cafe", 390], ["Radio 357", 507], ["DziejeNevendaar", 760], ["Prawnik.przedsiebiorcow", 855], ["Marcin Zieliński | Fundacja Rozpal Wiarę", 865], ["Usłyszeć Na Czas", 970], ["Ziarno świadomości", 1000], ["Fundacja Kosmos dla Dziewczynek", 5785], ["Radio Nowy Świat", 6615]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','palhajstv','VirtualDream','sekielski','karolinakp','Vlogcasha','accantus','radionaukowe','Zmierzchu','rockserwisfm','brzmienie-swiata','poglebiarka','Podcastwojennehistorie','dwochtypow','planetaabstrakcja'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
