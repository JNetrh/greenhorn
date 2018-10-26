import { connect } from 'react-redux';
import Form from './Form';
import { getHelloUser } from '../../../services/Users/api/getHelloUser';

const mapDispatchToProps = dispatch => {
  return {
    getHelloUser: token => dispatch(getHelloUser(token)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Form);
