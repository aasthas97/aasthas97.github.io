module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/stylesheet.css");
    eleventyConfig.addPassthroughCopy("./src/projectstyle.css");
    
    return {
        dir: {
            input: "src"
        }
    }
}