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

<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/p/profesor.matczak.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/p/pracowniaoko.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/c/cfdkrakow.js"></script>
<script type="text/javascript" src="data/p/portaldominikanie.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/g/grandeconnection.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/f/FundacjaAkaal.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/w/WachU.js"></script>
<script type="text/javascript" src="data/e/ekskursje.pl.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/u/ujawniamy-com.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/m/madamemonday.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/p/PolskiInkwizytor.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/w/wasikowska.js"></script>
<script type="text/javascript" src="data/i/IzaMichalewicz.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Historia Realna - Piotr Zychowicz", -590], ["Dział Zagraniczny", -450], ["EWA WĄSIKOWSKA-TOMCZYŃSKA", -410], ["Joanna Flis", -355], ["PRACOWNIA OKO", -350], ["Centrum Formacji Duchowej - Kraków", -320], ["WachU", -281], ["Fundacja Akaal", -250], ["Pal Hajs TV", -240], ["Podcast Wojenne Historie", -235], ["Planeta Abstrakcja", 470], ["Polski Inkwizytor", 485], ["Podcastex", 549], ["GRANDE CONNECTION", 554], ["Iza Michalewicz", 620], ["Profesor Matczak", 635], ["Wojciech Orlinski", 950], ["Marcin Torz", 2000], ["Radio Wnet", 2880], ["Radio Nowy Świat", 8862]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','langustanapalmie','karolinakp','DIOZ','Podcastwojennehistorie','radionaukowe','marcinzielinski','Gadowski','sekielski','accantus','podcastex','WzajemniePomocni','Vlogcasha','poglebiarka','rockserwisfm','palhajstv','brzmienie-swiata','Zmierzchu','portaldominikanie'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
