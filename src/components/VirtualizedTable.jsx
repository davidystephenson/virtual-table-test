import { FixedSizeList as List } from 'react-window';
import { Table, TableCell, TableRow } from '@nextui-org/react';

const VirtualizedTable = ({ data }) => {
  const Row = ({ index, style }) => (
    <TableRow style={style}>
      <TableCell>{data[index].column1}</TableCell>
      <TableCell>{data[index].column2}</TableCell>
      {/* Add more TableCell components for other columns */}
    </TableRow>
  );

  return (
    <Table>
      <List
        height={400} // Set the height of the visible area
        itemCount={data.length} // Total number of rows
        itemSize={50} // Height of each row
        width={'100%'}
      >
        {Row}
      </List>
    </Table>
  );
};

export default VirtualizedTable;