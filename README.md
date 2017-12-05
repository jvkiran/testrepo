# Ocean Protocol Site

![](public/twitter_card.png)

[![Build Status](https://travis-ci.com/oceanprotocol/site.svg?token=3psqw6c8KMDqfdGQ2x6d&branch=master)](https://travis-ci.com/oceanprotocol/site)
[![css bigchaindb](https://img.shields.io/badge/css-bigchaindb-39BA91.svg)](https://github.com/bigchaindb/stylelint-config-bigchaindb)
[![js ascribe](https://img.shields.io/badge/js-ascribe-39BA91.svg)](https://github.com/ascribe/javascript)

> Landing page for Ocean Protocol https://oceanprotocol.com

---

[**Live**](https://oceanprotocol.com) | [**Beta**](https://beta.oceanprotocol.com)

---

## Development

```bash
npm start
```

## Deployment: always be shipping

![shipping](https://cloud.githubusercontent.com/assets/90316/26559768/e21e9724-44b1-11e7-90cf-6ef6ebb06d09.gif)

The site gets built & deployed automatically via Travis. This is the preferred way of deployment, it makes sure the site is always deployed with fresh dependencies and only after a successful test & build.

Build & deployment happens under the following conditions on Travis:

- every push tests & builds the site
- **live deployment**: every push to the master branch initiates a live deployment
- **beta deployment**: every new pull request and every subsequent push to it initiates a beta deployment

### Manual Deployment

Create fresh production build and sync with S3, needs proper credentials in `~/.aws/credentials`.

```bash
npm run build
AWS_PROFILE=ocean aws s3 sync ./build s3://oceanprotocol.com --delete --acl public-read
```
