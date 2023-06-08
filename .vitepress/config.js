import mdLinks from "markdown-it-external-links";

import mdSup from "markdown-it-sup";
import mdContainer from "markdown-it-container";

import generateMeta from 'vitepress-pages/head'
import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'

const links = []

const meta = {
  title: "Трика йога",
  description:
    "Открытое собрание мантр, янтр и писаний Трика йоги и Кашмирского шиваизма",
  author: "davay42",
  tags: "трика, йога, мантра, янтра, тантра, священные писания, шива, шива-сутра, бхайрава",
  icon: "img/sadvidya.svg",
  image: 'img/trishula.png',
  site: "trikayoga.ru",
  url: "https://trikayoga.ru/", //the end slash here is mandatory
  repo: "https://github.com/trika-yoga/trikayoga.ru",
  locale: "ru",
  color: '#eeee22',
  mediaFolder: 'media_files', //where are the media files generated by `vitepress-pages/media` located
  // add it if you use [umami](https://umami.is/) for stats
  umamiId: "78d67b86-8879-4563-9052-6369f93c872c",
  umamiScript: "https://stats.defucc.me/umami.js"
};

import { defineConfig } from "vitepress";
export default defineConfig({
  title: meta.title,
  description: meta.description,
  lang: meta.lang,
  transformHead: generateMeta(meta),
  themeConfig: {
    repo: "",
    logo: "/img/sadvidya.svg",
  },
  markdown: {
    config: (md) => {
      // md.use(mdClass);
      md.use(mdSup);
      md.use(mdContainer, "stanza", {
        render: function (tokens, idx) {
          var m = tokens[idx].info.trim().match(/^stanza\s+(.*)$/);

          if (tokens[idx].nesting === 1) {
            let text = md.utils.escapeHtml(m?.[1] || "");
            let tag = "";
            if (text)
              tag = `<a href="#s${text}" id="s${text}" class="num" >${text}</a>`;
            // opening tag
            return `<div class="stanza">${tag}
            `;
          } else {
            // closing tag
            return "</div>\n";
          }
        },
      });
      md.use(mdLinks, {
        internalDomains: ["localhost", "trikayoga.ru"],
      });
    },
  },
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        // you might need to change this if not using clean urls mode
        url: pageData.relativePath?.replace(/((^|\/)index)?\.md$/, '$2'),
        lastmod: pageData?.lastUpdated,
        changefreq: 'weekly'
      })
  },
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({ hostname: meta.url })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach((link) => sitemap.write(link))
    sitemap.end()
    await new Promise((r) => writeStream.on('finish', r))
  }
})