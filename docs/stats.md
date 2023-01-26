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

<script type="text/javascript" src="data/h/hejto.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/m/muzeumelektroniki.js"></script>
<script type="text/javascript" src="data/w/www.japaczesercem.pl.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/z/zyciewartejestrozmowy.js"></script>
<script type="text/javascript" src="data/z/znokautujbukmachera.js"></script>
<script type="text/javascript" src="data/g/GrupaMoCarta.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/f/fundacjaernesta.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/p/Podcastwojennehistorie.js"></script>
<script type="text/javascript" src="data/c/CSM.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/d/dwochtypow.js"></script>
<script type="text/javascript" src="data/w/Wiez.js"></script>
<script type="text/javascript" src="data/m/mestoslaw.js"></script>
<script type="text/javascript" src="data/v/v4slav.js"></script>
<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/p/pixel.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["życie warte jest rozmowy", -1370], ["Grupa MoCarta", -1000], ["Muzeum Elektroniki", -1000], ["Dolnośląski Inspektorat Ochrony Zwierząt", -595], ["Marcin Zieliński", -580], [" Fundacja Medycyny Prenatalnej - im. Ernesta Wójcickiego", -510], ["Więź", -490], ["PIXEL", -472], ["Mestosław", -455], ["Planeta Abstrakcja", -380], ["Podcast Wojenne Historie", 465], ["Karolina Korwin Piotrowska ", 470], ["Ja Pacze Sercem", 500], ["Znokautuj bukmachera", 890], ["Viacheslav Zarutskii", 1155], ["CSM/worship", 1200], ["Radio Nowy Świat", 1704], ["hejto.pl", 1767], ["Radio 357", 2485], ["Langusta na palmie", 2855]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','palhajstv','VirtualDream','historiarealna','sekielski','Vlogcasha','dwochtypow','accantus','znokautujbukmachera','planetaabstrakcja','rockserwisfm','brzmienie-swiata','Zmierzchu','TERENWIZJA','radionaukowe'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
