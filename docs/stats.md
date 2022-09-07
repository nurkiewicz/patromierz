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

<script type="text/javascript" src="data/k/Karczmarz.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/g/GastroIIRP.js"></script>
<script type="text/javascript" src="data/h/halber.js"></script>
<script type="text/javascript" src="data/s/Samolyk.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/m/Marcin_Przybylek.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/h/hubertwiecek.js"></script>
<script type="text/javascript" src="data/e/ewakaleta.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/k/krvavy.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/n/nowyobywatel.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/r/Radio-Widzew.js"></script>
<script type="text/javascript" src="data/m/michalmarszal.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/p/pmm.js"></script>
<script type="text/javascript" src="data/z/znokautujbukmachera.js"></script>
<script type="text/javascript" src="data/i/igorjanke.js"></script>
<script type="text/javascript" src="data/d/dzikoscwsercu.js"></script>
<script type="text/javascript" src="data/g/GrzegorzCzerwicki.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            drawMulti(
                ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','sekielski','historiarealna','palhajstv','VirtualDream','TERENWIZJA','planetaabstrakcja','michalmarszal','darwin','brzmienie-swiata','rockserwisfm','znokautujbukmachera','Zmierzchu','poglebiarka','Samolyk'], 
                1, 'top_but_two', 'currency');
            drawHorizontal([["Hubert Więcek", -1640], ["Polska Misja Medyczna i Radio 357", -845], ["Historia Realna - Piotr Zychowicz", -525], ["Krvavy", -520], ["Usłyszeć Na Czas", -490], ["Przedwojenne Restauracje, Bary i Hotele ", -400], ["Sekielski Brothers Studio", -370], ["Jarosław Wolski", -366], ["Dzikość w Sercu", -250], ["Kwartalnik „Nowy Obywatel” – pismo na rzecz sprawiedliwości społecznej", -250], ["Igor Janke. Układ otwarty", 450], ["Grzegorz Czerwicki", 490], ["RadioWidzew.pl", 500], ["Ewa Kaleta", 500], ["TERENWIZJA", 960], ["Malgorzata Halber", 1140], ["Marcin Sergiusz Przybyłek", 1370], ["Dolnośląski Inspektorat Ochrony Zwierząt", 2445], ["Karczmarz", 2607], ["Radio Nowy Świat", 20623]], 'largest_changes');
    };
</script>
