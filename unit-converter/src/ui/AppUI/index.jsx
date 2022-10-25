import React from 'react';
import PropTypes from 'prop-types';
import './AppUI.scss';
import Container from '../Container';
import Select from '../Select';
import Title from '../Title';
import Input from '../Input';
import Button from '../Button';

function AppUI({
  inputValue,
  inputUnit,
  setInputUnit,
  outputUnit,
  setOutputUnit,
  handleClickUnitSwitch,
  outputValue,
  handleInputChange,
  handleClickTempButton,
  handleClickLengthButton,
  selectOptions,
  measure,
}) {
  return (
    <div className="app-ui">
      <Container customClasses="is-dark with-title container--unit-converter nes-container">
        <Title text="Unit Converter" customClasses="title--unit-converter" />
        <Container customClasses="container--measure-type">
          <Button
            onClickFunc={handleClickTempButton}
            customClasses="nes-btn button--measure-type"
            measure={measure}
          >
            Temperature
          </Button>

          <Button
            onClickFunc={handleClickLengthButton}
            customClasses="nes-btn button--measure-type"
            measure={measure}
          >
            Length
          </Button>
        </Container>
        <Container customClasses="container--operations">
          <Container customClasses="container--select-input">
            <Select
              options={selectOptions}
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
              onClickFunc={handleClickUnitSwitch}
              customClasses="button--switch nes-btn"
            />
          </Container>
          <Container customClasses="container--select-input">
            <Select
              options={selectOptions}
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
  inputUnit: PropTypes.string.isRequired,
  setInputUnit: PropTypes.func.isRequired,
  outputUnit: PropTypes.string.isRequired,
  setOutputUnit: PropTypes.func.isRequired,
  handleClickUnitSwitch: PropTypes.func.isRequired,
  outputValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleClickTempButton: PropTypes.func.isRequired,
  handleClickLengthButton: PropTypes.func.isRequired,
  selectOptions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired,
  measure: PropTypes.string.isRequired,
};
export default AppUI;
