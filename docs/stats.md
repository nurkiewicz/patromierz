---
title: Globalne statystyki | Patromierz
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

<script type="text/javascript" src="data/g/GrupaMoCarta.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/k/kingaszostko.js"></script>
<script type="text/javascript" src="data/g/gospodarpg.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/m/miloszszymanski.js"></script>
<script type="text/javascript" src="data/m/miloszmiedzyinnymi.js"></script>
<script type="text/javascript" src="data/e/eunomia.astrology.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/t/twojanowaswiadomosc.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/m/michalmarszal.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/k/kyudo.js"></script>
<script type="text/javascript" src="data/l/Las-Na-Zawsze.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/w/WachU.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/n/neybero.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/j/jaroslawrogowski.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/z/znokautujbukmachera.js"></script>
<script type="text/javascript" src="data/p/podziemnetypy.js"></script>
<script type="text/javascript" src="data/f/fundacjajudyta.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/v/v4slav.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            drawMulti(
                ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','sekielski','historiarealna','palhajstv','planetaabstrakcja','TERENWIZJA','VirtualDream','michalmarszal','brzmienie-swiata','znokautujbukmachera','darwin','wolskiowojnie','rockserwisfm','miloszszymanski','Zmierzchu'], 
                1, 'top_but_two', 'currency');
            drawHorizontal([["Neybero", -2000], ["Las Na Zawsze | Fundacja", -1000], ["Marcin Zieliński", -630], ["Gospoda RPG", -570], ["Eunomia", -525], ["Podziemne Typy", -510], ["Sekielski Brothers Studio", -440], ["TERENWIZJA", -335], ["Miłosz.między.innymi", -320], ["Kinga Szostko", -300], ["kyudo", 500], ["TwojaNowaŚwiadomość ", 522], ["WachU", 590], ["Viacheslav Zarutskii", 610], ["Fundacja dla Szczaniąt Judyta", 640], ["Dariusz Rosiak", 665], ["Langusta na palmie", 665], ["Jarosław  Rogowski", 1020], ["Grupa MoCarta", 1900], ["Radio Nowy Świat", 3629]], 'largest_changes');
    };
</script>
