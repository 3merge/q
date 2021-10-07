import React from 'react';
import { AuthContext } from 'q3-ui-permissions';
import { useTranslation } from 'react-i18next';

const useProfileForm = () => {
  const { t } = useTranslation('descriptions');
  const { state, update } = React.useContext(AuthContext);

  return {
    initialValues: state?.profile || {},

    onSubmit: (values) =>
      update(values).then(() => ({
        message: t('profileUpdated'),
      })),
  };
};

export default useProfileForm;
