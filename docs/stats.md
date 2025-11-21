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

<script type="text/javascript" src="data/a/astrolife.js"></script>
<script type="text/javascript" src="data/a/audytobywatelski.js"></script>
<script type="text/javascript" src="data/o/onkomuzyk.js"></script>
<script type="text/javascript" src="data/a/arhneu.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/z/zyciewartejestrozmowy.js"></script>
<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/k/kgonciarz.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/t/tetrycy.js"></script>
<script type="text/javascript" src="data/k/Karczmarz.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/i/IzaMichalewicz.js"></script>
<script type="text/javascript" src="data/s/SciFun.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/w/WachU.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/k/KarolFjalkowski.js"></script>
<script type="text/javascript" src="data/p/piesniopisarze.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/n/niewiemalesiedowiem.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/c/chlopibaba.js"></script>
<script type="text/javascript" src="data/r/radioem.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/a/adz.js"></script>
<script type="text/javascript" src="data/d/dajherbate.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Radio Nowy Świat", -1417], ["Radio Wnet", -700], ["WachU", -645], ["arhn.eu", -535], ["Iza Michalewicz", -500], ["AstroLife", -490], ["Podkast amerykański", -400], ["Tetrycy", -390], ["Karczmarz", -376], ["Krzysztof Gonciarz", -360], ["Karol Fjałkowski", 390], ["Pieśniopisarze", 400], ["Fundacja DAJ HERBATĘ", 410], ["życie warte jest rozmowy", 410], ["audyt obywatelski", 435], ["Ameryka Dla Zaawansowanych", 447], ["Onkomuzyk", 460], ["Dział Zagraniczny", 475], ["CHŁOP I BABA", 575], ["Fundacja po DRUGIE", 1490]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','Podcastwojennehistorie','NaukowyBelkot','SciFun','DIOZ','radionaukowe','tetrycy','niewiemalesiedowiem','WzajemniePomocni','podkastamerykanski','marcinzielinski','Fundacja_po_DRUGIE','Gadowski','dajherbate','podcastex','Vlogcasha','Zmierzchu','brzmienie-swiata','radioem'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
