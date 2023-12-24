import React from 'react';
import Spinner from '@components/spinner';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents.filter((component) => {
          return component.key !== 'gatsby-plugin-manifest-icon-link-png';
        })}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <Spinner />
        <div
          key={'body'}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}
