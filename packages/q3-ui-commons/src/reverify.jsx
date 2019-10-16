import React from 'react';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Input from 'q3-ui/inputs';
import Form from 'q3-ui/form';

const Reverify = ({ onSubmit }) => {
  const { t } = useTranslation();
  const revierfySchema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required(),
    recaptcha: yup.string().required(),
  });

  return (
    <Form
      title={t('titles:reverify')}
      description={t('descriptions:reverify')}
      onSubmit={onSubmit}
      validationSchema={revierfySchema}
      initialValues={{
        email: '',
      }}
    >
      {() => <Input name="email" type="email" />}
    </Form>
  );
};

Reverify.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Reverify;
