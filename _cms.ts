import CMS from "lume/cms/mod.ts";

const cms = CMS();

cms.document({
  name: "Book info",
  description: "Information about a book",
  store: "src:_data.yml",
  fields: [
    "text",
    "description: text",
    "author: text",
    "cover: file",
    "lang: text",
    {
      name: "metas",
      type: "object",
      fields: [
        "site: text",
        "twitter: text",
        "fediverse: text",
        "icon: file",
        "lang: hidden",
        "generator: checkbox",
      ],
    },
  ],
});

cms.document({
  name: "Book",
  description: "The whole book content",
  store: "src:index.md",
  fields: [
    "content: markdown",
  ],
});

cms.upload("images", "src:img");

export default cms;
