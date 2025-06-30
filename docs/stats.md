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

<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/w/WzajemniePomocni.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/s/SciFun.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/f/fundacjaernesta.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/n/nowylad.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/s/SzkolaPitagoLasa.js"></script>
<script type="text/javascript" src="data/s/SOWINSKY.js"></script>
<script type="text/javascript" src="data/a/AgnieszkaCegielska.js"></script>
<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/k/KatarzynaBlog.js"></script>
<script type="text/javascript" src="data/r/ReportazZwycinkowSwiata.js"></script>
<script type="text/javascript" src="data/z/ZGlowaWGwiazdach.js"></script>
<script type="text/javascript" src="data/a/arhneu.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/e/ewakaleta.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/t/trzech.panow.K.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([[" Fundacja Medycyny Prenatalnej - im. Ernesta Wójcickiego", -1010], ["Radio Nowy Świat", -890], ["Szkoła PitagoLasa", -760], ["Dolnośląski Inspektorat Ochrony Zwierząt", -755], ["arhn.eu", -500], ["Reportaż z wycinków świata - Monika Białkowska", -416], ["Agnieszka Cegielska", -403], ["Fundacja Wzajemnie Pomocni", -360], ["Podcastex", -360], ["Portal publicystyczny Nowy Ład ", -267], ["Karol Wójcicki | Z głową w gwiazdach", 310], ["Fundacja po DRUGIE", 320], ["Katarzyna Nowak", 450], ["Dariusz Rosiak", 465], ["Trzech Panów K", 470], ["Ewa Kaleta", 535], ["Dział Zagraniczny", 885], ["Karolina Korwin Piotrowska ", 920], ["Podcast Wojenne Historie", 1640], ["SciFun", 20437]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','karolinakp','NaukowyBelkot','Podcastwojennehistorie','langustanapalmie','SciFun','radionaukowe','marcinzielinski','WzajemniePomocni','Gadowski','podkastamerykanski','podcastex','Vlogcasha','accantus','poglebiarka','palhajstv','Zmierzchu','SOWINSKY','ReportazZwycinkowSwiata'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
