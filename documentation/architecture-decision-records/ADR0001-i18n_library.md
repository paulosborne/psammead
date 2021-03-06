# Adopt react-intl as i18n library
## ADR-0001

* Status: Proposed
* Deciders:
  * Articles Team
  * WS Team
* Date: 2019-03-18

## Context and Problem Statement

Psammead components need a standardised approach to localisation, including date and time formatting and string translation.

## Decision Drivers

* Ease of adoption
* Documentation, community and online resources
* Maintainability
* Popularity / Number of Backers

## Considered Options

1. [react-intl](https://github.com/yahoo/react-intl)

Created and maintained by Yahoo.

This library provides React components and an API to format dates, numbers, and strings, including pluralization and handling translations.

It uses and builds on the [Internationalization API built-in to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl).

Features:
* Display numbers with separators.
* Display dates and times correctly.
* Display dates relative to "now".
* Pluralize labels in strings.
* Support for 150+ languages.
* Runs in the browser and Node.js.

Developer Experience:

The documentation is good https://github.com/yahoo/react-intl/wiki

Support: 206 issues - 1 bug

Licensing: Free to use under the Yahoo Inc. BSD license. See the LICENSE file for license text and copyright information.

Size:

Bundle Size
47.6 kB Minified
13kB Minified + GZipped

https://bundlephobia.com/result?p=react-intl@2.8.0

Examples:
https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-react-app-with-react-intl
https://medium.freecodecamp.org/internationalization-in-react-7264738274a0

---

2. [react-intl-universal](https://github.com/alibaba/react-intl-universal)

Created and maintained by Alibaba.

It is an improvement of `react intl` in that it adds functionality for supporting translations in Vanilla JS. `react-intl` only does this in React Components.

Features:
* It can do what we want i.e format numbers, times and dates
* Can run both in the browser and in NodeJS so we will be covered when we finally work on adding SPA support
* Supports fetching of config files from a remote source e.g S3
* Seems like it was built for a specific reason; supporting translations in Vanilla JS. This doesn't apply to us, as we’ll be using React components, but it doesn't prevent us from using it.

Support:
* Quick responses on both issues and Pull requests
* 14 issues, 6 PRs

Developer experience:
* Some parts of the docs aren’t grammatically correct. One will notice the errors but it’s not bad enough that one won’t be able to understand the docs.
* Noticed that there are several issues that are asking for new features that are available on react-intl but not on react-intl-universal. Seems like they aren’t actively working on new features at the moment. If the current version suits our needs, we won’t have to worry about this.

Size:

- 75.4 kB Minified
- 24.7 kB Minified + GZipped

Source: [bundlephobia](https://bundlephobia.com/result?p=react-intl-universal@1.15.5)

Licensing: BSD 3-Clause "New" or "Revised" License granted by Alibaba. [License page info](https://github.com/alibaba/react-intl-universal/blob/master/LICENSE.md).

---

3. [fbt](https://github.com/facebookincubator/fbt)

Created by Facebook.

Features:
* Organizing your source text for translation
* Composing grammatically correct translatable UI
* Eliminating verbose boilerplate for generating UI

FBT works by transforming your `<fbt>` and `fbt(...)` constructs via Babel plugins. These plugins serve to extract strings from source and lookup translate payloads generated at build-time. FBT creates tables of all possible variations for the given fbt phrase and accesses this at runtime.

Developer experience:

* Confusing syntax
* Not many resources found, other than the docs which are not very clear
* https://facebookincubator.github.io/fbt/docs/api_intro

Support: 18 issues - 1 bug. Low activity in community

Licensing: FBT is MIT licensed, as found in the LICENSE file.

---
4. Roll your own library

An i18n library developed internally.

Pros: custom-built to fit our needs
Cons: More developer resources needed to deliver an i18n library with the required feature set in time.

---

## Decision Outcome

There was a clear preference among developers for option 1, `react-intl`, as it is the most straight-forward and fully-supported option, providing the best developer experience out of all three. 

It was also the easiest to integrate into Psammead. The following is an example of using it with the Headline component:

```javascript
import { addLocaleData, IntlProvider } from 'react-intl'; 
import locale_en from 'react-intl/locale-data/en'; 
import locale_es from 'react-intl/locale-data/es'; 
import messages from './translations.js'; 
import { FormattedMessage } from 'react-intl'; 

addLocaleData([...locale_en, ...locale_es]);

const locale = 
  (navigator.languages && navigator.languages[0]) || 
  navigator.language ||
  navigator.userLanguage ||
  'en-UK';

export const Headline = styled.h1`
  color: ${C_EBON};
  font-family: ${FF_NEWS_SERIF_MDM};
  margin: 0;
  padding: ${GEL_SPACING_QUAD} 0 ${GEL_SPACING_DBL} 0;
  ${GEL_CANON};
`;

export const HeadlineIntl = () => {
  return (
    <IntlProvider
      defaultLocale="en"
      locale={locale}
      messages={messages[locale]}
    >
      <Headline>
        <FormattedMessage id="headline" />
      </Headline>
    </IntlProvider>
  );
};
```

React Intl uses the provider pattern to scope an i18n context to a tree of components. This allows configuration like the current locale to be provided at the root of a component tree and made available to all the child components as well.

The `Headline` (Psammead) component wraps the `<FormattedMessage>` component of `react-intl` which is used for formatting string messages.

We have to load the locale data for languages we want to support. In this example, we have imported English and Spanish. This data is provided by `react-intl` and specifies the date, time, number and formats for each language. The locale data is added by calling `addLocaleData()`.

The translations of our custom text messages will be stored for each language in a separate config file.

**translations/en.json**:
```javascript
{
  "headline": "This is a heading"
}
```

**translations/es.json**:
```javascript
{
  "headline": "Esto es un encabezado"
}
```

Based off the above, we decided to go with `react-intl` as our internationalization package.
