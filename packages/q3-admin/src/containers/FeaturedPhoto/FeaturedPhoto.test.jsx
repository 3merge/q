import React from 'react';
import { Avatar } from 'q3-ui-filemanager';
import FeaturedPhoto, {
  FEATURED_UPLOAD_KEY,
} from './FeaturedPhoto';

describe('FeaturedPhoto', () => {
  it('should set FEATURED_UPLOAD_KEY to null', () => {
    const update = jest.fn();
    global
      .shallow(
        <FeaturedPhoto
          component={Avatar}
          update={update}
        />,
      )
      .find(Avatar)
      .props()
      .onDelete();

    expect(update).toHaveBeenCalledWith({
      [FEATURED_UPLOAD_KEY]: null,
    });
  });

  it('should modify form data', () => {
    const update = jest.fn();
    const f = new FormData();
    f.set('custom', new File([''], 'testing'));

    global
      .shallow(
        <FeaturedPhoto
          component={Avatar}
          update={update}
          field="custom"
        />,
      )
      .find(Avatar)
      .props()
      .onDrop(f);

    expect(update).toHaveBeenCalled();
    expect(f.get('custom')).toMatch('uploads/test');
    expect(f.get('uploads/testing').name).toMatch('custom');
  });
});
