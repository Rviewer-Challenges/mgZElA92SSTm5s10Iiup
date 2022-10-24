import React from 'react';
import './AppUI.scss';
import Container from '../Container';
import Select from '../Select';
import Title from '../Title';
import Input from '../Input';
import Button from '../Button';

const options = [
  {
    name: 'meter',
    value: 'm',
  },
];

function AppUI() {
  return (
    <div className="app-ui">
      <Container customClasses="is-dark with-title container--unit-converter nes-container">
        <Title text="Unit Converter" customClasses="title--unit-converter" />
        <Container customClasses="container--measure-type">
          <Button customClasses="nes-btn button--measure-type">
            <i className="nes-kirby" />
          </Button>

          <Button customClasses="nes-btn button--measure-type">
            <i className="nes-kirby" />
          </Button>
        </Container>
        <Container customClasses="container--operations">
          <Container customClasses="container--select-input">
            <Select options={options} />
            <Input type="number" />
          </Container>
          <Container customClasses="container--switch-btn">
            <Button customClasses="button--switch nes-btn" />
          </Container>
          <Container customClasses="container--select-input">
            <Select options={options} />
            <Input type="number" />
          </Container>
        </Container>
      </Container>
    </div>
  );
}
export default AppUI;
