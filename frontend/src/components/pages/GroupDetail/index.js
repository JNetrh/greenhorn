import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import { withRouter } from 'react-router';
import Form from './Form';
import DetailPage from '../../organisms/DetailPage';
import { startDeleteGroup } from '../../../services/Groups/api/delete';
import { startUpdateGroup } from '../../../services/Groups/api/update';
import { fetchGroupById } from '../../../services/Groups/api/fetchGroupById';

const GroupDetail = props => <Form {...props} />;

const GroupForm = reduxForm({
  form: 'groupDetail',
})(GroupDetail);

const EditGroup = props => (
  <DetailPage
    {...props}
    Form={GroupForm}
    fetchDetailById={fetchGroupById}
    type="edit"
  />
);

const mapDispatchToProps = dispatch => ({
  deleteItem: user => dispatch(startDeleteGroup(user)),
  onSubmit: user => dispatch(startUpdateGroup(user)),
});

const redux = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  redux,
  withRouter,
)(EditGroup);
