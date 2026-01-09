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

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="js/chart.js"></script>


<script type="text/javascript" src="data/d/dzikoprzygody.js"></script>

<script type="text/javascript" src="data/s/SciFun.js"></script>

<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>

<script type="text/javascript" src="data/m/motoambulans.js"></script>

<script type="text/javascript" src="data/l/lifeonwheelz.js"></script>

<script type="text/javascript" src="data/t/tetrycy.js"></script>

<script type="text/javascript" src="data/d/darwin.js"></script>

<script type="text/javascript" src="data/d/DIOZ.js"></script>

<script type="text/javascript" src="data/v/VirtualDream.js"></script>

<script type="text/javascript" src="data/r/radionaukowe.js"></script>

<script type="text/javascript" src="data/m/marcinzielinski.js"></script>

<script type="text/javascript" src="data/d/dajherbate.js"></script>

<script type="text/javascript" src="data/s/swiatusy.js"></script>

<script type="text/javascript" src="data/r/radio357.js"></script>

<script type="text/javascript" src="data/z/zyciewartejestrozmowy.js"></script>

<script type="text/javascript" src="data/s/sekielski.js"></script>

<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>

<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>

<script type="text/javascript" src="data/z/ZupaNaGlownym.js"></script>

<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>

<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>

<script type="text/javascript" src="data/m/michalmarszal.js"></script>

<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>

<script type="text/javascript" src="data/o/outriders.js"></script>

<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>

<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>

<script type="text/javascript" src="data/g/Gadowski.js"></script>

<script type="text/javascript" src="data/r/radiownet.js"></script>

<script type="text/javascript" src="data/e/ekstremalna-droga-krzyzowa.js"></script>

<script type="text/javascript" src="data/z/Zmierzchu.js"></script>

<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>

<script type="text/javascript" src="data/v/Vlogcasha.js"></script>

<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>

<script type="text/javascript" src="data/m/marekczyz.js"></script>

<script type="text/javascript" src="data/g/globstory.js"></script>

<script type="text/javascript" src="data/s/smok_tajwanski.js"></script>

<script type="text/javascript" src="data/r/rockserwisfm.js"></script>

<script type="text/javascript" src="data/r/radioem.js"></script>

<script type="text/javascript" src="data/k/kapitol.js"></script>

<script type="text/javascript" src="data/m/madamemonday.js"></script>

<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>

<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>

<script type="text/javascript" src="data/p/pmm.js"></script>

<script type="text/javascript" src="data/r/radionowyswiat.js"></script>

<script type="text/javascript" src="data/p/podcastex.js"></script>

<script type="text/javascript" src="data/h/historiarealna.js"></script>

<script type="text/javascript" src="data/l/LukaszRybarskiYES.js"></script>

<script type="text/javascript" src="data/p/przezswiatnafazie.js"></script>

<script type="text/javascript" src="data/p/prototypy.js"></script>

<script type="text/javascript" src="data/n/niewiemalesiedowiem.js"></script>


<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Radio Nowy Świat", -2039], ["Radio Wnet", -1435], ["SciFun", -1377], ["Uwaga Naukowy Bełkot", -803], ["życie warte jest rozmowy", -670], ["Podkast amerykański", -570], ["smok tajwański 臺灣龍", -564], ["Nie wiem, ale się dowiem", -460], ["Tetrycy", -435], ["Fundacja po DRUGIE", -432], ["Kamil Sokalski", 330], ["Stowarzyszenie Rozwoju i Promocji Heroes 3 &#34;Kapitol&#34;", 340], ["Ekstremalna Droga Krzyżowa", 345], ["Dzikoprzygody", 368], ["Dariusz Rosiak", 375], ["RADIO ROCKSERWIS FM", 560], ["Światusy", 660], ["Historia Realna - Piotr Zychowicz", 940], ["Zupa na Głównym", 950], ["Dział Zagraniczny", 7010]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak', 'dzialzagraniczny', 'Podcastwojennehistorie', 'NaukowyBelkot', 'SciFun', 'radionaukowe', 'DIOZ', 'tetrycy', 'niewiemalesiedowiem', 'WzajemniePomocni', 'Fundacja_po_DRUGIE', 'marcinzielinski', 'podkastamerykanski', 'dajherbate', 'Gadowski', 'podcastex', 'radioem', 'Vlogcasha', 'Zmierzchu', 'brzmienie-swiata'],
                    1, 'top_but_two', 'currency');
                }, 100);
            setTimeout(() => {
                drawMulti(
                    ['outriders', 'przezswiatnafazie', 'marekczyz', 'michalmarszal', 'globstory', 'TERENWIZJA', 'VirtualDream', 'motoambulans', 'darwin', 'sekielski', 'LukaszRybarskiYES', 'wolskiowojnie', 'pmm', 'UsłyszećNaCzas', 'historiarealna', 'planetaabstrakcja', 'zyciewartejestrozmowy', 'lifeonwheelz', 'madamemonday'],
                    1, 'biggest_drops', 'currency');
                }, 200);
    };
</script>