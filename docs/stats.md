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


<script type="text/javascript" src="data/p/przezswiatnafazie.js"></script>

<script type="text/javascript" src="data/w/wasikowska.js"></script>

<script type="text/javascript" src="data/p/profesor_matczak.js"></script>

<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>

<script type="text/javascript" src="data/m/marekczyz.js"></script>

<script type="text/javascript" src="data/t/tetrycy.js"></script>

<script type="text/javascript" src="data/p/pawelkozakdotcom.js"></script>

<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>

<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>

<script type="text/javascript" src="data/s/spooneg3.js"></script>

<script type="text/javascript" src="data/n/niewiemalesiedowiem.js"></script>

<script type="text/javascript" src="data/p/PROsiaczekPRO.js"></script>

<script type="text/javascript" src="data/d/DudekoHistorii.js"></script>

<script type="text/javascript" src="data/p/poglebiarka.js"></script>

<script type="text/javascript" src="data/p/podcastex.js"></script>

<script type="text/javascript" src="data/d/darwin.js"></script>

<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>

<script type="text/javascript" src="data/g/GrupaMoCarta.js"></script>

<script type="text/javascript" src="data/r/radionaukowe.js"></script>

<script type="text/javascript" src="data/s/sekielski.js"></script>

<script type="text/javascript" src="data/d/dajherbate.js"></script>

<script type="text/javascript" src="data/m/MIŁOŚNICY.js"></script>

<script type="text/javascript" src="data/s/stomilolsztynpl.js"></script>

<script type="text/javascript" src="data/h/historiarealna.js"></script>

<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>

<script type="text/javascript" src="data/l/LukaszRybarskiYES.js"></script>

<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>

<script type="text/javascript" src="data/i/igorjanke.js"></script>

<script type="text/javascript" src="data/a/aska-lawicka.js"></script>

<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>

<script type="text/javascript" src="data/p/pmm.js"></script>

<script type="text/javascript" src="data/m/marcinzielinski.js"></script>

<script type="text/javascript" src="data/r/radioem.js"></script>

<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>

<script type="text/javascript" src="data/s/szostygracz.js"></script>

<script type="text/javascript" src="data/r/radio357.js"></script>

<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>

<script type="text/javascript" src="data/d/DIOZ.js"></script>

<script type="text/javascript" src="data/r/radiownet.js"></script>

<script type="text/javascript" src="data/r/radionowyswiat.js"></script>

<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>

<script type="text/javascript" src="data/g/globstory.js"></script>

<script type="text/javascript" src="data/v/VirtualDream.js"></script>

<script type="text/javascript" src="data/m/motoambulans.js"></script>

<script type="text/javascript" src="data/m/moliwukrainie.js"></script>

<script type="text/javascript" src="data/a/animalhelper.js"></script>

<script type="text/javascript" src="data/p/psierociniec.js"></script>

<script type="text/javascript" src="data/o/outriders.js"></script>

<script type="text/javascript" src="data/s/StoOsiemdziesiatStopni.js"></script>

<script type="text/javascript" src="data/g/Gadowski.js"></script>

<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>

<script type="text/javascript" src="data/m/martynakites.js"></script>

<script type="text/javascript" src="data/s/SciFun.js"></script>

<script type="text/javascript" src="data/p/podcasthistoryczny.js"></script>

<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>


<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Profesor Matczak", -3920], ["Radio Wnet", -810], ["Dolnośląski Inspektorat Ochrony Zwierząt", -700], ["Dudek o Historii", -643], ["Paweł Moliński", -500], ["stomilolsztynpl", -500], ["Witold Gadowski", -355], ["Doktor Aśka", -300], ["Szósty Gracz", -290], ["SciFun", -264], ["PSIEROCINIEC", 300], ["Podcastex", 317], ["Animal Helper", 350], ["Martyna Konkel Kite Proriderka 🤙", 383], ["Podcast Wojenne Historie", 385], ["Paweł Kozak", 400], ["180 Stopni", 430], ["PROsiaczek", 540], ["Mateusz Wujciów", 600], ["Radio Nowy Świat", 758]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak', 'dzialzagraniczny', 'Podcastwojennehistorie', 'radionaukowe', 'tetrycy', 'NaukowyBelkot', 'WzajemniePomocni', 'Fundacja_po_DRUGIE', 'DIOZ', 'podkastamerykanski', 'profesor_matczak', 'marcinzielinski', 'SciFun', 'Gadowski', 'radioem', 'dajherbate', 'podcastex', 'brzmienie-swiata', 'podcasthistoryczny', 'poglebiarka'],
                    1, 'top_but_two', 'currency');
                }, 100);
            setTimeout(() => {
                drawMulti(
                    ['sekielski', 'niewiemalesiedowiem', 'UsłyszećNaCzas', 'VirtualDream', 'darwin', 'motoambulans', 'TERENWIZJA', 'historiarealna', 'planetaabstrakcja', 'pmm', 'wolskiowojnie', 'przezswiatnafazie', 'igorjanke', 'MIŁOŚNICY', 'wasikowska', 'LukaszRybarskiYES', 'GrupaMoCarta', 'outriders', 'globstory', 'marekczyz'],
                    1, 'biggest_drops', 'currency');
                }, 200);
    };
</script>