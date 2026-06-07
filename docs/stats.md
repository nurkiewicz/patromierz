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


<script type="text/javascript" src="data/w/www_podsztanga_pl.js"></script>

<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>

<script type="text/javascript" src="data/v/VirtualDream.js"></script>

<script type="text/javascript" src="data/s/sekielski.js"></script>

<script type="text/javascript" src="data/s/StoOsiemdziesiatStopni.js"></script>

<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>

<script type="text/javascript" src="data/r/radionaukowe.js"></script>

<script type="text/javascript" src="data/g/Gadowski.js"></script>

<script type="text/javascript" src="data/a/agarogala.js"></script>

<script type="text/javascript" src="data/m/marekczyz.js"></script>

<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>

<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>

<script type="text/javascript" src="data/w/wmiedzyczasie.js"></script>

<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>

<script type="text/javascript" src="data/r/radionowyswiat.js"></script>

<script type="text/javascript" src="data/k/K3.js"></script>

<script type="text/javascript" src="data/h/historiarealna.js"></script>

<script type="text/javascript" src="data/j/Jakimowicz.js"></script>

<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>

<script type="text/javascript" src="data/s/SciFun.js"></script>

<script type="text/javascript" src="data/d/DIOZ.js"></script>

<script type="text/javascript" src="data/p/podcastex.js"></script>

<script type="text/javascript" src="data/m/MateuszChrobok.js"></script>

<script type="text/javascript" src="data/m/marcinzielinski.js"></script>

<script type="text/javascript" src="data/d/dajherbate.js"></script>

<script type="text/javascript" src="data/f/fundacja_chartoterapia.js"></script>

<script type="text/javascript" src="data/r/rockserwisfm.js"></script>

<script type="text/javascript" src="data/s/stowarzyszenie_chartoterapia.js"></script>

<script type="text/javascript" src="data/m/motoambulans.js"></script>

<script type="text/javascript" src="data/c/CubaMSF.js"></script>

<script type="text/javascript" src="data/d/darwin.js"></script>

<script type="text/javascript" src="data/g/GrupaMoCarta.js"></script>

<script type="text/javascript" src="data/p/pmm.js"></script>

<script type="text/javascript" src="data/o/outriders.js"></script>

<script type="text/javascript" src="data/z/zaraztamwjade.js"></script>

<script type="text/javascript" src="data/i/igorjanke.js"></script>

<script type="text/javascript" src="data/-/-neuroatypowa.js"></script>

<script type="text/javascript" src="data/n/niewiemalesiedowiem.js"></script>

<script type="text/javascript" src="data/l/lifeonwheelz.js"></script>

<script type="text/javascript" src="data/t/tetrycy.js"></script>

<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>

<script type="text/javascript" src="data/l/LukaszRybarskiYES.js"></script>

<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>

<script type="text/javascript" src="data/w/wasikowska.js"></script>

<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>

<script type="text/javascript" src="data/r/radioem.js"></script>

<script type="text/javascript" src="data/z/zoriabresk.js"></script>

<script type="text/javascript" src="data/r/radiownet.js"></script>

<script type="text/javascript" src="data/j/jakubwiech.js"></script>

<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>

<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>

<script type="text/javascript" src="data/r/radio357.js"></script>

<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>

<script type="text/javascript" src="data/g/globstory.js"></script>

<script type="text/javascript" src="data/m/MIŁOŚNICY.js"></script>


<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Zaraz Tam Wjadę!", -1660], ["Fundacja Chartoterapia", -775], ["Stowarzyszenie Chartoterapia", -775], ["Fundacja Filar", -765], ["Mateusz Chrobok", -680], ["Jakub Wiech", -482], ["Historia Realna - Piotr Zychowicz", -460], ["Podsztanga.pl", -378], ["Igor Janke. Układ Otwarty", -355], ["Radio Wnet", -300], ["Damian Duda", 265], ["Misja Camajuaní", 300], ["Radio eM 107,6 fm", 355], ["Marcin Jakimowicz", 370], ["180 Stopni", 400], ["Dział Zagraniczny", 465], ["Neuroatypowa (Aga Paterak)", 500], ["Radio Nowy Świat", 902], ["Aga Rogala", 1040], ["Dziennik Kowala | ZORIABRESK", 2050]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak', 'dzialzagraniczny', 'Podcastwojennehistorie', 'radionaukowe', 'NaukowyBelkot', 'SciFun', 'tetrycy', 'DIOZ', 'WzajemniePomocni', 'Fundacja_po_DRUGIE', 'marcinzielinski', 'podkastamerykanski', 'Gadowski', 'dajherbate', 'niewiemalesiedowiem', 'podcastex', 'radioem', 'brzmienie-swiata', 'rockserwisfm', 'K3'],
                    1, 'top_but_two', 'currency');
                }, 100);
            setTimeout(() => {
                drawMulti(
                    ['sekielski', 'DIOZ', 'niewiemalesiedowiem', 'UsłyszećNaCzas', 'VirtualDream', 'darwin', 'motoambulans', 'TERENWIZJA', 'historiarealna', 'planetaabstrakcja', 'pmm', 'wolskiowojnie', 'MIŁOŚNICY', 'wasikowska', 'LukaszRybarskiYES', 'GrupaMoCarta', 'lifeonwheelz', 'outriders', 'globstory', 'marekczyz'],
                    1, 'biggest_drops', 'currency');
                }, 200);
    };
</script>