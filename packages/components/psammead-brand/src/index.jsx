import React from 'react';
import styled, { css } from 'styled-components';
import { string } from 'prop-types';
import { C_POSTBOX, C_WHITE } from '@bbc/psammead-styles/colours';
import loadable from '@loadable/component';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MAX,
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import {
  GEL_MARGIN_BELOW_400PX,
  GEL_MARGIN_ABOVE_400PX,
  GEL_SPACING,
  GEL_SPACING_DBL,
  GEL_SPACING_HLF,
} from '@bbc/gel-foundations/spacings';

const BrandSvg = loadable(() => import('./NewsBrand'))

const SVG_BOTTOM_OFFSET = '1.5rem'; // 24px
const BANNER_HEIGHT = '5rem'; // 80px

const layoutWrapperWithoutGrid = css`
  @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    padding: 0 ${GEL_MARGIN_BELOW_400PX};
  }
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    padding: 0 ${GEL_MARGIN_ABOVE_400PX};
  }
`;

const StyledWrapper = styled.div`
  ${layoutWrapperWithoutGrid};
  background-color: ${C_POSTBOX};
  height: ${BANNER_HEIGHT};
  width: 100%;
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
    padding: 0 ${GEL_SPACING_DBL};
  }
`;

const ConstraintWrapper = styled.div`
  max-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN};
  margin: 0 auto;
`;

const StyledLink = styled.a`
  padding-top: ${GEL_SPACING};
  display: inline-block;
`;

const StyledSpan = styled.span`
  display: block;
  padding-bottom: ${SVG_BOTTOM_OFFSET};
  ${/* sc-selector */ StyledLink}:hover &,
  ${/* sc-selector */ StyledLink}:focus & {
    text-decoration: none;
    border-bottom: ${GEL_SPACING_HLF} solid ${C_WHITE};
  }
`;

const Brand = ({ brandName }) => (
  <StyledWrapper>
    <ConstraintWrapper>
      <StyledLink href="https://www.bbc.co.uk/news">
        <StyledSpan>
          <BrandSvg />
          <VisuallyHiddenText>{brandName}</VisuallyHiddenText>
        </StyledSpan>
      </StyledLink>
    </ConstraintWrapper>
  </StyledWrapper>
);

Brand.propTypes = {
  brandName: string.isRequired,
};

export default Brand;
