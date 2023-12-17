import React from 'react';
import FlowbiteWrapper from '@components/flowbite-wrapper';

const Layout = ({ children }) => {
  return (
    <div>
      <FlowbiteWrapper>{children}</FlowbiteWrapper>
    </div>
  );
};

export default Layout;
