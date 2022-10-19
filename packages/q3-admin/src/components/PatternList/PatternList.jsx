import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import { isFunction, map } from 'lodash';
import Pattern from '../Pattern';
import { usePatternData } from '../../hooks';

const PatternList = (props) => {
  const { data, ...patternProps } = usePatternData(props);
  const { renderListItem } = props;

  const getListItemProps = (str) =>
    str
      ? {
          button: true,
          component: Link,
          to: str,
        }
      : {};

  return (
    <Pattern {...patternProps} {...props} size="sm">
      <List style={{ margin: 0, padding: 0 }}>
        {map(data, (item, idx) => {
          const {
            title: primary,
            description: secondary,
            href,
          } = isFunction(renderListItem)
            ? renderListItem(item)
            : {
                title: idx,
              };

          return (
            <ListItem
              {...getListItemProps(href)}
              dense
              key={idx}
            >
              <ListItemText
                primary={primary}
                secondary={secondary}
              />
            </ListItem>
          );
        })}
      </List>
    </Pattern>
  );
};

PatternList.propTypes = {
  renderListItem: PropTypes.func.isRequired,
};

export default PatternList;
