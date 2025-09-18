module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/stylesheet.css");
    eleventyConfig.addPassthroughCopy("./src/projectstyle.css");
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy({ "public": "." });

    eleventyConfig.addCollection("blogpost", function(collectionApi) {
    return collectionApi
      .getFilteredByTag("blogpost")
      .sort((a, b) => b.date - a.date);
    });
    
    return {
        dir: {
            input: "src"
        }
    }
}