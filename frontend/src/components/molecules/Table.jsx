import React, { PureComponent } from 'react';
import { Table as AntTable, Button } from 'antd';
import history from '../../history';
import { TableFilters } from './TableFilters';
import styled from 'styled-components';

const RowActions = () => <Button icon="edit">Edit</Button>;

const IndentDiv = styled.div`
  min-height: 80px;
  padding: 20px 50px;
  display: flex;
`;

class Table extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeFilters: props.defaultFilterValues || {},
    };
  }

  getRowKey = ({ id }) => id;

  onRow = record => {
    const { rowLink, onRowClick } = this.props;
    if (rowLink) {
      return {
        onClick: () => history.push(this.props.rowLink(record)),
      };
    }
    if (onRowClick) {
      return {
        onClick: () => onRowClick(record),
      };
    }
  };

  onFilterChange = ({ filterKey, value }) => {
    this.setState({
      activeFilters: {
        ...this.state.activeFilters,
        [filterKey]: value,
      },
    });
  };

  filterItems = items =>
    items.filter(item => {
      const { activeFilters } = this.state;
      const { filters } = this.props;
      const filtersPassed = Object.entries(activeFilters).map(
        ([filterKey, filterValue]) => {
          const { filter } = filters[filterKey].options[filterValue] || {};
          if (!filter) {
            return true;
          }
          return filter(item, this.props);
        },
      );
      return filtersPassed.every(item => item);
    });

  render() {
    const {
      columns,
      filters,
      dataSource,
      showDefaultActions = true,
      ...rest
    } = this.props;
    const filteredItems = this.filterItems(dataSource);
    const columnsWithActions = showDefaultActions
      ? [
          ...columns,
          {
            title: '',
            render: RowActions,
            width: 100,
          },
        ]
      : columns;
    return (
      <div>
        {filters && (
          <TableFilters
            filters={filters}
            activeFilters={this.state.activeFilters}
            onFilterChange={this.onFilterChange}
          />
        )}

        {!filters && <IndentDiv />}
        <div style={{ background: 'white' }}>
          <AntTable
            {...rest}
            dataSource={filteredItems}
            rowKey={this.getRowKey}
            scroll={{ x: true }}
            size="middle"
            pagination={{
              hideOnSinglePage: true,
            }}
            columns={columnsWithActions}
            onRow={this.onRow}
          />
        </div>
      </div>
    );
  }
}

export default Table;
