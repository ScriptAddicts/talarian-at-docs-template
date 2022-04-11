module.exports = {
  "title": "Awesome Table Documentation",
  "tagline": "The tagline of my site",
  "url": "https://your-docusaurus-test-site.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "favicon": "img/favicon.ico",
  "organizationName": "your-org",
  "projectName": "docusaurus",
  "themeConfig": {
    "hideableSidebar": true,
    "navbar": {
      "style": "primary",
      "logo": {
        "alt": "Awesome Table Documentation",
        "src": "img/awesome-table-support-logo.svg"
      },
      "items": [
        {
          "type": 'search',
          "position": 'right',
        }
      ],
    },
    "footer": {
      "links": [
        { 
          "items": [
            {
              "html": `
                    <img src="/img/awesome-table-logo-text.svg" alt="Awesome Table" width="189" height="34" />
                    <ul class="footer-social-items">
                      <li>
                        <a href="https://twitter.com/awesome_table" target="_blank" rel="noreferrer noopener" aria-label="Awesome Table on Twitter">
                          <img src="/img/social-twitter-icon.svg" alt="Awesome Table on Twitter" width="25" height="25" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/channel/UCgIEKXZVXEPZNOA21Pu4LQw" target="_blank" rel="noreferrer noopener" aria-label="Awesome Table on YouTube">
                          <img src="/img/social-youtube-icon.svg" alt="Awesome Table on YouTube" width="25" height="25" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/showcase/awesometable/" target="_blank" rel="noreferrer noopener" aria-label="Awesome Table on LinkedIn">
                          <img src="/img/social-linkedin-icon.svg" alt="Awesome Table on LinkedIn" width="25" height="25" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/Awesome-Table-102914891698074/" target="_blank" rel="noreferrer noopener" aria-label="Awesome Table on Facebook">
                          <img src="/img/social-facebook-icon.svg" alt="Awesome Table on Facebook" width="25" height="25" />
                        </a>
                      </li>
                    </ul>
                `,
            },
          ]
        },
        {
          "title": "Product",
          "items": [
            { 
              "label": "Use cases",
              "to": "https://awesome-table.com/use-cases"
            },
            {
              "label": "Features",
              "to": "https://awesome-table.com/#Features"
            },
            {
              "label": "Pricing",
              "to": "https://awesome-table.com/pricing"
            },
            {
              "label": "Go to Awesome Table",
              "to": "https://app.awesome-table.com/"
            }
          ],
        },
        {
          "title": "Resources",
          "items": [
            { 
              "label": "Getting started",
              "to": "https://support.awesome-table.com/hc/en-us/categories/360000107265-Getting-Started"
            },
            {
              "label": "Help center",
              "to": "https://awesome-table.com/docs/en-us"
            },
            {
              "label": "Contact support",
              "to": "https://support.awesome-table.com/hc/en-us/requests/new"
            },
            {
              "label": "Release notes",
              "to": "https://support.awesome-table.com/hc/en-us/sections/115000918945"
            }
          ],
        },
        {
          "title": "Legal",
          "items": [
            { 
              "label": "Terms of service",
              "to": "https://awesome-table.com/terms-of-service"
            },
            {
              "label": "Privacy policy",
              "to": "https://awesome-table.com/privacy-policy"
            },
            {
              "label": "Cookie policy",
              "to": "https://awesome-table.com/cookie-policy"
            },
            {
              "label": "Google disclosure",
              "to": "https://awesome-table.com/google-disclosure"
            },
            {
              "label": "DPA",
              "to": "https://awesome-table.com/data-processing-agreement"
            },
            {
              "label": "Impressum",
              "to": "https://awesome-table.com/impressum"
            },
          ],
        },
      ],
      "copyright": "Copyright © 2022 Talarian Sàrl. All rights reserved.",
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "routeBasePath": "/",
          "sidebarPath": require.resolve('./sidebars.js'),
          "remarkPlugins": [
            require('./src/remark/convertYoutubeEmbeds.js'), 
            require('./src/remark/swapContextAndPrereq.js'),
            require('./src/remark/createAwesomeTableEmbeds.js')],
        },
        "theme": {
          "customCss": require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  "plugins": [
    require.resolve("@cmfcmf/docusaurus-search-local"),
  ]
};