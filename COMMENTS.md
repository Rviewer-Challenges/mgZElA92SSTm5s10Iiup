For installing project dependencies:

# Unit Converter

This app allows to convert different units. In this moment, the app support working with length and temperature measures. For the UI we used the CSS library Nes.css.

### `npm install`

For running the app in development mode:

### `npm start`

# Libraries or tools used

- React (https://reactjs.org/)
- Nes.css (https://nostalgic-css.github.io/NES.css/)
- SASS (https://sass-lang.com/)

# Architecture

We used an achitecture based on Clean Architecture. This architecture allow us to separate the UI components from the application logic, like the conversion functions.

# Desing principles

We used the composition principle. This principle is fundamental for coding in React apps. This principle give us more flexibility and reusability of generics components. Also we use SOLID principles. For example, the Single responsability principle it's seen on the components that only take care of rendering the UI, like the Select or the Container. Almost all the logic for events and states its nested on the App component, but this component don't handle the UI rendering. Also, we can see the Open Closed Principle in the composition of the components.
