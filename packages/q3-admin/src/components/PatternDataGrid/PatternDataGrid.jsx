import React from 'react';
import PropTypes from 'prop-types';
import { isObject, map } from 'lodash';
import { DataGrid } from '@mui/x-data-grid';
import { useHelperFormats } from 'q3-ui-helpers/lib/hooks';
import { useTranslation } from 'q3-ui-locale';
import Pattern from '../Pattern';
import { useReportById } from '../../hooks';
import useStyle from './styles';

const PatternDataGrid = ({
  formatters,
  report,
  title,
  size,
  width,
}) => {
  const { t } = useTranslation('labels');
  const { data, error, loading } = useReportById(report);
  const cls = useStyle();

  const generateColumns = () => {
    if (!Array.isArray(data)) return [];
    const obj = data[0];
    const format = useHelperFormats();

    if (!isObject(obj)) return [];

    return Object.entries(obj).map(([key]) => ({
      field: key,
      headerName: t(key),
      flex: 1,
      minWidth:
        isObject(width) && key in width
          ? width[key]
          : undefined,
      renderCell: ({ value }) =>
        isObject(formatters) && key in formatters
          ? format(value, formatters[key])
          : value,
    }));
  };

  return (
    <Pattern
      height="auto"
      error={error}
      loading={loading}
      size={size}
      title={title || report}
    >
      <DataGrid
        autoHeight
        className={cls.table}
        columns={generateColumns()}
        disableSelectionOnClick
        disableColumnMenu
        rows={map(data, (item, idx) => ({
          id: idx,
          ...item,
        }))}
      />
    </Pattern>
  );
};

PatternDataGrid.defaultProps = {
  formatters: {},
  title: undefined,
  size: 'xl',
  width: {},
};

PatternDataGrid.propTypes = {
  formatters: PropTypes.shape({}),
  report: PropTypes.string.isRequired,
  title: PropTypes.string,
  size: PropTypes.string,
  width: PropTypes.shape({}),
};

export default PatternDataGrid;
