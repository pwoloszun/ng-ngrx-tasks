import { merge } from 'lodash';
import { render } from '@testing-library/angular';

import { DataTableComponent } from './data-table.component';

function generateDataTableInputs(inputs = {}) {
  const items = [
    { id: 100, name: 'bob', age: 12 },
    { id: 200, name: 'ed', age: 34 },
    { id: 300, name: 'kate', age: 97 },
  ];
  const metaData = [
    { value: 'age', text: 'User Age' },
    { value: 'name', text: 'Full Name' },
  ];
  const selectedItem = null;
  const defaultInputs = { items, metaData, selectedItem };
  return merge({}, defaultInputs, inputs);
}

describe('DataTableComponent', () => {
  describe('@Inputs', () => {
    xit('should render row for each item', async () => {
      const { metaData, items, selectedItem } = generateDataTableInputs();

      const component = await render(DataTableComponent, {
        componentProperties: {
          metaData,
          selectedItem,
          items,
        },
      });
      const itemRows = component.getAllByTestId('item-row');
      expect(itemRows.length).toEqual(items.length);
    });

    xit('should sort cells in metaData order', async () => {
    });

    xit('should highlight selected item', async () => {
    });

    xit('should highlight nothing if selectedItem undefined', async () => {
    });
  });

  describe('@Outputs()', () => {
    xit('should emit item linked with clicked row', async () => {
    });
  });
});

