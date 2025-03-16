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

<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/m/malgosiakozlowska.js"></script>
<script type="text/javascript" src="data/d/Djsmierc.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/o/odb..js"></script>
<script type="text/javascript" src="data/w/www.gorila.pl.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/a/astrolife.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/w/warowniajomsborg.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/s/speakleash.js"></script>
<script type="text/javascript" src="data/s/SOWINSKY.js"></script>
<script type="text/javascript" src="data/s/szopowisko.js"></script>
<script type="text/javascript" src="data/d/dajherbate.js"></script>
<script type="text/javascript" src="data/f/fundacjaada.js"></script>
<script type="text/javascript" src="data/r/racepace.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/h/HokejoweSocios.js"></script>
<script type="text/javascript" src="data/k/kamiljanicki.js"></script>
<script type="text/javascript" src="data/w/WspolnotaRTCK.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>
<script type="text/javascript" src="data/p/PolskiInkwizytor.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/s/SluzbaOgienMilosci.js"></script>
<script type="text/javascript" src="data/m/makspuchalski.js"></script>
<script type="text/javascript" src="data/n/niekochane.js"></script>
<script type="text/javascript" src="data/t/tygodnikpodhalanski.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["NIEKOCHANE.PL", -1000], ["Radio Wnet", -970], ["Fundacja ADA", -560], ["Grzegorz Miecznikowski", -550], ["Polski Inkwizytor", -500], ["Fundacja Historyczna - Warownia Jomsborg", -500], ["Tygodnik Podhalański", -450], ["Fundacja Szopowisko", -410], ["DjSmierc", -399], ["Zagłębie Sosnowiec Hokej", -300], ["Maksymilian Puchalski", 390], ["Kamil Janicki o historii. Wielka Historia", 396], ["Małgosia Kozłowska", 400], ["Odbudowani.", 500], ["Karolina Korwin Piotrowska ", 570], ["Speakleash", 600], ["Academia Gorila Competition Team", 634], ["Wspólnota RTCK", 1000], ["RACE PACE - podcasty o bieganiu", 1452], ["Radio Nowy Świat", 3215]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','karolinakp','Podcastwojennehistorie','radionaukowe','Gadowski','Vlogcasha','WzajemniePomocni','podcastex','palhajstv','accantus','podkastamerykanski','SOWINSKY','Zmierzchu','BezPlanu','UsłyszećNaCzas','astrolife','Fundacja_po_DRUGIE','dajherbate','planetaabstrakcja'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
