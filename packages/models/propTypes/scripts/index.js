import { shape } from 'prop-types';
import groupPropTypes from './groups';

const scriptPropTypes = {
  canon: shape(groupPropTypes).isRequired,
  trafalgar: shape(groupPropTypes).isRequired,
  paragon: shape(groupPropTypes).isRequired,
  doublePica: shape(groupPropTypes).isRequired,
  greatPrimer: shape(groupPropTypes).isRequired,
  bodyCopy: shape(groupPropTypes).isRequired,
  pica: shape(groupPropTypes).isRequired,
  longPrimer: shape(groupPropTypes).isRequired,
  brevier: shape(groupPropTypes).isRequired,
  minion: shape(groupPropTypes).isRequired,
  atlas: shape(groupPropTypes),
  elephant: shape(groupPropTypes),
  imperial: shape(groupPropTypes),
  royal: shape(groupPropTypes),
  foolscap: shape(groupPropTypes),
};

export default scriptPropTypes;
