import PropTypes from 'prop-types';
import { FilterInput } from './FilterList';

const Filter = ({ FilterState, onFilter }) => {
  return (
    <>
      <h3>Find contcts by name</h3>
      <FilterInput
        type="text"
        name="filter"
        value={FilterState}
        onChange={onFilter}
      />
    </>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  FilterState: PropTypes.string,
};

export default Filter;
