import plugins, { Options } from "./plugins.ts";

import "lume/types.ts";

export type { Options } from "./plugins.ts";

export default function (options: Partial<Options> = {}) {
  return (site: Lume.Site) => {
    // Configure the site
    site.use(plugins(options));

    // Add remote files
    const files = [
      "_includes/css/book.css",
      "_includes/css/code.css",
      "_includes/css/menu.css",
      "_includes/css/navigation.css",
      "_includes/css/reset.css",
      "_includes/css/variables.css",
      "_includes/layouts/book.vto",
      "img/cover.jpg",
      "img/favicon.svg",
      "_data.yml",
      "404.md",
      "index.md",
      "styles.css",
    ];

    for (const file of files) {
      site.remoteFile(file, import.meta.resolve(`./src/${file}`));
    }
  };
}
