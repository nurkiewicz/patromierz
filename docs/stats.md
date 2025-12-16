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


<script type="text/javascript" src="data/m/marcinzielinski.js"></script>

<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>

<script type="text/javascript" src="data/r/radiownet.js"></script>

<script type="text/javascript" src="data/s/SciFun.js"></script>

<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>

<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>

<script type="text/javascript" src="data/t/tetrycy.js"></script>

<script type="text/javascript" src="data/d/DIOZ.js"></script>

<script type="text/javascript" src="data/d/darwin.js"></script>

<script type="text/javascript" src="data/a/Adek1-9.js"></script>

<script type="text/javascript" src="data/b/BezPlanu.js"></script>

<script type="text/javascript" src="data/z/Zmierzchu.js"></script>

<script type="text/javascript" src="data/s/SekcjaGimnastyczna.js"></script>

<script type="text/javascript" src="data/o/outriders.js"></script>

<script type="text/javascript" src="data/p/palhajstv.js"></script>

<script type="text/javascript" src="data/m/michalmarszal.js"></script>

<script type="text/javascript" src="data/r/radionaukowe.js"></script>

<script type="text/javascript" src="data/p/puchaczowka.js"></script>

<script type="text/javascript" src="data/v/Vlogcasha.js"></script>

<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>

<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>

<script type="text/javascript" src="data/s/SzkolaPitagoLasa.js"></script>

<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>

<script type="text/javascript" src="data/g/Gadowski.js"></script>

<script type="text/javascript" src="data/h/historiarealna.js"></script>

<script type="text/javascript" src="data/p/pmm.js"></script>

<script type="text/javascript" src="data/r/radio357.js"></script>

<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>

<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>

<script type="text/javascript" src="data/r/radionowyswiat.js"></script>

<script type="text/javascript" src="data/l/lifeonwheelz.js"></script>

<script type="text/javascript" src="data/r/radioem.js"></script>

<script type="text/javascript" src="data/c/Chatka_Golebia.js"></script>

<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>

<script type="text/javascript" src="data/g/globstory.js"></script>

<script type="text/javascript" src="data/v/VirtualDream.js"></script>

<script type="text/javascript" src="data/c/cak-gniazdo.js"></script>

<script type="text/javascript" src="data/m/motoambulans.js"></script>

<script type="text/javascript" src="data/s/sobieski_org_pl.js"></script>

<script type="text/javascript" src="data/m/michalkrol.js"></script>

<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>

<script type="text/javascript" src="data/n/niewiemalesiedowiem.js"></script>

<script type="text/javascript" src="data/c/chelmskiecentrumewangelizacji.js"></script>

<script type="text/javascript" src="data/b/BasiaiKasia.js"></script>

<script type="text/javascript" src="data/m/marekczyz.js"></script>

<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>

<script type="text/javascript" src="data/s/sekielski.js"></script>

<script type="text/javascript" src="data/p/przezswiatnafazie.js"></script>

<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>

<script type="text/javascript" src="data/p/podcastex.js"></script>

<script type="text/javascript" src="data/d/dajherbate.js"></script>

<script type="text/javascript" src="data/l/LukaszRybarskiYES.js"></script>

<script type="text/javascript" src="data/r/richiebandana.js"></script>

<script type="text/javascript" src="data/p/podcasthistoryczny.js"></script>

<script type="text/javascript" src="data/d/demagog.js"></script>


<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["SciFun", -550], ["Michał Król", -470], ["Radio Wnet", -450], ["Szkoła PitagoLasa", -400], ["Uwaga Naukowy Bełkot", -350], ["Pal Hajs TV", -340], ["Demagog", -332], ["Chełmskie Centrum Ewangelizacji", -300], ["Sekcja Gimnastyczna", -270], ["Podkast amerykański", -260], ["Podcast Historyczny", 445], ["Adrian Dzierżenga", 450], ["Richie Bandana", 450], ["Instytut Sobieskiego", 450], ["Centrum Aktywizmu Klimatycznego &#34;Gniazdo&#34; w Warszawie", 500], ["BezPlanu", 540], ["Kasia i Basia", 550], ["Fundacja Chatka Gołębia", 600], ["Ośrodek Leczenia i Rehabilitacji Dzikich Zwierząt &#34;Puchaczówka&#34;", 640], ["Radio Nowy Świat", 5047]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak', 'dzialzagraniczny', 'Podcastwojennehistorie', 'NaukowyBelkot', 'SciFun', 'DIOZ', 'radionaukowe', 'tetrycy', 'niewiemalesiedowiem', 'WzajemniePomocni', 'podkastamerykanski', 'marcinzielinski', 'Fundacja_po_DRUGIE', 'Gadowski', 'dajherbate', 'podcastex', 'Vlogcasha', 'radioem', 'Zmierzchu', 'brzmienie-swiata'],
                    1, 'top_but_two', 'currency');
                }, 100);
            setTimeout(() => {
                drawMulti(
                    ['outriders', 'przezswiatnafazie', 'marekczyz', 'michalmarszal', 'globstory', 'VirtualDream', 'motoambulans', 'TERENWIZJA', 'darwin', 'sekielski', 'LukaszRybarskiYES', 'wolskiowojnie', 'pmm', 'UsłyszećNaCzas', 'historiarealna', 'planetaabstrakcja', 'lifeonwheelz'],
                    1, 'biggest_drops', 'currency');
                }, 200);
    };
</script>