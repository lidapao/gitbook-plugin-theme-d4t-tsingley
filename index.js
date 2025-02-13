const fs = require('fs');
const path = require('path');

module.exports = {
    website: {
        assets: './_assets/',
        js: [
            'script.js'
        ],
        css: [
            'style.css'
        ]
    },
    hooks: {
        finish: function () {
            const configOption = this.config.get('pluginsConfig')['d4t-tsingley'];
            const output = configOption ? (configOption.output || '_book') : '_book';
            let pathFile;

            // favicon
            pathFile = configOption && configOption.favicon;
            if (pathFile) {
                const faviconPath = path.join(process.cwd(), pathFile);
                const gitbookFaviconPath = path.join(process.cwd(), output, 'gitbook', 'images', 'favicon.ico');
                if (fs.existsSync(faviconPath)) {
                    fs.writeFileSync(gitbookFaviconPath, fs.readFileSync(faviconPath));
                }
            }

            //logo
            pathFile = configOption && configOption.logo;
            if(pathFile){
                const logoPath = path.join(process.cwd(), pathFile);
                const pluginLogoPath = path.join(process.cwd(), output, 'gitbook','gitbook-plugin-theme-d4t-tsingley',"logo.svg");
                if (fs.existsSync(logoPath)) {
                    fs.writeFileSync(pluginLogoPath, fs.readFileSync(logoPath));
                }
            }
        }
    }
};
