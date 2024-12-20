# Blockquote

> This is a quoted sentence.

> This is a quoted paragraph
>
> separated lines\
> here

> Nested
>
>> Quoted\
>> Paragraph

> ### And now,
>
> **Let us _introduce_** All kinds of
>
> - tags
> - etc
> - stuff
>
> 1. In
> 2. The
> 3. blockquote
>
>> cause we can
>>
>>> Cause we can

# Code

This section only does simple code blocks and inline code, detailed syntax
highlight and stuff is in the languages section

---

```
This is a codeblock
```

---

This line contains `inline code` mixed with some other stuff. (LTR)

ושורה זו מכילה `inline code` אבל עם טקסט בשפה שנכתבת מימין לשמאל. (RTL)

---

````
escaping ``` in ```, fun, isn't is?
````

---

```bash,editable
This is an editable codeblock
```

---

```rust
// This links to a playpen
```

# Emphasis

This has **bold text** in between normal.

This has _italic text_ in between normal.

A **line** having _both_, bold and italic text.

**A bold line _having_ italic text**

_An Italic line having **bold** text_

Now this is going **_out of hands_**.

# Chapter Heading

---

# Really Big Heading

## Big Heading

### Normal-ish Heading

#### Small Heading...?

##### Really Small Heading

###### Is it even a heading anymore - heading

## Custom id {#example-id}

## Custom class {.class1 .class2}

## Both id and class {#example-id2 .class1 .class2}

# Images

For copyright and trademark information on these images, please check
[rust-artwork repository](https://github.com/rust-lang/rust-artworkhttps://github.com/rust-lang/rust-artwork)

## A 16x16 image

![16x16 rust-lang logo](https://rust-lang.org/logos/rust-logo-16x16.png)

## A 32x32 image

![32x32 rust-lang logo](https://rust-lang.org/logos/rust-logo-32x32-blk.png)

## A 256x256 image

![256x256 rust-lang logo](https://rust-lang.org/logos/rust-logo-256x256.png)

## A 512x512 image

![512x512 rust-lang logo](https://rust-lang.org/logos/rust-logo-512x512-blk.png)

## A large image

![2018 rust-conf art](https://raw.githubusercontent.com/rust-lang/rust-artwork/master/2018-RustConf/lucy-mountain-climber.png)

## A SVG image

![2018 rust-conf art svg](https://raw.githubusercontent.com/rust-lang/rust-artwork/461afe27d8e02451cf9f46e507f2c2a71d2b276b/2018-RustConf/lucy-mountain-climber.svg)

# Line breaks

This is a long\
line with a couple of\
line breaks in <br/> between : both with two\
spaces and return, <br/> and with HTML tags.

# Links and Horizontal Rule

This is followed by a Horizontal rule

---

And this is preceded by a horizontal rule.

[This](www.rust-lang.org) should link to rust-lang website\
[So should this][rl].\
**[This][rl]** is a strong link.\
_[This][rl]_ is italic.\
**_[This][rl]_** is both.

[rl]: www.rust-lang.org

# Lists

1. A
2. Normal
3. Ordered
4. List

---

1. A
   1. Nested
   2. List
2. But
3. Still
4. Normal

---

- An
- Unordered
- Normal
- List

---

- Nested
  - Unordered
- List

---

- This
  1. Is
  2. Normal
- ?!

# MathJax

Fourier Transform

\\[ \begin{aligned} f(x) &= \int_{-\infty}^{\infty}F(s)(-1)^{ 2xs}ds \\\\ F(s)
&= \int_{-\infty}^{\infty}f(x)(-1)^{-2xs}dx \end{aligned} \\]

The kernel can also be written as \\(e^{2i\pi xs}\\) which is more frequently
used in literature.

> Proof that \\(e^{ix} = \cos x + i\sin x\\) a.k.a Euler's Formula:
>
> \\( \begin{aligned} e^x &= \sum_{n=0}^\infty \frac{x^n}{n!} \implies e^{ix} =
> \sum_{n=0}^\infty \frac{(ix)^n}{n!} \\\\ \cos x &= \sum_{m=0}^\infty
> \frac{(-1)^m x^{2m}}{(2m)!} = \sum_{m=0}^\infty \frac{(ix)^{2m}}{(2m)!} \\\\
> \sin x &= \sum_{s=0}^\infty \frac{(-1)^s x^{2s+1}}{(2s+1)!} =
> \sum_{s=0}^\infty \frac{(ix)^{2s+1}}{i(2s+1)!} \\\\ \cos x + i\sin x &=
> \sum_{l=0}^\infty \frac{(ix)^{2l}}{(2l)!} + \sum_{s=0}^\infty
> \frac{(ix)^{2s+1}}{(2s+1)!} = \sum_{n=0}^\infty \frac{(ix)^{n}}{n!} \\\\ &=
> e^{ix} \end{aligned} \\)

Pauli Matrices

\\[ \begin{aligned} \sigma_x &= \begin{pmatrix} 1 & 0 \\\\ 0 & 1 \end{pmatrix}
\\\\ \sigma_y &= \begin{pmatrix} 0 & -i \\\\ i & 0 \end{pmatrix} \\\\ \sigma_z
&= \begin{pmatrix} 1 & 0 \\\\ 0 & -1 \end{pmatrix} \end{aligned} \\]

# Mixed

This contains all tags randomly mixed together, to make sure style changes in
one does not affect others.

### A heading

**Quite a Strong statement , to make**

~~No, cross that~~

> Whose **quote** is this
>
>> And ~~this~~
>>
>>> - and
>>> - this
>>> - also

```
You encountered a wild codepen
```

```rust,editable
// The codepen is editable and runnable
fn main(){
    println!("Hello world!");
}
```

<kbd>Ctrl</kbd> + <kbd>S</kbd> saves a file.

A random image sprinkled in between

![16x16 rust-lang logo](https://rust-lang.org/logos/rust-logo-16x16.png)

---

- ~~An unordered list~~
- **Hello**
- _World_
- What
  1. Should
  2. be
  3. `put`
  4. here?
  5. **<kbd>Ctrl</kbd> + <kbd>S</kbd> saves a file.**

| col1 | col2 | col 3 | col 4 | col 5 | col 6 |
| ---- | ---- | ----- | ----- | ----- | ----- |
| val1 | val2 | val3  | val5  | val4  | val6  |

| col1 | col2 | col 3 | An Questionable table header | col 5 | col 6                                    |
| ---- | ---- | ----- | ---------------------------- | ----- | ---------------------------------------- |
| val1 | val2 | val3  | val5                         | val4  | An equally Questionable long table value |

### Things to do

- [x] Add individual tags
- [ ] Add language examples
- [ ] Add rust specific examples

And another image

![2018 rust-conf art svg](https://raw.githubusercontent.com/rust-lang/rust-artwork/461afe27d8e02451cf9f46e507f2c2a71d2b276b/2018-RustConf/lucy-mountain-climber.svg)

Just a simple paragraph.

Let's stress test this.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elit lorem,
eleifend eu leo sit amet, suscipit feugiat libero. Vestibulum ante ipsum primis
in faucibus orci luctus et ultrices posuere cubilia curae; Proin congue lectus
sit amet lacus venenatis, ac sollicitudin purus condimentum. Suspendisse pretium
volutpat sapien at gravida. In tincidunt, sem non accumsan consectetur, leo
libero porttitor dolor, at imperdiet erat nibh quis leo. Cras dictum erat augue,
quis pharetra justo porttitor posuere. Aenean sed lacinia justo, vel suscipit
nisl. Etiam eleifend id mauris at gravida. Aliquam molestie cursus lorem
pulvinar sollicitudin. Nam et ex dignissim, posuere sem non, pellentesque lacus.
Morbi vulputate sed lorem et convallis. Duis non turpis eget elit posuere
volutpat. Donec accumsan euismod enim, id consequat ex rhoncus ac. Pellentesque
ac felis nisl. Duis imperdiet vel tellus ac iaculis.

Vivamus nec tempus enim. Integer in ligula eget elit ornare vulputate id et est.
Proin mi elit, sagittis nec urna et, iaculis imperdiet neque. Vestibulum
placerat cursus dolor. Donec eu sodales nulla. Praesent ac tellus eros. Donec
venenatis ligula id ex porttitor malesuada. Aliquam maximus, nisi in fringilla
finibus, ante elit rhoncus dui, placerat semper nisl tellus quis odio. Cras
luctus magna ultrices dolor pharetra volutpat. Maecenas non enim vitae ligula
efficitur aliquet id quis quam. In sagittis mollis magna eu porta. Morbi at
nulla et ante elementum pharetra in sed est. Nam commodo purus enim.

Ut non elit sit amet urna luctus facilisis vel et sapien. Morbi nec metus at
libero imperdiet sollicitudin eget quis lacus. Donec in ipsum at enim accumsan
tempor vel sed magna. Aliquam non imperdiet neque. Etiam pharetra neque sed
pretium interdum. Suspendisse potenti. Phasellus varius, lectus quis dapibus
faucibus, purus mauris accumsan nibh, vel tempor quam metus nec sem. Nunc
sagittis suscipit lorem eu finibus. Nullam augue leo, imperdiet vel diam et,
vulputate scelerisque turpis. Nullam ut volutpat diam. Praesent cursus accumsan
dui a commodo. Vivamus sed libero sed turpis facilisis rutrum id sed ligula. Ut
id sollicitudin dui. Nulla pulvinar commodo lectus. Cras ut quam congue,
consectetur dolor ac, consequat ante.

Curabitur scelerisque sed leo eu facilisis. Nam faucibus neque eget dictum
hendrerit. Duis efficitur ex sed vulputate volutpat. Praesent condimentum nisl
ac sapien efficitur laoreet. Pellentesque habitant morbi tristique senectus et
netus et malesuada fames ac turpis egestas. Ut ut nibh elit. Nunc a neque
lobortis, tempus diam vitae, interdum magna. Aenean eget nisl sed justo volutpat
interdum. Mauris malesuada ex nisl, a dignissim dui elementum eget. Suspendisse
potenti.

Praesent congue fringilla sem sed faucibus. Vivamus malesuada eget mauris at
molestie. In sed faucibus nulla. Vivamus elementum accumsan metus quis suscipit.
Maecenas interdum est nulla. Cras volutpat cursus nibh quis sollicitudin. Morbi
vitae massa laoreet, aliquet tellus quis, consectetur ipsum. Mauris euismod
congue purus non condimentum. Etiam laoreet mi vel sem consectetur gravida.
Vestibulum volutpat magna nunc, vitae ultrices risus commodo eu.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elit lorem,
eleifend eu leo sit amet, suscipit feugiat libero. Vestibulum ante ipsum primis
in faucibus orci luctus et ultrices posuere cubilia curae; Proin congue lectus
sit amet lacus venenatis, ac sollicitudin purus condimentum. Suspendisse pretium
volutpat sapien at gravida. In tincidunt, sem non accumsan consectetur, leo
libero porttitor dolor, at imperdiet erat nibh quis leo. Cras dictum erat augue,
quis pharetra justo porttitor posuere. Aenean sed lacinia justo, vel suscipit
nisl. Etiam eleifend id mauris at gravida. Aliquam molestie cursus lorem
pulvinar sollicitudin. Nam et ex dignissim, posuere sem non, pellentesque lacus.
Morbi vulputate sed lorem et convallis. Duis non turpis eget elit posuere
volutpat. Donec accumsan euismod enim, id consequat ex rhoncus ac. Pellentesque
ac felis nisl. Duis imperdiet vel tellus ac iaculis.

Vivamus nec tempus enim. Integer in ligula eget elit ornare vulputate id et est.
Proin mi elit, sagittis nec urna et, iaculis imperdiet neque. Vestibulum
placerat cursus dolor. Donec eu sodales nulla. Praesent ac tellus eros. Donec
venenatis ligula id ex porttitor malesuada. Aliquam maximus, nisi in fringilla
finibus, ante elit rhoncus dui, placerat semper nisl tellus quis odio. Cras
luctus magna ultrices dolor pharetra volutpat. Maecenas non enim vitae ligula
efficitur aliquet id quis quam. In sagittis mollis magna eu porta. Morbi at
nulla et ante elementum pharetra in sed est. Nam commodo purus enim.

Ut non elit sit amet urna luctus facilisis vel et sapien. Morbi nec metus at
libero imperdiet sollicitudin eget quis lacus. Donec in ipsum at enim accumsan
tempor vel sed magna. Aliquam non imperdiet neque. Etiam pharetra neque sed
pretium interdum. Suspendisse potenti. Phasellus varius, lectus quis dapibus
faucibus, purus mauris accumsan nibh, vel tempor quam metus nec sem. Nunc
sagittis suscipit lorem eu finibus. Nullam augue leo, imperdiet vel diam et,
vulputate scelerisque turpis. Nullam ut volutpat diam. Praesent cursus accumsan
dui a commodo. Vivamus sed libero sed turpis facilisis rutrum id sed ligula. Ut
id sollicitudin dui. Nulla pulvinar commodo lectus. Cras ut quam congue,
consectetur dolor ac, consequat ante.

Curabitur scelerisque sed leo eu facilisis. Nam faucibus neque eget dictum
hendrerit. Duis efficitur ex sed vulputate volutpat. Praesent condimentum nisl
ac sapien efficitur laoreet. Pellentesque habitant morbi tristique senectus et
netus et malesuada fames ac turpis egestas. Ut ut nibh elit. Nunc a neque
lobortis, tempus diam vitae, interdum magna. Aenean eget nisl sed justo volutpat
interdum. Mauris malesuada ex nisl, a dignissim dui elementum eget. Suspendisse
potenti.

Praesent congue fringilla sem sed faucibus. Vivamus malesuada eget mauris at
molestie. In sed faucibus nulla. Vivamus elementum accumsan metus quis suscipit.
Maecenas interdum est nulla. Cras volutpat cursus nibh quis sollicitudin. Morbi
vitae massa laoreet, aliquet tellus quis, consectetur ipsum. Mauris euismod
congue purus non condimentum. Etiam laoreet mi vel sem consectetur gravida.
Vestibulum volutpat magna nunc, vitae ultrices risus commodo eu.

Hopefully everything above was rendered nicely, on both desktop and mobile.

# Strikethrough

~~Single strike~~

~~This is Striked~~

~~This is **strong**, _italic_ , **_both_** and striked~~

# Tables

| col1 | col2 |
| ---- | ---- |

---

| col1 | col2 |
| ---- | ---- |
| val1 | val2 |

---

| col1 | col2 | col 3 | col 4 | col 5 | col 6 |
| ---- | ---- | ----- | ----- | ----- | ----- |
| val1 | val2 | val3  | val5  | val4  | val6  |
| val1 | val2 | val3  | val5  | val4  | val6  |
| val1 | val2 | val3  | val5  | val4  | val6  |
| val1 | val2 | val3  | val5  | val4  | val6  |

---

| col1                                                                                                           | col2 | col 3                                                                                                          | col 4                                                                                                          | col 5 | col 6                                                                                                          |
| -------------------------------------------------------------------------------------------------------------- | ---- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ----- | -------------------------------------------------------------------------------------------------------------- |
| This is a simple demo book, which is intended to be used for verifying and validating style changes in mdBook. | val2 | val3                                                                                                           | val5                                                                                                           | val4  | val6                                                                                                           |
| val1                                                                                                           | val2 | val3                                                                                                           | val5                                                                                                           | val4  | val6                                                                                                           |
| val1                                                                                                           | val2 | val3                                                                                                           | val5                                                                                                           | val4  | This is a simple demo book, which is intended to be used for verifying and validating style changes in mdBook. |
| val1                                                                                                           | val2 | This is a simple demo book, which is intended to be used for verifying and validating style changes in mdBook. | This is a simple demo book, which is intended to be used for verifying and validating style changes in mdBook. | val4  | val6                                                                                                           |

# Tasks

- [ ] Task 1
- [ ] Task 2
- [x] Completed Task 1
- [x] Completed Task 2

---

- [ ] **Important Task**
- [x] _Completed Important task_

# Syntax Highlights

## apache

```apache
# rewrite`s rules for wordpress pretty url
LoadModule rewrite_module  modules/mod_rewrite.so
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . index.php [NC,L]

ExpiresActive On
ExpiresByType application/x-javascript  "access plus 1 days"

Order Deny,Allow
Allow from All

<Location /maps/>
  RewriteMap map txt:map.txt
  RewriteMap lower int:tolower
  RewriteCond %{REQUEST_URI} ^/([^/.]+)\.html$ [NC]
  RewriteCond ${map:${lower:%1}|NOT_FOUND} !NOT_FOUND
  RewriteRule .? /index.php?q=${map:${lower:%1}} [NC,L]
</Location>

20.164.151.111 - - [20/Aug/2015:22:20:18 -0400] "GET /mywebpage/index.php HTTP/1.1" 403 772 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.220 Safari/535.1"
```

## armasm

```armasm
.data

/* Data segment: define our message string and calculate its length. */
msg:
    .ascii      "Hello, ARM!\n"
len = . - msg

.text

/* Our application's entry point. */
.globl _start
_start:
    /* syscall write(int fd, const void *buf, size_t count) */
    mov     %r0, $1     /* fd := STDOUT_FILENO */
    ldr     %r1, =msg   /* buf := msg */
    ldr     %r2, =len   /* count := len */
    mov     %r7, $4     /* write is syscall #4 */
    swi     $0          /* invoke syscall */

    /* syscall exit(int status) */
    mov     %r0, $0     /* status := 0 */
    mov     %r7, $1     /* exit is syscall #1 */
    swi     $0          /* invoke syscall */
```

## bash

```bash
#!/bin/bash

###### CONFIG
ACCEPTED_HOSTS="/root/.hag_accepted.conf"
BE_VERBOSE=false

if [ "$UID" -ne 0 ]
then
 echo "Superuser rights required"
 exit 2
fi

genApacheConf(){
 echo -e "# Host ${HOME_DIR}$1/$2 :"
}

echo '"quoted"' | tr -d \" > text.txt
```

## c

```c
#include <stdio.h>
void main(int argc,char ** argv){
    printf("Hello World!");
}
```

## coffeescript

```coffeescript
grade = (student, period=(if b? then 7 else 6)) ->
  if student.excellentWork
    "A+"
  else if student.okayStuff
    if student.triedHard then "B" else "B-"
  else
    "C"

class Animal extends Being
  constructor: (@name) ->

  move: (meters) ->
    alert @name + " moved #{meters}m."
```

## cpp

```cpp
#include <iostream>
using namespace std;
int main() {
   cout << "Hello, World!" << endl; // This prints Hello, World!
   return 0;
}
```

## csharp

```csharp
using System;
class App
{
  static void Main()
  {
    Console.WriteLine("Hello World!");
  }
}
```

## css

```css
@font-face {
  font-family: Chunkfive;
  src: url("Chunkfive.otf");
}

body,
.usertext {
  color: #f0f0f0;
  background: #600;
  font-family: Chunkfive, sans;
  --heading-1: 30px/32px Helvetica, sans-serif;
}

@import url(print.css);
@media print {
  a[href^="http"]::after {
    content: attr(href);
  }
}
```

## d

```d
/* This program prints a
   hello world message
   to the console.  */

import std.stdio;

void main()
{
    writeln("Hello, World!");
}
```

## diff

```diff
Index: languages/ini.js
===================================================================
--- languages/ini.js    (revision 199)
+++ languages/ini.js    (revision 200)
@@ -1,8 +1,7 @@
 hljs.LANGUAGES.ini =
 {
   case_insensitive: true,
-  defaultMode:
-  {
+  defaultMode: {
     contains: ['comment', 'title', 'setting'],
     illegal: '[^\\s]'
   },

*** /path/to/original timestamp
--- /path/to/new      timestamp
***************
*** 1,3 ****
--- 1,9 ----
+ This is an important
+ notice! It should
+ therefore be located at
+ the beginning of this
+ document!

! compress the size of the
! changes.

  It is important to spell
```

## go

```go
package main
import "fmt"

func main() {
    fmt.Println("Hello World!")
}
```

## handlebars

```handlebars
<div class='entry'>
  {{! only show if author exists }}
  {{#if author}}
    <h1>{{firstName}} {{lastName}}</h1>
  {{/if}}
</div>
```

## haskell

```haskell
main :: IO ()
main = putStrLn "Hello World!"
```

## http

```http
POST /task?id=1 HTTP/1.1
Host: example.org
Content-Type: application/json; charset=utf-8
Content-Length: 137

{
  "status": "ok",
  "extended": true,
  "results": [
    {"value": 0, "type": "int64"},
    {"value": 1.0e+3, "type": "decimal"}
  ]
}
```

## ini

```ini
; boilerplate
[package]
name = "some_name"
authors = ["Author"]
description = "This is \
a description"

[[lib]]
name = ${NAME}
default = True
auto = no
counter = 1_000
```

## java

```java
class Main {
 public static void main(String[] args) {
    System.out.println("Hello World!");
  }
}
```

## javascript

```javascript
function $initHighlight(block, cls) {
  try {
    if (cls.search(/\bno\-highlight\b/) != -1)
      return process(block, true, 0x0F) +
             ` class="${cls}"`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }

  return (
    <div>
      <web-component>{block}</web-component>
    </div>
  )
}

export  $initHighlight;
```

## json

```json
[
  {
    "title": "apples",
    "count": [12000, 20000],
    "description": { "text": "...", "sensitive": false }
  },
  {
    "title": "oranges",
    "count": [17500, null],
    "description": { "text": "...", "sensitive": false }
  }
]
```

## julia

```julia
# function to calculate the volume of a sphere
function sphere_vol(r)
    # julia allows Unicode names (in UTF-8 encoding)
    # so either "pi" or the symbol π can be used
    return 4/3*pi*r^3
end

# functions can also be defined more succinctly
quadratic(a, sqr_term, b) = (-b + sqr_term) / 2a

# calculates x for 0 = a*x^2+b*x+c, arguments types can be defined in function definitions
function quadratic2(a::Float64, b::Float64, c::Float64)
    # unlike other languages 2a is equivalent to 2*a
    # a^2 is used instead of a**2 or pow(a,2)
    sqr_term = sqrt(b^2-4a*c)
    r1 = quadratic(a, sqr_term, b)
    r2 = quadratic(a, -sqr_term, b)
    # multiple values can be returned from a function using tuples
    # if the return keyword is omitted, the last term is returned
    r1, r2
end

vol = sphere_vol(3)
```

## kotlin

```kotlin
package org.kotlinlang.play

fun main() {
    println("Hello, World!")
}
```

## less

```less
@import "fruits";

@rhythm: 1.5em;

@media screen and (min-resolution: 2dppx) {
  body {
    font-size: 125%;
  }
}

section > .foo + #bar:hover [href*="less"] {
  margin: @rhythm 0 0 @rhythm;
  padding: calc(5% + 20px);
  background: #f00ba7 url(http://placehold.alpha-centauri/42.png) no-repeat;
  background-image: linear-gradient(-135deg, wheat, fuchsia) !important;
  background-blend-mode: multiply;
}

@font-face {
  font-family: /* ? */ "Omega";
  src: url("../fonts/omega-webfont.woff?v=2.0.2");
}

.icon-baz::before {
  display: inline-block;
  font-family: "Omega", Alpha, sans-serif;
  content: "\f085";
  color: rgba(98, 76 /* or 54 */, 231, 0.75);
}
```

## lua

```lua
--[[
Simple signal/slot implementation
]]
local signal_mt = {
    __index = {
        register = table.insert
    }
}
function signal_mt.__index:emit(... --[[ Comment in params ]])
    for _, slot in ipairs(self) do
        slot(self, ...)
    end
end
local function create_signal()
    return setmetatable({}, signal_mt)
end

-- Signal test
local signal = create_signal()
signal:register(function(signal, ...)
    print(...)
end)
signal:emit('Answer to Life, the Universe, and Everything:', 42)

--[==[ [=[ [[
Nested ]]
multi-line ]=]
comment ]==]
[==[ Nested
[=[ multi-line
[[ string
]] ]=] ]==]
```

## makefile

```makefile
# Makefile

BUILDDIR      = _build
EXTRAS       ?= $(BUILDDIR)/extras

.PHONY: main clean

main:
	@echo "Building main facility..."
	build_main $(BUILDDIR)

clean:
	rm -rf $(BUILDDIR)/*
```

## markdown

```markdown
# hello world

you can write text [with links](http://example.com) inline or
[link references][1].

- one _thing_ has *em*phasis
- two **things** are **bold**

[1]: http://example.com

---

# hello world

<this_is inline="xml"></this_is>

> markdown is so cool

    so are code segments

1. one thing (yeah!)
2. two thing `i can write code`, and `more` wipee!
```

## nginx

```nginx
user  www www;
worker_processes  2;
pid /var/run/nginx.pid;
error_log  /var/log/nginx.error_log  debug | info | notice | warn | error | crit;

events {
    connections   2000;
    use kqueue | rtsig | epoll | /dev/poll | select | poll;
}

http {
    log_format main      '$remote_addr - $remote_user [$time_local] '
                         '"$request" $status $bytes_sent '
                         '"$http_referer" "$http_user_agent" '
                         '"$gzip_ratio"';

    send_timeout 3m;
    client_header_buffer_size 1k;

    gzip on;
    gzip_min_length 1100;

    #lingering_time 30;

    server {
        server_name   one.example.com  www.one.example.com;
        access_log   /var/log/nginx.access_log  main;

        rewrite (.*) /index.php?page=$1 break;

        location / {
            proxy_pass         http://127.0.0.1/;
            proxy_redirect     off;
            proxy_set_header   Host             $host;
            proxy_set_header   X-Real-IP        $remote_addr;
            charset            koi8-r;
        }

        location /api/ {
            fastcgi_pass 127.0.0.1:9000;
        }

        location ~* \.(jpg|jpeg|gif)$ {
            root         /spool/www;
        }
    }
}
```

## nim

```nim
from strutils import `%`

const numDoors = 100
var doors {.compileTime.}: array[1..numDoors, bool]

proc calcDoors(): string =
  for pass in 1..numDoors:
    for door in countup(pass, numDoors, pass):
      doors[door] = not doors[door]
  for door in 1..numDoors:
    result.add("Door $1 is $2.\n" % [$door, if doors[door]: "open" else: "closed"])

const outputString: string = calcDoors()

echo outputString
```

## objectivec

```objectivec
#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
    @mylak {
        NSLog(@"Hello World!");
    }
    return 0;
}
```

## nix

```nix
let
  world = "World!";
in
"Hello " + world
```

## perl

```perl
print "Hello World!\n";
```

## php

```php
<?php
echo "Hello World!";
?>
```

## plaintext

```plaintext
I think this is simply plain text?
Hello World!
```

## properties

```properties
# .properties
! Exclamation mark = comments, too

key1 = value1
key2 : value2
key3   value3
key\ spaces multiline\
            value4
empty_key
! Key can contain escaped chars
\:\= = value5
```

## python

```python
@requires_authorization(roles=["ADMIN"])
def somefunc(param1='', param2=0):
    r'''A docstring'''
    if param1 > param2: # interesting
        print 'Gre\'ater'
    return (param2 - param1 + 1 + 0b10l) or None

class SomeClass:
    pass

>>> message = '''interpreter
... prompt'''
```

## r

```r
require(stats)

#' Compute different averages
#'
#' @param x \code{numeric} vector of sample data
#' @param type \code{character} vector of length 1 specifying the average type
#' @return \code{centre} returns the sample average according to the chosen method.
#' @examples
#' centre(rcauchy(10), "mean")
#' @export
centre <- function(x, type) {
  switch(type,
         mean = mean(x),
         median = median(x),
         trimmed = mean(x, trim = .1))
}
x <- rcauchy(10)
centre(x, "mean")

library(ggplot2)

models <- tibble::tribble(
  ~model_name,    ~ formula,
  "length-width", Sepal.Length ~ Petal.Width + Petal.Length,
  "interaction",  Sepal.Length ~ Petal.Width * Petal.Length
)

iris %>%
  nest_by(Species) %>%
  left_join(models, by = character()) %>%
  rowwise(Species, model_name) %>%
  mutate(model = list(lm(formula, data = data))) %>%
  summarise(broom::glance(model))
```

## ruby

```ruby
# The Greeter class
class Greeter
  def initialize(name)
    @name = name.capitalize
  end

  def salute
    puts "Hello #{@name}!"
  end
end

g = Greeter.new("world")
g.salute
```

## rust

```rust
fn main()->(){
    println!("Hello World!");
}
```

## scala

```scala
/**
 * A person has a name and an age.
 */
case class Person(name: String, age: Int)

abstract class Vertical extends CaseJeu
case class Haut(a: Int) extends Vertical
case class Bas(name: String, b: Double) extends Vertical

sealed trait Ior[+A, +B]
case class Left[A](a: A) extends Ior[A, Nothing]
case class Right[B](b: B) extends Ior[Nothing, B]
case class Both[A, B](a: A, b: B) extends Ior[A, B]

trait Functor[F[_]] {
  def map[A, B](fa: F[A], f: A => B): F[B]
}

// beware Int.MinValue
def absoluteValue(n: Int): Int =
  if (n < 0) -n else n

def interp(n: Int): String =
  s"there are $n ${color} balloons.\n"

type ξ[A] = (A, A)

trait Hist { lhs =>
  def ⊕(rhs: Hist): Hist
}

def gsum[A: Ring](as: Seq[A]): A =
  as.foldLeft(Ring[A].zero)(_ + _)

val actions: List[Symbol] =
  'init :: 'read :: 'write :: 'close :: Nil
```

## scss

```scss
import "compass/reset";

// variables
$colorGreen: #008000;
$colorGreenDark: darken($colorGreen, 10);

@mixin container {
    max-width: 980px;
}

// mixins with parameters
@mixin button($color:green) {
    @if ($color == green) {
        background-color: #008000;
    }
    @else if ($color == red) {
        background-color: #B22222;
    }
}

button {
    @include button(red);
}

div,
.navbar,
#header,
input[type="input"] {
    font-family: "Helvetica Neue", Arial, sans-serif;
    width: auto;
    margin: 0 auto;
    display: block;
}

.row-12 > [class*="spans"] {
    border-left: 1px solid #B5C583;
}
```

## shell

```shell
$ echo $EDITOR
vim
$ git checkout main
Switched to branch 'main'
Your branch is up-to-date with 'origin/main'.
$ git push
Everything up-to-date
$ echo 'All
> done!'
All
done!
```

## sql

```sql
CREATE TABLE "topic" (
    "id" integer NOT NULL PRIMARY KEY,
    "forum_id" integer NOT NULL,
    "subject" varchar(255) NOT NULL
);
ALTER TABLE "topic"
ADD CONSTRAINT forum_id FOREIGN KEY ("forum_id")
REFERENCES "forum" ("id");

-- Initials
insert into "topic" ("forum_id", "subject")
values (2, 'D''artagnian');
```

## swift

```swift
import Foundation

@objc class Person: Entity {
  var name: String!
  var age:  Int!

  init(name: String, age: Int) {
    /* /* ... */ */
  }

  // Return a descriptive string for this person
  func description(offset: Int = 0) -> String {
    return "\(name) is \(age + offset) years old"
  }
}
```

## typescript

```typescript
class MyClass {
  public static myValue: string;
  constructor(init: string) {
    this.myValue = init;
  }
}
import fs = require("fs");
module MyModule {
  export interface MyInterface extends Other {
    myProperty: any;
  }
}
declare magicNumber number;
myArray.forEach(() => { }); // fat arrow syntax
```

## x86asm

```x86asm
section .text
extern  _MessageBoxA@16
%if     __NASM_VERSION_ID__ >= 0x02030000
safeseh handler         ; register handler as "safe handler"
%endif

handler:
        push    dword 1 ; MB_OKCANCEL
        push    dword caption
        push    dword text
        push    dword 0
        call    _MessageBoxA@16
        sub     eax,1   ; incidentally suits as return value
                        ; for exception handler
        ret

global  _main
_main:  push    dword handler
        push    dword [fs:0]
        mov     dword [fs:0], esp
        xor     eax,eax
        mov     eax, dword[eax]   ; cause exception
        pop     dword [fs:0]      ; disengage exception handler
        add     esp, 4
        ret

avx2:   vzeroupper
        push      rbx
        mov       rbx,   rsp
        sub       rsp,   0h20
        vmovdqa   ymm0,  [rcx]
        vpaddb    ymm0,  [rdx]
        leave
        ret

text:   db      'OK to rethrow, CANCEL to generate core dump',0
caption:db      'SEGV',0

section .drectve info
        db      '/defaultlib:user32.lib /defaultlib:msvcrt.lib '
```

## xml

```xml
<!DOCTYPE html>
<title>Title</title>

<style>body {width: 500px;}</style>

<script type="application/javascript">
  function $init() {return true;}
</script>

<body>
  <p checked class="title" id='title'>Title</p>
  <!-- here goes the rest of the page -->
</body>
```

## yaml

```yaml
---
# comment
string_1: "Bar"
string_2: "bar"
string_3: bar
inline_keys_ignored: sompath/name/file.jpg
keywords_in_yaml:
  - true
  - false
  - TRUE
  - FALSE
  - 21
  - 21.0
  - !!str 123
"quoted_key": &foobar
  bar: foo
  foo:
  "foo": bar

reference: *foobar

multiline_1: |
  Multiline
  String
multiline_2: >
  Multiline
  String
multiline_3: "
  Multiline string
"

ansible_variables: "foo {{variable}}"

array_nested:
  - a
  - b: 1
    c: 2
  - b
  - comment
```
