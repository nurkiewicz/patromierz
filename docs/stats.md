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
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/g/gadajaoesporcie.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/k/krzysztofwojczal.js"></script>
<script type="text/javascript" src="data/f/fundacjaernesta.js"></script>
<script type="text/javascript" src="data/p/paulinawroblewska.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/k/kyudo.js"></script>
<script type="text/javascript" src="data/p/podziemnetypy.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/s/SOWINSKY.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/z/znokautujbukmachera.js"></script>
<script type="text/javascript" src="data/m/michalmarszal.js"></script>
<script type="text/javascript" src="data/u/ubogapodcast.js"></script>
<script type="text/javascript" src="data/m/Mileobrazki.js"></script>
<script type="text/javascript" src="data/b/BROiMY.js"></script>
<script type="text/javascript" src="data/h/historiakolonii.js"></script>
<script type="text/javascript" src="data/k/KryptoAnalizy.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/w/www.x-cross.pl.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            drawMulti(
                ['DariuszRosiak','DIOZ','langustanapalmie','marcinzielinski','dzialzagraniczny','UsłyszećNaCzas','sekielski','historiarealna','palhajstv','VirtualDream','planetaabstrakcja','TERENWIZJA','michalmarszal','darwin','brzmienie-swiata','rockserwisfm','znokautujbukmachera','Zmierzchu','poglebiarka','wolskiowojnie'], 
                1, 'top_but_two', 'currency');
            drawHorizontal([["RULon & #BROiMYprojects", -3996], ["Usłyszeć Na Czas", -650], ["Historia Kolonii", -500], ["Historia Realna - Piotr Zychowicz", -495], ["Virtual Dream - Piotr Łój", -450], ["Podziemne Typy", -430], ["SOWINSKY", -428], ["Dariusz Rosiak", -400], ["X-cross", -370], ["Jarosław Wolski", -276], ["Kamil Janicki", 540], ["Krzysztof Wojczal", 568], ["Miłe Obrazki - Maria Kaczorowska", 572], ["Gadają o Esporcie", 579], ["UBoga. Podcast z Ducha strony", 580], ["kyudo", 1000], ["Paulina Wróblewska", 1000], ["Dolnośląski Inspektorat Ochrony Zwierząt", 3345], ["Radio Nowy Świat", 3956], [" Fundacja Medycyny Prenatalnej - im. Ernesta Wójcickiego", 5180]], 'largest_changes');
    };
</script>
