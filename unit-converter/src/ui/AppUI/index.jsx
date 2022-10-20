import React from 'react';
import './AppUI.scss';
import Container from '../Container';
import Title from '../Title';

function AppUI() {
  return (
    <div className="app-ui">
      <Container customClasses="is-dark with-title container--unit-converter">
        <Title text="Unit Converter" customClasses="title--unit-converter" />
      </Container>
    </div>
  );
}
export default AppUI;
