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

# Profile z największym spadkiem

<div id="biggest_drops" class="chart"></div>

<script src="https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns@3/dist/chartjs-adapter-date-fns.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-zoom@2/dist/chartjs-plugin-zoom.min.js"></script>
<script type="text/javascript" src="js/chart.js"></script>


<script type="text/javascript" src="data/r/RejsDookolaSwiata.js"></script>

<script type="text/javascript" src="data/g/Gadowski.js"></script>

<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>

<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>

<script type="text/javascript" src="data/r/radioem.js"></script>

<script type="text/javascript" src="data/m/marekczyz.js"></script>

<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>

<script type="text/javascript" src="data/p/podcastex.js"></script>

<script type="text/javascript" src="data/s/sailing_crystal.js"></script>

<script type="text/javascript" src="data/z/zyciewartejestrozmowy.js"></script>

<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>

<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>

<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>

<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>

<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>

<script type="text/javascript" src="data/l/lifeonwheelz.js"></script>

<script type="text/javascript" src="data/o/outriders.js"></script>

<script type="text/javascript" src="data/s/SciFun.js"></script>

<script type="text/javascript" src="data/p/przystudni.js"></script>

<script type="text/javascript" src="data/r/radionowyswiat.js"></script>

<script type="text/javascript" src="data/k/KuchniaMartySawickiej.js"></script>

<script type="text/javascript" src="data/k/kidsalert.js"></script>

<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>

<script type="text/javascript" src="data/m/madamemonday.js"></script>

<script type="text/javascript" src="data/s/saveturkishdogsgogh.js"></script>

<script type="text/javascript" src="data/m/motoambulans.js"></script>

<script type="text/javascript" src="data/k/K3.js"></script>

<script type="text/javascript" src="data/g/globstory.js"></script>

<script type="text/javascript" src="data/p/pmm.js"></script>

<script type="text/javascript" src="data/k/konfitura.js"></script>

<script type="text/javascript" src="data/m/marcinzielinski.js"></script>

<script type="text/javascript" src="data/f/fundacjaada.js"></script>

<script type="text/javascript" src="data/v/VirtualDream.js"></script>

<script type="text/javascript" src="data/a/agnieszkakozak75.js"></script>

<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>

<script type="text/javascript" src="data/d/DIOZ.js"></script>

<script type="text/javascript" src="data/h/historiarealna.js"></script>

<script type="text/javascript" src="data/p/PodZaglamiPrzezSwiat.js"></script>

<script type="text/javascript" src="data/r/radionaukowe.js"></script>

<script type="text/javascript" src="data/r/radiownet.js"></script>

<script type="text/javascript" src="data/d/darwin.js"></script>

<script type="text/javascript" src="data/d/dajherbate.js"></script>

<script type="text/javascript" src="data/l/LukaszRybarskiYES.js"></script>

<script type="text/javascript" src="data/p/przezswiatnafazie.js"></script>

<script type="text/javascript" src="data/n/niewiemalesiedowiem.js"></script>

<script type="text/javascript" src="data/p/poglebiarka.js"></script>

<script type="text/javascript" src="data/p/profesor_matczak.js"></script>

<script type="text/javascript" src="data/s/sekielski.js"></script>

<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>

<script type="text/javascript" src="data/t/tetrycy.js"></script>

<script type="text/javascript" src="data/w/wasikowska.js"></script>

<script type="text/javascript" src="data/p/Piotrowski.js"></script>

<script type="text/javascript" src="data/r/radio357.js"></script>

<script type="text/javascript" src="data/d/DudekoHistorii.js"></script>

<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>


<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Fundacja ADA", -585], ["Dział Zagraniczny", -545], ["Radio Wnet", -535], ["Fundacja Wzajemnie Pomocni", -530], ["Podcast Wojenne Historie", -410], ["Pod Żaglami Przez Świat - @sailing.crystal", -290], ["Sailing Crystal - Rejs Dookoła Świata", -290], ["Pod Żaglami Przez Świat - @sailing.crystal", -290], ["Kuchnia dla ubogich Marty Sawickiej", -280], ["Radio eM 107,6 fm", -260], ["Dudek o Historii", 444], ["Radio Nowy Świat", 446], ["Dariusz Rosiak", 460], ["Maciej Piotrowski", 500], ["Save Turkish Dogs GOGH", 550], ["Konfitura", 580], ["PrzyStudni", 658], ["Agnieszka Kozak", 975], ["Profesor Matczak", 975], ["KidsAlert", 1030]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak', 'dzialzagraniczny', 'Podcastwojennehistorie', 'radionaukowe', 'NaukowyBelkot', 'SciFun', 'tetrycy', 'DIOZ', 'WzajemniePomocni', 'Fundacja_po_DRUGIE', 'marcinzielinski', 'niewiemalesiedowiem', 'podkastamerykanski', 'Gadowski', 'dajherbate', 'podcastex', 'radioem', 'brzmienie-swiata', 'K3', 'poglebiarka'],
                    1, 'top_but_two', 'currency');
                }, 100);
            setTimeout(() => {
                drawMulti(
                    ['sekielski', 'DIOZ', 'UsłyszećNaCzas', 'VirtualDream', 'darwin', 'motoambulans', 'TERENWIZJA', 'historiarealna', 'planetaabstrakcja', 'pmm', 'wolskiowojnie', 'madamemonday', 'przezswiatnafazie', 'zyciewartejestrozmowy', 'wasikowska', 'LukaszRybarskiYES', 'lifeonwheelz', 'outriders', 'globstory', 'marekczyz'],
                    1, 'biggest_drops', 'currency');
                }, 200);
    };
</script>