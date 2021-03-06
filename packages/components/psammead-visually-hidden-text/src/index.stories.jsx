import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import VisuallyHiddenText from './index';

storiesOf('VisuallyHiddenText', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider(['visually hidden text'], hiddenText => (
      <VisuallyHiddenText>{hiddenText}</VisuallyHiddenText>
    )),
    { notes, knobs: { escapeHTML: false } },
  );
