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

<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/m/muzeumelektroniki.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/w/Wiez.js"></script>
<script type="text/javascript" src="data/f/fundacjaernesta.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/a/artis-symphony-orchestra.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/g/gospeljoy.js"></script>
<script type="text/javascript" src="data/v/v4slav.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/f/FundacjaNautilus.js"></script>
<script type="text/javascript" src="data/a/agatastrzyzewska.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/d/dwochtypow.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/m/miloszszymanski.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/z/znokautujbukmachera.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/m/majalaura.js"></script>
<script type="text/javascript" src="data/g/GrupaMoCarta.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/h/hejto.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Grupa MoCarta", -1075], ["Muzeum Elektroniki", -1000], ["Więź", -570], [" Fundacja Medycyny Prenatalnej - im. Ernesta Wójcickiego", -510], ["Artis Symphony Orchestra", -500], ["Virtual Dream - Piotr Łój", -445], ["Planeta Abstrakcja", -410], ["Gospel Joy", -360], ["Agata Strzyżewska", -350], ["TERENWIZJA", -320], ["Karolina Korwin Piotrowska ", 535], ["Dział Zagraniczny", 745], ["Podcast Wojenne Historie", 795], ["Znokautuj bukmachera", 820], ["Fundacja Nautilus", 940], ["Maja Laura", 1000], ["Viacheslav Zarutskii", 1280], ["Radio Nowy Świat", 1379], ["Radio 357", 2395], ["hejto.pl", 4881]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','palhajstv','VirtualDream','historiarealna','sekielski','dwochtypow','znokautujbukmachera','planetaabstrakcja','rockserwisfm','brzmienie-swiata','Zmierzchu','TERENWIZJA','darwin','radionaukowe','miloszszymanski','wolskiowojnie'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
