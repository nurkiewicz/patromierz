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

<script type="text/javascript" src="data/b/BasiaiKasia.js"></script>
<script type="text/javascript" src="data/m/malgosiakozlowska.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/w/wasikowska.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/m/midasiak.js"></script>
<script type="text/javascript" src="data/w/www.takdlacpk.org.js"></script>
<script type="text/javascript" src="data/a/AgnieszkaCegielska.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/f/filozofiapoprostu.js"></script>
<script type="text/javascript" src="data/a/aldo.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/f/Frontstory.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/f/fundacjaernesta.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/r/rozgrywka.js"></script>
<script type="text/javascript" src="data/a/aska-lawicka.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([[" Fundacja Medycyny Prenatalnej - im. Ernesta Wójcickiego", -1095], ["Małgosia Kozłowska", -920], ["Rozgrywka", -512], ["Kasia i Basia", -500], ["Agnieszka Cegielska", -452], ["Aśka Ławicka", -440], ["Podkast amerykański", -430], ["Dolnośląski Inspektorat Ochrony Zwierząt", -405], ["Filozofia Po Prostu", -350], ["Marcin Zieliński | Fundacja Rozpal Wiarę", -330], ["Aldona Hartwińska", 510], ["Michał Idasiak", 520], ["Podcast Wojenne Historie", 555], ["Fundacja Wzajemnie Pomocni", 600], ["Stowarzyszenie Tak Dla CPK", 900], ["EWA WĄSIKOWSKA-TOMCZYŃSKA", 980], ["FRONTSTORY.PL", 1125], ["Karolina Korwin Piotrowska ", 1505], ["Radio Nowy Świat", 2879], ["Radio Wnet", 8060]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','DIOZ','langustanapalmie','karolinakp','Podcastwojennehistorie','radionaukowe','marcinzielinski','wszewko','Gadowski','sekielski','accantus','rockserwisfm','palhajstv','poglebiarka','Zmierzchu','Vlogcasha','WzajemniePomocni','podcastex','brzmienie-swiata'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
