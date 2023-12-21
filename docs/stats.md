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

<script type="text/javascript" src="data/7/7zrodel.js"></script>
<script type="text/javascript" src="data/b/barlogliteracki.js"></script>
<script type="text/javascript" src="data/b/benevale.pl.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/a/AsiaiHarfa.js"></script>
<script type="text/javascript" src="data/g/gdziewojsko.js"></script>
<script type="text/javascript" src="data/g/gajapisze.js"></script>
<script type="text/javascript" src="data/b/Bauaser.js"></script>
<script type="text/javascript" src="data/a/AlexRMG.js"></script>
<script type="text/javascript" src="data/f/FAQRAK.js"></script>
<script type="text/javascript" src="data/m/Matias.js"></script>
<script type="text/javascript" src="data/b/BanitaMaxxRadio.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/3/315studio.pl.js"></script>
<script type="text/javascript" src="data/m/Majka_Rochowiak.js"></script>
<script type="text/javascript" src="data/m/MidzGarrot.js"></script>
<script type="text/javascript" src="data/a/Abstrakt.js"></script>
<script type="text/javascript" src="data/p/Pokolenia.js"></script>
<script type="text/javascript" src="data/a/Artyfiction.js"></script>
<script type="text/javascript" src="data/1/126pPartyBike.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/a/Armatki.js"></script>
<script type="text/javascript" src="data/a/Ailes.js"></script>
<script type="text/javascript" src="data/p/PRmovies.js"></script>
<script type="text/javascript" src="data/i/imho-bardzosubiektywnie.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/e/edymek.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/b/Bastetowy.js"></script>
<script type="text/javascript" src="data/m/Mia.js"></script>
<script type="text/javascript" src="data/m/Mesney6.js"></script>
<script type="text/javascript" src="data/a/AvinionDance.js"></script>
<script type="text/javascript" src="data/e/Exen.js"></script>
<script type="text/javascript" src="data/e/emisjatv.js"></script>
<script type="text/javascript" src="data/i/inkoholiczka.js"></script>
<script type="text/javascript" src="data/p/PODPRAD.js"></script>
<script type="text/javascript" src="data/e/EquosDoktrum.js"></script>
<script type="text/javascript" src="data/b/Baniakbaniaka.js"></script>
<script type="text/javascript" src="data/b/bdb.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Mateusz Tkocz", -54628], ["Tobiasz Nowakowski", -54628], ["eMisjaTv", -54628], ["Maciej Smoluch", -54310], ["Mesney6", -54310], ["Mia", -54310], ["Michal Sapiński", -54310], ["POD PRĄD", -54310], ["PR Movies", -54310], ["Grupa Folklorystyczna Pokolenia", -54310], ["Katarzyna Gajewska GajaPisze.pl", 52880], ["gdziewojsko - Paweł K. Malicki", 52880], ["IMHO - bardzo subiektywnie", 54280], ["Inkoholiczka", 54280], ["Armatki.net", 54515], ["Mroczne wieki", 54515], ["Barłóg Literacki", 54515], ["B.D.Bisha", 54515], ["Bene Vale", 54515], ["Majka Rochowiak", 55225]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','radiownet','126pPartyBike','315studio.pl','7zrodel','Abstrakt','Ailes','AlexRMG','Armatki','Artyfiction','AsiaiHarfa','AvinionDance','Baniakbaniaka','BanitaMaxxRadio','Bastetowy','Bauaser','Exen','FAQRAK'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
