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

<script type="text/javascript" src="data/m/MTN12Matys.js"></script>
<script type="text/javascript" src="data/w/Wiciawii.js"></script>
<script type="text/javascript" src="data/t/TheOnlyOneScandal.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/k/kusinakulture.js"></script>
<script type="text/javascript" src="data/t/Three_Deaths.band.js"></script>
<script type="text/javascript" src="data/a/akirawiktoria.js"></script>
<script type="text/javascript" src="data/s/SadRapArioch.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/s/Sanders.js"></script>
<script type="text/javascript" src="data/w/wojtekrysuje.js"></script>
<script type="text/javascript" src="data/a/agnieszkazielinska.js"></script>
<script type="text/javascript" src="data/s/Szarak.js"></script>
<script type="text/javascript" src="data/s/SzyrGameStudio.js"></script>
<script type="text/javascript" src="data/k/krypto-prawnik.js"></script>
<script type="text/javascript" src="data/m/MPWRecords.js"></script>
<script type="text/javascript" src="data/t/TheArtOfPatrykSokolowski.js"></script>
<script type="text/javascript" src="data/k/kulturanacodzien.js"></script>
<script type="text/javascript" src="data/a/Ailes.js"></script>
<script type="text/javascript" src="data/t/TERAZPOLIŻ.js"></script>
<script type="text/javascript" src="data/t/Tomasin.js"></script>
<script type="text/javascript" src="data/m/MYUS.js"></script>
<script type="text/javascript" src="data/a/agna28.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/t/TOP.js"></script>
<script type="text/javascript" src="data/a/agnieszkapatelska.js"></script>
<script type="text/javascript" src="data/s/SachielSQ.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/t/TKA.js"></script>
<script type="text/javascript" src="data/m/mistrz-klawiatury.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/w/whitDreams.js"></script>
<script type="text/javascript" src="data/s/SLOWTEAM.js"></script>
<script type="text/javascript" src="data/e/Ewelina-Salon-Kultury-22.js"></script>
<script type="text/javascript" src="data/s/SibilaVocal.js"></script>
<script type="text/javascript" src="data/t/Tomek-Prezes.js"></script>
<script type="text/javascript" src="data/c/co-na-scenie.js"></script>
<script type="text/javascript" src="data/m/Matias.js"></script>
<script type="text/javascript" src="data/k/komorowice.js"></script>
<script type="text/javascript" src="data/w/wpolowiepusta.js"></script>
<script type="text/javascript" src="data/s/Szymonpejski.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Mistrz Klawiatury", -53260], ["Grupa Ailes", -53235], ["agna28", -53235], ["RytmyNatury | Agnieszka Patelska-Rabenda", -53235], ["Agnieszka Zielińska", -53235], ["AKira - Wiktoria Poriazow", -53235], ["MPW Records", -52860], ["MTN12/Matys", -52860], ["MYUS", -52860], ["Maciej Smoluch", -52860], ["komorowice.pl", 54720], ["Krypto-Prawnik", 54720], ["Kultura na co dzień", 54720], ["Kusi na Kulturę", 54720], ["wiktor tabak", 55626], ["whit3_Dreams", 55626], ["Wojtek WU Zieliński ", 55626], ["W połowie pusta", 55626], ["Salon Kultury ", 56100], ["Co Na Scenie", 56100]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','radiownet','DIOZ','langustanapalmie','SLOWTEAM','SachielSQ','SadRapArioch','Sanders','SibilaVocal','Szarak','Szymonpejski','SzyrGameStudio','TERAZPOLIŻ','TKA','TOP','TheArtOfPatrykSokolowski','TheOnlyOneScandal','Three_Deaths.band','Tomasin','Tomek-Prezes'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
