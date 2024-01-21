---
title: "Problem Statement Example"
type: "article"
tags: ["probleme", "enunt", "2024"]
date: "2024-01-01T15:21:54+05:30"
description: "Rezumat la **Problem Statement Example**"
thumbnail_images:
    - "problem-statement-example-image-prew.jpg"
---

Ionel are de rezolvat o nouă problemă. El trebuie să construiască un șir de N numere naturale. Numerele din șir pot avea ca divizori primi doar numere prime de o cifră. După construirea șirului, Ionel a constatat că există subsecvențe în șir pentru care produsul elementelor este cubul unui număr natural.

# Cerința

Ionel vrea să determine numărul subsecvențelor din șirul construit care au produsul elementelor o valoare ce este cubul unui număr natural.

# Date de intrare

Fișierul de intrare `cub.in` va conține pe prima linie numărul natural $N$, iar pe linia următoare se vor afla $N$ numere naturale separate prin câte un spațiu, elementele șirului construit de Ionel.


# Date de ieșire

Fișierul de ieșire `cub.out` va conține pe prima linie un număr natural reprezentând numărul subsecvenţelor din șirul construit care au produsul elementelor egal cu o valoare ce este cubul unui număr natural.


# Restricții și precizări

* _$N$ şi elemente șirului sunt numere naturale din intervalul $[2,10^6].$_
* _Prin subsecvenţă a unui șir se înțelege o succesiune de unul sau mai mulți termeni din șir aflați pe poziții consecutive._
* _Pentru teste în valoare de $20$ de puncte, $N \leq 1 \ 000.$_
* _Pentru teste în valoare de $40$ de puncte, $N \leq 10 \ 000.$_

# Exemplu

`cub.in`

```
8
15 3 5 15 7 63 21 125
```

`cub.out`

```
6
```

## Explicație

Sunt $6$ subsecvențe în șir cu produsul elementelor egal cu o valoare care este cubul unui număr natural:

$
\mathbf{1)} \ \ 15,\ 3, \ 5, \ 15; \\\
\mathbf{2)} \ \ 7, \ 63, \ 21; \\\
\mathbf{3)} \ \ 125; \\\
\mathbf{4)} \ \ 15, \ 3, \ 5, \ 15, \ 7, \ 63, \ 21; \\\
\mathbf{5)} \ \ 7, \ 63, \ 21, \ 125; \\\
\mathbf{6)} \ \ 15, \ 3, \ 5, \ 15, \ 7, \ 63, \ 21 \ 125;
$