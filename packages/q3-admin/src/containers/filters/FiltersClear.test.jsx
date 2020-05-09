import React from 'react';
import Badge from '@material-ui/core/Badge';
import FiltersAdd from './FiltersAdd';

describe('FiltersAdd', () => {
  it('should provide 0 value to badge content when active filter is in place', () => {
    const { badgeContent } = global
      .shallow(
        <FiltersAdd
          onClick={jest.fn()}
          hasActiveFilter
          numberOfFiltersApplied={10}
        />,
      )
      .find(Badge)
      .props();

    expect(badgeContent).toBe(0);
  });

  it('should render number of filters when no active filter is in place', () => {
    const { badgeContent } = global
      .shallow(
        <FiltersAdd
          onClick={jest.fn()}
          hasActiveFilter={false}
          numberOfFiltersApplied={3}
        />,
      )
      .find(Badge)
      .props();

    expect(badgeContent).toBe(3);
  });
});
