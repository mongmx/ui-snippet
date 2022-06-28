import React from 'react';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Default = (args) => {
  return (
    <>
      <Button primary={+true} className="mr-2">{args.label}</Button>
      <Button secondary={+true} className="mr-2">{args.label}</Button>
      <Button danger={+true} className="mr-2">{args.label}</Button>
      <Button success={+true} className="mr-2">{args.label}</Button>
      <Button disabled={+true}>{args.label}</Button>
    </>
  );
};
Default.args = {
  label: 'Button Text',
};
