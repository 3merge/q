import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ListItemMui from '@material-ui/core/ListItem';
import ListItemTextMui from '@material-ui/core/ListItemText';
import ListItemAvatarMui from '@material-ui/core/ListItemAvatar';
import { formatArrayAsCommaDelineatedString } from '../../utils';
import Avatar from '../../../avatar';

export const ListItem = ({
  id,
  children,
  title,
  description,
  icon,
}) => {
  const { t } = useTranslation();
  const primary = t(
    `labels:${formatArrayAsCommaDelineatedString(title)}`,
  );

  const secondary = t(
    `descriptions:${formatArrayAsCommaDelineatedString(
      description,
    )}`,
  );

  return (
    <ListItemMui
      id={id}
      disableGutters
      component="li"
      dense
    >
      {icon && (
        <ListItemAvatarMui>
          <Avatar word={primary} icon={icon} />
        </ListItemAvatarMui>
      )}
      <ListItemTextMui
        primary={primary}
        secondary={secondary}
      />
      {children
        ? React.cloneElement(children, {
            id,
          })
        : null}
    </ListItemMui>
  );
};

ListItem.propTypes = {
  /**
   * Used to reference the list item during interactivity.
   */
  id: PropTypes.string.isRequired,

  /**
   * If included, it should be the <ActionBar /> component.
   */
  children: PropTypes.node,

  /**
   * Configures the item's.
   */
  title: PropTypes.string.isRequired,

  /**
   * Configures the item's subtitle.
   */
  description: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]).isRequired,

  /**
   * MUI Icon to populate inner avatar Comp.
   */
  icon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
};

ListItem.defaultProps = {
  children: null,
  icon: null,
};

export default ListItem;
