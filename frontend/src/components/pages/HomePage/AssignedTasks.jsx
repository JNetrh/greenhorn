import React, { Component } from 'react';
import { List, Icon, Row, Col } from 'antd';
import styled from 'styled-components';
import { TaskItem } from '../../organisms/TaskItem';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;
// const listData = [];
// for (let i = 0; i < 23; i++) {
//   listData.push({
//     href: 'http://ant.design',
//     title: `ant design part ${i}`,
//     avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//     description:
//       'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//     content:
//       'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//   });
// }

export class AssignedTasks extends Component {
  componentDidMount = () => {
    const { startListAssignedTasks, fetched } = this.props;
    !fetched && startListAssignedTasks();
  };

  render() {
    const { assignedTasks, isLoading, ...rest } = this.props;
    return (
      <Wrapper>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <List
              itemLayout="vertical"
              size="large"
              pagination={{
                onChange: page => {
                  console.log(page);
                },
                pageSize: 3,
              }}
              dataSource={assignedTasks}
              renderItem={item => <TaskItem item={item} {...rest} />}
            />
          </Col>
        </Row>
      </Wrapper>
    );
  }
}
