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

<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/m/muzadei.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>
<script type="text/javascript" src="data/k/KRP.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/a/AlekTemkin.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/s/SzkolaPitagoLasa.js"></script>
<script type="text/javascript" src="data/m/mowisie.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/c/cak-gniazdo.js"></script>
<script type="text/javascript" src="data/a/astrolife.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/r/radioem.js"></script>
<script type="text/javascript" src="data/k/kamiljanicki.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/b/BezSchematu.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/k/koroluk.js"></script>
<script type="text/javascript" src="data/t/trzech.panow.K.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/m/mopsiachata.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/p/psierociniec.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Radio Wnet", -1500], ["Radio Nowy Świat", -1055], ["Bez/Schematu", -940], ["Fundacja po DRUGIE", -415], ["Szkoła PitagoLasa", -390], ["Marcin Zieliński | Fundacja Rozpal Wiarę", -340], ["Fundacja Wzajemnie Pomocni", -320], ["Aleksander Temkin", -300], ["Mówi Się", -270], ["Katolickie Radio Podlasie", -250], ["Mopsia Chata", 251], ["PSIEROCINIEC", 256], ["Koroluk", 290], ["Dział Zagraniczny", 355], ["Kamil Janicki o historii. Wielka Historia", 476], ["Trzech Panów K", 480], ["Centrum Aktywizmu Klimatycznego \"Gniazdo\" w Warszawie", 500], ["Podkast amerykański", 650], ["Muza Dei - Centrum Nowej Kultury", 1000], ["Uwaga Naukowy Bełkot", 1163]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','NaukowyBelkot','karolinakp','Podcastwojennehistorie','radionaukowe','marcinzielinski','Gadowski','WzajemniePomocni','podcastex','Vlogcasha','podkastamerykanski','palhajstv','accantus','poglebiarka','Zmierzchu','radioem','Fundacja_po_DRUGIE','BezPlanu','astrolife'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
