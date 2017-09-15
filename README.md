# Ocean Protocol Site

![](public/twitter_card.png)

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