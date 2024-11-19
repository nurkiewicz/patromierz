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

<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/t/twojanowaswiadomosc.js"></script>
<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/m/MagazynAnityGargas.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/w/warowniajomsborg.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/n/nazwex.js"></script>
<script type="text/javascript" src="data/a/AgnieszkaCegielska.js"></script>
<script type="text/javascript" src="data/i/instytutr.js"></script>
<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/s/strefaanime.js"></script>
<script type="text/javascript" src="data/k/krysiak.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/s/strajk.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/l/lifeonwheelz.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/b/budzimy-kosciol.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/j/jarominaleksandra.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/t/TEDENOVELA.js"></script>
<script type="text/javascript" src="data/k/Klinowski.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Magazyn Anity Gargas", -1010], ["Uwaga Naukowy Bełkot", -619], ["TwojaNowaŚwiadomość ", -555], ["Tedenovela", -530], ["Fundacja Nowa Pięćdziesiątnica", -500], ["Fundacja Historyczna - Warownia Jomsborg", -500], ["strajk.eu", -479], ["Life On Wheelz - Influencer z Misją", -460], ["Instytut Reportażu", -440], ["Karolina Korwin Piotrowska ", -415], ["Agnieszka Cegielska", 487], ["Aleksandra Jaromin", 500], ["Mateusz Klinowski", 502], ["Fundacja po DRUGIE", 540], ["Nazwex", 800], ["Witold Gadowski", 840], ["Strefa Anime", 999], ["Piotr Krysiak", 1156], ["Radio Wnet", 2070], ["Podcast Wojenne Historie", 3040]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','langustanapalmie','DIOZ','karolinakp','Podcastwojennehistorie','radionaukowe','marcinzielinski','Gadowski','sekielski','accantus','WzajemniePomocni','podcastex','rockserwisfm','poglebiarka','palhajstv','Zmierzchu','Vlogcasha','brzmienie-swiata','podkastamerykanski'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
