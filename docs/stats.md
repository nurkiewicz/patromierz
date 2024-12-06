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

<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/w/wasikowska.js"></script>
<script type="text/javascript" src="data/r/raczek.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/p/pk.travel.pl.js"></script>
<script type="text/javascript" src="data/a/aldo.js"></script>
<script type="text/javascript" src="data/z/zwyklyzeszyt.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/f/fundacja_kaczkowskiego.js"></script>
<script type="text/javascript" src="data/p/profesor.matczak.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/m/maopowiedziane.js"></script>
<script type="text/javascript" src="data/m/MiserArt.js"></script>
<script type="text/javascript" src="data/a/AlekTemkin.js"></script>
<script type="text/javascript" src="data/w/www.takdlacpk.org.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/z/zyciewartejestrozmowy.js"></script>
<script type="text/javascript" src="data/i/instytutr.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/w/www.legacyofwrestling.pl.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/b/BliskoRahamim.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Radio Nowy Świat", -1194], ["życie warte jest rozmowy", -1190], ["Dział Zagraniczny", -870], ["Legacy of Wrestling", -750], ["Witold Gadowski", -505], ["Dolnośląski Inspektorat Ochrony Zwierząt", -465], ["Tomasz Raczek", -330], ["EWA WĄSIKOWSKA-TOMCZYŃSKA", -310], ["Zwykły Zeszyt", -300], ["Instytut Reportażu", -285], ["Aleksander Temkin", 300], ["Aldona Hartwińska", 300], ["Fundacja Kaczkowskiego - Projekt PaKa", 300], ["MiserArt – strefa kreatywna w labiryncie wykluczenia", 320], ["Profesor Matczak", 335], ["pk.travel.pl", 420], ["Dariusz Rosiak", 515], ["Mao Powiedziane", 545], ["Blisko Rahamim", 745], ["Stowarzyszenie Tak Dla CPK", 1300]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','langustanapalmie','karolinakp','DIOZ','Podcastwojennehistorie','radionaukowe','marcinzielinski','Gadowski','sekielski','accantus','WzajemniePomocni','podcastex','Vlogcasha','poglebiarka','rockserwisfm','palhajstv','Zmierzchu','brzmienie-swiata','podkastamerykanski'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
