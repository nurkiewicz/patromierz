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

<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/s/SebastianAntonowicz.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/z/znokautujbukmachera.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/p/podziemnetypy.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/p/paulinawroblewska.js"></script>
<script type="text/javascript" src="data/g/gadajaoesporcie.js"></script>
<script type="text/javascript" src="data/g/GrupaMoCarta.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/b/BROiMY.js"></script>
<script type="text/javascript" src="data/a/applemuzeumpolska.js"></script>
<script type="text/javascript" src="data/k/kyudo.js"></script>
<script type="text/javascript" src="data/w/www.x-cross.pl.js"></script>
<script type="text/javascript" src="data/f/fundacjaernesta.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            drawMulti(
                ['radionowyswiat','radionowyswiat','DariuszRosiak','DariuszRosiak','DIOZ','DIOZ','langustanapalmie','langustanapalmie','marcinzielinski','dzialzagraniczny','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','UsłyszećNaCzas','sekielski','sekielski','historiarealna','historiarealna','palhajstv','palhajstv'], 
                1, 'top_but_two', 'currency');
            drawHorizontal([["RULon & #BROiMYprojects", -3996], ["Usłyszeć Na Czas", -580], ["Virtual Dream - Piotr Łój", -450], ["X-cross", -370], ["Langusta na palmie", -325], ["Radio 357", -323], ["APPLE MUZEUM POLSKA", -300], ["Jarosław Wolski", -280], ["Pal Hajs TV", -275], ["Podziemne Typy", -260], ["Sebastian Antonowicz", 500], ["kyudo", 500], ["Gadają o Esporcie", 506], ["Radio Nowy Świat", 510], ["Znokautuj bukmachera", 535], ["Dariusz Rosiak", 545], ["Grupa MoCarta", 585], ["Paulina Wróblewska", 1000], ["Marcin Zieliński", 1090], [" Fundacja Medycyny Prenatalnej - im. Ernesta Wójcickiego", 2135]], 'largest_changes');
    };
</script>
