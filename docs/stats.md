---
title: Globalne statystyki patronite.pl | Patromierz
---

# Największe wzrosty i spadki wsparcia miesięcznego

Ostatnie 7 dni.

<div id="largest_changes" class="chart"></div>

# Radio 357 vs. Radio Nowy Świat, wsparcie miesięczne

<div id="two_radios" class="chart"></div>

# Top 20 wsparcie miesięcznie, z wyjątkiem 357 i RNŚ

<div id="top_but_two" class="chart"></div>

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="js/chart.js"></script>

<script type="text/javascript" src="data/z/zyciewartejestrozmowy.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/p/pixel.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/w/www.japaczesercem.pl.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/c/CSM.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/g/GrupaMoCarta.js"></script>
<script type="text/javascript" src="data/m/mocniwduchu.js"></script>
<script type="text/javascript" src="data/h/hejto.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/p/pan_jagoda.js"></script>
<script type="text/javascript" src="data/n/nitya.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/k/kuszlewiczwimieniu.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/m/Modzelewski.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/g/GTBT.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Grupa MoCarta", -1395], ["życie warte jest rozmowy", -1240], ["Dolnośląski Inspektorat Ochrony Zwierząt", -695], ["Marcin Zieliński", -545], ["PIXEL", -545], ["Mocni w Duchu", -315], ["Sekielski Brothers Studio", -290], ["Karol Modzelewski", -275], ["Pan Jagoda", -270], ["Good Times Bad Times", -260], ["Nitya Patrycja Pruchnik", 500], ["Ja Pacze Sercem", 500], ["Dariusz Rosiak", 525], ["hejto.pl", 1015], ["CSM/worship", 1115], ["Kuszlewicz w imieniu", 1204], ["Witold Gadowski", 1250], ["Radio 357", 1895], ["Radio Nowy Świat", 2517], ["Langusta na palmie", 3605]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['radionowyswiat','radionowyswiat','DariuszRosiak','DariuszRosiak','DIOZ','DIOZ','langustanapalmie','langustanapalmie','dzialzagraniczny','dzialzagraniczny','marcinzielinski','marcinzielinski','UsłyszećNaCzas','UsłyszećNaCzas','palhajstv','palhajstv','VirtualDream','VirtualDream','historiarealna','historiarealna'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
