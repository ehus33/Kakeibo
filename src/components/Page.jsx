import React from 'react';

const Page = ({ entry, onDelete, index }) => (
  <div className="page">
    <button className="delete-btn" onClick={() => onDelete(index)}>❌</button>
    <h3>{entry.date}</h3>
    <p><strong>Amount:</strong> ${entry.amount}</p>
    <p><strong>Category:</strong> {entry.category}</p>
    <p><strong>Note:</strong> {entry.note}</p>
  </div>
);

export default Page;
