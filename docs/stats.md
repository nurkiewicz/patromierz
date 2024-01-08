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

<script type="text/javascript" src="data/r/radioem.js"></script>
<script type="text/javascript" src="data/k/kyudo.js"></script>
<script type="text/javascript" src="data/m/monikajaruzelska.js"></script>
<script type="text/javascript" src="data/i/idz.ze.swoja.sila.js"></script>
<script type="text/javascript" src="data/t/teobankologia.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/g/gospodarpg.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/b/BezPlanu.js"></script>
<script type="text/javascript" src="data/z/Zrozumiec-Elektronike.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/w/wszewko.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/l/luksusowetorebki.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/s/SebastianAntonowicz.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/m/mateuszlachowski.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/m/madamemonday.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/p/projektsukces.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Mateusz Lachowski", -1037], ["Gospoda RPG", -1010], ["Projekt Sukces", -998], ["Sebastian Antonowicz", -880], ["Poglebiarka.pl", -665], ["kyudo", -600], ["Teobańkologia", -520], ["Idź ze swoją siłą! - Magdalena Czech", -500], ["LUKSUSOWE TOREBKI by Lux&Happy", -500], ["Marcin Zieliński | Fundacja Rozpal Wiarę", -475], ["Radio eM 107,6 fm", 825], ["Monika Jaruzelska", 835], ["Dwie Lewe Ręce", 850], ["Piotr Górecki", 1400], ["Radio Nowy Świat", 1881], ["Dariusz Rosiak", 2970], ["Joanna Flis", 3345], ["Radio Wnet", 6770], ["Dział Zagraniczny", 10450], ["Radio 357", 28391]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','radiownet','DIOZ','dzialzagraniczny','langustanapalmie','dlr','marcinzielinski','karolinakp','wszewko','radionaukowe','UsłyszećNaCzas','sekielski','Podcastwojennehistorie','palhajstv','accantus','BezPlanu','Vlogcasha','Zmierzchu','planetaabstrakcja','rockserwisfm'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
