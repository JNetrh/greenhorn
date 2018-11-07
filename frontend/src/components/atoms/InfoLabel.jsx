import React from 'react';
import styled from 'styled-components';
import { Icon, Tooltip } from 'antd';
export const LabelStyle = styled.div`
  .value {
    font-size: 12px;
  }
`;

export const InfoLabel = ({ label, icon, children }) => (
  <LabelStyle>
    <Tooltip placement="top" title={label}>
      <div className="value">
        <Icon type={icon} /> {children}
      </div>
    </Tooltip>
  </LabelStyle>
);
