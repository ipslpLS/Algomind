---
title: "Al doilea articol"
type: "article"
tags: ["info", "two pointers", "dinamica"]
date: "2020-12-23T15:21:54+05:30"
---

$\displaystyle \sum_{i=1}^{n} \frac{a^{b+c}}{d^e-f_i} \le \sqrt{2}$

## Text with special styling {.customstyle}

{{< hint title="Hint 1" >}}

  The hint's content

> With lots of elements

  And math

  $ e^{i \pi } = -1 $

  **And MORE math**

\[
\begin{aligned}
    & \int \mu(u, v) \, du \, dv\\\
    & \iint \mu(u, v, w) \, du \, dv \, dw\\\
    & \iiint \mu(t, u, v, w) \, dt \, du \, dv \, dw\\\
    & \text{ceva}
\end{aligned}
\]

$$
\begin{aligned}
&(n-1)(n-1)\\\
&=n^2-2n+1
\end{aligned}
$$

  ```
  ceva
  alt ceva
  ```

{{< /hint >}}

```
linie de cod 1
linie de cod 2
linie de cod 3
cu ceva in interior selectat
linie de cod 4
```

```
linie de cod 1
linie de cod 2
linie de cod 3
cu ceva in interior selectat
linie de cod 4
```

```
linie de cod 1
linie de cod 2
linie de cod 3
cu ceva in interior selectat
linie de cod 4
```

```cpp
#include <iostream>
using namespace std;
int main()
{
    cout << "Hello word!";
    return 0;
}
```

# Ceva

Go to section
* [Hello](#hello)  
* [Hello World](#hello-world)
* [Another section](#new-section) <-- it's called 'Another section' in this list but refers to 'New section'


## Hello
### Hello World
## New section

This is an inline math expression: \(e^{i\pi} + 1 = 0\)

$
e^{i\pi} + 1 = 0
$

$$e^{i\pi} + 1 = 0$$

$$
\begin{align*}
L(p,w_i) &= \frac{1}{N}\sum_{i=1}^N \left(f_r(x_2\rightarrow x_1\rightarrow x_0)G(x_1\longleftrightarrow x_2)f_r(x_3\rightarrow x_2\rightarrow x_1)\right) \\
&= \prod_{i=3}^{k-1} \left(\frac{f_r(x_{i+1}\rightarrow x_i\rightarrow x_{i-1})G(x_i\longleftrightarrow x_{i-1})}{p_a(x_{i-1})}\right) \frac{G(x_k\longleftrightarrow x_{k-1})L_e(x_k\rightarrow x_{k-1})}{p_a(x_{k-1})p_a(x_k)}
\end{align*}
$$

And here is a displayed math expression:

$
\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}
$

$$
\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}
$$

[ceva](#heading-with-link)
# Heading with Link




__Advertisement__

- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image
  resize in browser.
- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly
  i18n with plurals support and easy syntax.

You will like those projects!

---

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

## Horizontal Rules


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
> > ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar


## Code

Inline `code`

Block code "fences"

```
Sample text here...
```

```
#include <iostream>
using namespace std;
int main()
{
    cout << "Hello word!";
    return 0;
}
```

Syntax highlighting

```
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


## Plugins

The killer feature of `markdown-it` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.


### [\<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++


### [\<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==


### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote ^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.


### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b


Fiecare om (ceva)

### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning
*here be dragons*
:::
