---
title: Debugging gatsby-plugin-google-gtag for Google Analytics 4 with Gatsby
date: 2021-09-01 02:30:00 +0400
cover: gatsby.png
tags:
  - Technical
  - Gatsby
  - Analytics
---

In this article I will cover how I installed and configured the plugin, added my custom
track event, tried to test it and it didn't work so I went through a checklist of debugging
the thing.

## Prerequisites

I assume that you are already familiar with [Gatsby](https://www.gatsbyjs.com/).
At the time of writing, I am using Gatsby `3.11.0`.

You also need the Google Analytics 4 property. Read this [article](https://support.google.com/analytics/answer/9744165)
to add a Google Analytics 4 property to a site that already has analytics.

## Installation

I installed the [gatsby-plugin-google-gtag](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/) plugin -
at the time of writing it's version `3.12.0` - and configured it pretty much according to the documentation.

> I have omitted what I don't need so refer to the original documentation for more attributes.

The piece of code below can be copied into your `gatsby-config.js` file within the `plugins` attribute.

```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'GA-TRACKING_ID', // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command.
        // This config will be shared across all trackingIds.
        gtagConfig: {
          // Anonymizes the last digits of the user’s IP.
          // To comply with policies and legal regulations.
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin.
        pluginConfig: {
          // As false it puts the tracking script in the body instead of the head.
          head: false,
          // Optional parameter to honor the Do Not Track feature.
          respectDNT: true,
        },
      },
    },
  ],
};
```

## Track a custom event

I have an anchor component which checks the type of link and renders the
appropriate anchor type for me. Links internal to the website use Gatsby's `Link`
component while outbound links use the `gatsby-plugin-google-gtag` plugin's
`OutboundLink` component.

Here is the crux of my plugin:

```javascript
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

const trackClickEvent = (data) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', data);
  }
};

const Anchor = ({ to, title, children }) => {
  const trackingData = { to, title };

  if (!to) return <span title={title}>{children}</span>;

  if (to && to.startsWith('/')) {
    return (
      <Link to={to} title={title} onClick={() => trackClickEvent(trackingData)}>
        {children}
      </Link>
    );
  }

  return (
    <OutboundLink
      href={to}
      title={title}
      rel="noreferrer noopener"
      target="_blank"
      onClick={() => trackClickEvent(trackingData)}
    >
      {children}
    </OutboundLink>
  );
};

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  to: PropTypes.string,
};

export default Anchor;
```

I have only added a track click event to my project (because I am not that creative
to come up with anything else to track :unamused: but that's probably a good thing!).

```js
const trackOnClick = (data) => {
  // Guard against SSR && make sure that the gtag exists globally
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', data);
  }
};
```

## Debug checklist

It didn't work :pensive: so I went through a few things.

> Please [let me know](mailto:clarice@bouwer.dev) if you experience this issue and
> have found a different solution.

### Serve from the production server

- Manually clean your `.cache` directory. This isn't always necessary but it is a good precaution
  to take and can mitigate frustration. The cache goes stale and references get outdated.
- Build your site. It optimizes and packages up the site using its config, data, and code
  to compile a production-ready set of static HTML pages that will later get rehydrated
  into a React application.
- Serve your project using the production server.

```bash
gatsby clean && gatsby build && gatsby serve
```

If you do not have the Gatsby CLI globally installed then you should run your commands using what
you have configured in your `package.json` config by running `npm` or `yarn`. This will run the
executable available within the `/node_modules/` directory.

### Do not honor the respectDNT option

DNT stands for Do Not Track. This feature will cause the `window.gtag` to be `undefined` if it is
enabled so set it to `false`. Check out the [Chrome browser setting](https://support.google.com/chrome/answer/2790761).

I had this set to false using an environment variable `javascript±HONOR_DNT=false` and
`javascript±respectDNT: process.env.HONOR_DNT || true` but it didn't work :cry:. I haven't yet fully investigated
why.

> It is probably wise to enable this in production.

### Temporarily stop your Ad blocker

An ad block will block all tracking scripts. Be sure to disable it.

## Testing

While I was debugging I tested scenario after scenario to see which one was the bad sheep.
I'd type id `window.gtag` in the console expecting to see a function instead of `undefined`.

Once it was working I inspected the Network tab and noticed that requests were
being made to `https://www.google-analytics.com/g/collect` :tada:

## References

- [Meet the next generation of Google Analytics](https://support.google.com/analytics/answer/10089681)
- [Overview of the Gatsby Build Process](https://www.gatsbyjs.com/docs/conceptual/overview-of-the-gatsby-build-process/)
- [How to Anonymize IP Addresses and Avoid the Cross-Referencing of Data in Google Analytics](https://www.iubenda.com/en/help/1184-how-to-anonymize-ip-addresses-and-avoid-the-cross-referencing-of-data-in-google-analytics)
- [Are your IP addresses anonymized?](https://complianz.io/are-your-ip-addresses-anonymized/)
- [Google Analytics GDPR setup](https://complianz.io/how-to-configure-google-analytics-for-gdpr/)
- [gatsby-plugin-google-gtag window.gtag not working](https://github.com/gatsbyjs/gatsby/issues/12680) #12680
