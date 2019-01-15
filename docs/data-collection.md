# Data Collection & Cookies

From frontend side, nothing gets collected or stored, the S3 bucket has access logging deactivated too.

Site communicates against those services where some data collection, like time of request and the user's IP address might be collected:

-   https://webtask.io
-   https://zeit.co
-   https://mailchimp.com

## Cookie Banner

When a user first arrives on the site, a cookie banner will be shown. Cookie banner will be accepted automatically on either those conditions:

-   user stays on page for more than 10 seconds
-   user browses to another page

This acceptance is then stored as a cookie (oh the irony) called `hasConsent`. If user is coming from one of our other web properties, she probably has this cookie already so cookie banner won't be shown for her. Likewise, if user has Do Not Track activated, nothing will be shown either.

## Google Analytics

Only Google Analytics sets cookies but the whole script loading has been connected to the cookie banner mentioned above. If the `hasConsent` cookie set by the cookie banner is `true`, Google's Analytics script is loaded and initialized. Anonymization of IP addresses has been setup too.

If user decides to hit _Reject_ on the cookie banner, all Google cookies will be deleted, and the rejection is stored in cookie `hasConsent` with value of `false.
