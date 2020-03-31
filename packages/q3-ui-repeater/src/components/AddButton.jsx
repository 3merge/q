import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Dialog from 'q3-ui-dialog';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TableFooter from '@material-ui/core/TableFooter';
import Add from '@material-ui/icons/Add';
import { FullSpanTableRow } from './NestedItem';
import useStyle from './useStyle';

const ForwardProps = ({ children, ...rest }) =>
  React.cloneElement(children, rest);

const AddButtonTableRow = (props) => (
  <TableFooter>
    <FullSpanTableRow>
      <Dialog {...props} />
    </FullSpanTableRow>
  </TableFooter>
);

const AddButtonTrigger = ({ onClick }) => {
  const { addBtn, titleCls } = useStyle();
  const { t } = useTranslation();

  return (
    <Box p={1}>
      <Grid
        container
        role="button"
        tabIndex={-1}
        spacing={1}
        onClick={onClick}
        className={addBtn}
      >
        <Grid item>
          <Add />
        </Grid>
        <Grid item xs zeroMinWidth>
          <Typography className={titleCls}>
            {t('titles:addToList')}
          </Typography>
          <Typography>
            {t('descriptions:addToList')}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

AddButtonTrigger.propTypes = {
  /**
   * Click handler for custom button.
   */
  onClick: PropTypes.func.isRequired,
};

const AddButton = ({
  name,
  collectionName,
  initialValues,
  create,
  children,
}) => (
  <AddButtonTableRow
    variant="drawer"
    title={`${name}Create`}
    renderTrigger={(open) => (
      <AddButtonTrigger onClick={open} />
    )}
    renderContent={(close) => (
      <ForwardProps
        onSubmit={(...args) =>
          create(...args).then(() => {
            close();
          })
        }
        collectionName={collectionName}
        initialValues={initialValues}
        isNew
      >
        {children}
      </ForwardProps>
    )}
  />
);

AddButton.propTypes = {
  /**
   * Used to create a unique Dialog title.
   */
  name: PropTypes.string.isRequired,

  /**
   * Used to determine permission level
   */
  collectionName: PropTypes.string.isRequired,

  /**
   * Empty state for new resource
   */
  initialValues: PropTypes.shape({}).isRequired,

  /**
   * On submit handler
   */
  create: PropTypes.func.isRequired,

  /**
   * Used to clone editor into an "Add" form.
   */
  children: PropTypes.node.isRequired,
};

export default AddButton;
