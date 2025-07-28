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

<script type="text/javascript" src="data/w/womeninlaw.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/l/lukaszluczaj.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/n/niewiemalesiedowiem.js"></script>
<script type="text/javascript" src="data/w/Wachtyrz.js"></script>
<script type="text/javascript" src="data/r/racepace.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/a/astrolife.js"></script>
<script type="text/javascript" src="data/r/rozgrywka.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/e/efez.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/p/przytuliskoglowno.js"></script>
<script type="text/javascript" src="data/s/SciFun.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/m/mowisie.js"></script>
<script type="text/javascript" src="data/r/ryslaw.js"></script>
<script type="text/javascript" src="data/p/psierociniec.js"></script>
<script type="text/javascript" src="data/s/SOWINSKY.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/d/darlovia.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["SciFun", -1589], ["Radio Wnet", -1070], ["Radio Nowy Świat", -872], ["Mówi Się", -700], ["Fundacja Women in Law", -600], ["Ryszard Chojnowski", -550], ["Uwaga Naukowy Bełkot", -331], ["Wspólnota EFEZ", -300], ["Przytulisko Głowno", -296], ["Podcastex", -285], ["Wachtyrz.eu", 250], ["Dariusz Rosiak", 255], ["Łukasz Łuczaj", 281], ["Rozgrywka", 290], ["Darłovia Darłowo", 300], ["RACE PACE - podcasty o bieganiu", 353], ["PSIEROCINIEC", 538], ["Radio Naukowe - podcast Karoliny Głowackiej", 540], ["Nie wiem, ale się dowiem", 555], ["Podcast Wojenne Historie", 665]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','karolinakp','NaukowyBelkot','niewiemalesiedowiem','SciFun','Podcastwojennehistorie','radionaukowe','Gadowski','podkastamerykanski','podcastex','Vlogcasha','accantus','sekielski','rockserwisfm','palhajstv','SOWINSKY','astrolife','Zmierzchu','Fundacja_po_DRUGIE'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
