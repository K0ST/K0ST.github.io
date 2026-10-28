module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/.nojekyll");
  eleventyConfig.addFilter("isoDate", value => new Date(value).toISOString());
  eleventyConfig.addFilter("dateLabel", value => new Date(value).toISOString().slice(0, 10).replaceAll("-", "."));
  eleventyConfig.addFilter("year", value => new Date(value).getUTCFullYear());
  eleventyConfig.addCollection("articles", collection => collection.getFilteredByGlob("src/posts/*.md").filter(item => !item.data.draft).sort((a, b) => b.date - a.date));
  return { dir: { input: "src", output: "_site" }, markdownTemplateEngine: false, htmlTemplateEngine: "njk" };
};
