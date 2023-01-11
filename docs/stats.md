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

<script type="text/javascript" src="data/m/Mohan-Pugalnenthi-Arts.js"></script>
<script type="text/javascript" src="data/d/dwochtypow.js"></script>
<script type="text/javascript" src="data/k/kartingraport.js"></script>
<script type="text/javascript" src="data/s/spalmyto.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/s/SilentHeroesPL.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/z/znokautujbukmachera.js"></script>
<script type="text/javascript" src="data/k/kyudo.js"></script>
<script type="text/javascript" src="data/w/wroclawski-salon-jacka-kaczmar.js"></script>
<script type="text/javascript" src="data/k/kacpersztukaracing.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/m/miloszszymanski.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/g/GrupaMoCarta.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/m/Morskie-Opowieści.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/k/kobietywchirurgii.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            drawMulti(
                ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','palhajstv','VirtualDream','historiarealna','sekielski','dwochtypow','planetaabstrakcja','znokautujbukmachera','rockserwisfm','brzmienie-swiata','TERENWIZJA','Zmierzchu','darwin','wolskiowojnie','miloszszymanski','radionaukowe'], 
                1, 'top_but_two', 'currency');
            drawHorizontal([["Dolnośląski Inspektorat Ochrony Zwierząt", -1250], ["Langusta na palmie", -1045], ["SilentHeroesPL", -500], ["kyudo", -500], ["Grupa MoCarta", -450], ["Kacper Sztuka Racing", -440], ["Historia Realna - Piotr Zychowicz", -420], ["Sekielski Brothers Studio", -370], ["Morskie Opowieści", -300], ["Mohan Pugalenthi", -208], ["Fundacja Kobiety w chirurgii", 645], ["Dwóch Typów Podcast", 700], ["Karting Raport", 700], ["Dział Zagraniczny", 710], ["Wrocławski Salon Jacka Kaczmarskiego", 890], ["Spalmy to!", 965], ["Znokautuj bukmachera", 1065], ["Radio Naukowe - podcast Karoliny Głowackiej", 1080], ["Radio Nowy Świat", 2898], ["Radio 357", 9700]], 'largest_changes');
    };
</script>
