import React from 'react';

const Icons = ({ themeColor }) => (
  <>
    <meta content={themeColor} name="theme-color" />
    <meta content={themeColor} name="msapplication-TileColor" />
    <link href={require("@images/favicon.ico").default} rel="shortcut icon" />
  </>
);

export default Icons;
