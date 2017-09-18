# Ocean Protocol Site

![](public/twitter_card.png)

[![Build Status](https://travis-ci.com/oceanprotocol/site.svg?token=3psqw6c8KMDqfdGQ2x6d&branch=master)](https://travis-ci.com/oceanprotocol/site)

> Landing page for Ocean Protocol https://oceanprotocol.com

## Development

```bash
npm start
```

## Deployment

Create fresh production build and sync with S3, needs proper credentials in `~/.aws/credentials`.

```bash
AWS_PROFILE=ocean ./deploy.sh
```