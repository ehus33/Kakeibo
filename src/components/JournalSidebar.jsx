import React from 'react';

const JournalSidebar = ({ onNewEntry }) => {
  return (
    <aside className="journals">
      <button className="create-button" onClick={onNewEntry}>
        New Journal
      </button>
    </aside>
  );
};

export default JournalSidebar;
