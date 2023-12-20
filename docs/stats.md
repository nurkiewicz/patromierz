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

<script type="text/javascript" src="data/m/MonAmi.js"></script>
<script type="text/javascript" src="data/t/tygodnikpodlasianin.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/m/Moscicki.js"></script>
<script type="text/javascript" src="data/t/Taxizlotowa.js"></script>
<script type="text/javascript" src="data/t/tarocistadariusz.js"></script>
<script type="text/javascript" src="data/t/terrarystaterra.js"></script>
<script type="text/javascript" src="data/s/szukacz.js"></script>
<script type="text/javascript" src="data/s/swiatmoichzwierzat.js"></script>
<script type="text/javascript" src="data/m/MTN12Matys.js"></script>
<script type="text/javascript" src="data/s/SWAGTV.js"></script>
<script type="text/javascript" src="data/e/edymek.js"></script>
<script type="text/javascript" src="data/s/szkodagadac.js"></script>
<script type="text/javascript" src="data/s/swiatgosi.js"></script>
<script type="text/javascript" src="data/s/sliski.js"></script>
<script type="text/javascript" src="data/m/Mia.js"></script>
<script type="text/javascript" src="data/u/UnaxRecencje.js"></script>
<script type="text/javascript" src="data/t/Tramadolihydrochlor.js"></script>
<script type="text/javascript" src="data/s/szostyzmysl.js"></script>
<script type="text/javascript" src="data/s/SuperPies_DogTeacher.js"></script>
<script type="text/javascript" src="data/t/tucholski.js"></script>
<script type="text/javascript" src="data/m/Mostecjuszka.js"></script>
<script type="text/javascript" src="data/s/SerafinTV.js"></script>
<script type="text/javascript" src="data/s/smashit.js"></script>
<script type="text/javascript" src="data/m/MPWRecords.js"></script>
<script type="text/javascript" src="data/s/Sohayo.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/m/Mesney6.js"></script>
<script type="text/javascript" src="data/s/Shoomi.js"></script>
<script type="text/javascript" src="data/s/siostry_od_nieruchomosci.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/m/MYUS.js"></script>
<script type="text/javascript" src="data/t/TheMyśliciel.js"></script>
<script type="text/javascript" src="data/m/MidzGarrot.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Tobiasz Nowakowski", -55079], ["MPW Records", -54260], ["MTN12/Matys", -54260], ["MYUS", -54260], ["Mesney6", -54260], ["Mia", -54260], ["Michal Sapiński", -54260], ["MonAmi", -54260], ["Mariusz Moscicki", -54260], ["Karolina Szary", -54260], ["Szkoda Gadać", 103760], ["Szósty Zmysł Tarot", 103760], ["SZUKACZ", 103760], ["Tarocista Dariusz", 103760], ["Terrarysta Terra", 103760], ["The Myśliciel", 104580], ["Tramadolihydrochlor", 104580], ["Unax Recenzje", 104580], ["Andrzej Tucholski", 104580], ["Tygodnik Podlasianin", 104580]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','SWAGTV','SerafinTV','Shoomi','Sohayo','SuperPies_DogTeacher','Taxizlotowa','TheMyśliciel','Tramadolihydrochlor','UnaxRecencje','siostry_od_nieruchomosci','sliski','smashit','swiatgosi','swiatmoichzwierzat','szkodagadac','szostyzmysl','szukacz','tarocistadariusz','terrarystaterra'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
