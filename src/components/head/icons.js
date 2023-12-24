import React from 'react';
import { Helmet } from 'react-helmet';

const Icons = ({ themeColor }) => (
  <Helmet>
    <meta content={themeColor} name="theme-color" />
    <meta content={themeColor} name="msapplication-TileColor" />
    <link href={require("@images/favicon.ico").default} rel="shortcut icon" />
  </Helmet>
);

export default Icons;
