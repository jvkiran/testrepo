[![site](_media/repo-banner@2x.png)](https://oceanprotocol.com)

> 🐠 Landing page for Ocean Protocol https://oceanprotocol.com

[![Build Status](https://travis-ci.com/oceanprotocol/site.svg?token=3psqw6c8KMDqfdGQ2x6d&branch=master)](https://travis-ci.com/oceanprotocol/site)
[![js oceanprotocol](https://img.shields.io/badge/js-oceanprotocol-7b1173.svg)](https://github.com/oceanprotocol/eslint-config-oceanprotocol)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-7b1173.svg?style=flat-square)](https://github.com/prettier/prettier)

---

[**Live**](https://oceanprotocol.com) | [**Beta**](https://beta.oceanprotocol.com)

---

- [Documentation](#documentation)
- [Development](#development)
  - [Environment variables](#environment-variables)
  - [Workflow](#workflow)
  - [Code style](#code-style)
    - [Editor Setup: VS Code](#editor-setup-vs-code)
  - [SVG assets](#svg-assets)
- [Deployment: always be shipping](#deployment-always-be-shipping)
  - [Manual Deployment](#manual-deployment)

---

## Documentation

For all infos not related to development, have a look into the site's documentation:

-   [Content Editing](docs/content.md)
-   [Forms](docs/forms.md)
-   [SEO](docs/seo.md)
-   [Data Collection & Cookies](docs/data-collection.md)
-   [User Location Detection](docs/location.md)

## Development

The site is a single page React app, created with [`create-react-app`](https://github.com/facebook/create-react-app).

To start development, clone this repo, install all dependencies, and start the development server:

```bash
git clone --recurse-submodules git@github.com:oceanprotocol/site.git
cd site/

# copy and move environment variables file in place
mv .env.example .env

npm i
npm start
```

### Environment variables

A `.env` file is used to inject environment variables during local development. We're using `create-react-app` so all variables need to be prefixed with `REACT_APP_` to get picked up.

| Environment Variable        | Usage                                                                                                                        |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `REACT_APP_ANIMATE_WAVES`   | Set to `false` to stop the waves from executing, saving your laptop battery.                                                 |
| `REACT_APP_ANIMATE_PROJECT` | Set to `false` to disable the Project data dots animation. Takes away some stress from your GPU, saving your laptop battery. |

### Workflow

Work happens only in the `oceanprotocol/site` repository, no need to fork it to your account. Following a Git feature branch workflow, always start by branching off from an updated `master`:

```bash
git checkout master
git pull
git branch -b feature/mycoolnewfeature

# first push: publish branch and setup as remote tracking branch
git push -u origin feature/mycoolnewfeature
# all subsequent pushes
git push
```

Do work in your feature branch, committing early and often. You can open a Pull Request on GitHub as early as you want to discuss further implementation on it and check it out on beta.oceanprotocol.com. Just make sure to mark it as _Work in Progress_ in the PR description and/or by applying the respective label.

Make sure to rebase your branch from time to time against `master` upstream changes. Avoid using GitHub's auto-merge button on a Pull Request to keep the Git history more clean. You can do a rebase like so:

```bash
git checkout master
git pull
git checkout feature/mycoolnewfeature
git rebase master
```

Be aware that you have to force push after a rebase if you have published your branch already:

```bash
git push -f
```

Once ready, request a review of your Pull Request from a team member, fixing possible change requests. Once approved, you can merge your Pull Request and delete the branch afterwards.

### Code style

To enforce a consistent code style, linting is setup for pretty much every file, and is enforced before every commit. You won't be able to commit any code with linting errors present so make sure to fix all warnings before committing.

Linting is also part of the test suite, meaning builds on Travis will fail in case of linting errors.

In this repo the following tools are setup for that:

- ESLint with [eslint-config-oceanprotocol](https://github.com/oceanprotocol/eslint-config-oceanprotocol)
- Stylelint with [stylelint-config-bigchaindb](https://github.com/bigchaindb/stylelint-config-bigchaindb)
- [Prettier](https://prettier.io)

```bash
# only run linting checks
npm run lint

# auto-formatting of all js, css, md, yml files
npm run format
```

#### Editor Setup: VS Code

If you use VS Code as your editor, you can install those extensions to get linting as you type, and auto-formatting as you save:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)

### SVG assets

All SVG assets under `src/assets/` will be converted to React components before every build. Makes use of `SVGR` so SVG assets can be imported like so:

```js
import Logo from './components/svg/Logo'

<Logo />
```

That's done with a simple bash script under [`scripts/svg.sh`](scripts/svg.sh).

## Deployment: always be shipping

![shipping](https://cloud.githubusercontent.com/assets/90316/26559768/e21e9724-44b1-11e7-90cf-6ef6ebb06d09.gif)

The site is hosted in a S3 bucket `oceanprotocol.com`, with DNS setup in Cloudflare. Cloudflare provides SSL certificate, among other things.

The site gets built & deployed automatically via Travis which is the preferred way of deployment. It makes sure the site is always deployed with fresh dependencies and only after a successful test & build.

Build & deployment happens under the following conditions on Travis:

-   every push tests & builds the site
-   **live deployment**: every push to the master branch initiates a live deployment
-   **beta deployment**: every new pull request and every subsequent push to it initiates a beta deployment

Travis requires the following environment variables to be setup for successful deployments:

-   `AWS_ACCESS_KEY_ID`
-   `AWS_SECRET_ACCESS_KEY`
-   `AWS_DEFAULT_REGION`
-   `CLOUDFLARE_EMAIL`
-   `CLOUDFLARE_ZONE`
-   `CLOUDFLARE_KEY`

### Manual Deployment

Create fresh production build and sync with S3, needs proper credentials in `~/.aws/credentials`.

```bash
npm run build
AWS_PROFILE=ocean aws s3 sync ./build s3://oceanprotocol.com --delete --acl public-read
```
