---
title: "atcoder - D-Knapsack 1"
type: "article"
tags: ["programare dinamică", "algoritmică", "programare competițională", "atcoder"]
date: "2024-06-05T01:21:54+05:30"
thumbnail_images:
    - "al-doilea-articol-image-prew.jpg"
---

# Enunț

|Problemă|Enunț|
|---|:---:|
|Atcoder - D-Knapsack 1|[link](https://atcoder.jp/contests/dp/tasks/dp_d)|
|Infoarena - Problema rucsacului|[link](https://www.infoarena.ro/problema/rucsac)|

# Soluție

{{< textpointer filename="main.cpp" nametag="f4" >}}
```c++
/*
Problema de față este un exemplu clasic al utilizări dinamice, cu o complexitate pseduo-liniară O(W*G).
Cum generarea tuturor soluțiilor de a umple rucsacul are o complexitate exponențială,
trebuie să reținem *eficient* posibilitățile de a pune obiecte în rucsac, care și realizează un profit cât mai mare.

Definim astfel dp[k][w] - cel mai mare profit pe care îl putem face dacă avem la dispoziție o capacitate de w-unități de stocare
și putem alege din primele k obiecte.

Această matrice, indiferent de gabaritele ei, ne oferă versatilitatea să aflăm informații cheie despre anumite scenarii.
Pornim de la ideea că dacă avem calculat cel mai profitabil set de obiecte pentru o anumită capacitate și ne apare
încă puțin spațiu - trebuie să reconfigurăm setul de obiecte ca să nu pierdem spațiu de stocare util, dar nici să nu pierdem din profitul
anterior făcut.

Astfel trebuie să facem câțiva pași în spate pentru a valorifica importanța anumitor obiecte puse, care pot fi înlocuite
de un obiect mai voluminos, dar poate și mai valoros.

Această întoarcere în deciziile trecute poate fi realizată eficient prin privirea în valorile matricii nostru, doar că
în configurațiile în care aveam o greutate mai mică, mai exact la greutatea: w - greutatea_obiectului_curent. De ce?
Pentru că încercăm să vedem dacă scoțând anumite obiecte pentru a face loc noului obiect, ne va realiza un câștig mai mare.
De aici și următoarea linie de cod:
(1)    dp[i][j] = dp[i-1][j];
(2)    if( j >= o[i].w )
(3)        dp[i][j] = max( dp[i][j], dp[i-1][j - o[i].w] + o[i].v);

*(1) - considerăm că adăugam niciun obiect în plus și nu ne batem capul să facem loc în rucsac.
*(2) - verificam dacă putem în general să luăm în cel mai rău caz obiectul.
*(3) - comparăm dacă adăugând obiectul în rucsacul golit special poate aduce un profit mai mare decât a cea rucsacului negolit.
De asemenea, dp[i-1][j - o[i].w] este profitul maxim pentru un rucsac de mărime j - o[i].w, deci aflăm cât de mult profit aduce
un rucsac mai slăbit.

O ultimă idee este că trebuie parcurse obiectele pe rând pentru a exclude cazurile de dublicitate,
de aceea realizăm o matrice în loc de vector - pentru a controla și setul de obiecte accesibile în umplerea unui rucsac
*/

#include <iostream>
#include <algorithm>
#include <fstream>
#include <cmath>
#include <cstring>
using namespace std;

#define fast ios_base::sync_with_stdio(false);cin.tie(nullptr);cout.tie(nullptr);


//Realizez o structură ajutătoare, care ține cont de {w - greutatea, v - valuarea} obiectului

struct obiect{
    int w, v;
};

int main() {
    fast
    
    int N, W;
    cin >> N >> W;

    obiect o[N+2];
    for( int i = 1; i <= N; ++i )
        cin >> o[i].w >> o[i].v;
    
    long long dp[N+2][W+2];
    memset( dp, 0, sizeof(dp) );
    
    for( int i = 1; i <= N; ++i ) ///trecem prin fiecare set posibil de obiecte din care putem alege să punem în rucsac
    {
        for( int j = 0; j <= W; ++j ) ///trecem prin fiecare capacitate de stocare
        {
            dp[i][j] = dp[i-1][j]; ///cazul în care nu luăm nimic, profitul rămâne același ca în cazul în care nu avem la dispoziție obiectul i
            if( j >= o[i].w ) ///comparăm dacă putem în general să punem obiectul în rucsac, chiar și dacă golit complet
                dp[i][j] = max( dp[i][j], dp[i-1][j - o[i].w] + o[i].v);
                ///lăsăm profitul maxim, printre care și decizia de a face loc în rucsac pentru un potențial nou obiect
        }
    }
    cout << dp[N][W];///Afișăm cazul în care rucsacul este de greutatea cerută, în care avem acces la toate obiectele posibile
    return 0;
}
```
{{< /textpointer >}}