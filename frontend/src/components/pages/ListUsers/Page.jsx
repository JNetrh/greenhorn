import React, { Component } from 'react';
import Table from '../../molecules/Table';
import { Input } from 'antd';
import { Button, Icon } from 'antd';

class Page extends Component {
  state = {
    searchText: '',
  };
  componentDidMount = () => {
    const { startFetchUsers } = this.props;
    startFetchUsers();
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div className="custom-filter-dropdown">
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
  });

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };
  render() {
    const columns = [
      {
        title: 'Name',
        width: 100,
        dataIndex: 'name',
        ...this.getColumnSearchProps('name'),
      },
      {
        title: 'Surname',
        dataIndex: 'surname',
        ...this.getColumnSearchProps('surname'),
      },
      {
        title: 'Role',
        dataIndex: 'role',
        ...this.getColumnSearchProps('role'),
      },
      {
        title: 'Email',
        dataIndex: 'email',
        ...this.getColumnSearchProps('email'),
      },
    ];
    const { users, isLoading } = this.props;
    return (
      <div style={{ paddingRight: '30px', paddingLeft: '30px' }}>
        <Table
          loading={isLoading}
          columns={columns}
          dataSource={users}
          rowLink={({ id }) => `/user/${id}`}
        />
      </div>
    );
    //return <Table columns={columns} dataSource={data} />
  }
}

export default Page;
