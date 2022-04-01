import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import { windi } from "svelte-windicss-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [preprocess(), windi({})],

  kit: {
    adapter: adapter({
      pages: "public",
      assets: "public",
      precompress: false,
    }),
    prerender: {
      default: true,
    },
  },
};

export default config;
