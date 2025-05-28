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

<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/p/panieprzodem.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/p/ptasiastrefa.js"></script>
<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/s/SzkolaPitagoLasa.js"></script>
<script type="text/javascript" src="data/p/podcasthistoryczny.js"></script>
<script type="text/javascript" src="data/r/ReportazZwycinkowSwiata.js"></script>
<script type="text/javascript" src="data/m/madamemonday.js"></script>
<script type="text/javascript" src="data/s/SOWINSKY.js"></script>
<script type="text/javascript" src="data/m/MateuszChrobok.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/w/wasikowska.js"></script>
<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/z/zaraztamwjade.js"></script>
<script type="text/javascript" src="data/s/SluzbaOgienMilosci.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/j/JanekSpiewak.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/p/profesor.matczak.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/m/mocniwduchu.js"></script>
<script type="text/javascript" src="data/s/SkrawkiPuszczy.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Marcin Zieliński | Fundacja Rozpal Wiarę", -715], ["TERENWIZJA", -660], ["Zaraz Tam Wjadę!", -570], ["Fundacja po DRUGIE", -530], ["EWA WĄSIKOWSKA-TOMCZYŃSKA", -430], ["Szkoła PitagoLasa", -400], ["Profesor Matczak", -285], ["Skrawki Puszczy | FOTOGRAFIA", -260], ["Jan Śpiewak", -242], ["Mocni w Duchu", -240], ["Ptasia Strefa", 220], ["Panie Przodem Podcast", 225], ["Podcast Historyczny", 257], ["Joanna Flis", 265], ["Grzegorz Miecznikowski", 270], ["Podkast amerykański", 330], ["Uwaga Naukowy Bełkot", 340], ["Radio Nowy Świat", 980], ["Mateusz Chrobok", 1032], ["Radio Wnet", 1620]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','NaukowyBelkot','karolinakp','Podcastwojennehistorie','radionaukowe','marcinzielinski','Gadowski','WzajemniePomocni','podcastex','Vlogcasha','podkastamerykanski','accantus','palhajstv','poglebiarka','sekielski','rockserwisfm','SOWINSKY','Zmierzchu','ReportazZwycinkowSwiata'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
