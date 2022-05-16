const visit = require('unist-util-visit');

const plugin = (options) => {
  const transformer = async (ast) => {
    visit(ast, 'jsx', (node) => {
        if (node.value.includes('type="AwesomeTableEmbed"')) {

            // A regex that matches <object> with and without height attribute specified
            // Example 1:
            // <object xmlns="http://www.w3.org/1999/xhtml" data="-Mx0giR4SuKQLt065uhz" height="960px" type="AwesomeTable"> </object> 
            //
            // Example 2:
            // <object xmlns="http://www.w3.org/1999/xhtml" data="-Mx0giR4SuKQLt065uhz" type="AwesomeTable"> </object> 
            //
            const regexp = /<object xmlns="http:\/\/www\.w3\.org\/1999\/xhtml".*type="AwesomeTableEmbed.*"/g
			const embedHeightRegexp = /height="([0-9]{3,4})(px)?"/
			const atAppIdRegexp = /id="([^"]+)"/
            
            const matches = [...node.value.matchAll(regexp)];
            for (match of matches) {
				const embedHeight = node.value.match(embedHeightRegexp) && node.value.match(embedHeightRegexp)[1]
				const DEFAULT_HEIGHT = 675
				const awesomeTableAppId = node.value.match(atAppIdRegexp) && node.value.match(atAppIdRegexp)[1]
				const iframe = `
					<iframe 
						referrerpolicy="no-referrer-when-downgrade" 
						height="${embedHeight || DEFAULT_HEIGHT}px" 
						width="100%" 
						style={{border: "none",}} 
						src="https://view-awesome-table.com/${awesomeTableAppId}/view">
					</iframe>	
				`
				node.value.replace(match[0], iframe)
            }
        }
    });
  };
  return transformer;
}

module.exports = plugin;