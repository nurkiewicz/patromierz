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


<script type="text/javascript" src="data/n/niewiemalesiedowiem.js"></script>

<script type="text/javascript" src="data/w/www_polifonia_edu_pl.js"></script>

<script type="text/javascript" src="data/v/VirtualDream.js"></script>

<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>

<script type="text/javascript" src="data/d/darwin.js"></script>

<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>

<script type="text/javascript" src="data/g/GrupaMoCarta.js"></script>

<script type="text/javascript" src="data/s/szopowisko.js"></script>

<script type="text/javascript" src="data/p/pmm.js"></script>

<script type="text/javascript" src="data/r/radiownet.js"></script>

<script type="text/javascript" src="data/d/DIOZ.js"></script>

<script type="text/javascript" src="data/p/poglebiarka.js"></script>

<script type="text/javascript" src="data/b/BezSchematu.js"></script>

<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>

<script type="text/javascript" src="data/m/motoambulans.js"></script>

<script type="text/javascript" src="data/p/przezswiatnafazie.js"></script>

<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>

<script type="text/javascript" src="data/l/lesnepogotowie.js"></script>

<script type="text/javascript" src="data/l/lifeonwheelz.js"></script>

<script type="text/javascript" src="data/s/sekielski.js"></script>

<script type="text/javascript" src="data/w/wasikowska.js"></script>

<script type="text/javascript" src="data/n/naszbobr.js"></script>

<script type="text/javascript" src="data/m/marekczyz.js"></script>

<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>

<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>

<script type="text/javascript" src="data/k/K3.js"></script>

<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>

<script type="text/javascript" src="data/o/osrodekrehabilitacji.js"></script>

<script type="text/javascript" src="data/m/MagazynAnityGargas.js"></script>

<script type="text/javascript" src="data/h/historiarealna.js"></script>

<script type="text/javascript" src="data/t/tetrycy.js"></script>

<script type="text/javascript" src="data/d/dajherbate.js"></script>

<script type="text/javascript" src="data/p/podcastex.js"></script>

<script type="text/javascript" src="data/g/globstory.js"></script>

<script type="text/javascript" src="data/r/radionaukowe.js"></script>

<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>

<script type="text/javascript" src="data/w/www_slot_org_pl.js"></script>

<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>

<script type="text/javascript" src="data/f/fundacjaada.js"></script>

<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>

<script type="text/javascript" src="data/l/LukaszRybarskiYES.js"></script>

<script type="text/javascript" src="data/r/radionowyswiat.js"></script>

<script type="text/javascript" src="data/s/SciFun.js"></script>

<script type="text/javascript" src="data/p/profesor_matczak.js"></script>

<script type="text/javascript" src="data/m/marcinzielinski.js"></script>

<script type="text/javascript" src="data/p/poland-rebuilding.js"></script>

<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>

<script type="text/javascript" src="data/g/Gadowski.js"></script>

<script type="text/javascript" src="data/o/outriders.js"></script>

<script type="text/javascript" src="data/s/SLOT.js"></script>

<script type="text/javascript" src="data/m/MIŁOŚNICY.js"></script>

<script type="text/javascript" src="data/r/radio357.js"></script>

<script type="text/javascript" src="data/r/radioem.js"></script>

<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>


<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Magazyn Anity Gargas", -955], ["Radio Wnet", -905], ["Radio Nowy Świat", -712], ["Dariusz Rosiak", -710], ["Fundacja Filar", -635], ["Dolnośląski Inspektorat Ochrony Zwierząt", -535], ["Fundacja ADA", -450], ["Ośrodek Rehabilitacji Zwierząt Chronionych", -450], ["Dział Zagraniczny", -440], ["Podkast amerykański", -320], ["Poland Rebuilding Team", 495], ["Fundacja Szopowisko", 500], ["Stowarzyszenie Nasz Bóbr", 520], ["Marcin Zieliński | Fundacja Rozpal Wiarę", 660], ["Polifonia", 700], ["Bez/Schematu", 860], ["Stowarzyszenie Lokalnych Ośrodków Twórczych", 1410], ["Stowarzyszenie Lokalnych Ośrodków Twórczych", 1410], ["Leśne Pogotowie Jacka Wąsińskiego", 1550], ["Profesor Matczak", 3295]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak', 'dzialzagraniczny', 'Podcastwojennehistorie', 'radionaukowe', 'NaukowyBelkot', 'tetrycy', 'SciFun', 'DIOZ', 'WzajemniePomocni', 'marcinzielinski', 'Fundacja_po_DRUGIE', 'podkastamerykanski', 'Gadowski', 'dajherbate', 'radioem', 'podcastex', 'niewiemalesiedowiem', 'brzmienie-swiata', 'K3', 'poglebiarka'],
                    1, 'top_but_two', 'currency');
                }, 100);
            setTimeout(() => {
                drawMulti(
                    ['sekielski', 'niewiemalesiedowiem', 'UsłyszećNaCzas', 'VirtualDream', 'darwin', 'motoambulans', 'TERENWIZJA', 'historiarealna', 'planetaabstrakcja', 'pmm', 'wolskiowojnie', 'przezswiatnafazie', 'MIŁOŚNICY', 'wasikowska', 'LukaszRybarskiYES', 'GrupaMoCarta', 'lifeonwheelz', 'outriders', 'globstory', 'marekczyz'],
                    1, 'biggest_drops', 'currency');
                }, 200);
    };
</script>