import React, { PureComponent } from 'react';
import { Table as AntTable, Button } from 'antd';
import history from '../../history';
import { TableFilters } from './TableFilters';

const RowActions = () => <Button icon="edit">Edit</Button>;

class Table extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeFilters: props.defaultFilterValues || {},
    };
  }

  getRowKey = ({ id }) => id;

  onRow = record => ({
    onClick: () => history.push(this.props.rowLink(record)),
  });

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
          const { filter } = filters[filterKey].options[filterValue];
          return filter(item, this.props);
        },
      );
      return filtersPassed.every(item => item);
    });

  render() {
    const { columns, filters, dataSource, ...rest } = this.props;
    const filteredItems = this.filterItems(dataSource);
    return (
      <div>
        <TableFilters
          filters={filters}
          activeFilters={this.state.activeFilters}
          onFilterChange={this.onFilterChange}
        />
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
            columns={[
              ...columns,
              {
                title: '',
                render: RowActions,
                width: 100,
              },
            ]}
            onRow={this.onRow}
          />
        </div>
      </div>
    );
  }
}

export default Table;
