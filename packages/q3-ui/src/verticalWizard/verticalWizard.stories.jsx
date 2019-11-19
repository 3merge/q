import React from 'react';
import { storiesOf } from '@storybook/react';
import Add from '@material-ui/icons/Add';
import * as yup from 'yup';
import Wizard from '.';
import Input from '../inputs';
import Autocomplete from '../autocomplete';
import { countries } from '../_helpers/fakeData';

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  countries: yup.mixed().autocomplete(),
});

const schema2 = yup.object().shape({
  age: yup.number().required(),
  height: yup.number().required(),
  weight: yup.number().autocomplete(),
});

storiesOf('Components|Vertical Wizard', module).add(
  'Defaut',
  () => (
    <Wizard
      close={() => null}
      isOpen
      getContent={() => 'demo'}
      icon={Add}
      title="Wizardry"
      getValidation={(i) => (i === 0 ? schema : schema2)}
      initialValues={{
        firstName: '',
        lastName: '',
        countries: '',
      }}
      steps={[
        () => (
          <>
            <Input name="firstName" />
            <Input name="lastName" />
            <Autocomplete
              inputProps={{ name: 'countries' }}
              loadOptions={() => Promise.resolve(countries)}
            />
          </>
        ),
        () => (
          <>
            <Input name="age" type="number" />
            <Input name="height" type="number" />
            <Input name="weight" type="number" />
          </>
        ),
      ]}
    />
  ),
);
