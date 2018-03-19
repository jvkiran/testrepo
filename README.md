# Ocean Protocol Site

![](public/twitter_card.png)

[![Build Status](https://travis-ci.com/oceanprotocol/site.svg?token=3psqw6c8KMDqfdGQ2x6d&branch=master)](https://travis-ci.com/oceanprotocol/site)
[![css bigchaindb](https://img.shields.io/badge/css-bigchaindb-39BA91.svg)](https://github.com/bigchaindb/stylelint-config-bigchaindb)
[![js ascribe](https://img.shields.io/badge/js-ascribe-39BA91.svg)](https://github.com/ascribe/javascript)

> Landing page for Ocean Protocol https://oceanprotocol.com

---

[**Live**](https://oceanprotocol.com) | [**Beta**](https://beta.oceanprotocol.com)

---

## Table of Contents

- [Content](#content)
    - [Blog posts](#blog-posts)
    - [Videos](#videos)
- [Development](#development)
    - [Workflow](#workflow)
    - [Code style](#code-style)
- [Deployment: always be shipping](#deployment-always-be-shipping)
    - [Manual Deployment](#manual-deployment)

## Content

Most copy is mixed within the HTML and JSX markup in the files under `src/sections/`. The following content has been isolated in json data files in the `src/data/` directory and can be edited there:

- FAQ: `faq.json`
- Events: `events.json`
- Team: `team.json`

### Blog posts

All displayed posts in the Blog section are sourced from our Medium publication blog.oceanprotocol.com. Website only communicates with an endpoint created by webtask.io, where the task on webtask.io communicates directly with the Medium RSS feed.

### Videos

All displayed movies in the Videos section are sourced from a hidden YouTube playlist named `website` in our channel. Website communicates directly with the YouTube Data API v3 setup in Google Cloud Platform.

This API has a limit of 1,000,000 requests per day. Depending on our website traffic, this quota could make the videos section fail to load.

## Development

The site is a single page React app, created with [`create-react-app`](https://github.com/facebook/create-react-app).

```bash
npm i
npm start
```

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

Make sure to rebase your branch from time to time against upstream changes. Avoid using GitHub's auto-merge button on a Pull Request to keep the Git history more clean. You can do a rebase like so:

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

Code style for JavaScript and stylesheets (we're using [styled-components](https://www.styled-components.com)) is enforced before every commit. You won't be able to commit any code with linting errors present so make sure to fix all warnings before committing.

Code style follows [eslint-config-ascribe](https://github.com/ascribe/javascript) and [stylelint-config-bigchaindb](https://github.com/bigchaindb/stylelint-config-bigchaindb).

## Deployment: always be shipping

![shipping](https://cloud.githubusercontent.com/assets/90316/26559768/e21e9724-44b1-11e7-90cf-6ef6ebb06d09.gif)

The site is hosted in a S3 bucket `oceanprotocol.com`, with DNS setup in Cloudflare. Cloudflare provides SSL certificate, among other things. The site gets built & deployed automatically via Travis which is the preferred way of deployment. It makes sure the site is always deployed with fresh dependencies and only after a successful test & build.

Build & deployment happens under the following conditions on Travis:

- every push tests & builds the site
- **live deployment**: every push to the master branch initiates a live deployment
- **beta deployment**: every new pull request and every subsequent push to it initiates a beta deployment

Travis requires the following environment variables to be setup for successful deployments:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_DEFAULT_REGION`
- `CLOUDFLARE_EMAIL`
- `CLOUDFLARE_ZONE`
- `CLOUDFLARE_KEY`

### Manual Deployment

Create fresh production build and sync with S3, needs proper credentials in `~/.aws/credentials`.

```bash
npm run build
AWS_PROFILE=ocean aws s3 sync ./build s3://oceanprotocol.com --delete --acl public-read
```
