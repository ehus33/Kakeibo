import React, { useState } from 'react';
import Book from './components/Book';
import AddEntryForm from './components/AddEntryForm';
import './styles.css';

function App() {
  const [entries, setEntries] = useState([]);
  const [budget, setBudget] = useState(0);

  const handleAddEntry = (entry) => {
    setEntries((prev) => [...prev, entry]);
  };

  const handleSetBudget = (e) => {
    setBudget(parseFloat(e.target.value) || 0);
  };

  const totalSpent = entries.reduce((sum, entry) => sum + entry.amount, 0);
  const remaining = budget - totalSpent;

  return (
    <div className="App">
      <h1>Kitty Kakeibo 🐾</h1>

      <div className="budget-box">
        <label>Set Monthly Budget: $</label>
        <input type="number" value={budget} onChange={handleSetBudget} placeholder="e.g. 1000" />
        <p><strong>Total Spent:</strong> ${totalSpent.toFixed(2)}</p>
        <p><strong>Remaining:</strong> ${remaining.toFixed(2)}</p>
      </div>

      <AddEntryForm onAdd={handleAddEntry} />
      <div className="entries-wrapper">
        <Book entries={entries} />
      </div>

    </div>
  );
}

export default App;
