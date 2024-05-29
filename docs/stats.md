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

<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/r/RadoslawPyffel.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/b/BliskoRahamim.js"></script>
<script type="text/javascript" src="data/v/VANDALVAN.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/m/miliholicy.js"></script>
<script type="text/javascript" src="data/b/bartekfetysz.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/n/Niedzwiadki.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/m/mieczyslaw_lusiak.js"></script>
<script type="text/javascript" src="data/m/MarcinMajewski.js"></script>
<script type="text/javascript" src="data/s/SOWINSKY.js"></script>
<script type="text/javascript" src="data/b/Beekeeperpl.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/k/karolinabacapogorzelska.js"></script>
<script type="text/javascript" src="data/i/igorjanke.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/t/tygodnikpodhalanski.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["SOWINSKY", -1700], ["Marcin Zieliński | Fundacja Rozpal Wiarę", -1175], ["Radio Nowy Świat", -1059], ["Radosław Pyffel", -1035], ["Dolnośląski Inspektorat Ochrony Zwierząt", -755], ["Karolina Baca-Pogorzelska", -634], ["Mieczysław Łusiak SJ", -470], ["Langusta na palmie", -445], ["Dział Zagraniczny", -410], ["Podcast Wojenne Historie", -365], ["Marcin Majewski", 355], ["Blisko Rahamim", 365], ["Miliholicy", 380], ["Beekeeper pl", 500], ["VANDALVAN", 575], ["Igor Janke. Układ Otwarty", 925], ["Bartek Fetysz", 930], ["Tygodnik Podhalański", 1080], ["Niedźwiadki Chemart Przemyśl", 1500], ["Radio Wnet", 3410]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['radiownet','DariuszRosiak','DIOZ','dzialzagraniczny','langustanapalmie','dlr','karolinakp','marcinzielinski','wszewko','Podcastwojennehistorie','radionaukowe','Gadowski','sekielski','palhajstv','Vlogcasha','Zmierzchu','accantus','UsłyszećNaCzas','BezPlanu','poglebiarka'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
