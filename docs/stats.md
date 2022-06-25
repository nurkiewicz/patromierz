---
title: Statystyki | Patromierz
---

# Radio 357 vs. Radio Nowy Świat, wsparcie miesięczne

<div id="two_radios" class="chart"></div>

# TOP 10 z wyjątkiem 357 i RNŚ

<div id="top_but_two" class="chart"></div>

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="js/chart.js"></script>

<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"/></script>
<script type="text/javascript" src="data/d/DIOZ.js"/></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"/></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"/></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"/></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"/></script>
<script type="text/javascript" src="data/s/sekielski.js"/></script>
<script type="text/javascript" src="data/h/historiarealna.js"/></script>
<script type="text/javascript" src="data/v/VirtualDream.js"/></script>
<script type="text/javascript" src="data/p/palhajstv.js"/></script>

<script type="text/javascript">
    window.onload = () => {
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency')
            drawMulti(
                ['DariuszRosiak', 'DIOZ', 'langustanapalmie', 'UsłyszećNaCzas', 'marcinzielinski', 'dzialzagraniczny', 'sekielski', 'historiarealna', 'VirtualDream', 'palhajstv'], 
                1, 'top_but_two', 'currency')
    };
</script>
