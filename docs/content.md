# Content

- [Events](#events)
  - [`date` & `date_end`](#date--date_end)
- [Papers](#papers)
- [Team](#team)
- [Advisors](#advisors)
- [Collaborators](#collaborators)
  - [Logo](#logo)
- [Blog posts](#blog-posts)
- [Videos](#videos)
- [Community numbers](#community-numbers)

Most content has been isolated in json data files in the `src/data/` directory and can be edited there.

-   [`src/data/`](../src/data/)

The top-level of that folder holds content files for most sections. The [`src/data/pages/`](../src/data/pages/) folder holds all page content not put into any section, usually meaning the header content for each page.

## Events

Events can be added to the events section on the front page by editing the [`src/data/events.json`](../src/data/events.json) file.

On the events section, all events are automatically sorted chronologically by the `date` value, and past events are put into the archive modal. So the order of the events in the `events.json` file doesn't matter.

### `date` & `date_end`

When adding a multi-day event, don't use the full event range but only the date one of the team members is actually present at an event. This is usually just one day, e.g. when giving a talk. Only add the optional `date_end` when our presence at an event is confirmed for multiple days.

## Papers

All pdf documents are simply put into the `public` folder, making them available under the root `/` of the live site.

An exception is the technical whitepaper which is sourced from the [`oceanprotocol/whitepaper`](https://github.com/oceanprotocol/whitepaper) submodule in `src/lib/whitepaper` and automatically copied in place before deployment.

## Team

tbd

## Advisors

tbd

## Collaborators

All displayed collaborators are sourced from the [`src/data/collaborators.json`](src/data/collaborators.json) file.

For every collaborator `name`, `logo` and `link` are required, while `description` is optional. Here, `logo` refers to the filename of the SVG asset.

### Logo

A logo in SVG format needs to be added to the `./src/assets/logos` folder. It will end up automatically as inlined SVG in the final site allowing styling with CSS.

Logo file then needs to be imported and exported from the [`./src/assets/logos/index.js`](./src/assets/logos/index.js) file.

_ToDo: remove the need to manually import the logo file._

While all SVGs are automatically cleaned up through [SVGO](https://github.com/svg/svgo), it's best to clean and export them from the Sketch file under [`./_media/logos.sketch`](./_media/logos.sketch) for easier maintainability. Make sure to have the [SVGO Compressor plugin](https://sketchapp.com/extensions/plugins/svgo-compressor/) installed in Sketch before exporting.

## Blog posts

All displayed posts in the Blog section are sourced from our Medium publication under blog.oceanprotocol.com.

Website only communicates with an endpoint created via webtask.io, where the task on webtask.io communicates directly with the Medium RSS feed. See [oceanprotocol/webtasks](https://github.com/oceanprotocol/webtasks) for details.

## Videos

All displayed movies in the Videos section are sourced from a hidden YouTube playlist named `website` in our channel.

Website only communicates with an endpoint created via webtask.io, where the task on webtask.io communicates directly with the YouTube Data API v3 setup in Google Cloud Platform. See [oceanprotocol/webtasks](https://github.com/oceanprotocol/webtasks) for details.

## Community numbers

The numbers on the community page are fetched from various endpoints:

-   Blog followers: [oceanprotocol/webtasks#get-followers-count](https://github.com/oceanprotocol/webtasks#get-followers-count)
-   GitHub stargazers: [oceanprotocol/github-projects](https://github.com/oceanprotocol/github-projects)
-   Bounties: [oceanprotocol/bounties-api](https://github.com/oceanprotocol/bounties-api)

At the moment, the Twitter and Telegram numbers are hardcoded and need to be updated manually in this file:

-   [`src/constants.js`](../src/constants.js)

There you will find under the `social` const this part from which the numbers on Community page are sourced from:

```js
manualNumbers: {
    twitter: 11862,
    telegram: 7292
}
```
