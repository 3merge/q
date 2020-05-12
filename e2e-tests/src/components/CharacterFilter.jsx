import React from 'react';
import { Filters } from 'q3-admin/lib/containers';
import { Field } from 'q3-ui-forms/lib/builders';

export default () => (
  <Filters initialValues={{ role: [], gender: [] }}>
    {(fields, getOptions) => (
      <>
        <Field
          name="role"
          type="chips"
          options={getOptions('role')}
        />
        <Field
          name="gender"
          type="select"
          options={getOptions('gender')}
        />
      </>
    )}
  </Filters>
);
