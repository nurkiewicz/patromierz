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

<script type="text/javascript" src="data/d/DariuszRosiak.js"></script>
<script type="text/javascript" src="data/z/Zmierzchu.js"></script>
<script type="text/javascript" src="data/r/rapnau.js"></script>
<script type="text/javascript" src="data/l/lkslodz.js"></script>
<script type="text/javascript" src="data/a/annamaruszeczko.js"></script>
<script type="text/javascript" src="data/r/radio357.js"></script>
<script type="text/javascript" src="data/r/radionowyswiat.js"></script>
<script type="text/javascript" src="data/b/brzmienie-swiata.js"></script>
<script type="text/javascript" src="data/l/langustanapalmie.js"></script>
<script type="text/javascript" src="data/a/accantus.js"></script>
<script type="text/javascript" src="data/s/sekielski.js"></script>
<script type="text/javascript" src="data/c/crisfroese.js"></script>
<script type="text/javascript" src="data/i/IMlahti.js"></script>
<script type="text/javascript" src="data/s/StowarzyszenieTęcza.js"></script>
<script type="text/javascript" src="data/m/mieczyslaw_lusiak.js"></script>
<script type="text/javascript" src="data/b/balet-krynica.js"></script>
<script type="text/javascript" src="data/h/historiarealna.js"></script>
<script type="text/javascript" src="data/p/palhajstv.js"></script>
<script type="text/javascript" src="data/t/TERENWIZJA.js"></script>
<script type="text/javascript" src="data/s/schroniskopegasus.js"></script>
<script type="text/javascript" src="data/r/rockserwisfm.js"></script>
<script type="text/javascript" src="data/v/Vlogcasha.js"></script>
<script type="text/javascript" src="data/d/dzialzagraniczny.js"></script>
<script type="text/javascript" src="data/b/BezSchematu.js"></script>
<script type="text/javascript" src="data/u/UsłyszećNaCzas.js"></script>
<script type="text/javascript" src="data/r/radionaukowe.js"></script>
<script type="text/javascript" src="data/k/karolinakp.js"></script>
<script type="text/javascript" src="data/k/kyudo.js"></script>
<script type="text/javascript" src="data/m/motoambulans.js"></script>
<script type="text/javascript" src="data/f/fundacjaduchleona.js"></script>
<script type="text/javascript" src="data/z/zyciewartejestrozmowy.js"></script>
<script type="text/javascript" src="data/p/poglebiarka.js"></script>
<script type="text/javascript" src="data/m/marcinzielinski.js"></script>
<script type="text/javascript" src="data/f/fundacjajudyta.js"></script>
<script type="text/javascript" src="data/d/DIOZ.js"></script>
<script type="text/javascript" src="data/v/VirtualDream.js"></script>
<script type="text/javascript" src="data/p/planetaabstrakcja.js"></script>
<script type="text/javascript" src="data/d/dwochtypow.js"></script>

<script type="text/javascript">
    window.onload = () => {
            drawHorizontal([["Mieczysław Łusiak SJ", -510], ["Krynickie Studio Baletowe im. Władysława Szlęka", -500], ["Borkoś", -495], ["Cris Froese", -280], ["Stowarzyszenie Tęcza w Krakowie ", -250], ["Historia Realna - Piotr Zychowicz", -245], ["Usłyszeć Na Czas", -220], ["Marcin Zieliński", -205], ["Bez/Schematu", -200], ["RAPNAU", -200], ["życie warte jest rozmowy", 350], ["Karolina Korwin Piotrowska ", 395], ["Fundacja dla Szczeniąt Judyta", 440], ["Schronisko Pegasus", 445], ["Radio Naukowe - podcast Karoliny Głowackiej", 465], ["Fundacja Duch Leona", 500], ["kyudo", 500], ["Magda Skorek", 510], ["ŁKS Łódź", 525], ["Anna Maruszeczko", 800]], 'largest_changes');
            drawMulti(['radio357', 'radionowyswiat'], 1, 'two_radios', 'currency');
            setTimeout(() => {
                drawMulti(
                    ['DariuszRosiak','DIOZ','langustanapalmie','dzialzagraniczny','marcinzielinski','UsłyszećNaCzas','palhajstv','Vlogcasha','VirtualDream','sekielski','accantus','historiarealna','radionaukowe','rockserwisfm','brzmienie-swiata','dwochtypow','Zmierzchu','planetaabstrakcja','poglebiarka','TERENWIZJA'], 
                    1, 'top_but_two', 'currency');
                }, 100);
    };
</script>
