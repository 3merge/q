import React from 'react';
import { Builders } from 'q3-ui-forms';
import { useTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import TemplateFullWidth from '../TemplateFullWidth';
import useProfileForm from '../../hooks/useProfileForm';

// eslint-disable-next-line
const ProfileNotifications = ({ children }) => {
  const { t } = useTranslation('descriptions');
  const { initialValues, onSubmit } = useProfileForm();
  const listens = initialValues?.listens;

  return (
    <TemplateFullWidth
      title={t('titles:profileNotifications')}
      subtitle={t('descriptions:profileNotifications')}
    >
      <Builders.Form
        disabled={!children}
        initialValues={
          Array.isArray(listens)
            ? listens.reduce((acc, curr) => {
                acc[curr] = true;
                return acc;
              }, {})
            : {}
        }
        onSubmit={(values) =>
          onSubmit({
            listens: Object.entries(values).reduce(
              (acc, [key, value]) => {
                if (value) acc.push(key);
                return acc;
              },
              [],
            ),
          })
        }
      >
        {children || (
          <Typography>
            {t('noNotificationsToSubscribeTo')}
          </Typography>
        )}
      </Builders.Form>
    </TemplateFullWidth>
  );
};

export default ProfileNotifications;
