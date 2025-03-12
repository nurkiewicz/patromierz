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

<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/w/www.takdlacpk.org.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/t/tygodnikpodhalanski.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/d/deseo.js"></script>
<script type="text/javascript" src="data/d/dzieci-świata.js"></script>
<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/w/warowniajomsborg.js"></script>
<script type="text/javascript" src="data/k/kamiljanicki.js"></script>
<script type="text/javascript" src="data/w/www.vonsalza.pl.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/r/rfp.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/r/racepace.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/a/astrolife.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/s/szopowisko.js"></script>
<script type="text/javascript" src="data/d/dajherbate.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/k/krzysztofwojczal.js"></script>
<script type="text/javascript" src="data/o/odb..js"></script>
<script type="text/javascript" src="data/f/fundacjaada.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/l/lasyiobywatele.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Radio Wnet", -510], ["Tygodnik Podhalański", -500], ["Fundacja Historyczna - Warownia Jomsborg", -500], ["Grupa Filmowa Darwin ", -490], ["Fundacja Wzajemnie Pomocni", -440], ["Fundacja ADA", -335], ["Fundacja Szopowisko", -260], ["Stowarzyszenie Tak Dla CPK", -250], ["Rajdy Formuły Pierwszej", -190], ["TERENWIZJA", -185], ["Natalia Kwiecień", 250], ["Lasy i Obywatele", 300], ["Dzieci Świata - Marzena Figiel", 302], ["Krzysztof Wojczal", 338], ["Kamil Janicki o historii. Wielka Historia", 341], ["Fundacja Von Salza", 360], ["RACE PACE - podcasty o bieganiu", 431], ["Karolina Korwin Piotrowska ", 505], ["Odbudowani.", 510], ["Radio Nowy Świat", 1151]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','karolinakp','Podcastwojennehistorie','radionaukowe','Gadowski','Vlogcasha','podcastex','WzajemniePomocni','sekielski','palhajstv','accantus','podkastamerykanski','rockserwisfm','Zmierzchu','BezPlanu','UsłyszećNaCzas','astrolife','Fundacja_po_DRUGIE','dajherbate'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
