import React from 'react';
import { Link } from 'react-router-dom';
import { getLongDate } from '../../helpers/dateFormat';
import styled from 'styled-components';
import { Icon } from 'antd';
import { getWorkflowColor, getWorkflowText } from '../../helpers/workflow';

const TaskStyle = styled(Link)`
  display: block;
  position: relative;
  padding: 4px 10px 10px 15px;
  /* border-bottom: solid 1px rgba(0, 0, 0, 0.05); */
  border-left: solid 4px transparent;
  border-left-color: ${({ status }) => getWorkflowColor(status)};
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 10px;
  background: white;
  transition: all 0.2s;
  h2 {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
  }
  &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    transition: all 0.2s;
  }
`;

const UntilDate = styled.div`
  font-weight: bold;
  font-size: 12px;
  padding: 4px 0;
  color: rgba(0, 0, 0, 0.5);
  letter-spacing: -0.5px;
`;

const DetailArrow = styled.div`
  color: gray;
  position: absolute;
  right: 30px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  font-size: 18px;
  transition: all 0.2s;
  opacity: 0;
  ${TaskStyle}:hover & {
    right: 20px;
    opacity: 0.5;
  }
`;

const StatusStyle = styled.div`
  font-weight: bold;
  font-size: 12px;
  color: ${({ status }) => getWorkflowColor(status)};
  label {
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const TaskItem = ({ until, id, Task, currentWorkflow }) => (
  <TaskStyle status={currentWorkflow.TaskStatus.name} to={`/submit/${id}`}>
    <StatusStyle status={currentWorkflow.TaskStatus.name}>
      {getWorkflowText(
        currentWorkflow.TaskStatus.name,
        currentWorkflow.submittedBy,
      )}
    </StatusStyle>
    <UntilDate severity={Task.severity}>
      <Icon type="calendar-o" /> Until {getLongDate(until)}
    </UntilDate>
    <h2>{Task.title}</h2>
    <DetailArrow>
      <Icon type="arrow-right" />
    </DetailArrow>
  </TaskStyle>
);
