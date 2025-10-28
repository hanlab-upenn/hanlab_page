import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import lit from "@astrojs/lit";

const repoSlug = process.env.GITHUB_REPOSITORY || "";
const [repoOwner = "", repoName = ""] = repoSlug.split("/");
const isGitHubActions = Boolean(process.env.GITHUB_ACTIONS);
const defaultSite = "http://localhost:4321/";
const site =
  process.env.SITE_URL ||
  (repoOwner && repoName ? `https://${repoOwner}.github.io/${repoName}/` : defaultSite);
const base = process.env.ASTRO_BASE || (isGitHubActions && repoName ? `/${repoName}/` : "/");

export default defineConfig({
  site,
  base,
  sitemap: true,
  integrations: [sitemap(), mdx(), lit(), icon()],
});
