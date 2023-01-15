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

<script type="text/javascript" src="data/z/zakazanehistorie.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/r/rejentiszumowski.js"></script>
<script type="text/javascript" src="data/m/miloteam.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/m/miloszszymanski.js"></script>
<script type="text/javascript" src="data/g/GrupaMoCarta.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/z/znokautujbukmachera.js"></script>
<script type="text/javascript" src="data/p/portaldominikanie.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/d/dr-damian-parol.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/s/SebastianAntonowicz.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/d/dwochtypow.js"></script>
<script type="text/javascript" src="data/l/LukaszRybarskiYES.js"></script>
<script type="text/javascript" src="data/a/agatastrzyzewska.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            drawMulti(
                ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','palhajstv','VirtualDream','historiarealna','sekielski','dwochtypow','planetaabstrakcja','znokautujbukmachera','rockserwisfm','brzmienie-swiata','TERENWIZJA','Zmierzchu','darwin','radionaukowe','miloszszymanski','wolskiowojnie'], 
                1, 'top_but_two', 'currency');
            drawHorizontal([["Grupa MoCarta", -965], ["Miłosz Sowiński", -678], ["TERENWIZJA", -445], ["Dolnośląski Inspektorat Ochrony Zwierząt", -335], ["Rejent i Szumowski w domu na streamie", -320], ["Usłyszeć Na Czas", -290], ["Langusta na palmie", -275], ["Łukasz Rybarski YES:)", -250], ["Historia Realna - Piotr Zychowicz", -240], ["Agata Strzyżewska", -220], ["Karolina Korwin Piotrowska ", 545], ["Podcast Wojenne Historie", 555], ["Sebastian Antonowicz", 580], ["Dział Zagraniczny", 580], ["Dwóch Typów Podcast", 650], ["dominikanie.pl", 725], ["ZAKAZANE HISTORIE", 990], ["Radio Naukowe - podcast Karoliny Głowackiej", 1050], ["dr Damian Parol", 1150], ["Radio 357", 4045]], 'largest_changes');
    };
</script>
