import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";


import sitemap from "@astrojs/sitemap";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// https://astro.build/config
export default defineConfig({
  integrations: [ mdx(), tailwind(), react(), partytown(), sitemap()]
}
