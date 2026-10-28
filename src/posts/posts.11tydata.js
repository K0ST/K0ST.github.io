module.exports = {
  layout: "layouts/post.njk",
  eleventyComputed: {
    eleventyExcludeFromCollections: data => data.draft === true,
    permalink: data => data.draft === true ? false : `/posts/${data.page.fileSlug}/`
  }
};
