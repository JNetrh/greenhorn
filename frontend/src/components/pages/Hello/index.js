import { connect } from 'react-redux';
import Form from './Form';
import { getHelloUser } from '../../../services/Users/api/getHelloUser';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form';
import { submitHello } from '../../../services/Auth/actions';

const mapDispatchToProps = dispatch => {
  return {
    getHelloUser: token => dispatch(getHelloUser(token)),
    onSubmit: payload => dispatch(submitHello(payload)),
  };
};

const form = reduxForm({
  form: 'hello',
});

const redux = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  redux,
  form,
)(Form);
