---
title: Globalne statystyki patronite.pl | Patromierz
---

# Największe wzrosty i spadki wsparcia miesięcznego

Ostatnie 7 dni.

<div id="largest_changes" class="chart"></div>

# Radio 357 vs. Nowy Świat vs. Wnet, wsparcie miesięczne

<div id="two_radios" class="chart"></div>

# Top 20 wsparcie miesięcznie, z wyjątkiem 357, RNŚ i Wnet

<div id="top_but_two" class="chart"></div>

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="js/chart.js"></script>

<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/w/WarszawskiKlubGo.js"></script>
<script type="text/javascript" src="data/s/sercemiastawarszawa.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/p/puchaczowka.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/n/niewiemalesiedowiem.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/z/zoltenapisy.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/p/pkod.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/p/pgfseko.js"></script>
<script type="text/javascript" src="data/n/NoiseMagazine.js"></script>
<script type="text/javascript" src="data/g/GregsGarden.js"></script>
<script type="text/javascript" src="data/9/9kier.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/m/MyslecGlebiej.js"></script>
<script type="text/javascript" src="data/n/niezatapialni.js"></script>
<script type="text/javascript" src="data/t/tetrycy.js"></script>
<script type="text/javascript" src="data/p/profesor.matczak.js"></script>
<script type="text/javascript" src="data/s/SciFun.js"></script>
<script type="text/javascript" src="data/j/jakubwiech.js"></script>
<script type="text/javascript" src="data/p/pk_expedi.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Nie wiem, ale się dowiem", -775], ["Radio Wnet", -530], ["Piotr Krzyżowski", -510], ["Piotr Sękowski", -500], ["Orkiestra Kamiliańska", -500], ["Uwaga Naukowy Bełkot", -448], ["Podcast Wojenne Historie", -420], ["Marcin Zieliński | Fundacja Rozpal Wiarę", -365], ["GregsGarden", -333], ["Myśleć Głębiej", -318], ["Niezatapialni", 305], ["NOISE Magazine", 320], ["9kier", 327], ["ŻÓŁTE NAPISY", 340], ["Warszawski Klub Go", 350], ["Serce Miasta", 535], ["Profesor Matczak", 570], ["Fundacja po DRUGIE", 760], ["Jakub Wiech", 780], ["Ośrodek Leczenia i Rehabilitacji Dzikich Zwierząt \"Puchaczówka\"", 1370]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','Podcastwojennehistorie','NaukowyBelkot','SciFun','tetrycy','DIOZ','radionaukowe','niewiemalesiedowiem','WzajemniePomocni','marcinzielinski','podkastamerykanski','Gadowski','Fundacja_po_DRUGIE','podcastex','Vlogcasha','Zmierzchu','brzmienie-swiata','poglebiarka','accantus'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
