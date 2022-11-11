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

<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/z/zyciewartejestrozmowy.js"></script>
<script type="text/javascript" src="data/z/Zmywak.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/g/GrupaMoCarta.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/k/kyudo.js"></script>
<script type="text/javascript" src="data/f/fundacjajudyta.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/a/AgnieszkaMorysiak.js"></script>
<script type="text/javascript" src="data/l/LigaSuperbohaterow.js"></script>
<script type="text/javascript" src="data/p/przystanekswietlica.js"></script>
<script type="text/javascript" src="data/p/potemotem.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/z/znokautujbukmachera.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/t/TSMTB.js"></script>
<script type="text/javascript" src="data/w/wolnesady.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            drawMulti(
                ['radionowyswiat','radionowyswiat','DariuszRosiak','DariuszRosiak','DIOZ','DIOZ','langustanapalmie','langustanapalmie','dzialzagraniczny','dzialzagraniczny','marcinzielinski','marcinzielinski','UsłyszećNaCzas','UsłyszećNaCzas','sekielski','sekielski','historiarealna','historiarealna','palhajstv','palhajstv'], 
                1, 'top_but_two', 'currency');
            drawHorizontal([["Potem-o-tem ", -1000], ["Dolnośląski Inspektorat Ochrony Zwierząt", -960], ["Fundacja Wolne Sądy", -950], ["Znokautuj bukmachera", -675], ["Marcin Zieliński", -570], ["Zmywak", -450], ["Usłyszeć Na Czas", -370], ["Brzmienie Świata z lotu Drozda", -370], ["Grupa MoCarta", -365], ["Stowarzyszenie Trójmiejskie Ścieżki MTB", -310], ["kyudo", 500], ["Przystanek Świetlica dla dzieci uchodźców", 540], ["Agnieszka Morysiak", 550], ["Virtual Dream - Piotr Łój", 595], ["Langusta na palmie", 770], ["Radio Nowy Świat", 839], ["Liga Superbohaterów", 900], ["Radio 357", 1080], ["Fundacja dla Szczeniąt Judyta", 1255], ["życie warte jest rozmowy", 5310]], 'largest_changes');
    };
</script>
