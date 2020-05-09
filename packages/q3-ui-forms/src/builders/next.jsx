import React from 'react';
import { connect } from 'formik';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import BuilderState from './builderState';

const Next = ({
  children,
  formik,
  submit,
  size,
  label,
  onClick,
  disabled,
  ...rest
}) => {
  const { t } = useTranslation();
  const { authorization } = React.useContext(BuilderState);
  const [disabledProp, setDisabledProp] = React.useState(
    true,
  );

  React.useEffect(() => {
    const isDisabled =
      formik.isSubmitting || authorization.disable;

    const d =
      disabled ||
      isDisabled ||
      (submit && Object.keys(formik.errors).length) ||
      formik.status === 'Initializing';

    setDisabledProp(d);
  }, [
    formik.isSubmitting,
    authorization.disable,
    formik.errors,
    formik.status,
    disabledProp,
  ]);

  const buttonProps = {
    color: 'primary',
    variant: 'contained',
    type: submit ? 'submit' : 'button',
    onClick: onClick || formik.submitForm,
    disabled: disabledProp,
    size,
    ...rest,
  };

  if (children) return children(buttonProps);

  return (
    <Box display="inline-block" mt={1}>
      <Button {...buttonProps}>
        {t(`labels:${label}`)}
      </Button>
    </Box>
  );
};

Next.propTypes = {
  /**
   * The "Formik bag"
   * See https://jaredpalmer.com/formik/docs/api/connect
   */
  formik: PropTypes.shape({
    isSubmitting: PropTypes.bool,
    submitForm: PropTypes.func,
    errors: PropTypes.object,
    status: PropTypes.string,
  }).isRequired,

  /**
   * Determines what kind of button this is
   */
  submit: PropTypes.bool,

  /**
   * Custom click handler that overrides formik's submitForm action
   */
  onClick: PropTypes.func,

  /**
   * Material UI size prop
   */
  size: PropTypes.string,

  /**
   * Text to display inside of this button
   */
  label: PropTypes.string.isRequired,

  /**
   * Disable click handler
   */
  disabled: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),

  /**
   * Acts as a custom renderer and recieves all the button's props.
   */
  children: PropTypes.func,
};

Next.defaultProps = {
  submit: false,
  onClick: null,
  size: 'normal',
  disabled: false,
  children: null,
};

export default connect(Next);
