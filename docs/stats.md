---
title: Globalne statystyki patronite.pl | Patromierz
---

# Największe wzrosty i spadki wsparcia miesięcznego

Ostatnie 7 dni.

<div id="largest_changes" class="chart"></div>

# Radio 357 vs. Radio Nowy Świat, wsparcie miesięczne

<div id="two_radios" class="chart"></div>

# Top 20 wsparcie miesięcznie, z wyjątkiem 357 i RNŚ

<div id="top_but_two" class="chart"></div>

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="js/chart.js"></script>

<script type="text/javascript" src="data/d/dwochtypow.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/d/dajherbate.js"></script>
<script type="text/javascript" src="data/d/dr-damian-parol.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/g/GrupaMoCarta.js"></script>
<script type="text/javascript" src="data/r/rejentiszumowski.js"></script>
<script type="text/javascript" src="data/s/SebastianAntonowicz.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/l/LukaszRybarskiYES.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/m/miloszszymanski.js"></script>
<script type="text/javascript" src="data/m/miloteam.js"></script>
<script type="text/javascript" src="data/p/papierwdole666.js"></script>
<script type="text/javascript" src="data/z/zakazanehistorie.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/b/BioGamerka.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/p/portaldominikanie.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/z/znokautujbukmachera.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            drawMulti(
                ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','palhajstv','VirtualDream','historiarealna','sekielski','dwochtypow','planetaabstrakcja','znokautujbukmachera','rockserwisfm','brzmienie-swiata','TERENWIZJA','Zmierzchu','darwin','radionaukowe','miloszszymanski','wolskiowojnie'], 
                1, 'top_but_two', 'currency');
            drawHorizontal([["Grupa MoCarta", -1230], ["Miłosz Sowiński", -678], ["Dolnośląski Inspektorat Ochrony Zwierząt", -470], ["TERENWIZJA", -405], ["Historia Realna - Piotr Zychowicz", -385], ["Rejent i Szumowski w domu na streamie", -320], ["Papierwdole", -284], ["Langusta na palmie", -215], ["BioGamerka ", -200], ["Łukasz Rybarski YES:)", -200], ["Sebastian Antonowicz", 580], ["Radio Naukowe - podcast Karoliny Głowackiej", 635], ["Dariusz Rosiak", 660], ["Dwóch Typów Podcast", 665], ["Dział Zagraniczny", 695], ["Fundacja DAJ HERBATĘ", 730], ["dominikanie.pl", 840], ["ZAKAZANE HISTORIE", 970], ["dr Damian Parol", 1150], ["Radio 357", 4390]], 'largest_changes');
    };
</script>
