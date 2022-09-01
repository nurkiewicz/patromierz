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

<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/k/kacpersztukaracing.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/s/Samolyk.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/m/Mileobrazki.js"></script>
<script type="text/javascript" src="data/i/IrytujacyHistoryk.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/m/michalmarszal.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/f/FarmChild.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/u/ubogapodcast.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/h/historiakolonii.js"></script>
<script type="text/javascript" src="data/s/SOWINSKY.js"></script>
<script type="text/javascript" src="data/c/CoensCave.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/f/fundacjaernesta.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/c/crazytravelbag.js"></script>
<script type="text/javascript" src="data/w/WspolnotaRTCK.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/z/znokautujbukmachera.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            drawMulti(
                ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','sekielski','historiarealna','palhajstv','VirtualDream','planetaabstrakcja','TERENWIZJA','michalmarszal','darwin','brzmienie-swiata','rockserwisfm','znokautujbukmachera','Zmierzchu','poglebiarka','Samolyk'], 
                1, 'top_but_two', 'currency');
            drawHorizontal([["Historia Realna - Piotr Zychowicz", -1795], ["Crazytravelbag", -490], ["Kacper Sztuka Racing", -480], ["Radio 357", -460], ["Marcin Zieliński", -405], ["SOWINSKY", -404], ["Historia Kolonii", -400], ["Michał Marszał", -365], ["Irytujący Historyk", -320], ["Virtual Dream - Piotr Łój", -300], ["Wspólnota RTCK", 530], ["Znokautuj bukmachera", 535], ["TERENWIZJA", 590], ["UBoga. Podcast z Ducha strony", 600], ["Coens Cave", 630], ["Miłe Obrazki - Maria Kaczorowska", 648], ["Farm Child ", 2050], ["Dolnośląski Inspektorat Ochrony Zwierząt", 4190], [" Fundacja Medycyny Prenatalnej - im. Ernesta Wójcickiego", 5450], ["Radio Nowy Świat", 5744]], 'largest_changes');
    };
</script>
