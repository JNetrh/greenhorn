import React from 'react';

export const RenderForm = ({ props, onSubmit, workflow }) => {
  const Form = props.Form;
  console.log(workflow);
  const lastWorkflow = workflow[workflow.length - 1];
  const status = lastWorkflow.TaskStatus.name;
  if (status) {
    if (status === 'done') {
      return <p>Mission accomplished. The task has been completed </p>;
    } else if (status === 'submitted') {
      return <p>Approval pending </p>;
    }
  }
  return <Form {...props} onSubmit={onSubmit} />;
};
