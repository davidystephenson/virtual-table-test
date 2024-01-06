import VirtualizedTable from './components/VirtualizedTable';

const tableData = [
  { column1: 'Data 1', column2: 'Info 1' },
  { column1: 'Data 2', column2: 'Info 2' },
  // Add more data objects for additional rows
];

const YourPage = () => {
  return (
    <div>
      <h1>Virtualized Table Example</h1>
      <VirtualizedTable data={tableData} />
    </div>
  );
};

export default YourPage;