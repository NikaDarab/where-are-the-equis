'use client';

import { useState, useEffect } from 'react';
import { addData, getData } from '../../../lib/firebase';

export default function Data() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');

  const handleAddData = async () => {
    try {
      await addData('myCollection', { text: input });
      setInput('');
      fetchData();
    } catch (error) {
      alert(error.message);
    }
  };

  const fetchData = async () => {
    try {
      const data = await getData('myCollection');
      setData(data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Firestore Data</h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter data" />
      <button onClick={handleAddData}>Add Data</button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}