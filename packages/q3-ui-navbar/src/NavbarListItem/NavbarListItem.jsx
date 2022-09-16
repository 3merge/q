import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import {
  Collapse,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import { isFunction, lowerCase, size } from 'lodash';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import NavbarListItemMenu from '../NavbarListItemMenu';
import useToggleWithLocationDefaults from '../useToggleWithLocationDefaults';
import useStyle from './styles';

const NavbarListItem = ({
  children,
  label,
  segments,
  to,
  icon: Icon,
}) => {
  const { open, state, toggle } =
    useToggleWithLocationDefaults(to);

  const cls = useStyle({
    state,
  });

  const makeId = (suffix) =>
    [label, suffix].map(lowerCase).join('-');

  const menuId = makeId('menu');
  const segmentId = makeId('segments');

  const enableChildControls = size(segments) > 0;

  const getLinkProps = React.useCallback(
    () => ({
      component: Link,
      disabled: !to,
      to: to || '/',
    }),
    [to],
  );

  const getButtonProps = React.useCallback(
    (fn) => {
      const onContextMenu = (e) => {
        e.preventDefault();
        open(e);

        if (isFunction(fn)) {
          fn(e);
        }
      };

      return enableChildControls
        ? {
            'aria-haspopup': 'true',
            'aria-expanded': state,
            'aria-controls': [menuId, segmentId].join(','),
            onClick: toggle,
            onContextMenu,
          }
        : getLinkProps();
    },
    [enableChildControls, state],
  );

  return (
    <NavbarListItemMenu id={menuId}>
      {({ open: openContextMenu, useEditor }) => (
        <li>
          <ListItem
            button
            className={cls.button}
            selected={state}
            {...getButtonProps(openContextMenu)}
          >
            {Icon && (
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
            )}
            <ListItemText primary={label} />
            {enableChildControls && (
              <ListItemSecondaryAction
                className={cls.secondaryAction}
              >
                <ArrowForwardIosIcon className={cls.icon} />
              </ListItemSecondaryAction>
            )}
          </ListItem>
          {enableChildControls && (
            <Collapse
              component="li"
              id={segmentId}
              in={state}
            >
              <div>
                {children}
                {useEditor && (
                  <>
                    <button>Save</button>
                    <button>Cancel</button>
                  </>
                )}
              </div>
            </Collapse>
          )}
        </li>
      )}
    </NavbarListItemMenu>
  );
};

NavbarListItem.defaultProps = {
  children: null,
  icon: null,
  segments: [],
};

NavbarListItem.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.elementType,
  label: PropTypes.string.isRequired,
  segments: PropTypes.arrayOf([PropTypes.shape({})]),
  to: PropTypes.string.isRequired,
};

export default NavbarListItem;
