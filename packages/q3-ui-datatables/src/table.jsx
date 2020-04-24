import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import Exports, {
  Actionbar,
  SelectAll,
} from 'q3-ui-exports';
import useStyles from './utils/useStyles';
import { extractIds } from './utils/helpers';
import {
  ColumnConfigurator,
  ColumnHeader,
  FilterConfig,
  Empty,
  Wrapper,
  Pagination,
  StickyIconNavigator,
  Row,
} from './components';

const TableHeader = ({
  children,
  columns,
  aliasForName,
  setActiveColumns,
  ...rest
}) => {
  const { mobile, boxes, tableHead } = useStyles();
  const [dragOver, setDragOver] = React.useState('');

  return (
    <TableHead>
      <TableRow className={mobile}>
        <TableCell className={boxes}>{children}</TableCell>
        <ColumnHeader
          title={aliasForName}
          className={tableHead}
          {...rest}
        />
        {columns.map((header) => (
          <ColumnHeader
            key={header}
            title={header}
            className={tableHead}
            cols={columns}
            setCols={setActiveColumns}
            setDragOver={setDragOver}
            dragOver={dragOver}
            {...rest}
          />
        ))}
      </TableRow>
    </TableHead>
  );
};

TableHeader.propTypes = {
  id: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(PropTypes.string),
  aliasForName: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.node,
  ]).isRequired,
};

TableHeader.defaultProps = {
  columns: [],
  aliasForName: 'name',
};

export const TableView = ({
  id,
  allColumns,
  defaultColumns,
  aliasForName,
  total,
  actions,
  resolvers,
  data = [],
  renderFilter,
  onClick,
  ...rest
}) => {
  const { root } = useStyles();

  if (!data || !data.length) return <Empty />;

  return (
    <Exports>
      <Actionbar
        actions={actions}
        columns={allColumns}
        data={data}
      />
      <ColumnConfigurator
        id={id}
        allColumns={allColumns}
        activeColumns={defaultColumns}
      >
        {(
          ColumnConfiguratorIconButton,
          activeColumns = [],
          setActiveColumns,
        ) => (
          <Wrapper
            hasSidebar={
              Boolean(renderFilter) ||
              (Array.isArray(allColumns) &&
                allColumns.length)
            }
          >
            <StickyIconNavigator>
              <ColumnConfiguratorIconButton />
              <FilterConfig
                renderFilter={renderFilter}
                {...rest}
              />
            </StickyIconNavigator>
            <Paper
              elevation={0}
              style={{ minWidth: '100%' }}
            >
              <Table stickyHeader className={root}>
                <TableHeader
                  id={id}
                  aliasForName={aliasForName}
                  columns={activeColumns}
                  setActiveColumns={setActiveColumns}
                >
                  <SelectAll ids={extractIds(data)} />
                </TableHeader>
                <TableBody>
                  {data.map((c, i) =>
                    React.createElement(Row, {
                      id: c.id || i,
                      onClick,

                      activeColumns,
                      columns:
                        typeof resolvers === 'function'
                          ? resolvers(c)
                          : c,
                    }),
                  )}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <Pagination id={id} total={total} />
                  </TableRow>
                </TableFooter>
              </Table>
            </Paper>
          </Wrapper>
        )}
      </ColumnConfigurator>
    </Exports>
  );
};

TableView.propTypes = {
  /**
   * Unique identifier for list cache.
   */
  id: PropTypes.string.isRequired,

  /**
   * Total number of potential documents.
   * In many cases, this number is larger than the pagination size.
   */
  total: PropTypes.number,

  /**
   * Unlike other columns, the leader is titled "name" but could represent lots of different things.
   * For sorting purposes, we can expose the true data key with this prop.
   */
  aliasForName: PropTypes.string,

  /**
   * Typically, you'd nest an array of Row components within the Table.
   * This component reads the "id" prop of each to configure mobile headers.
   */
  data: PropTypes.arrayOf({
    id: PropTypes.string,
  }).isRequired,

  /**
   * On row selection, the user can click from a toolbar of pre-determined actions.
   * Use this array to populate said toolbar with icons and handlers.
   */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.object,
      label: PropTypes.string,
      onClick: PropTypes.func,
    }),
  ),

  /**
   * Func for resolving TableCells with custom components/text.
   */
  resolvers: PropTypes.func.isRequired,

  /**
   * If provided, the table will allow custom column making.
   */
  allColumns: PropTypes.arrayOf(PropTypes.string),

  /**
   * If provided, the table will pre-configure these columns.
   * Otherwise, it will just look for the name and description fields.
   */
  defaultColumns: PropTypes.arrayOf(PropTypes.string),

  /**
   * All function that gets passed down to the Row's link.
   * It fires before navigating.
   */
  onClick: PropTypes.func,

  /**
   * A renderer for inside the filter popover.
   */
  renderFilter: PropTypes.func,
};

TableView.defaultProps = {
  aliasForName: 'name',
  total: 0,
  actions: [],
  allColumns: [],
  defaultColumns: [],
  onClick: null,
  renderFilter: null,
};

export default TableView;
