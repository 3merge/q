import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const AddButton = ({ onClick }) => {
  const { t } = useTranslation('labels');
  const isFunction = typeof onClick === 'function';

  return isFunction ? (
    <Box mt={1} textAlign="center">
      <Button
        variant="contained"
        color="primary"
        onClick={onClick}
        size="large"
        fullWidth
      >
        {t('addToList')}
      </Button>
    </Box>
  ) : null;
};

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddButton;
