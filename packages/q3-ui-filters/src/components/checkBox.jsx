import React from 'react';
import PropTypes from 'prop-types';
import { useField, useFormikContext } from 'formik';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import {
  extractTextualValue,
  handleOnChangeBoolean,
} from './utils';

const FilterCheckBox = ({ label, name, op }) => {
  const { submitForm } = useFormikContext();
  const [{ value }, , { setValue }] = useField(name);
  const isChecked = extractTextualValue(value, false);

  const handleOnChangeEvent = handleOnChangeBoolean(
    setValue,
    op,
    submitForm,
  );

  return (
    <Box mb={1}>
      <FormControlLabel
        label={label}
        control={
          <Checkbox
            checked={isChecked}
            onChange={handleOnChangeEvent}
            name={name}
          />
        }
      />
    </Box>
  );
};

FilterCheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  op: PropTypes.oneOf(['*', '!*']).isRequired,
};

export default FilterCheckBox;
