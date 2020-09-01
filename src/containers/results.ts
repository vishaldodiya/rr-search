import Results from "../components/results";
import { StoreState } from "../store/types";
import { connect } from 'react-redux';

export function mapStateToProps({ data } : StoreState) {
  return {
    data
  };
}

export default connect(mapStateToProps)(Results);