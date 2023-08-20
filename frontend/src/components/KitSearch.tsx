import React, { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import Autosuggest, { SuggestionsFetchRequestedParams, InputProps } from 'react-autosuggest';

interface KitStatusResponse {
  trackingNumber: string;
  statusDetails: {
    status: string;
    description: string;
  };
}


const KitSearch: React.FC = () => {
  const [kits, setKits] = useState<number[]>([]);
  const [suggestions, setSuggestions] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [kitStatus, setKitStatus] = useState<KitStatusResponse | null>(null);
  const [selectedKitId, setSelectedKitId] = useState<number | null>(null);


  // Fetch all kit ids when the component mounts
  useEffect(() => {
    axios.get<number[]>('http://localhost:3001/kits')
      .then(response => {
        setKits(response.data);
      })
      .catch(error => {
        console.error('An error occurred while fetching kits:', error);
      });
  }, []);

  // Fetching kit status based on id
  const getKitStatus = (kitId: number) => {
    axios.get<KitStatusResponse>(`http://localhost:3001/kits/${kitId}/status`)
      .then(response => {
        console.log(`Kit status: ${JSON.stringify(response.data)}`); // Debugging
        setKitStatus(response.data);
      })
      .catch(error => {
        console.error('An error occurred while fetching kit status:', error);
      });
  };

  // Autosuggest methods
  const getSuggestions = (value: string) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : kits.filter(kit =>
      kit.toString().toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  const onSuggestionsFetchRequested = ({ value }: SuggestionsFetchRequestedParams) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (_event: any, { suggestion }: { suggestion: number }) => {
  console.log('Selected kit ID:', suggestion); // Debugging
  setSelectedKitId(suggestion);
  getKitStatus(suggestion);
};

  const onChange = (_event: ChangeEvent, { newValue }: { newValue: string }) => {
    setInputValue(newValue);
  };

// Input properties
const inputProps: InputProps<number> = {
  placeholder: 'Search for a kit...',
  value: inputValue,
  onChange: onChange as unknown as (event: React.FormEvent<any>, params: { newValue: string; method: string; }) => void,
};


  return (
    <div>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={suggestion => suggestion.toString()}
        renderSuggestion={suggestion => <div>{suggestion}</div>}
        onSuggestionSelected={onSuggestionSelected}
        inputProps={inputProps}
      />
      <div>
        <strong>Selected Kit ID:</strong> {selectedKitId && selectedKitId}
        <br />
        <strong>Tracking Number:</strong> {kitStatus && kitStatus.trackingNumber}
        <br />
        <strong>Status:</strong> {kitStatus && kitStatus.statusDetails.status}
        <br />
        <strong>Description:</strong> {kitStatus && kitStatus.statusDetails.description}
      </div>
    </div>
  );
};

export default KitSearch;
