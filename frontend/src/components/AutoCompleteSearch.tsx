import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

interface ItemOption {
  label: string;
  value: string;
}

const AutoCompleteSearch: React.FC = () => {
  const [options, setOptions] = useState<ItemOption[]>([]);
  const [selectedItem, setSelectedItem] = useState<ItemOption | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the list from the API
    axios.get('http://localhost:3001/api/kits')
      .then(response => {
        const options = response.data.map((item: { name: string; id: string; }) => ({
          label: item.name,
          value: item.id,
        }));
        setOptions(options);
      })
      .catch(error => {
        console.error('An error occurred while fetching items:', error);
      });
  }, []);

  const handleSelectionChange = (selectedOption: ItemOption | null) => {
    setSelectedItem(selectedOption);
    
    // Fetch the status from the API using the selected item
    if (selectedOption && 'value' in selectedOption) {
      axios.get(`http://localhost:3001/api/kit/${selectedOption.value}/status`)
        .then(response => {
          setStatus(response.data.status);
        })
        .catch(error => {
          console.error('An error occurred while fetching status:', error);
        });
    }
  };

  return (
    <div>
      <h1>Search for Items</h1>
      <Select
        options={options}
        onChange={handleSelectionChange}
      />
      {status && (
        <div>
          <h2>Status: {status}</h2>
        </div>
      )}
    </div>
  );
};

export default AutoCompleteSearch;
