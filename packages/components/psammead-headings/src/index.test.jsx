import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin, arabic } from '@bbc/gel-foundations/scripts';
import { Headline, SubHeading } from './index';

describe('Headline component', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <Headline script={latin}>This is my headline.</Headline>,
  );

  shouldMatchSnapshot(
    'should render correctly with arabic script typography values',
    <Headline script={arabic}>هذا هو العنوان الخاص بي</Headline>,
  );
});

describe('SubHeading component', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <SubHeading text="This is a SubHeading" script={latin}>
      This is a SubHeading
    </SubHeading>,
  );

  shouldMatchSnapshot(
    'attribute id should render without quotes',
    <SubHeading text="This 'is' a SubHeading" script={latin}>
      This is a SubHeading
    </SubHeading>,
  );

  shouldMatchSnapshot(
    'attribute id should render without double quotes',
    <SubHeading text='This "is" a SubHeading' script={latin}>
      This is a SubHeading
    </SubHeading>,
  );

  shouldMatchSnapshot(
    'attribute id should render without exclamation marks',
    <SubHeading text="This is! a SubHeading!" script={latin}>
      This is a SubHeading
    </SubHeading>,
  );

  shouldMatchSnapshot(
    'should render correctly with arabic script typography values',
    <SubHeading text="هذا عنوان فرعي" script={arabic}>
      هذا عنوان فرعي
    </SubHeading>,
  );
});
