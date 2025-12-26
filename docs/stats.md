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


<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>

<script type="text/javascript" src="data/m/motoambulans.js"></script>

<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>

<script type="text/javascript" src="data/t/tetrycy.js"></script>

<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>

<script type="text/javascript" src="data/r/radioem.js"></script>

<script type="text/javascript" src="data/r/racepace.js"></script>

<script type="text/javascript" src="data/g/Gadowski.js"></script>

<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>

<script type="text/javascript" src="data/b/BasiaiKasia.js"></script>

<script type="text/javascript" src="data/k/KosmosDlaDziewczynek.js"></script>

<script type="text/javascript" src="data/l/LukaszRybarskiYES.js"></script>

<script type="text/javascript" src="data/r/radionowyswiat.js"></script>

<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>

<script type="text/javascript" src="data/d/dzikoprzygody.js"></script>

<script type="text/javascript" src="data/s/Samolyk.js"></script>

<script type="text/javascript" src="data/m/michalmarszal.js"></script>

<script type="text/javascript" src="data/n/niewiemalesiedowiem.js"></script>

<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>

<script type="text/javascript" src="data/r/radio357.js"></script>

<script type="text/javascript" src="data/r/radionaukowe.js"></script>

<script type="text/javascript" src="data/p/podcastex.js"></script>

<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>

<script type="text/javascript" src="data/r/radiownet.js"></script>

<script type="text/javascript" src="data/s/sekielski.js"></script>

<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>

<script type="text/javascript" src="data/p/przezswiatnafazie.js"></script>

<script type="text/javascript" src="data/l/lifeonwheelz.js"></script>

<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>

<script type="text/javascript" src="data/r/ruchradzionkow.js"></script>

<script type="text/javascript" src="data/d/DIOZ.js"></script>

<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>

<script type="text/javascript" src="data/o/outriders.js"></script>

<script type="text/javascript" src="data/r/rockserwisfm.js"></script>

<script type="text/javascript" src="data/v/VirtualDream.js"></script>

<script type="text/javascript" src="data/v/Vlogcasha.js"></script>

<script type="text/javascript" src="data/d/DudekoHistorii.js"></script>

<script type="text/javascript" src="data/k/kgonciarz.js"></script>

<script type="text/javascript" src="data/d/dajherbate.js"></script>

<script type="text/javascript" src="data/j/jakubwiech.js"></script>

<script type="text/javascript" src="data/p/puchaczowka.js"></script>

<script type="text/javascript" src="data/d/darwin.js"></script>

<script type="text/javascript" src="data/s/SciFun.js"></script>

<script type="text/javascript" src="data/p/pmm.js"></script>

<script type="text/javascript" src="data/h/historiarealna.js"></script>

<script type="text/javascript" src="data/m/marekczyz.js"></script>

<script type="text/javascript" src="data/g/globstory.js"></script>

<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>

<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>

<script type="text/javascript" src="data/p/piesniopisarze.js"></script>

<script type="text/javascript" src="data/z/Zmierzchu.js"></script>

<script type="text/javascript" src="data/m/marcinzielinski.js"></script>

<script type="text/javascript" src="data/w/WachU.js"></script>


<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Krzysztof Gonciarz", -2435], ["Dolnośląski Inspektorat Ochrony Zwierząt", -875], ["Tomasz Samołyk", -630], ["Ruch Radzionków", -600], ["Dudek o Historii", -555], ["Pieśniopisarze", -500], ["WachU", -411], ["Kasia i Basia", -330], ["Sekielski Brothers Studio", -330], ["Fundacja Kosmos dla Dziewczynek", -325], ["RACE PACE - podcasty o bieganiu", 401], ["Dzikoprzygody", 404], ["Jakub Wiech", 500], ["Fundacja po DRUGIE", 510], ["SciFun", 525], ["Radio eM 107,6 fm", 590], ["Ośrodek Leczenia i Rehabilitacji Dzikich Zwierząt &#34;Puchaczówka&#34;", 680], ["RADIO ROCKSERWIS FM", 686], ["Radio Wnet", 760], ["Radio Nowy Świat", 5637]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak', 'dzialzagraniczny', 'Podcastwojennehistorie', 'NaukowyBelkot', 'SciFun', 'radionaukowe', 'DIOZ', 'tetrycy', 'niewiemalesiedowiem', 'WzajemniePomocni', 'Fundacja_po_DRUGIE', 'podkastamerykanski', 'marcinzielinski', 'dajherbate', 'Gadowski', 'podcastex', 'radioem', 'Vlogcasha', 'Zmierzchu', 'brzmienie-swiata'],
                    1, 'top_but_two', 'currency');
                }, 100);
            setTimeout(() => {
                drawMulti(
                    ['outriders', 'przezswiatnafazie', 'marekczyz', 'michalmarszal', 'globstory', 'VirtualDream', 'motoambulans', 'TERENWIZJA', 'darwin', 'sekielski', 'LukaszRybarskiYES', 'wolskiowojnie', 'pmm', 'UsłyszećNaCzas', 'historiarealna', 'planetaabstrakcja', 'lifeonwheelz'],
                    1, 'biggest_drops', 'currency');
                }, 200);
    };
</script>