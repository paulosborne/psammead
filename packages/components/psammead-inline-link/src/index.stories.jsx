import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import InlineLink from './index';

storiesOf('InlineLink', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider(['link text'], linkText => (
      <InlineLink href="https://www.bbc.com/news">{linkText}</InlineLink>
    )),
    { notes, knobs: { escapeHTML: false } },
  );
