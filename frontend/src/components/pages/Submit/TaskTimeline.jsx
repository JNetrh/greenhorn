import React from 'react';
import styled from 'styled-components';
import { Timeline } from 'antd';
import { getLongDateWithTime } from '../../../helpers/dateFormat';
import { getWorkflowColor } from '../../../helpers/workflow';
import { DocumentsList } from '../../organisms/DocumentsList';
import { transformDocuments } from '../../../helpers/transformDocuments';

const SmallLabel = styled.label`
  font-size: 12px;
  opacity: 0.7;
`;

export class TaskTimeline extends React.PureComponent {
  sortByCreatedAt = (a, b) => {
    if (a.createdAt > b.createdAt) return 1;
    if (a.createdAt < b.createdAt) return -1;
    return 0;
  };

  getWorkflowText = (status, submittedBy) => {
    const fullName =
      submittedBy && `${submittedBy.name} ${submittedBy.surname}`;
    switch (status) {
      case 'assigned': {
        return `Task assigned to you.`;
      }
      case 'submitted': {
        return `Submitted by you.`;
      }
      case 'returned': {
        return `Returned by ${fullName}.`;
      }
      case 'done': {
        return `Task done. Accepted by ${fullName}.`;
      }
      default: {
        return '';
      }
    }
  };

  render() {
    const { workflow } = this.props;
    const sortedWorkflowItems = workflow.sort(this.sortByCreatedAt);
    return (
      <Timeline style={{ marginTop: 25 }}>
        {sortedWorkflowItems.map(
          ({ TaskStatus, id, createdAt, submittedBy, note, Documents }) => (
            <Timeline.Item key={id} color={getWorkflowColor(TaskStatus.name)}>
              <span style={{ fontSize: 12, marginRight: 5, opacity: 0.7 }}>
                {getLongDateWithTime(createdAt)}
              </span>
              {this.getWorkflowText(TaskStatus.name, submittedBy)}
              {note &&
                !!note.length && (
                  <div style={{ margin: '5px 0' }}>
                    <SmallLabel>Comment:</SmallLabel>
                    <div>{note}</div>
                  </div>
                )}
              {!!Documents.length && (
                <div>
                  <SmallLabel>Attached files:</SmallLabel>
                  <DocumentsList items={transformDocuments(Documents)} small />
                </div>
              )}
            </Timeline.Item>
          ),
        )}
      </Timeline>
    );
  }
}
