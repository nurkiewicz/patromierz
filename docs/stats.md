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

<script type="text/javascript" src="data/m/Musicante.js"></script>
<script type="text/javascript" src="data/m/MYUS.js"></script>
<script type="text/javascript" src="data/j/jakubwiech.js"></script>
<script type="text/javascript" src="data/o/OKK.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/p/psxextreme.js"></script>
<script type="text/javascript" src="data/s/swiadomytrening.js"></script>
<script type="text/javascript" src="data/m/Mostecjuszka.js"></script>
<script type="text/javascript" src="data/p/PODPRAD.js"></script>
<script type="text/javascript" src="data/m/Matias.js"></script>
<script type="text/javascript" src="data/t/TEDENOVELA.js"></script>
<script type="text/javascript" src="data/d/DalekowschodnieRefleksje.js"></script>
<script type="text/javascript" src="data/m/Muzykazbocznejulicy.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/m/Mia.js"></script>
<script type="text/javascript" src="data/k/kyudo.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/p/PRmovies.js"></script>
<script type="text/javascript" src="data/m/Mesney6.js"></script>
<script type="text/javascript" src="data/d/dorotabawolek.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/n/NerdziwKulturze.js"></script>
<script type="text/javascript" src="data/d/dzieci-świata.js"></script>
<script type="text/javascript" src="data/m/MidzGarrot.js"></script>
<script type="text/javascript" src="data/m/MTN12Matys.js"></script>
<script type="text/javascript" src="data/h/hubertwiecek.js"></script>
<script type="text/javascript" src="data/p/psychodeliki.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/p/pkod.js"></script>
<script type="text/javascript" src="data/n/NovemberProject.js"></script>
<script type="text/javascript" src="data/z/ZakuBoardgames.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/m/Moscicki.js"></script>
<script type="text/javascript" src="data/s/supermama.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/m/MonAmi.js"></script>
<script type="text/javascript" src="data/w/wojnaidei.js"></script>
<script type="text/javascript" src="data/m/MPWRecords.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Dorota Bawołek", -2000], ["Radio Nowy Świat", -1299], ["Tedenovela", -550], ["Jakub Wiech", -545], ["Dalekowschodnie Refleksje", -500], ["Hubert Więcek", -500], ["Parafialna Kamiliańska Orkiestra Dęta", -500], ["Dzieci Świata - Marzena Figiel", -427], ["Szymon Pękala - Wojna Idei", -348], ["Virtual Dream - Piotr Łój", -330], ["Witold Gadowski", 630], ["Polskie Towarzystwo Psychodeliczne", 630], ["Radio 357", 706], ["kyudo", 1000], ["Zaku Boardgames", 1311], ["Supermama", 1425], ["PSX EXTREME", 1452], ["🏋️‍♂️ Świadomy Trening - Miłosz Szkudlarek", 1512], ["Planeta Abstrakcja", 1840], ["Radio Wnet", 5100]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','MPWRecords','MTN12Matys','MYUS','Matias','Mesney6','Mia','MidzGarrot','MonAmi','Moscicki','Mostecjuszka','Musicante','Muzykazbocznejulicy','NerdziwKulturze','NovemberProject','OKK','PODPRAD','PRmovies'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
