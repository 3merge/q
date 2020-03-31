import React from 'react';
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input';
import RepeaterSearch from './state';

export const SearchContext = React.createContext();

const SearchBar = () => {
  const {
    search: { onChange, value },
  } = React.useContext(RepeaterSearch);

  return (
    <Box px={1.5} py={1}>
      <Input
        fullWidth
        name="search"
        onChange={onChange}
        placeholder="Search the results ..."
        aria-label="Search results"
        type="search"
        value={value}
        disableUnderline
        autoComplete="off"
      />
    </Box>
  );
};

export default SearchBar;
