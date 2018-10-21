[![site](_media/repo-banner@2x.png)](https://oceanprotocol.com)

> 🐠 Landing page for Ocean Protocol https://oceanprotocol.com

[![Build Status](https://travis-ci.com/oceanprotocol/site.svg?token=3psqw6c8KMDqfdGQ2x6d&branch=master)](https://travis-ci.com/oceanprotocol/site)
[![js oceanprotocol](https://img.shields.io/badge/js-oceanprotocol-7b1173.svg)](https://github.com/oceanprotocol/eslint-config-oceanprotocol)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-7b1173.svg?style=flat-square)](https://github.com/prettier/prettier)

---

[**Live**](https://oceanprotocol.com) | [**Beta**](https://beta.oceanprotocol.com)

---

## Table of Contents

-   [Content](#content)
    -   [Events](#events)
        -   [date &amp; date_end](#date-date_end)
    -   [Papers](#papers)
    -   [Blog posts](#blog-posts)
    -   [Videos](#videos)
-   [Forms](#forms)
-   [SEO](#seo)
-   [Development](#development)
    -   [Environment variables](#environment-variables)
    -   [Workflow](#workflow)
    -   [Code style](#code-style)
-   [Deployment: always be shipping](#deployment-always-be-shipping)
    -   [Manual Deployment](#manual-deployment)
-   [Data Collection &amp; Cookies](#data-collection-cookies)
    -   [Cookie Banner](#cookie-banner)
    -   [Google Analytics](#google-analytics)

## Content

Most copy is mixed within the HTML and JSX markup in the files under `src/sections/`. The following content has been isolated in json data files in the `src/data/` directory and can be edited there:

-   Events: [`events.json`](src/data/events.json)
-   Team: [`team.json`](src/data/team.json)
-   Advisors: [`advisors.json`](src/data/advisors.json)
-   Art: [`art.json`](src/data/art.json)
-   FAQ: [`faq.json`](src/data/faq.json)
-   Roadmap: [`roadmap.json`](src/data/roadmap.json)

### Events

Events can be added to the events section on the front page by editing the [`src/data/events.json`](src/data/events.json) file, and committing the result in a new Pull Request.

On the events section, all events are automatically sorted chronologically by the `date` value, and past events are put into the archive modal. So the order of the events in the `events.json` file doesn't matter.

#### `date` & `date_end`

When adding a multi-day event, don't use the full event range but only the date one of the team members is actually present at an event. This is usually just one day, e.g. when giving a talk. Only add the optional `date_end` when our presence at an event is confirmed for multiple days.

### Papers

All pdf documents are simply put into the `public` folder, making them available under the root `/` of the live site.

An exception is the technical whitepaper which is sourced from the [`oceanprotocol/whitepaper`](https://github.com/oceanprotocol/whitepaper) submodule in `src/lib/whitepaper` and automatically copied in place before deployment.

### Blog posts

All displayed posts in the Blog section are sourced from our Medium publication under blog.oceanprotocol.com.

Website only communicates with an endpoint created via webtask.io, where the task on webtask.io communicates directly with the Medium RSS feed. See [oceanprotocol/webtasks](https://github.com/oceanprotocol/webtasks) for details.

### Videos

All displayed movies in the Videos section are sourced from a hidden YouTube playlist named `website` in our channel.

Website only communicates with an endpoint created via webtask.io, where the task on webtask.io communicates directly with the YouTube Data API v3 setup in Google Cloud Platform. See [oceanprotocol/webtasks](https://github.com/oceanprotocol/webtasks) for details.

## Forms

We have the following forms on our website collecting lead data:

-   _Newsletter subscription_: Email
-   _Join as Data Provider_: Name, Email, Company, Comment
-   _Join as Data Consumer_: Name, Email, Company, Comment
-   _Ambassadors_: Name, Email, Location, Background, Interest, Speaking, LinkedIn, GitHub

All data is currently collected on MailChimp where each form submission is put into a respective list. All form submissions except for newsletter make use of MailChimp's undocumented `jsonp` functionality, NOT the MailChimp API.

Newsletter submissions are handled with a [webtask](https://github.com/oceanprotocol/webtasks#mailchimp) which puts the data into the newsletter list via the MailChimp API.

Via Zapier, the data is synced further in real time when new submissions happen:

-   the Data Provider, Data Consumer & Ambassadors into Slack channel #form-submissions
-   the Data Provider, Data Consumer & Ambassadors data into Google Sheets

All above forms are built out from what's defined in [`src/data/forms.js`](src/data/forms.js). New fields can be added to all forms from there, but data sending for new fields still needs to be handled in the component in [`src/sections/Modal/ModalForm.js`](src/sections/Modal/ModalForm.js).

## SEO

Dynamic `meta` tags for better search engine ranking can be achieved by using the SEO component on every page under `src/pages/`. Every created page in there requires the use of this component, with some props pushed to it, e.g.:

```js
import PropTypes from 'prop-types'
import SEO from '../components/SEO'

const Page = ({ location }) => {
    const title = 'PAGE_TITLE'
    const description = 'PAGE_DESCRIPTION'
    const image = 'PAGE_IMAGE_PATH'

    return (
        <SEO
            description={description}
            image={image}
            path={location.pathname}
            title={title}
        />
    )
}

Page.propTypes = {
    location: PropTypes.object.isRequired
}
```

This component will dynamically generate the required `meta` tags for search engines, Twitter Cards, and Facebook Open Graph tags.

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

Code style for JavaScript and style sheets (we're using [styled-components](https://www.styled-components.com)) is enforced before every commit. You won't be able to commit any code with linting errors present so make sure to fix all warnings before committing.

Code style follows:

-   [eslint-config-oceanprotocol](https://github.com/oceanprotocol/eslint-config-oceanprotocol)
-   [stylelint-config-bigchaindb](https://github.com/bigchaindb/stylelint-config-bigchaindb)

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

## Data Collection & Cookies

From frontend side, nothing gets collected or stored, the S3 bucket has access logging deactivated too.

Site communicates against those services where some data collection, like time of request and the user's IP address might be collected:

-   https://webtask.io
-   https://mailchimp.com

### Cookie Banner

When a user first arrives on the site, a cookie banner will be shown. Cookie banner will be accepted automatically on either those conditions:

-   user stays on page for more than 10 seconds
-   user browses to another page

This acceptance is then stored as a cookie (oh the irony) called `hasConsent`. If user is coming from one of our other web properties, she probably has this cookie already so cookie banner won't be shown for her. Likewise, if user has Do Not Track activated, nothing will be shown either.

### Google Analytics

Only Google Analytics sets cookies but the whole script loading has been connected to the cookie banner mentioned above. If the `hasConsent` cookie set by the cookie banner is `true`, Google's Analytics script is loaded and initialized. Anonymization of IP addresses has been setup too.

If user decides to hit _Reject_ on the cookie banner, all Google cookies will be deleted, and the rejection is stored in cookie `hasConsent` with value of `false.
