import React, { useState } from 'react';

const AddEntryForm = ({ onAdd }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('need');
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      date: new Date().toISOString().slice(0, 10),
      amount: parseFloat(amount),
      category,
      note,
    };
    onAdd(newEntry);
    setAmount('');
    setNote('');
  };

  return (
    <form onSubmit={handleSubmit} className="entry-form">
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="need">Need</option>
        <option value="want">Want</option>
        <option value="culture">Culture</option>
        <option value="unexpected">Unexpected</option>
      </select>
      <input type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Note (optional)" />
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default AddEntryForm;
