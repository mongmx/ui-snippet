import React from 'react';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => {
  return (
    <>
      <Button primary={+true} className="mr-2">Button</Button>
      <Button secondary={+true} className="mr-2">Button</Button>
      <Button danger={+true} className="mr-2">Button</Button>
      <Button success={+true} className="mr-2">Button</Button>
      <Button disabled={+true}>Button</Button>
    </>
  );
};
