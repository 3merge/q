import React from 'react';
import { Button } from '@material-ui/core';
import Files from 'react-butterfiles';
import PermMediaIcon from '@material-ui/icons/PermMedia';

const MediaUpload = React.forwardRef((props, ref) => {
  const { upload } = props;

  return (
    <Files
      maxSize="10mb"
      onSuccess={(data) =>
        upload(data).then((url) => {
          ref.current.insertEmbed(
            ref.current.getLength(),
            'image',
            url,
          );
        })
      }
      onError={() => {
        alert('uploadFailed.');
      }}
    >
      {({ browseFiles }) => (
        <Button onClick={browseFiles}>
          <PermMediaIcon />
        </Button>
      )}
    </Files>
  );
});

export default MediaUpload;
