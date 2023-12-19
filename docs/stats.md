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

<script type="text/javascript" src="data/p/pawbeats.js"></script>
<script type="text/javascript" src="data/p/Polishboy.js"></script>
<script type="text/javascript" src="data/r/Rava.js"></script>
<script type="text/javascript" src="data/m/Mia.js"></script>
<script type="text/javascript" src="data/r/red.tomasz.js"></script>
<script type="text/javascript" src="data/r/rete.js"></script>
<script type="text/javascript" src="data/p/Polinstrumentalista.js"></script>
<script type="text/javascript" src="data/p/popioltokot.js"></script>
<script type="text/javascript" src="data/m/MYUS.js"></script>
<script type="text/javascript" src="data/p/prezenterflesh.js"></script>
<script type="text/javascript" src="data/r/Rapgra.js"></script>
<script type="text/javascript" src="data/m/Moscicki.js"></script>
<script type="text/javascript" src="data/m/mati-muzyka.js"></script>
<script type="text/javascript" src="data/p/piesapol.js"></script>
<script type="text/javascript" src="data/r/radioOPOKA.js"></script>
<script type="text/javascript" src="data/p/piotrmatusik.js"></script>
<script type="text/javascript" src="data/r/RatwithNut.js"></script>
<script type="text/javascript" src="data/p/Projektwesele.js"></script>
<script type="text/javascript" src="data/m/Matias.js"></script>
<script type="text/javascript" src="data/p/praktycznapani.js"></script>
<script type="text/javascript" src="data/m/Mesney6.js"></script>
<script type="text/javascript" src="data/p/Pokolenia.js"></script>
<script type="text/javascript" src="data/r/radiorodzina.js"></script>
<script type="text/javascript" src="data/p/portroyalcrew.js"></script>
<script type="text/javascript" src="data/m/MTN12Matys.js"></script>
<script type="text/javascript" src="data/p/PODPRAD.js"></script>
<script type="text/javascript" src="data/r/revenwood.js"></script>
<script type="text/javascript" src="data/r/refaktor.js"></script>
<script type="text/javascript" src="data/p/PRmovies.js"></script>
<script type="text/javascript" src="data/p/pawelskiba.js"></script>
<script type="text/javascript" src="data/p/piotrakowski.js"></script>
<script type="text/javascript" src="data/m/MonAmi.js"></script>
<script type="text/javascript" src="data/p/pstykdj.js"></script>
<script type="text/javascript" src="data/m/MPWRecords.js"></script>
<script type="text/javascript" src="data/p/PiataStronaSwiata.js"></script>
<script type="text/javascript" src="data/m/MidzGarrot.js"></script>
<script type="text/javascript" src="data/p/PawełMelnarowicz.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Maciej Smoluch", -54250], ["Mati", -54250], ["MPW Records", -52850], ["MTN12/Matys", -52850], ["MYUS", -52850], ["Mesney6", -52850], ["Mia", -52850], ["Michal Sapiński", -52850], ["MonAmi", -52850], ["Mariusz Moscicki", -52850], ["Port Royal", 877993], ["Praktyczna Pani", 877993], ["Prezenter Flesh", 877993], ["Pstyktodj", 877993], ["radioOPOKA", 877993], ["Katolickie Radio Rodzina", 877993], ["red.tomasz", 877993], ["Refaktor", 877993], ["Rete", 877993], ["Ronald Evenwood (The RE Works)", 878013]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['PawełMelnarowicz','PiataStronaSwiata','Pokolenia','Polinstrumentalista','Polishboy','Projektwesele','Rapgra','RatwithNut','Rava','pawbeats','pawelskiba','piesapol','piotrakowski','piotrmatusik','popioltokot','portroyalcrew','praktycznapani','prezenterflesh','pstykdj','radioOPOKA'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
