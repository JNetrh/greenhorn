import React, { Component } from 'react';
import { fetchTaskById } from '../../../services/Tasks/api/fetchTaskById.js';

class EditTaskPage extends Component {
  state = {
    isFetchLoading: true,
    fetchError: null,
    task: null,
    isSubmitLoading: false,
    submitError: null,
    submitSuccess: false,
  };

  componentDidMount = async () => {
    await this.fetchTask();
  };

  fetchTask() {
    const { id } = this.props.match.params;
    fetchTaskById(id)
      .then(task => {
        this.setState({
          isFetchLoading: false,
          fetchError: null,
          task,
        });
      })
      .catch(({ error }) => ({
        isFetchLoading: false,
        fetchError: error,
        task: null,
      }));
  }

  submitForm = (/* redux-form data */) => {
    const { id } = this.props.match.params;
    //submit...then.catch(() => setState)
  };

  render() {
    const {
      isFetchLoading,
      fetchError,
      task,
      isSubmitLoading,
      submitError,
      submitSuccess,
    } = this.state;
    const { TaskForm, startDeleteTask, ...rest } = this.props;

    if (isFetchLoading) {
      return <div>Loading...</div>;
    }

    if (fetchError) {
      return <div>Error: {fetchError}</div>;
    }

    return (
      <div>
        {submitError && <div>Error: {submitError}</div>}
        {submitSuccess && <div>Task saved</div>}
        <TaskForm
          initialValues={task}
          onSubmit={this.submitForm}
          isSubmitLoading={isSubmitLoading}
          task={task}
          startDeleteTask={startDeleteTask}
          {...rest}
        />
      </div>
    );
  }
}

export default EditTaskPage;
