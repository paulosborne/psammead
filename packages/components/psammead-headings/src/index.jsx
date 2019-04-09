import styled from 'styled-components';
import { shape } from 'prop-types';
import { C_SHADOW } from '@bbc/psammead-styles/colours';
import {
  GEL_SPACING_DBL,
  GEL_SPACING_QUAD,
} from '@bbc/gel-foundations/spacings';
import {
  getCanon,
  getTrafalgar,
  GEL_FF_REITH_SANS,
  GEL_FF_REITH_SERIF,
} from '@bbc/gel-foundations/typography';
import {
  MEDIA_QUERY_TYPOGRAPHY,
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import scriptPropTypes from '../../../models/propTypes/scripts';

export const Headline = styled.h1`
  ${props => (props.script ? getCanon(props.script) : '')};
  color: ${C_SHADOW};
  font-family: ${GEL_FF_REITH_SERIF};
  margin: 0; /* Reset */
  padding: ${GEL_SPACING_QUAD} 0;
  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    padding: 2.5rem 0;
  }
  font-weight: 500;
`;

const regexPunctuationSymbols = /[^a-z0-9\s-]/gi;
const regexSpaces = /\s+/g;

export const SubHeading = styled.h2.attrs(({ text }) => ({
  id: text.replace(regexPunctuationSymbols, '').replace(regexSpaces, '-'),
  tabIndex: '-1',
}))`
  ${props => (props.script ? getTrafalgar(props.script) : '')};
  color: ${C_SHADOW};
  font-family: ${GEL_FF_REITH_SANS};
  margin: 0; /* Reset */
  padding: ${GEL_SPACING_DBL} 0;
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    padding-top: ${GEL_SPACING_QUAD};
  }
  font-weight: 700;
`;

Headline.propTypes = {
  script: shape(scriptPropTypes).isRequired,
};

SubHeading.propTypes = {
  script: shape(scriptPropTypes).isRequired,
};
