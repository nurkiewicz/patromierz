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

<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/m/mateuszlachowski.js"></script>
<script type="text/javascript" src="data/z/zestoickimspokojem.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/k/KonradJeremus.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/m/motoambulans.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/i/idz.ze.swoja.sila.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/k/kyudo.js"></script>
<script type="text/javascript" src="data/s/suzannemarieyt.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/m/madamemonday.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/j/jestemalpha.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/s/StrefaBycia.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/m/moliwukrainie.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/e/Effatha_gliwice.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Mateusz Lachowski", -1075], ["Dolnośląski Inspektorat Ochrony Zwierząt", -830], ["Radio Nowy Świat", -624], ["Effatha Gliwice", -500], ["Idź ze swoją siłą! - Magdalena Czech", -500], ["Paweł Moliński", -500], ["Strefa Bycia", -370], ["Suzanne Marie", -345], ["jestemAlpha.", -300], ["Konrad Jeremus", -260], ["Podcast Wojenne Historie", 710], ["Radio Naukowe - podcast Karoliny Głowackiej", 755], ["Witold Gadowski", 1070], ["Borkoś", 1090], ["Ze stoickim spokojem", 1470], ["Joanna Flis", 1540], ["Dariusz Rosiak", 2925], ["kyudo", 3000], ["Dział Zagraniczny", 3930], ["Radio Wnet", 6200]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','radiownet','DIOZ','dzialzagraniczny','langustanapalmie','dlr','marcinzielinski','karolinakp','radionaukowe','wszewko','UsłyszećNaCzas','Podcastwojennehistorie','sekielski','palhajstv','BezPlanu','accantus','Vlogcasha','Zmierzchu','planetaabstrakcja','rockserwisfm'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
