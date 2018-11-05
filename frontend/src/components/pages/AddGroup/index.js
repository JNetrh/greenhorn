import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import validate from './validate';
import { AddGroup } from '../../../services/Groups/api/add';
import Form from './view';

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: payload => dispatch(AddGroup(payload)),
  };
};

const redux = connect(
  null,
  mapDispatchToProps,
);

const form = reduxForm({
  form: 'addgroup',
  validate,
});

export default compose(
  redux,
  form,
)(Form);
