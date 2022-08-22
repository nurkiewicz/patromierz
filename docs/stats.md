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

<script type="text/javascript" src="data/k/KryptoAnalizy.js"></script>
<script type="text/javascript" src="data/m/miloszmiedzyinnymi.js"></script>
<script type="text/javascript" src="data/y/youngtimerwarsaw.js"></script>
<script type="text/javascript" src="data/z/znokautujbukmachera.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/b/BezSchematu.js"></script>
<script type="text/javascript" src="data/p/piotrprzywarski.js"></script>
<script type="text/javascript" src="data/w/wolskiowojnie.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/p/przyczajona.js"></script>
<script type="text/javascript" src="data/m/manuelagretkowska.js"></script>
<script type="text/javascript" src="data/z/zyciewartejestrozmowy.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/m/michalmarszal.js"></script>
<script type="text/javascript" src="data/p/paulinawroblewska.js"></script>
<script type="text/javascript" src="data/j/jagoda-grondecka.js"></script>
<script type="text/javascript" src="data/p/przytuliskoglowno.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            drawMulti(
                [], 
                1, 'top_but_two', 'currency');
            drawHorizontal([["Radio 357", -2210], ["Paulina Wróblewska", -1000], ["życie warte jest rozmowy", -960], ["Jagoda Grondecka", -685], ["Historia Realna - Piotr Zychowicz", -610], ["Radio Nowy Świat", -322], ["Piotr POLO Przywarski", -250], ["Usłyszeć Na Czas", -240], ["Youngtimer Warsaw", -230], ["Podcastex", -209], ["Manuela Gretkowska", 345], ["Jarosław Wolski", 381], ["Miłosz.między.innymi", 410], ["Michał Marszał", 545], ["Znokautuj bukmachera", 575], ["Kamil Janicki", 590], ["A Kaczkowska przyczajona w eterze", 594], ["Dolnośląski Inspektorat Ochrony Zwierząt", 610], ["Bez/Schematu", 640], ["Przytulisko  Głowno ", 872]], 'largest_changes');
    };
</script>
