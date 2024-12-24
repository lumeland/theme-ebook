# Lume Ebook theme

Lume theme for fast publishing web e-books. This theme started as a fork of
[robinsloan/perfect-edition](https://github.com/robinsloan/perfect-edition) but
it was completely rewritten using web components for interactions, modern CSS
and style changes.

```js
import lume from "lume/mod.ts";
import ebook from "https://deno.land/x/lume_theme_book@v0.1.0/mod.ts";

const site = lume();

site.use(ebook());

export default site;
```
