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


<script type="text/javascript" src="data/p/podcastex.js"></script>

<script type="text/javascript" src="data/m/monikaandruszewska.js"></script>

<script type="text/javascript" src="data/r/radiownet.js"></script>

<script type="text/javascript" src="data/d/darwin.js"></script>

<script type="text/javascript" src="data/p/przezswiatnafazie.js"></script>

<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>

<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>

<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>

<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>

<script type="text/javascript" src="data/s/sekielski.js"></script>

<script type="text/javascript" src="data/c/chelmskiecentrumewangelizacji.js"></script>

<script type="text/javascript" src="data/p/puchaczowka.js"></script>

<script type="text/javascript" src="data/d/demagog.js"></script>

<script type="text/javascript" src="data/p/pmm.js"></script>

<script type="text/javascript" src="data/p/palhajstv.js"></script>

<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>

<script type="text/javascript" src="data/g/Gadowski.js"></script>

<script type="text/javascript" src="data/m/motoambulans.js"></script>

<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>

<script type="text/javascript" src="data/r/radio357.js"></script>

<script type="text/javascript" src="data/t/tetrycy.js"></script>

<script type="text/javascript" src="data/r/richiebandana.js"></script>

<script type="text/javascript" src="data/v/VirtualDream.js"></script>

<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>

<script type="text/javascript" src="data/r/radionaukowe.js"></script>

<script type="text/javascript" src="data/s/SzkolaPitagoLasa.js"></script>

<script type="text/javascript" src="data/m/michalmarszal.js"></script>

<script type="text/javascript" src="data/n/niewiemalesiedowiem.js"></script>

<script type="text/javascript" src="data/c/Chatka_Golebia.js"></script>

<script type="text/javascript" src="data/b/BezPlanu.js"></script>

<script type="text/javascript" src="data/d/dajherbate.js"></script>

<script type="text/javascript" src="data/z/Zmierzchu.js"></script>

<script type="text/javascript" src="data/l/LukaszRybarskiYES.js"></script>

<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>

<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>

<script type="text/javascript" src="data/f/FundacjaNautilus.js"></script>

<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>

<script type="text/javascript" src="data/v/Vlogcasha.js"></script>

<script type="text/javascript" src="data/h/historiarealna.js"></script>

<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>

<script type="text/javascript" src="data/g/globstory.js"></script>

<script type="text/javascript" src="data/m/michalkrol.js"></script>

<script type="text/javascript" src="data/o/outriders.js"></script>

<script type="text/javascript" src="data/l/lifeonwheelz.js"></script>

<script type="text/javascript" src="data/r/radionowyswiat.js"></script>

<script type="text/javascript" src="data/d/DIOZ.js"></script>

<script type="text/javascript" src="data/m/marekczyz.js"></script>

<script type="text/javascript" src="data/s/SciFun.js"></script>

<script type="text/javascript" src="data/c/cak-gniazdo.js"></script>

<script type="text/javascript" src="data/r/radioem.js"></script>

<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>

<script type="text/javascript" src="data/s/sobieski_org_pl.js"></script>

<script type="text/javascript" src="data/m/marcinzielinski.js"></script>


<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Dariusz Rosiak", -1045], ["Podkast amerykański", -550], ["Radio Wnet", -550], ["Michał Król", -500], ["SciFun", -416], ["Szkoła PitagoLasa", -400], ["Demagog", -334], ["Witold Gadowski", -320], ["Chełmskie Centrum Ewangelizacji", -300], ["Pal Hajs TV", -290], ["Instytut Sobieskiego", 450], ["Richie Bandana", 460], ["Centrum Aktywizmu Klimatycznego &#34;Gniazdo&#34; w Warszawie", 485], ["Monika Andruszewska - wojenny korespondent", 500], ["Fundacja Nautilus", 505], ["Fundacja Chatka Gołębia", 600], ["Ośrodek Leczenia i Rehabilitacji Dzikich Zwierząt &#34;Puchaczówka&#34;", 610], ["BezPlanu", 740], ["Fundacja DAJ HERBATĘ", 765], ["Radio Nowy Świat", 4370]], 'largest_changes');
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