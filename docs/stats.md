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

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="js/chart.js"></script>

<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/w/womeninlaw.js"></script>
<script type="text/javascript" src="data/a/astrolife.js"></script>
<script type="text/javascript" src="data/h/hejto.js"></script>
<script type="text/javascript" src="data/b/BezSchematu.js"></script>
<script type="text/javascript" src="data/r/Radio-Widzew.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/k/KarolFjalkowski.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/s/speakleash.js"></script>
<script type="text/javascript" src="data/p/povagowani.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/d/dajherbate.js"></script>
<script type="text/javascript" src="data/e/elizamichalik.js"></script>
<script type="text/javascript" src="data/w/wasikowska.js"></script>
<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/p/profesor.matczak.js"></script>
<script type="text/javascript" src="data/m/muzadei.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/t/trzech.panow.K.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Radio Nowy Świat", -1221], ["Bez/Schematu", -1060], ["hejto.pl", -515], ["Speakleash", -510], ["EWA WĄSIKOWSKA-TOMCZYŃSKA", -510], ["Profesor Matczak", -400], ["Marcin Zieliński | Fundacja Rozpal Wiarę", -370], ["Pal Hajs TV", -300], ["Radio Wnet", -290], ["Eliza Michalik", -280], ["Povagowani", 260], ["Radio Naukowe - podcast Karoliny Głowackiej", 280], ["Karol Fjałkowski", 320], ["Dolnośląski Inspektorat Ochrony Zwierząt", 395], ["RadioWidzew.pl", 500], ["Trzech Panów K", 620], ["Podkast amerykański", 660], ["Uwaga Naukowy Bełkot", 898], ["Fundacja Women in Law", 900], ["Muza Dei - Centrum Nowej Kultury", 1000]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','NaukowyBelkot','karolinakp','Podcastwojennehistorie','radionaukowe','marcinzielinski','Gadowski','WzajemniePomocni','podcastex','Vlogcasha','podkastamerykanski','palhajstv','accantus','Zmierzchu','Fundacja_po_DRUGIE','BezPlanu','astrolife','UsłyszećNaCzas','dajherbate'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
