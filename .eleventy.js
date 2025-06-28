module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/stylesheet.css");
    eleventyConfig.addPassthroughCopy("./src/assets");
    
    return {
        dir: {
            input: "src"
        }
    }
}