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


<script type="text/javascript" src="data/u/uprzejmiedonosze.js"></script>

<script type="text/javascript" src="data/p/pmm.js"></script>

<script type="text/javascript" src="data/z/Znakzapytania_eu.js"></script>

<script type="text/javascript" src="data/m/marcinzielinski.js"></script>

<script type="text/javascript" src="data/r/radio357.js"></script>

<script type="text/javascript" src="data/r/radionaukowe.js"></script>

<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>

<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>

<script type="text/javascript" src="data/p/puchaczowka.js"></script>

<script type="text/javascript" src="data/p/pograniczesejny.js"></script>

<script type="text/javascript" src="data/d/dajherbate.js"></script>

<script type="text/javascript" src="data/ś/ŚmiemWątpić.js"></script>

<script type="text/javascript" src="data/m/motoambulans.js"></script>

<script type="text/javascript" src="data/p/profesor_matczak.js"></script>

<script type="text/javascript" src="data/t/tetrycy.js"></script>

<script type="text/javascript" src="data/o/outriders.js"></script>

<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>

<script type="text/javascript" src="data/p/psychodeliki.js"></script>

<script type="text/javascript" src="data/d/darwin.js"></script>

<script type="text/javascript" src="data/g/GrupaMoCarta.js"></script>

<script type="text/javascript" src="data/m/marekczyz.js"></script>

<script type="text/javascript" src="data/r/radiownet.js"></script>

<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>

<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>

<script type="text/javascript" src="data/r/reministry.js"></script>

<script type="text/javascript" src="data/h/historiarealna.js"></script>

<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>

<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>

<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>

<script type="text/javascript" src="data/m/MIŁOŚNICY.js"></script>

<script type="text/javascript" src="data/c/centrumochronymokradel.js"></script>

<script type="text/javascript" src="data/s/StoOsiemdziesiatStopni.js"></script>

<script type="text/javascript" src="data/v/VirtualDream.js"></script>

<script type="text/javascript" src="data/f/foremkacad.js"></script>

<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>

<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>

<script type="text/javascript" src="data/p/podcasthistoryczny.js"></script>

<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>

<script type="text/javascript" src="data/p/podcastex.js"></script>

<script type="text/javascript" src="data/g/Gadowski.js"></script>

<script type="text/javascript" src="data/p/przezswiatnafazie.js"></script>

<script type="text/javascript" src="data/t/TMS.js"></script>

<script type="text/javascript" src="data/l/LukaszRybarskiYES.js"></script>

<script type="text/javascript" src="data/w/wasikowska.js"></script>

<script type="text/javascript" src="data/s/SciFun.js"></script>

<script type="text/javascript" src="data/p/puchaczówka.js"></script>

<script type="text/javascript" src="data/i/igorjanke.js"></script>

<script type="text/javascript" src="data/v/Vlogcasha.js"></script>

<script type="text/javascript" src="data/r/radionowyswiat.js"></script>

<script type="text/javascript" src="data/r/radioem.js"></script>

<script type="text/javascript" src="data/g/globstory.js"></script>

<script type="text/javascript" src="data/d/DIOZ.js"></script>

<script type="text/javascript" src="data/s/sekielski.js"></script>

<script type="text/javascript" src="data/n/niewiemalesiedowiem.js"></script>

<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>


<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Radio Nowy Świat", -2258], ["Śmiem Wątpić", -915], ["SciFun", -762], ["Profesor Matczak", -745], ["Dolnośląski Inspektorat Ochrony Zwierząt", -700], ["Ośrodek Leczenia i Rehabilitacji Dzikich Zwierząt &#34;Puchaczówka&#34;", -610], ["Ośrodek Leczenia i Rehabilitacji Dzikich Zwierząt &#34;Puchaczówka&#34;", -610], ["Polskie Towarzystwo Psychodeliczne", -520], ["Dział Zagraniczny", -505], ["Uwaga Naukowy Bełkot", -442], ["Fundacja Pogranicze", 220], ["Miejska Agenda Parkingowa / Uprzejmie Donoszę", 230], ["Centrum Ochrony Mokradeł", 250], ["Cash", 300], ["180 Stopni", 400], ["Znak Zapytania", 416], ["Train Models Studio", 420], ["Witold Gadowski", 730], ["Radek i Ela Siewniak", 900], ["ForemkaCAD", 920]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak', 'dzialzagraniczny', 'Podcastwojennehistorie', 'radionaukowe', 'tetrycy', 'NaukowyBelkot', 'podkastamerykanski', 'WzajemniePomocni', 'Fundacja_po_DRUGIE', 'DIOZ', 'marcinzielinski', 'profesor_matczak', 'SciFun', 'Gadowski', 'dajherbate', 'radioem', 'podcastex', 'podcasthistoryczny', 'brzmienie-swiata', 'Vlogcasha'],
                    1, 'top_but_two', 'currency');
                }, 100);
            setTimeout(() => {
                drawMulti(
                    ['sekielski', 'niewiemalesiedowiem', 'UsłyszećNaCzas', 'VirtualDream', 'darwin', 'motoambulans', 'TERENWIZJA', 'historiarealna', 'planetaabstrakcja', 'pmm', 'wolskiowojnie', 'przezswiatnafazie', 'igorjanke', 'MIŁOŚNICY', 'wasikowska', 'LukaszRybarskiYES', 'GrupaMoCarta', 'outriders', 'globstory', 'marekczyz'],
                    1, 'biggest_drops', 'currency');
                }, 200);
    };
</script>