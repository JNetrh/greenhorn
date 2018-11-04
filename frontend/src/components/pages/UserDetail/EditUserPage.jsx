import React, { Component } from 'react';
import { fetchUserById } from '../../../services/Users/api/fetchUserById.js';
import { deleteUser, updateUser } from '../../../services/Users/actions.js';

class EditUserPage extends Component {
  state = {
    isFetchLoading: true,
    fetchError: null,
    user: null,
    isSubmitLoading: false,
    submitError: null,
    submitSuccess: false,
  };

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser() {
    const { id } = this.props.match.params;

    fetchUserById(id)
      .then(user =>
        this.setState({
          isFetchLoading: false,
          fetchError: null,
          user,
        }),
      )
      .catch(({ error }) => ({
        isFetchLoading: false,
        fetchError: error,
        user: null,
      }));
  }

  submitForm = formValues => {
    const { id } = this.props.match.params;
    this.props.updateUser({ ...formValues, id });
    //submit...then.catch(() => setState)
  };

  render() {
    const {
      isFetchLoading,
      fetchError,
      user,
      isSubmitLoading,
      submitError,
      submitSuccess,
    } = this.state;
    const { UserForm, deleteUser } = this.props;

    if (isFetchLoading) {
      return <div>Loading...</div>;
    }

    if (fetchError) {
      return <div>Error: {fetchError}</div>;
    }

    return (
      <div>
        {submitError && <div>Error: {submitError}</div>}
        {submitSuccess && <div>User saved</div>}
        <UserForm
          initialValues={user}
          onSubmit={this.submitForm}
          isSubmitLoading={isSubmitLoading}
          user={user}
          onDeleteClick={deleteUser}
        />
      </div>
    );
  }
}

export default EditUserPage;
