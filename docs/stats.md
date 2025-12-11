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

# Profile z największym spadkiem (kiedyś duże, dziś znacznie mniejsze)

Profile, które kiedyś miały duże wsparcie miesięczne (min. 5000 zł), ale straciły ponad 50% w porównaniu do swojego maksimum.

<div id="biggest_drops" class="chart"></div>

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="js/chart.js"></script>


<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>

<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>

<script type="text/javascript" src="data/m/madamemonday.js"></script>

<script type="text/javascript" src="data/d/DudekoHistorii.js"></script>

<script type="text/javascript" src="data/b/BasiaiKasia.js"></script>

<script type="text/javascript" src="data/t/tzt.js"></script>

<script type="text/javascript" src="data/g/globstory.js"></script>

<script type="text/javascript" src="data/p/papierwdole666.js"></script>

<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>

<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>

<script type="text/javascript" src="data/m/motoambulans.js"></script>

<script type="text/javascript" src="data/g/gamemusic.js"></script>

<script type="text/javascript" src="data/p/podcastex.js"></script>

<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>

<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>

<script type="text/javascript" src="data/h/historiarealna.js"></script>

<script type="text/javascript" src="data/r/radionowyswiat.js"></script>

<script type="text/javascript" src="data/k/krokiet.js"></script>

<script type="text/javascript" src="data/m/marekczyz.js"></script>

<script type="text/javascript" src="data/m/magda-lassota.js"></script>

<script type="text/javascript" src="data/m/miloszmiedzyinnymi.js"></script>

<script type="text/javascript" src="data/r/radionaukowe.js"></script>

<script type="text/javascript" src="data/d/DIOZ.js"></script>

<script type="text/javascript" src="data/g/Gadowski.js"></script>

<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>

<script type="text/javascript" src="data/t/tetrycy.js"></script>

<script type="text/javascript" src="data/s/SciFun.js"></script>

<script type="text/javascript" src="data/m/motodziennik.js"></script>

<script type="text/javascript" src="data/w/wasikowska.js"></script>

<script type="text/javascript" src="data/b/BezSchematu.js"></script>

<script type="text/javascript" src="data/m/michalmarszal.js"></script>

<script type="text/javascript" src="data/v/Vlogcasha.js"></script>

<script type="text/javascript" src="data/p/pixel.js"></script>

<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>

<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>

<script type="text/javascript" src="data/h/historyhiking.js"></script>

<script type="text/javascript" src="data/f/fundacjaernesta.js"></script>

<script type="text/javascript" src="data/j/jagoda-grondecka.js"></script>

<script type="text/javascript" src="data/v/VirtualDream.js"></script>

<script type="text/javascript" src="data/r/radio357.js"></script>

<script type="text/javascript" src="data/d/dajherbate.js"></script>

<script type="text/javascript" src="data/n/niewiemalesiedowiem.js"></script>

<script type="text/javascript" src="data/r/radioem.js"></script>

<script type="text/javascript" src="data/p/puchaczowka.js"></script>

<script type="text/javascript" src="data/o/outriders.js"></script>

<script type="text/javascript" src="data/z/Zmierzchu.js"></script>

<script type="text/javascript" src="data/p/przezswiatnafazie.js"></script>

<script type="text/javascript" src="data/z/zyciewartejestrozmowy.js"></script>

<script type="text/javascript" src="data/t/teatrzelazny.js"></script>

<script type="text/javascript" src="data/w/WspolnotaRTCK.js"></script>

<script type="text/javascript" src="data/r/radiownet.js"></script>

<script type="text/javascript" src="data/c/CubaMSF.js"></script>

<script type="text/javascript" src="data/m/marcinzielinski.js"></script>

<script type="text/javascript" src="data/w/WDWAutomotive.js"></script>


<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["życie warte jest rozmowy", -670], ["Nie wiem, ale się dowiem", -630], ["SciFun", -539], ["Uwaga Naukowy Bełkot", -487], ["Historia Realna - Piotr Zychowicz", -445], ["Podcast Wojenne Historie", -440], ["MotoDziennik ", -400], ["EWA WĄSIKOWSKA-TOMCZYŃSKA", -400], ["Joanna Flis", -360], ["Fundacja Wzajemnie Pomocni", -300], ["Dudek o Historii", 268], ["Kasia i Basia", 290], ["Misja Camajuaní", 300], ["Podkast amerykański", 300], ["Radio Naukowe - podcast Karoliny Głowackiej", 325], ["Fundacja Game Music", 400], ["Borkoś", 500], ["Bez/Schematu", 820], ["Ośrodek Leczenia i Rehabilitacji Dzikich Zwierząt &#34;Puchaczówka&#34;", 1000], ["Radio Nowy Świat", 6003]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak', 'dzialzagraniczny', 'Podcastwojennehistorie', 'NaukowyBelkot', 'SciFun', 'DIOZ', 'radionaukowe', 'tetrycy', 'niewiemalesiedowiem', 'WzajemniePomocni', 'podkastamerykanski', 'marcinzielinski', 'Fundacja_po_DRUGIE', 'Gadowski', 'dajherbate', 'podcastex', 'Vlogcasha', 'radioem', 'Zmierzchu', 'brzmienie-swiata'],
                    1, 'top_but_two', 'currency');
                }, 100);
            setTimeout(() => {
                drawMulti(
                    ['pixel', 'teatrzelazny', 'WDWAutomotive', 'krokiet', 'outriders', 'przezswiatnafazie', 'marekczyz', 'fundacjaernesta', 'papierwdole666', 'michalmarszal', 'magda-lassota', 'tzt', 'globstory', 'miloszmiedzyinnymi', 'jagoda-grondecka', 'historyhiking', 'VirtualDream', 'motoambulans', 'TERENWIZJA', 'WspolnotaRTCK'],
                    1, 'biggest_drops', 'currency');
                }, 200);
    };
</script>