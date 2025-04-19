import React, { useState, useEffect } from 'react';
import Book from './components/Book';
import AddEntryForm from './components/AddEntryForm';
import './styles.css';

function App() {
  const [entries, setEntries] = useState([]);
  const [budget, setBudget] = useState(0);
  const [startingBalance, setStartingBalance] = useState(0);

  // GET: Load entries from backend on page load
  useEffect(() => {
    fetch('http://localhost:5000/api/entries')
      .then(res => res.json())
      .then(data => setEntries(data))
      .catch(err => console.error('Failed to fetch entries:', err));
  }, []);

  // POST: Add entry to backend + state
  const handleAddEntry = async (entry) => {
    try {
      const res = await fetch('http://localhost:5000/api/entries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(entry),
      });
      if (res.ok) {
        setEntries((prev) => [...prev, entry]);
      }
    } catch (err) {
      console.error('Failed to add entry:', err);
    }
  };

  // DELETE: Remove entry by index
  const handleDeleteEntry = async (indexToDelete) => {
    try {
      const res = await fetch(`http://localhost:5000/api/entries/${indexToDelete}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setEntries((prev) => prev.filter((_, i) => i !== indexToDelete));
      }
    } catch (err) {
      console.error('Failed to delete entry:', err);
    }
  };

  // Balance + Budget calculations
  const totalSpent = entries.reduce((sum, entry) => sum + entry.amount, 0);
  const remaining = startingBalance - totalSpent;

  return (
    <div className="App">
      <h1>Kitty Kakeibo 🐾</h1>

      <div className="starting-balance-box">
        <label>Set Starting Balance: $</label>
        <input
          type="number"
          value={startingBalance}
          onChange={(e) => setStartingBalance(parseFloat(e.target.value) || 0)}
          placeholder="e.g. 500"
        />
        <p><strong>Remaining:</strong> ${remaining.toFixed(2)}</p>
      </div>

      <div className="budget-box">
        <label>Set Monthly Budget: $</label>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(parseFloat(e.target.value) || 0)}
          placeholder="e.g. 1000"
        />
        <p><strong>Total Spent:</strong> ${totalSpent.toFixed(2)}</p>
        <p><strong>Budget Remaining:</strong> ${(budget - totalSpent).toFixed(2)}</p>
      </div>

      <AddEntryForm onAdd={handleAddEntry} />
      <Book entries={entries} onDelete={handleDeleteEntry} />
    </div>
  );
}

export default App;
