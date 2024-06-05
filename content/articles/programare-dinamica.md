---
title: "Programare dinamică"
type: "article"
tags: ["programare dinamică", "divide et impera", "algoritmică"]
date: "2024-02-18T15:21:54+05:30"
description: "Articol care explică unde și cum se poate aplica programarea dinamică, atât pentru eficiență cât și pentru eleganța implementării"
thumbnail_images:
    - "al-doilea-articol-image-prew.jpg"
author:
    - "ipslp"
---

# Introducere

Programarea dinamică este o tehnică des întâlnită în problemele de combinatorică, de numărare și de optimizare. Asemenea tehnicii divide et impera, programarea dinamică se folosește de soluțiile sub-problemelor rezolvate anterior pentru construirea soluției generale.
Este important de ținut cont că problemele rezolvate anterior trebuie să se intersecteze unele cu altele, adică să aibă sub-probleme comune.

Diferit de cum ar proceda o abordare divide et impera, programarea dinamică reține soluțiile problemelor rezolvate anterior decât să le recalculeze printr-un apel recursiv.
De aici vine eficiența și eleganța programării dinamice.

Mai dificil de implementat, multe probleme de calcul care se folosesc de o lege de recurentă pot fi optimizate folosind programarea dinamică.
 
Hai să analizăm o optimizare clasică, anume aflarea al $n$-lea element al [șirului Fibonacci](https://en.wikipedia.org/wiki/Fibonacci_sequence).

# Al $n$-lea element al șirului Fibonacci

Având în minte {{< tooltip text="$$ \begin{cases} F_{1} = 0 \\\ F_{2} = 1 \\\ F_{n} = F_{n-1} + F_{n-2} \end{cases} $$">}} relația de recurență {{</ tooltip >}} al șirului Fibonacci, considerăm funția `F(n)`, care v-a returna al $n$-lea element al șirului și va arăta așa:

{{< textpointer nametag="f1" >}}
```c++
dacă n = 1
    returnează 1
altfel daca n = 0
    returnează 0
altfel dacă n > 1
    returnează F(n-1) + F(n-2)
```
{{</ textpointer >}}

{{< textpointer-link nametag="f1" lines="1-4" text="liniile $1$ și $3$" >}}{{</ textpointer-link>}} vor fi cazurile de bază, iar linia {{< textpointer-link nametag="f1" lines="5-6" text="linia $6$" >}}{{</ textpointer-link>}} relația de recurență.

Pentru $n = 5$, funția va fi rulată în felul următor:

![Figură nr.1](/Algomind/images/graf-fibonnaci-1.jpg)

Observăm că mai multe apeluri făcute pentru calcularea lui `F(3)`, se repetă în calcularea lui `F(4)`. Asemănător la `F(3)`, unde se repetă calcularea lui `F(2)`.

Această observație ne duce cu gândul la următoarea întrebare: *Este necesară recalcularea lui* `F(3)`, `F(2)`, ...? - Răspunsul este *NU*.

După calcularea pentru prima oară lui `F(3)`, `F(2)`, ... îi putem memora într-un vector `dp` și să îi refolosim când avem nevoie, fără să-i recalculăm recursiv.

Acestei metode de optimizare prin memorarea rezultatelor i se mai spune și **memoizare**.

O să inițializâm vectorul `dp` cu $-1$, iar după calcularea lui `F(n)`, reținem valuarea acestuia în `dp[n]`.

Funția modificată arată în felul următor:

{{< textpointer nametag="f2" >}}
```c++
dacă n = 1
    returnează 1
altfel daca n = 0
    returnează 0
altfel dacă dp[n] nu este egal cu -1
    returnează dp[n]
altfel
    dp[n] = F(n-1) + F(n-2)
    returnează dp[n]
```
{{</ textpointer >}}

{{< textpointer-link nametag="f2" lines="5-6" text="Nota $1$" >}} Cazul în care am calculat deja `F(n)` {{</ textpointer-link>}}

## Iterativ vs Recursiv

Rezolvarea de mai sus se folosește de **recursivitate**, pornind mai întâi de la răspunsul general, fragmentându-l în mai multe sub-probleme mai mici. Asemenea unui arbore, parcurge "top-bottom" (de sus în jos) soluțiile, din rădăcină spre frunze.

Pe de altă parte, mai există o metodă care nu se folosește de recursivitate și are o complexitate polinomială - numită și ***iterativă***.

Aceasta ia fiecare caz în parte, de la cea mai mică "bottom-up", și influențează rând pe rând soluțiile viitoare (cu o arie de intersecție cu alte sub-probleme mai mare), astfel ordinea lor de accesare sau modificare (în scopul construirii soluției) nu se face în funcție de soluția finală.

Soluția anterioară modificată să fie *iterativă*:

{{< textpointer nametag="f3" >}}
```c++
dp[1] = 0
dp[2] = 1
pentru i←3,n execută
    dp[i] = dp[i-1] + dp[i-2]
returnează dp[n]
```
{{</ textpointer >}}

{{< textpointer-link nametag="f3" lines="3-4" text="Nota $2$" >}}Parcurgere iterativă printr-un `for`{{</ textpointer-link>}}, {{< textpointer-link nametag="f3" lines="4" text="Nota $3$" >}}`F(i-1)` și `F(i-2)` construiesc soluția lui `F(i)`, necontribuind direct la soluția lui `F(n)`{{</ textpointer-link>}}

# Numărul de moduri de a parcurge o distanță

## Problema scării

Fie problema cu enunțul următor:
Se dă o scară cu $N$ trepte. În câte moduri se poate ajunge pe treapta cu numărul $N$, dacă ne aflam inițial pe scara cu numătul $0$ și putem să urcăm câte $o$ treaptă sau $două$ trepte la un pas?

<br>

{{< hint title="Soluție" >}}
Ne folosim de același principiu ca la problema cu numerele fibonacci, doar că interpretăm `F(i)` sau `dp[i]` ca fiind - *nr de moduri de a parcurge primele $i$ trepte*.

Putem să ajungem pe treapta cu nr. $i$ de pe treapta $i-1$ sau $i-2$, pentru care am aflat anterior în câte moduri putem să ajungem la ele. Astfel `dp[i] = dp[i-1] + dp[i-2]`.

Cod suport în c++:

{{</* textpointer filename="main.cpp" nametag="f4" */>}}
```c++
dp[1] = 1;
dp[2] = 2;
for( int i = 3; i <= n; ++i )
{
    dp[i] = dp[i-1] + dp[i-2];
}
return dp[n];
```
{{</* /textpointer */>}}

{{</* textpointer-link nametag="f4" lines="1-2" text="Nota $4$" */>}}Cazurile de bază ( putem să asociem cu condiția de oprire în recursivitate ){{</* /textpointer-link */>}}
{{</ hint >}}

## Problema broaștei țestoase

Fie problema cu enunțul următor:
Se dă o matrice cu $N$ linii și $M$ coloane. O broască țestoasă se află pe celula de coordaonate $(1, 1)$. În câte moduri poate ajunge la celula de coordonate $(N, M)$, dacă se poate deplasa din celula de coordoante $(i, j) $ în celulele $(i+1, j)$ sau $(i, j+1)$?

{{< hint title="Hint" >}}
Se aseamănă cu problema anterioară cu scara. Construim soluțiile pe baza soluțiilor anterioare, doar că de data asta într-o matrice.
{{</ hint >}}

{{< hint title="Soluție" >}}
Definim matricea `dp[i][j]` - în câte moduri se paote ajunge în celula de coordonate $(i, j)$.

Cum broasca țestoasă se deplasează din $(1, 1)$, vom parcurge matricea de la stânga la dreapta, de sus în jos - (bottom-up), pe direcțiile cum ar fi mers broasca țestoasă.

Celulele din care poate ajunge în $(i, j)$ sunt $(i-1, j)$ sau $(i, j-1)$, pentru care am aflat anterior în câte moduri se poate ajunge la ele. Astfel `dp[i][j] = dp[i-1][j] + dp[i][j-1]`.

Cod suport în c++:
{{</* textpointer nametag="f5" filename="main.cpp" */>}}
```c++
dp[1][1] = 0;
for( int i = 1; i <= n; ++i )
    dp[i][1] = 1;
for( int j = 1; j <= m; ++j )
    dp[1][j] = 1;
for( int i = 2; i <= n; ++i )
{
    for( int j = 2; j <= m; ++j )
    {
        dp[i][j] = dp[i-1][j] + dp[i][j-1];
    }
}
return dp[n][m];
```
{{</* /textpointer */>}}

{{</* textpointer-link nametag="f5" lines="1" text="Nota $5$" */>}}Considerăm că nu facem niciun efort pentru a ajunge la celula de la care pornim.{{</* /textpointer-link */>}},{{</* textpointer-link nametag="f5" lines="2-5" text="Nota $6$" */>}}Știm că pentru celulele cu coloana sau linia pe margine se poate ajunge **doar** prin mișcare orizontală, sau verticală. Prin această inițializare formăm un așa zis *"perete"*.{{</* /textpointer-link */>}}

{{</ hint >}}