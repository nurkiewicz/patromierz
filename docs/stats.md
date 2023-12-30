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

<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/i/Izdebski.js"></script>
<script type="text/javascript" src="data/d/DanielM.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/d/DomowyDoradcaWina.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/g/Gnatkowski.js"></script>
<script type="text/javascript" src="data/c/clepsydrius.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/f/Fprp.js"></script>
<script type="text/javascript" src="data/g/GunTalkMusic.js"></script>
<script type="text/javascript" src="data/f/Freshville.js"></script>
<script type="text/javascript" src="data/c/codzienne.motywacje.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/j/Jonek.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/j/Jowita.js"></script>
<script type="text/javascript" src="data/n/newsmepl.js"></script>
<script type="text/javascript" src="data/d/Dekorator.js"></script>
<script type="text/javascript" src="data/c/ciekawamitologia.js"></script>
<script type="text/javascript" src="data/j/JimiOnGuitar.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/m/my-mobile.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/g/Garaż-na-Długiej.js"></script>
<script type="text/javascript" src="data/p/permakulturaifolk.js"></script>
<script type="text/javascript" src="data/i/Isos.js"></script>
<script type="text/javascript" src="data/c/chpd.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Fotografuję polskie rap płyty", -54790], ["Łukasz Pawłowski", -54790], ["Garaż na Długiej", -54790], ["Georg Gnatkowski", -54790], ["GunTalkMusic", -54790], ["Mateusz Tomczyk", -54790], ["Paweł Izdebski", -54790], ["JimiOnGuitar", -54790], ["Jonek", -54790], ["Jowita Sip", -54790], ["My-mobile.pl", 53530], ["newsme.pl", 53530], ["Daniel..M", 54975], ["Kamil Trela", 54975], ["Domowy Doradca Wina", 54975], ["Chujowa Pani Domu ", 54975], ["CiekawaMitologia.pl", 54975], ["Clepsydrius", 54975], ["codzienne.motywacje", 54975], ["Permakultura i folk", 55725]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','radiownet','DIOZ','langustanapalmie','dzialzagraniczny','dlr','marcinzielinski','karolinakp','radionaukowe','wszewko','UsłyszećNaCzas','sekielski','Podcastwojennehistorie','palhajstv','accantus','Vlogcasha','BezPlanu','Zmierzchu','rockserwisfm','planetaabstrakcja'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
