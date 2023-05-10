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

<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/y/YouMyGod.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/b/bigbookcafe.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/j/jakubwiech.js"></script>
<script type="text/javascript" src="data/m/mestoslaw.js"></script>
<script type="text/javascript" src="data/d/dwochtypow.js"></script>
<script type="text/javascript" src="data/d/dobrywieczoreuropo.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/p/psierociniec.js"></script>
<script type="text/javascript" src="data/n/Nejtan.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/s/SebastianAntonowicz.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/k/kyudo.js"></script>
<script type="text/javascript" src="data/t/trelemorele.js"></script>
<script type="text/javascript" src="data/h/hubertwiecek.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/v/v4slav.js"></script>
<script type="text/javascript" src="data/t/Trudnobyćkatolikiem.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["kyudo", -1000], ["Sebastian Antonowicz", -599], ["Natalia Bartoń", -585], ["Viacheslav Zarutskii", -500], ["Świat według Nejtana", -475], ["Mestosław", -420], ["YouMyGod", -400], ["RADIO ROCKSERWIS FM", -356], ["Dolnośląski Inspektorat Ochrony Zwierząt", -325], ["Marcin Zieliński", -320], ["Dobry wieczór Europo!", 452], ["Jakub Wiech", 495], ["Hubert Więcek", 500], ["Big Book Cafe", 510], ["Dariusz Rosiak", 540], ["Trudno być katolikiem", 755], ["Karolina Korwin Piotrowska ", 885], ["PSIEROCINIEC", 982], ["Radio Nowy Świat", 1092], ["Radio 357", 4175]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','palhajstv','Vlogcasha','VirtualDream','sekielski','accantus','radionaukowe','Zmierzchu','rockserwisfm','historiarealna','brzmienie-swiata','dwochtypow','planetaabstrakcja','poglebiarka','karolinakp'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
