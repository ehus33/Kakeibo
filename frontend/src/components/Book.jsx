import React from 'react';
import Page from './Page';

const Book = ({ entries, onDelete }) => (
  <div className="book-grid">
    {entries.map((entry, index) => (
      <Page key={index} entry={entry} index={index} onDelete={onDelete} />
    ))}
  </div>
);

export default Book;