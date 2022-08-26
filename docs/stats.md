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

<script type="text/javascript" src="data/w/www.x-cross.pl.js"></script>
<script type="text/javascript" src="data/p/paulinawroblewska.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/e/ewakaleta.js"></script>
<script type="text/javascript" src="data/s/sylwiabanasik-smulska.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/k/kyudo.js"></script>
<script type="text/javascript" src="data/g/GrupaMoCarta.js"></script>
<script type="text/javascript" src="data/a/anitawu.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/a/applemuzeumpolska.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/f/fundacjaernesta.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/g/gadajaoesporcie.js"></script>
<script type="text/javascript" src="data/l/lkslodz.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/w/WspolnotaRTCK.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/u/ubogapodcast.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            drawMulti(
                ['radionowyswiat','radionowyswiat','DariuszRosiak','DariuszRosiak','DIOZ','DIOZ','langustanapalmie','langustanapalmie','dzialzagraniczny','marcinzielinski','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','UsłyszećNaCzas','sekielski','sekielski','historiarealna','historiarealna','palhajstv','palhajstv'], 
                1, 'top_but_two', 'currency');
            drawHorizontal([["Virtual Dream - Piotr Łój", -1625], ["Radio Nowy Świat", -1063], ["Usłyszeć Na Czas", -800], ["Dolnośląski Inspektorat Ochrony Zwierząt", -490], ["Pal Hajs TV", -455], ["Radio 357", -433], ["Sylwia Banasik- Smulska", -400], ["X-cross", -390], ["Anitawu", -350], ["APPLE MUZEUM POLSKA", -300], ["kyudo", 500], ["Gadają o Esporcie", 506], ["UBoga. Podcast z Ducha strony", 520], ["Wspólnota RTCK", 550], ["Marcin Zieliński", 710], ["Ewa Kaleta", 720], ["ŁKS Łódź", 850], ["Paulina Wróblewska", 1000], ["Grupa MoCarta", 1120], [" Fundacja Medycyny Prenatalnej - im. Ernesta Wójcickiego", 2135]], 'largest_changes');
    };
</script>
