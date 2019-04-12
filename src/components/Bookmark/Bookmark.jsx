import React from 'react';
import './Bookmark.css';

function Bookmark({ icon, title }) {
  return (
    <div className="bookmark">
      <div>{icon}</div>
      <p>{title}</p>
    </div>
  );
}

export default Bookmark;
