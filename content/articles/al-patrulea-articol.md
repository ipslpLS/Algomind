---
title: "Retrospectiva Anului 2023"
type: "article"
tags: ["informatii", "anunturi", "2023"]
date: "2023-12-23T15:21:54+05:30"
images:
    - "al-doilea-articol-image-prew.jpg"
---


```
#include <iostream>
using namespace std;
int main()
{
	return 0;
}	
```

> a
> > a.i
> > > a.i.1

> > a.j

`ceva`

> Un citat foarte motivational

`ceva`

> # Un titlu util
> Merge si alt  paragraf
> > ceva pus sub evidenta
>

> # Dacă $⊕$ era $+$
> Să ne gândim mai întâi cum rezolvam problema dacă suma xor era de fapt sumă normală. Mă refer la soluția cu sume parțiale. Păi, calculăm sumele parțiale ale vectorului dat, iar când am ajuns la o poziție $j$, ne uităm în stânga sa după o poziție $i$, astfel încât valoarea $ps[j]−ps[i]$ să fie maximă. Cum $j$ este fixat, vom obține diferența maximă atunci când $ps[i]$ este minim. Pentru a accesa această valoare în timp constant, este de ajuns să menținem minimul sumelor parțiale calculate până la pasul curent.

`ceva`

`c++`
{{< textpointer nametag="code-doi-doi" color="rgb(0, 255, 0)" >}}
```cpp
#include <bits/stdc++.h>

using namespace std;

float score = 0;

void result(const char* msg, float pts) {
    //"{score}" to stdout
    //"{message}" to stderr
    // score is a float between 0 and 1
	printf("%f", pts);
    fprintf(stderr, "%s", msg);
	exit(0);
}

void Assert(bool cond, string str) {
	if (!cond)
		result(str.c_str(), 0);
}
void Success(float pts, string str) {
	result(str.c_str(), pts);
}

ifstream out, ok, in;

int main(int argc, char* argv[]) {
	in.open(argv[1]); // test input; assumed to be valid
	ok.open(argv[2]); // correct output
	out.open(argv[3]); // user output
    int task;
	in >> task;
    if(task == 1){
        int ansok, ansout;
        ok >> ansok;
        Assert(!!(out >> ansout), "translate:wrong"); // try to read contestant's answer
        Assert(ansout == ansok, "translate:wrong"); // check if values match
        score += 1;
		Success(score, "translate:success");
    }
    else {
        int nrok, nrout;
        // not giving partial points if the first part of the answer is wrong, even if the second one might be right
        Assert(!!(out >> nrout), "Wrong answer. Wrong format for number");
        ok >> nrok;
        Assert(nrout == nrok, "Wrong answer. Incorrect number");
        score += 0.5;
        string message = "Correct number. ";
        double valok, valout;
        ok >> valok;
        // giving partial points even if the second part of the answer is wrong
        if(!!(out >> valout) && abs(valok - valout) <= 1e-5)
            score += 0.5, message += "Correct value";
        else
            message += "Wrong value";
        Success(score, message);
    }
}
```
{{</ textpointer >}}

{{< textpointer-link nametag="code-doi-doi" lines="12,20,30" text="Ceva">}}

Dat fiind că nu a fost nicio asemenea retrospectivă scrisă în 2022, am decis să reînvii această tradiție, dar mutând-o pe kilonova.

2023 a adus pentru informatica românească unele dintre cele mai semnificative proiecte și schimbări în bine, schimbări ce își vor aduce efectul pozitiv de-a lungul următorilor ani. Printre altele, voi enumera coagularea comunității în jurul proiectelor Kilonova și RoAlgo, reorganizarea structurii SEPI, atingerea unui nou nivel în ceea ce privește eforturile comunității de a crea și învia diverse concursuri de informatică dar și multe alte proiecte care au avut loc, toate având scopul de a produce o schimbare de jos în sus cu scopul îmbunătățirii generale a nivelului de pregătire a concurenților și nu numai. Totuși, așa cum aceste proiecte au adus îmbunătățiri simțitoare, există și multe provocări la orizont, iar următorii ani trebuie să continue aceste schimbări apărute în acest an și nu numai.

# Coagularea comunității în jurul proiectelor Kilonova și RoAlgo

Se poate spune cu certitudine că popularizarea Kilonova și apariția RoAlgo reprezintă două dintre cele mai importante schimbări apărute în 2023. Comunitatea RoAlgo, ajunsă la peste 1800 de membri, împreună cu echipa Kilonova au pus la cale câteva proiecte esențiale pentru a ajuta deopotrivă elevii, profesorii, studenți și alți pasionați de informatică, printre acestea putem enumera următoarele:

 - Încărcarea pe kilonova a peste 1500 de probleme, printre altele putem enumera toate problemele de la OJI și ONI, precum și o mare parte din loturile de informatică, IIOT, diferite concursuri de informatică și multe alte probleme.
 - Adăugarea de către Alex Vasiluță unui număr impresionant de features pe această platformă, precum checklist-urile, concursurile virtuale, formatul ICPC pentru clasamente și dezvoltarea întregii interfațe pentru organizarea unui număr mare de concursuri, de multe ori și în același timp.
 - Organizarea a 8 concursuri marca RoAlgo, precum și găzduirea multor alte concursuri, cele mai importante fiind RCPCamp, problemele pot fi găsite aici, mirror-urile IIOT, Urmașii lui Moisil precum și găzduirea mirror-urile multor concursuri locale și regionale.
 - Începerea creării unei arhive educaționale de către o comunitate entuziastă de membri ai acestor comunități
 - Identificarea unor talente reale în arta propunerii de probleme și în ceea ce privește explicarea diferitelor conținuturi din materia olimpiadelor de informatică.

 # Creșterea numărului de concursuri de informatică create de membri entuziaști ai comunității

2023 a adus de asemenea, pe lângă rundele RoAlgo și celelalte competiții menționate mai sus, un număr foarte mare de concursuri de o calitate superioară, de cele mai multe ori pregătite de elevi de liceu și în multe cazuri, elevi de gimnaziu. Aici voi enumera câteva din cele mai semnificative concursuri:

 - Două runde Codeforces (875 și 915) organizate de autori români, continuând trendul pozitiv creat de propunătorii români în ultimii ani pe aceste platforme.
 - Rundele PreOJI organizate de InfoLeague și VianuCSE
 - Runda PreONI pentru juniori organizată pe Nerdarena, unde toți propunătorii de probleme au fost elevi de gimnaziu
 - Stelele Informaticii 2023, un format nou aducând prima ediție a acestui concurs după foarte mulți ani, problemele găsindu-se aici
 - Cea de-a noua ediție a AGM, un concurs de informatică pe echipe organizat în stil ICPC
 - Diferite concursuri locale și regionale, precum CCEX Suceava, Moisil++, Info Winter Speed Code, Marytone Contest etc.

 # Reorganizarea SEPI și proiectele desfășurate în 2023

Pe lângă (deja) tradiționala organizare a olimpiadei de membrii SEPI (cea de-a treia ediție sub auspiciile SEPI), se poate remarca efortul depus pentru desfășurarea și păstrarea multor concursuri importante de informatică, precum și alte proiecte noi, ce au contribuit la pregătirea elevilor pentru concursuri. Printre altele, putem enumera următoarele:

 - Apariția cărții F1! Algoritmi și structuri de date, precum și culegeri de probleme, cursuri și alte materiale puse la dispoziție oricărui pasionat, toate acestea găsindu-se aici
 - Apariția unor programe clar definite pentru OJI, ONI și lotul de juniori, acestea fiind lucruri cerute de comunitate de foarte mulți ani
 - Organizarea a două tabere speciale, Cupa SEPI și Girls Programming Camp 2023, tabere ce au oferit oportunitatea celor mai buni 12 seniori/8 juniori, respectiv în premieră, 12 fete au beneficiat de pregătire suplimentară în vederea participării cu succes a României la edițiile viitoare ale EGOI. Se poate remarca că în cadrul Cupei SEPI, unii seniori au trecut de partea cealaltă a baricadei și au colaborat împreună cu membrii comisiei pentru a propune cele mai bune seturi de probleme.
 - Organizarea împreună cu Macedonia de Nord a JBOI 2023, precum și organizarea RMI 2023 și a Info1Cup 2023
 - Crearea unei organigrame și a unor grupuri de lucru, lucruri necesare și care pe parcurs își vor dovedi utilitatea.

 # Rezultatele elevilor români la concursurile internaționale de informatică din 2023

2023 a fost un alt bun în ceea ce privește rezultatele elevilor în acest an, juniorii remarcându-se în mod special prin rezultatele internaționale, dând speranțe în ceea ce privește un viitor bun la concursurile internaționale din următorii ani.

 - IOI - 3 medalii de argint, 1 medalie de bronz, locul 15 pe națiuni
 - CEOI - 2 medalii de aur + aur absolut obținut de Luca Perju Verzotti, 1 medalie de argint, 1 medalie de bronz, locul 1 pe națiuni
 - BOI - 2 medalii de aur + aur absolut obținut de Mihnea Andreescu, 1 medalie de argint, 1 medalie de bronz, locul 1 pe națiuni
 - EJOI - 1 medalie de aur, 3 medalii de argint, locul 1 pe națiuni
 - JBOI - 3 medalii de aur, 4 de argint si 1 de bronz, locul 2 pe națiuni
 - IIOT - 1 medalie de aur, 1 de argint si 1 de bronz (locurile 1, 2 și 7)
 - Numeroase medalii obținute și la alte competiții internaționale, precum RMI, Info1Cup, IZhO etc.
 
 # Perspective pentru viitor și rezoluțiile mele pentru 2024

Acest an a pus bazele multor proiecte ce vor putea oferi un suflu nou comunității, precum și în general țintei comunității din România de a păstra aparițiile pe cele mai înalte locuri la competițiile internaționale. Totuși, trebuie să privim mereu cu precauție și cu atenție la schimbările și proiectele desfășurate în jurul lumii pentru a ne păstra avantajul competitiv, iar legătura dintre toate ramurile implicate pentru realizarea unor selecții de calitate trebuie să continue și să devină una mai puternică, precum și una în care să devenim mai deschiși la a prelua ce este bun din alte națiuni, fără a renunța la lucrurile care ne-au ajutat să ajungem în poziția actuală.

Anul următor va fi un an plin de provocări și dificil din multe puncte de vedere, dar sper că avântul generat de 2023 să se continue și în 2024 și în anii următori, împreună cu cei care au făcut aceste proiecte să aibă succes dar și de ce nu, cu alte persoane implicate.

Vă urez un an nou cât mai bun și plin de rezultate la concursuri și nu numai!

 # Curiozități / Știați că?

Aici am pus niște lucruri poate mai puțin cunoscute de comunitate, dar interesante și curioase în felul lor.

 - Anul acesta a adus cel mai tânăr membru al lotului național de informatică din istorie, Traian Danciu reușind calificarea, fiind elev în clasa a patra la acea vreme?
 - Concursul RCPC 2023 a avut o medie ponderată a vârstei propunătorilor de doar 16 ani?
 - Cel mai frecvent nume de problemă de informatică dată la olimpiadele din România este joc, împreună cu derivatele sale?
 - Concursurile RoAlgo din acest an au avut probleme date de peste 20 de autori diferiți?
 - Peste 150 de participanți au obținut cel puțin o dată un punctaj nenul la concursurile RoAlgo?
 - Toate problemele de la OJI V au fost adăugate într-o zi?
 - Un steag uitat acasă a dus indirect la prezența Ambasadei României în Egipt la premierea IIOT 2023?