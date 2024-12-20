import postcss from "lume/plugins/postcss.ts";
import basePath from "lume/plugins/base_path.ts";
import metas from "lume/plugins/metas.ts";
import { Options as SitemapOptions, sitemap } from "lume/plugins/sitemap.ts";
import { favicon, Options as FaviconOptions } from "lume/plugins/favicon.ts";
import {
  googleFonts,
  Options as GoogleFontsOptions,
} from "lume/plugins/google_fonts.ts";
import toc from "https://deno.land/x/lume_markdown_plugins@v0.7.1/toc.ts";
import { merge } from "lume/core/utils/object.ts";

import "lume/types.ts";

export interface Options {
  sitemap?: Partial<SitemapOptions>;
  favicon?: Partial<FaviconOptions>;
  googleFonts?: Partial<GoogleFontsOptions>;
}

export const defaults: Options = {
  favicon: {
    input: "img/favicon.svg",
  },
  googleFonts: {
    fonts: {
      text:
        "https://fonts.google.com/share?selection.family=Crimson+Pro:ital,wght@0,200..900;1,200..900",
    },
    cssFile: "styles.css",
  },
};

/** Configure the site */
export default function (userOptions?: Options) {
  const options = merge(defaults, userOptions);

  return (site: Lume.Site) => {
    site.use(postcss())
      .use(basePath())
      .use(metas())
      .use(sitemap(options.sitemap))
      .use(favicon(options.favicon))
      .use(googleFonts(options.googleFonts as GoogleFontsOptions))
      .use(toc())
      .copy("scripts")
      .copy("img")
      .remoteFile(
        "scripts/invoker.js",
        "https://cdn.jsdelivr.net/npm/invokers-polyfill@latest",
      );
    site.hooks.markdownIt((md) => {
      md.options.linkify = true;
      md.options.typographer = true;
    });
  };
}
