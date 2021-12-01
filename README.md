<p>&nbsp;&nbsp;
  <img alt="3merge" src="https://github.com/3merge/q3-client/blob/master/logo.png" width="22" />
</p>

# Q3 client

Most Q3 projects will use
[Gatsby JS](https://www.gatsbyjs.com/) for building and
serving its production files. That's why we've created the
[`gatsby-theme-q3`](https://github.com/3merge/q3-client/tree/master/gatsby-theme-q3)
project, which configures most packages in this workspace so
that you can begin building your app quickly.

If you're already up-and-running, scroll to the end for more
in-depth documentation per package.

## Getting started

This guide shows you how to setup a Q3 admin portal with a
single collection. Since this is a headless workspace,
you'll need an API, which you must build and deploy
separately. For more information,
[visit the Q3 API repository](https://github.com/3merge/q3-api).

### Dependencies

Q3 has a lot of dependencies. Check our example app's
package.json file for a full list
[with recommended versions](https://github.com/3merge/q3-client/blob/master/example/package.json).

### Configurations

#### Environment variables

There's only a few environment variables that you need to
define.

| Name                      | Description                                                               |
| ------------------------- | ------------------------------------------------------------------------- |
| `GATSBY_APP_BASE_URL*`    | The URL of your Q3 API                                                    |
| `URL*`                    | The production URL for this app                                           |
| `CONTENTFUL_SPACE_ID`     | When using Contentful as a data source, you'll need to provide a space ID |
| `CONTENTFUL_ACCESS_TOKEN` | Contentful requires an access token too                                   |

#### Folder structure

The tree below represents the end-state for this tutorial.
Note that the location of directories `locale` and `static`
and the `theme.js` file is critical for Q3's scripts to run.

```
📦 server
📦 client
 ┣ 📂 locale
 ┃ ┣ 📂 en
 ┃ ┃ ┣ 📜 descriptions.json
 ┃ ┃ ┣ 📜 helpers.json
 ┃ ┃ ┣ 📜 labels.json
 ┃ ┃ ┗ 📜 titles.json
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 Users
 ┃ ┃ ┃ ┣ 📜 index.js
 ┃ ┃ ┃ ┣ 📜 Users.jsx
 ┃ ┃ ┃ ┣ 📜 Users.test.jsx
 ┃ ┃ ┣ 📂 UsersAdd
 ┃ ┃ ┣ 📂 UsersGeneral
 ┃ ┃ ┗ 📜 index.js
 ┃ ┣ 📂 gatsby-theme-q3
 ┃ ┃ ┣ 📂 pages
 ┃ ┃ ┃ ┣ 📜 login.jsx
 ┃ ┃ ┃ ┣ 📜 password-change.jsx
 ┃ ┃ ┃ ┣ 📜 password-reset.jsx
 ┃ ┃ ┃ ┣ 📜 reverify.jsx
 ┃ ┃ ┃ ┗ 📜 verify.jsx
 ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📜 app.jsx
 ┃ ┃ ┗ 📜 index.jsx
 ┣ 📂 static
 ┃ ┣ 📜 favicon.png
 ┃ ┗ 📜 logo.png
 ┣ 📂 tests
 ┣ 📜 gatsby-browser.js
 ┣ 📜 gatsby-config.js
 ┣ 📜 gatsby-node.js
 ┣ 📜 gatsby-ssr.js
 ┣ 📜 theme.js
 ┗ 📜 gatsby-ssr.js
```

#### Gatsby files

We're not going to cover why `gatsby-*` files exist. In
fact, the browser, node and SSR variants are sometimes not
even used. That said, the `gatsby-config.js` file is very
important to Q3.

Using our setup helper function, you can get the build
process wrapped up in just a few lines. Essentially, you
just need to populate the meta data.

```javascript
// gatsby-config.js

const config = require('gatsby-theme-q3/helpers').setup(
  {
    appDirectory: '/app',
    author: 'MikeIbberson',
    brand: '3merge',
    description: '',
    favicon: '/favicon.jpg',
    logo: '/logo.png',
    title: 'Q3 Example',
    siteUrl: 'https://3merge.ca/',
  },
  [], // any plugins you'd like to register
);

module.exports = config;
```

Some of Q3 admin's props will pick up on these settings.
**_In most cases, the directory will remain `/app`, as
that's the file under `pages` where we'll insert the
magic._**

Looking at `app.jsx`, you'll find the code deceivingly
simple; it delegates a ton of responsible to Q3. Most
features like state management, notifications,
authorization, etc. come out-of-the-box. While you can pass
props to alter the admin experience, you'll mainly interact
with `AppProps.pages`, as that's how you register new
collections in the UI.

```javascript
// app.jsx
import React from 'react';
import { AdminRouter } from 'gatsby-theme-q3/src/components';
import { Dashboard, Users } from '../components';

export default () => (
  <AdminRouter
    AdminProps={{
      AppProps: {
        // will create custom components that inherit Q3 state and utilities
        customRoutes: [<Dashboard path="/" />],
        // will create templates that are highly dependent on Q3 builder functions
        pages: [Users].flat(),
      },
    }}
  />
);
```

More coming soon.

## Packages API

<ul>
  <li>
    <a href="./packages/q3-admin">🧰 Admin Docs</a>
  </li>
  <li>
    <a href="./packages/q3-ui-audit">🔒 Audit Docs</a>
  </li>
  <li>
    <a href="./packages/q3-ui-charts">📊 Charts Docs</a>
  </li>
  <li>
    <a href="./packages/q3-ui-comments">🙊 Comments Docs</a>
  </li>
  <li>
    <a href="./packages/q3-ui-emaileditor">✉️ Email Editor Docs</a>
  </li>
  <li>
    <a href="./packages/q3-ui-filemanager">🗃️ File Manager Docs</a>
  </li>
  <li>
    <a href="./packages/q3-ui-filemanager">⌨️ Form Docs</a>
  </li>
  <li>
    <a href="./packages/q3-ui-helpers">🆘 Helpers Docs</a>
  </li>
  <li>
     <a href="./packages/q3-ui-queuelogs">📤 Queue Logs</a>
  </li>
  <li>
    <a href="./packages/q3-ui-rte">📝 Rich Text</a>
  </li>
</ul>

## Upgrade guides

### V1. to V2.

Q3 V2. requires fewer configurations and supports newer
versions of its peer dependencies. Note that MUI continues
to remain in v4. and we plan to upgrade that in sometime
in 2022.

#### Breaking changes

[Click here for v1. code branch](https://github.com/3merge/q3-client/tree/v1.x)

<ul>
  <li>Single <code>gatsby-config.js</code> file using theme’s setup helper</li>
  <li><code>AdminRouter</code> component for handling all q3-admin configurations</li>
  <li><code>Notifications</code> component inside profile</li>
  <li>ESlint, Prettier and Jest configurations now out-of-the-box </li>
  <li>Replacement package for react-i18next due to API changes</li>
</ul>
