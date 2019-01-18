# Forms

- [Newsletter](#newsletter)
- [Lead Forms](#lead-forms)
  - [Data Provider/Consumer Form](#data-providerconsumer-form)
  - [Ambassadors Form](#ambassadors-form)
- [Zapier & Google Sheets](#zapier--google-sheets)

We have the following forms on our website collecting lead data:

-   _Newsletter subscription_: Email
-   _Join as Data Provider_: Name, Email, Company, Comment
-   _Ambassadors_: Name, Email, Location, Background, Interest, Speaking, LinkedIn, GitHub, Twitter

## Newsletter

Newsletter submissions are handled with a [webtask](https://github.com/oceanprotocol/webtasks#mailchimp) which puts the data into the newsletter list via the MailChimp API.

Task checks for existence of a user and updates it accordingly and reports back the subscription status to the user.

-   [`src/components/Form/FormNewsletter.js`](../src/components/Form/FormNewsletter.js)
-   [`src/components/Form/FormNewsletter.css.js`](../src/components/Form/FormNewsletter.css.js)

## Lead Forms

The following forms are built out from what's defined in [`src/data/forms.js`](src/data/forms.js). New fields can be added to all forms from there, but data sending for new fields still needs to be handled in the component:

-   [`src/components/Form/FormModal.js`](../src/components/Form/FormModal.js)
-   [`src/components/Form/FormModal.css.js`](../src/components/Form/FormModal.css.js)

### Data Provider/Consumer Form

Data from this form is collected on MailChimp where each form submission is put into a respective list depending on the selection of the `About You` field.

This form submission makes use of MailChimp's undocumented `jsonp` functionality, NOT the MailChimp API.

Via Zapier, the data is synced further in real time when new submissions happen:

-   posted as message in Slack channel #form-submissions
-   posted into respective work sheet into Google Sheets file

### Ambassadors Form

Data from this form is collected on MailChimp into the Ambassadors list. This form submission makes use of MailChimp's undocumented `jsonp` functionality, NOT the MailChimp API.

Via Zapier, the data is synced further in real time when new submissions happen:

-   posted as message in Slack channel #form-submissions
-   posted into respective work sheet into Google Sheets file

## Zapier & Google Sheets

The Zapier automation requires the columns in the Google Sheet to not be changed, except for adding new columns at the very end. When columns are renamed, or new ones added at beginning, or in between, the data sending will break. If changes in columns are required, the Zapier task will have to be reconfigured.
