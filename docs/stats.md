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

<script type="text/javascript" src="data/p/pompanacyklu.js"></script>
<script type="text/javascript" src="data/p/PODPRAD.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/c/CentrumMotoryzacjiHistorycznej.js"></script>
<script type="text/javascript" src="data/p/piotrmichalski.js"></script>
<script type="text/javascript" src="data/k/KaratNM-OrzełSyrenka.js"></script>
<script type="text/javascript" src="data/r/revenwood.js"></script>
<script type="text/javascript" src="data/r/RatwithNut.js"></script>
<script type="text/javascript" src="data/k/Kamiaze7.js"></script>
<script type="text/javascript" src="data/p/polskapilkakobiet.js"></script>
<script type="text/javascript" src="data/r/rete.js"></script>
<script type="text/javascript" src="data/k/KrystianBielawski.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/p/polishreds.js"></script>
<script type="text/javascript" src="data/l/LukaszBok.js"></script>
<script type="text/javascript" src="data/j/Jonek.js"></script>
<script type="text/javascript" src="data/k/Krisdj.js"></script>
<script type="text/javascript" src="data/k/Krasza.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/r/radioOPOKA.js"></script>
<script type="text/javascript" src="data/k/KajsonDavidek.js"></script>
<script type="text/javascript" src="data/k/KontrArgument.js"></script>
<script type="text/javascript" src="data/p/piłkawkoloratce.js"></script>
<script type="text/javascript" src="data/r/Rava.js"></script>
<script type="text/javascript" src="data/k/Kryst90.js"></script>
<script type="text/javascript" src="data/r/refaktor.js"></script>
<script type="text/javascript" src="data/p/pitdadson.js"></script>
<script type="text/javascript" src="data/p/podkarpacielive.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/b/Bioran.js"></script>
<script type="text/javascript" src="data/r/Rapgra.js"></script>
<script type="text/javascript" src="data/p/psnews.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/r/red.tomasz.js"></script>
<script type="text/javascript" src="data/r/radiorodzina.js"></script>
<script type="text/javascript" src="data/j/Jowita.js"></script>
<script type="text/javascript" src="data/k/KamikazeLDZ.js"></script>
<script type="text/javascript" src="data/k/Konkubent.js"></script>
<script type="text/javascript" src="data/p/przedszgolaki.js"></script>
<script type="text/javascript" src="data/p/przemyslenianieznanegosportowc.js"></script>
<script type="text/javascript" src="data/k/KODIAK.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Rapgra.eu", -932313], ["Artur Dąbrowski", -932313], ["Anna Rawa", -932313], ["radioOPOKA", -932313], ["Katolickie Radio Rodzina", -932313], ["red.tomasz", -932313], ["Refaktor", -932313], ["Rete", -932313], ["Ronald Evenwood (The RE Works)", -932313], ["POD PRĄD", -877468], ["Piotr Michalski", 56225], ["Pitdadson", 56225], ["Piłka w Koloratce", 56225], ["PodkarpacieLIVE", 56225], ["Polish REDS", 56225], ["Polska Piłka Kobiet", 56225], ["Pompa_na_Cyklu", 56225], ["Przedszgolaki", 56225], ["Mariusz Ukleja", 56225], ["Piaseczno Sport News", 56225]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','radiownet','DIOZ','langustanapalmie','Bioran','CentrumMotoryzacjiHistorycznej','Jonek','Jowita','KODIAK','KajsonDavidek','Kamiaze7','KamikazeLDZ','KaratNM-OrzełSyrenka','Konkubent','KontrArgument','Krasza','Krisdj','Kryst90','KrystianBielawski','LukaszBok'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
