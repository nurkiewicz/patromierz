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

<script type="text/javascript" src="data/d/dlr.js"></script>
<script type="text/javascript" src="data/f/FundacjaFilmowaPowolany.js"></script>
<script type="text/javascript" src="data/h/hejto.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/p/psiesucharki.js"></script>
<script type="text/javascript" src="data/k/K3.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/k/KatarzynaBlog.js"></script>
<script type="text/javascript" src="data/d/dwochtypow.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/h/hubertwiecek.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/k/kyudo.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/w/wmiedzyczasie.js"></script>
<script type="text/javascript" src="data/3/3DStudioByBUSER.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/g/grandeconnection.js"></script>
<script type="text/javascript" src="data/d/DiabelskieWersety.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/n/nitya.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Historia Realna - Piotr Zychowicz", -1170], ["Radio Nowy Świat", -1044], ["hejto.pl", -924], ["Diabelskie Wersety", -633], ["Dolnośląski Inspektorat Ochrony Zwierząt", -555], ["Nitya Patrycja Pruchnik", -550], ["Katarzyna Nowak", -500], ["Planeta Abstrakcja", -450], ["K3 podcast Dariusza Bugalskiego", -415], ["Fundacja Filmowa Powołany", -345], ["Niedźwiecka o Zmierzchu", 325], ["GRANDE CONNECTION", 384], ["kyudo", 500], ["Psie Sucharki", 505], ["Hubert Więcek", 650], ["Karolina Korwin Piotrowska ", 805], ["Langusta na palmie", 840], ["Damian Duda", 935], ["Dwie Lewe Ręce", 1225], ["3D Studio by Buser", 1410]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','palhajstv','Vlogcasha','VirtualDream','sekielski','accantus','radionaukowe','rockserwisfm','brzmienie-swiata','historiarealna','Zmierzchu','dwochtypow','planetaabstrakcja','poglebiarka','TERENWIZJA'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
