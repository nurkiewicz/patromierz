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


<script type="text/javascript" src="data/o/outriders.js"></script>

<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>

<script type="text/javascript" src="data/v/VirtualDream.js"></script>

<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>

<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>

<script type="text/javascript" src="data/n/niewiemalesiedowiem.js"></script>

<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>

<script type="text/javascript" src="data/m/motoambulans.js"></script>

<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>

<script type="text/javascript" src="data/f/FundacjaZwierzecaPolana.js"></script>

<script type="text/javascript" src="data/f/FundacjaPrimum.js"></script>

<script type="text/javascript" src="data/g/globstory.js"></script>

<script type="text/javascript" src="data/d/DIOZ.js"></script>

<script type="text/javascript" src="data/m/marcinzielinski.js"></script>

<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>

<script type="text/javascript" src="data/k/karolinakuzema.js"></script>

<script type="text/javascript" src="data/e/Exen.js"></script>

<script type="text/javascript" src="data/d/dobrywieczoreuropo.js"></script>

<script type="text/javascript" src="data/r/radionaukowe.js"></script>

<script type="text/javascript" src="data/g/GrupaMoCarta.js"></script>

<script type="text/javascript" src="data/p/przezswiatnafazie.js"></script>

<script type="text/javascript" src="data/t/tetrycy.js"></script>

<script type="text/javascript" src="data/p/pmm.js"></script>

<script type="text/javascript" src="data/g/Gadowski.js"></script>

<script type="text/javascript" src="data/p/poglebiarka.js"></script>

<script type="text/javascript" src="data/k/K3.js"></script>

<script type="text/javascript" src="data/p/puna.js"></script>

<script type="text/javascript" src="data/m/Mlyn.js"></script>

<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>

<script type="text/javascript" src="data/b/BezPlanu.js"></script>

<script type="text/javascript" src="data/r/radiownet.js"></script>

<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>

<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>

<script type="text/javascript" src="data/s/shanti.js"></script>

<script type="text/javascript" src="data/l/LigaSuperbohaterow.js"></script>

<script type="text/javascript" src="data/l/lkslodz.js"></script>

<script type="text/javascript" src="data/l/lifeonwheelz.js"></script>

<script type="text/javascript" src="data/w/www_podsztanga_pl.js"></script>

<script type="text/javascript" src="data/l/LukaszRybarskiYES.js"></script>

<script type="text/javascript" src="data/d/darwin.js"></script>

<script type="text/javascript" src="data/d/dlazwierzat_org.js"></script>

<script type="text/javascript" src="data/r/radio357.js"></script>

<script type="text/javascript" src="data/k/Kopalnia.js"></script>

<script type="text/javascript" src="data/p/podcastex.js"></script>

<script type="text/javascript" src="data/r/radioem.js"></script>

<script type="text/javascript" src="data/w/wmiedzyczasie.js"></script>

<script type="text/javascript" src="data/r/radionowyswiat.js"></script>

<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>

<script type="text/javascript" src="data/s/SciFun.js"></script>

<script type="text/javascript" src="data/f/fundacjaktos.js"></script>

<script type="text/javascript" src="data/m/MIŁOŚNICY.js"></script>

<script type="text/javascript" src="data/m/marekczyz.js"></script>

<script type="text/javascript" src="data/h/historiarealna.js"></script>

<script type="text/javascript" src="data/d/dajherbate.js"></script>

<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>

<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>

<script type="text/javascript" src="data/s/sekielski.js"></script>

<script type="text/javascript" src="data/b/BaldTV.js"></script>


<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Karolina Kuzema", -1319], ["Exen", -1110], ["Radio Nowy Świat", -967], ["BaldTV", -510], ["Uwaga Naukowy Bełkot", -447], ["Damian Duda", -425], ["Fundacja KTOŚ", -385], ["Fundacja Filar", -380], ["Liga Superbohaterów", -360], ["Boży Młyn", -350], ["Podsztanga.pl", 522], ["BezPlanu", 570], ["Dobry wieczór Europo!", 580], ["Prawnicy na Rzecz Zwierząt", 600], ["Kopalnia - sztuka futbolu", 615], ["ŁKS Łódź", 860], ["PUNA FAMILY", 1000], ["Fundacja Zwierzęca Polana", 1200], ["Fundacja Primum", 1314], ["Shanti", 1745]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak', 'dzialzagraniczny', 'Podcastwojennehistorie', 'radionaukowe', 'NaukowyBelkot', 'SciFun', 'tetrycy', 'DIOZ', 'WzajemniePomocni', 'Fundacja_po_DRUGIE', 'marcinzielinski', 'podkastamerykanski', 'niewiemalesiedowiem', 'Gadowski', 'dajherbate', 'podcastex', 'radioem', 'brzmienie-swiata', 'K3', 'poglebiarka'],
                    1, 'top_but_two', 'currency');
                }, 100);
            setTimeout(() => {
                drawMulti(
                    ['sekielski', 'DIOZ', 'niewiemalesiedowiem', 'UsłyszećNaCzas', 'VirtualDream', 'darwin', 'motoambulans', 'TERENWIZJA', 'historiarealna', 'planetaabstrakcja', 'pmm', 'wolskiowojnie', 'przezswiatnafazie', 'MIŁOŚNICY', 'LukaszRybarskiYES', 'GrupaMoCarta', 'lifeonwheelz', 'outriders', 'globstory', 'marekczyz'],
                    1, 'biggest_drops', 'currency');
                }, 200);
    };
</script>