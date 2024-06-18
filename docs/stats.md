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

<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/p/pelnizycia.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/w/wywiad-z-czlowiekiem-radio-war.js"></script>
<script type="text/javascript" src="data/o/outriders.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/e/Exen.js"></script>
<script type="text/javascript" src="data/s/skopzzor.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/s/spalmyto.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/a/arhneu.js"></script>
<script type="text/javascript" src="data/p/psychodeliki.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/k/ktozjakbog.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/s/SOWINSKY.js"></script>
<script type="text/javascript" src="data/a/aktogry.js"></script>
<script type="text/javascript" src="data/r/rfp.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/n/napisykoncowe.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Radio Nowy Świat", -1005], ["Dział Zagraniczny", -670], ["Dolnośląski Inspektorat Ochrony Zwierząt", -525], ["Wywiad z Człowiekiem", -501], ["Dom Pełni Życia Gliwice", -493], ["SOWINSKY", -473], ["Któż jak Bóg", -435], ["Jarosław Wolski", -394], ["Planeta Abstrakcja", -390], ["Spalmy to!", -370], ["AktoGry", 375], ["Rajdy Formuły Pierwszej", 450], ["arhn.eu", 465], ["Exen", 490], ["Polskie Towarzystwo Psychodeliczne", 520], ["Napisy Końcowe", 555], ["Dwie Lewe Ręce", 600], ["SkopzzoR", 610], ["Outriders", 1040], ["Podcastex", 1236]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','dzialzagraniczny','langustanapalmie','dlr','karolinakp','marcinzielinski','Podcastwojennehistorie','wszewko','radionaukowe','Gadowski','sekielski','Vlogcasha','accantus','Zmierzchu','UsłyszećNaCzas','rockserwisfm','poglebiarka','brzmienie-swiata','BezPlanu'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
