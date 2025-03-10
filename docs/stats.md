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

<script type="text/javascript" src="data/l/limboski.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/k/kamiljanicki.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/k/Korabita.js"></script>
<script type="text/javascript" src="data/m/mocniwduchu.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/w/wasikowska.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/d/deseo.js"></script>
<script type="text/javascript" src="data/w/www.vonsalza.pl.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/p/piotrprzywarski.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/r/racepace.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/w/warowniajomsborg.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/n/nataliaszczypula.js"></script>
<script type="text/javascript" src="data/r/radioem.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Radio Nowy Świat", -771], ["Fundacja Historyczna - Warownia Jomsborg", -500], ["Grupa Filmowa Darwin ", -490], ["Fundacja Wzajemnie Pomocni", -310], ["Niedźwiecka o Zmierzchu", -153], ["EWA WĄSIKOWSKA-TOMCZYŃSKA", -150], ["Langusta na palmie", -130], ["Jacek Korabita Kowalski", -120], ["TERENWIZJA", -120], ["Mocni w Duchu", -120], ["Podkast amerykański", 160], ["RACE PACE - podcasty o bieganiu", 166], ["Natalia Szczypuła", 200], ["LIMBOSKI", 230], ["Piotr POLO Przywarski", 235], ["Witold Gadowski", 240], ["Natalia Kwiecień", 250], ["Kamil Janicki o historii. Wielka Historia", 275], ["Fundacja Von Salza", 280], ["Karolina Korwin Piotrowska ", 385]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','karolinakp','langustanapalmie','Podcastwojennehistorie','radionaukowe','Gadowski','Vlogcasha','WzajemniePomocni','podcastex','palhajstv','sekielski','accantus','podkastamerykanski','rockserwisfm','poglebiarka','Zmierzchu','BezPlanu','UsłyszećNaCzas','radioem'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
