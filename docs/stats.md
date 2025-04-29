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

<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/-/-neuroatypowa.js"></script>
<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/m/MarcinMajewski.js"></script>
<script type="text/javascript" src="data/t/trzech.panow.K.js"></script>
<script type="text/javascript" src="data/r/Radio-Widzew.js"></script>
<script type="text/javascript" src="data/9/9kier.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/a/aska-lawicka.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/e/elizamichalik.js"></script>
<script type="text/javascript" src="data/p/portaldominikanie.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/w/wasikowska.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/g/GCB.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/a/agnieszkakozak75.js"></script>
<script type="text/javascript" src="data/s/speakleash.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/o/odb.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/m/mowisie.js"></script>
<script type="text/javascript" src="data/w/womeninlaw.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Neuroatypowa (Aga Paterak)", -1000], ["Odbudowani.", -1000], ["Dolnośląski Inspektorat Ochrony Zwierząt", -850], ["Gorzowskie Centrum Biblijne", -500], ["Dział Zagraniczny", -495], ["Eliza Michalik", -370], ["Speakleash", -350], ["Podcast Wojenne Historie", -340], ["EWA WĄSIKOWSKA-TOMCZYŃSKA", -310], ["9kier", -300], ["Agnieszka Kozak", 320], ["Doktor Aśka", 345], ["RadioWidzew.pl", 475], ["Dariusz Rosiak", 675], ["Mówi Się", 710], ["Trzech Panów K", 1070], ["Radio Nowy Świat", 1080], ["Karolina Korwin Piotrowska ", 1430], ["Fundacja Women in Law", 1450], ["Uwaga Naukowy Bełkot", 1667]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','karolinakp','NaukowyBelkot','DIOZ','Podcastwojennehistorie','radionaukowe','Gadowski','WzajemniePomocni','podcastex','MarcinMajewski','Vlogcasha','podkastamerykanski','palhajstv','accantus','portaldominikanie','sekielski','rockserwisfm','Zmierzchu','Fundacja_po_DRUGIE'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
