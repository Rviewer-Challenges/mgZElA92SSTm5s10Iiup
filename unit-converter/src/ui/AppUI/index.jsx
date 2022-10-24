import React from 'react';
import PropTypes from 'prop-types';
import './AppUI.scss';
import Container from '../Container';
import Select from '../Select';
import Title from '../Title';
import Input from '../Input';
import Button from '../Button';
import tempOptions from '../../utils/selectOptionsHelper';

function AppUI({
  inputValue,
  inputUnit,
  setInputUnit,
  outputUnit,
  setOutputUnit,
  handleClickSwitch,
  outputValue,
  handleInputChange,
}) {
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
            <Select
              options={tempOptions}
              unit={inputUnit}
              onChangeFunc={setInputUnit}
            />
            <Input
              inputValue={inputValue}
              handlerOnChange={handleInputChange}
              type="number"
            />
          </Container>
          <Container customClasses="container--switch-btn">
            <Button
              onClickFunc={handleClickSwitch}
              customClasses="button--switch nes-btn"
            />
          </Container>
          <Container customClasses="container--select-input">
            <Select
              options={tempOptions}
              unit={outputUnit}
              onChangeFunc={setOutputUnit}
            />
            <Input type="number" disabled inputValue={outputValue} />
          </Container>
        </Container>
      </Container>
    </div>
  );
}

AppUI.propTypes = {
  inputValue: PropTypes.string.isRequired,
  // setInputValue: PropTypes.func.isRequired,
  inputUnit: PropTypes.string.isRequired,
  setInputUnit: PropTypes.func.isRequired,
  outputUnit: PropTypes.string.isRequired,
  setOutputUnit: PropTypes.func.isRequired,
  handleClickSwitch: PropTypes.func.isRequired,
  outputValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
export default AppUI;
