import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Publish from '@material-ui/icons/Publish';
import Lock from '@material-ui/icons/Lock';
import Avatar from '@material-ui/core/Avatar';
import Tile from '../tile';

const FormWrapper = ({
  children,
  title,
  readOnly,
  description,
  dividers,
  ...rest
}) => {
  const { t } = useTranslation();
  return (
    <Formik
      {...rest}
      enableReinitialize
      validateOnChange={false}
      render={(utils) => (
        <Form>
          <Tile
            disableSkeleton
            loading={utils.isSubmitting}
            dividers={dividers}
            title={t(`titles:${title}`)}
            subtitle={t(`descriptions:${title}`)}
            renderFooter={() =>
              readOnly ? (
                <Avatar color="secondary">
                  <Lock />
                </Avatar>
              ) : (
                <Button
                  disabled={utils.isSubmitting}
                  type="submit"
                  color="secondary"
                  variant="contained"
                  size="large"
                >
                  {t('labels:submit')}
                  <Avatar
                    color="primary"
                    style={{
                      backgroundColor:
                        'rgba(255,255,255,0.1)',
                      marginLeft: '.5rem',
                    }}
                  >
                    {utils.isSubmitting ? (
                      <CircularProgress
                        color="primary"
                        size={22}
                      />
                    ) : (
                      <Publish />
                    )}
                  </Avatar>
                </Button>
              )
            }
          >
            {children(utils)}
          </Tile>
        </Form>
      )}
    />
  );
};

FormWrapper.propTypes = {
  children: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dividers: PropTypes.bool,
};

FormWrapper.defaultProps = {
  dividers: true,
};

export default FormWrapper;
