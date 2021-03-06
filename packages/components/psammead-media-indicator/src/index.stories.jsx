import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { withKnobs, text } from '@storybook/addon-knobs';
import notes from '../README.md';
import MediaIndicator from './index';

// To ensure the white box in the media indicator is visible.
const Page = styled.div`
  background: black;
  height: 100vh;
`;

const PageDecorator = storyFn => <Page>{storyFn()}</Page>;

storiesOf('MediaIndicator', module)
  .addDecorator(PageDecorator)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => (
      <MediaIndicator
        duration={text('duration', '2:15')}
        datetime={text('datetime', 'PT2M15S')}
        offscreenText={text('offscreenText', 'Video 2 minutes 15 seconds')}
      />
    ),
    { notes },
  )
  .add(
    'without duration',
    () => <MediaIndicator offscreenText={text('offscreenText', 'Video')} />,
    { notes },
  );
