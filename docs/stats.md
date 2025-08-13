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

<script type="text/javascript" src="data/f/Fundacja_po_DRUGIE.js"></script>
<script type="text/javascript" src="data/p/podcastex.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/p/podkastamerykanski.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/n/NaukowyBelkot.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/b/BliskoRahamim.js"></script>
<script type="text/javascript" src="data/c/CezaryGutowski.js"></script>
<script type="text/javascript" src="data/n/niewiemalesiedowiem.js"></script>
<script type="text/javascript" src="data/a/AgnieszkaCegielska.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/a/astrolife.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/f/FundacjaNautilus.js"></script>
<script type="text/javascript" src="data/m/MKSKotwicaKolobrzeg.js"></script>
<script type="text/javascript" src="data/s/studioreymonta.js"></script>
<script type="text/javascript" src="data/g/Gadowski.js"></script>
<script type="text/javascript" src="data/t/tetrycy.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/d/dajherbate.js"></script>
<script type="text/javascript" src="data/d/dobrywieczoreuropo.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/r/radiownet.js"></script>
<script type="text/javascript" src="data/h/hektikhektor.js"></script>
<script type="text/javascript" src="data/s/SciFun.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/d/darwin.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Radio Wnet", -1010], ["Nie wiem, ale się dowiem", -730], ["Fundacja Nautilus", -670], ["Uwaga Naukowy Bełkot", -497], ["Dobry wieczór Europo!", -484], ["Radio Nowy Świat", -406], ["Pal Hajs TV", -380], ["Agnieszka Cegielska", -359], ["SciFun", -344], ["Cezary Gutowski", -320], ["Blisko Rahamim", 320], ["MKS KOTWICA KOŁOBRZEG", 370], ["Hektik Hektor", 400], ["Radio Naukowe - podcast Karoliny Głowackiej", 405], ["Witold Gadowski", 460], ["Grupa Filmowa Darwin ", 481], ["Karolina Korwin Piotrowska ", 715], ["Tetrycy", 1545], ["Podcast Wojenne Historie", 1705], ["Studio Reymonta", 3390]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat', 'radiownet'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','dzialzagraniczny','karolinakp','NaukowyBelkot','Podcastwojennehistorie','SciFun','DIOZ','tetrycy','radionaukowe','marcinzielinski','Gadowski','podkastamerykanski','podcastex','Vlogcasha','accantus','rockserwisfm','palhajstv','Fundacja_po_DRUGIE','dajherbate','astrolife'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
