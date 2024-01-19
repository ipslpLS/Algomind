---
title: "Algoritmi-geometrici"
type: "article"
date: "2023-12-23T15:21:54+05:30"
tags: ["geometrie", "programare competitionala", "ceva"]
---

$$\mathnormal{ \it{\log(a \cdot b) = \log(a) + \log(b),} }$$
$$\mathnormal{ \log(b) }$$

$$\log(a \cdot b) = \log(a) + \log(b)$$

# Solutia in $O(n)$

# 1. Notiuni generale

## 1.1 Drepte

### Ecuația unei drepte în plan

Forma generală a ecuației unei drepte d în sistemul de coordonate $xOy$ este următoarea:

$$
\begin{align}
d: ax + by + c = 0
\end{align}
$$

Orice punct $M(x,y)$ de pe dreapta d verifică ecuația $(1)$

Ecuaia unei drepte care trece prin dou puncte date $A(xA,yA)$ i $B(xB,yB)$ este urmtoarea:

$$
\begin{align}
\frac{x-xA}{y-yA} = \frac{xB-xA}{yB-yA}
\end{align}
$$

sau echivalent cu aceasta: $(x-xA)(yB-yA)=(xB-xA)(y-yA)$, pentru a evita situaiile când numitorul se anuleaz. O alt form a acestei ecuaii este:

$$
\begin{align}
\begin{vmatrix}
x & y & 1 \\\
xA & yA & 1 \\\
xB & yB & 1
\end{vmatrix} = 0
\end{align}
$$

Dup efectuarea calculelor în $(2)$ sau $(3)$ se obine ecuaia $(1)$, în care

$$
a = yA - yB \\\
b = xB - xA \\\
c = xB \cdot yA - yB \cdot xA
$$

### Ecuaiile parametrice ale unei drepte

Considerm dou puncte distincte $M_{1}(x_{1},y_{1})$ i $M_{2}(x_{2},y_{2})$. Un punct $M(x,y)$ se gsete pe
dreapta $M_{1} M_{2}$, daca

$$
\begin{alignat}{2}
x = x_{1} + (x_{2} - x_{1}) \cdot t& \\\
y = y_{1} + (y_{2} - y_{1}) \cdot t&, \ \ \text{unde} \\ t \in \R \nonumber 
\end{alignat}
$$

Ecuaiile $(5)$ se numesc ecuaiile parametrice ale dreptei $M_{1}M_{2}$.

Dac în $(5)$ lum t numr real din intervalul $[0,1]$, atunci obinem ecuaiile parametrice ale segmentului $[M_{1}M_{2}]$

### Panta unei drepte

Panta unei drepte reprezint tangenta unghiului fcut de dreapt cu axa $Ox$.

Panta unei drepte d dat prin ecuaia $(1)$ este $m = - \frac{a}{b}$, iar pentru dreapta data de ecuatia $(2)$ sau $(3)$ este $m=-\frac{xB - xA}{yB - yA}$.

### Proprietati

1. Dou drepte sunt paralele dac i numai dac pantele lor sunt egale.
2. Dou drepte sunt perpendiculare dac i numai dac produsul pantelor este -1.

## Ecuaia unei drepte care trece printr-un punct i are o pant data

Fie $M_{1}(x_{1}, y_{1})$ i un numr real $m$. Ecuaia dreptei care trece prin punctul $M_{1}$ i are panta $m$ este:

$$
y - y_{1} = m \cdot (x - x_{1})
$$

### Pozitia unui punct fata de o dreapta

Consideram o dreapta d data prin ecuatia $a \cdot x + b \cdot y + c = 0$ si un punct $M(x_{M}, y_{M})$. Atasam dreptei $d$ functia $f:\R \times \R \to \R$, $f(x,y) = a \cdot x + b \cdot y + c$.