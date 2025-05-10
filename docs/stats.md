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

<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/a/agnieszkakozak75.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/k/kamiljanicki.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/r/radioem.js"></script>
<script type="text/javascript" src="data/s/SOWINSKY.js"></script>
<script type="text/javascript" src="data/t/trzech.panow.K.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/m/maopowiedziane.js"></script>
<script type="text/javascript" src="data/c/CezaryGutowski.js"></script>
<script type="text/javascript" src="data/f/FundacjaNautilus.js"></script>
<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/p/pgfseko.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/m/maciejjermakow.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/p/przezswiatnafazie.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Radio Wnet", -1290], ["Marcin Zieliński | Fundacja Rozpal Wiarę", -905], ["Radio Nowy Świat", -663], ["Maciej Jermakow - Ósmy bieg", -540], ["Przez Świat na Fazie", -495], ["Pogłębiarka", -470], ["Dariusz Rosiak", -405], ["Radio eM 107,6 fm", -335], ["Cash", -280], ["Fundacja Wzajemnie Pomocni", -270], ["Dolnośląski Inspektorat Ochrony Zwierząt", 250], ["Piotr Sękowski", 250], ["Radio Naukowe - podcast Karoliny Głowackiej", 270], ["Trzech Panów K", 270], ["Mao Powiedziane", 290], ["Cezary Gutowski", 360], ["Kamil Janicki o historii. Wielka Historia", 498], ["Uwaga Naukowy Bełkot", 890], ["Agnieszka Kozak", 975], ["Fundacja Nautilus", 1030]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','NaukowyBelkot','karolinakp','Podcastwojennehistorie','radionaukowe','marcinzielinski','Gadowski','WzajemniePomocni','podcastex','Vlogcasha','podkastamerykanski','accantus','palhajstv','brzmienie-swiata','SOWINSKY','Zmierzchu','BezPlanu','Fundacja_po_DRUGIE','radioem'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
