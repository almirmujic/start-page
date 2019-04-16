import React from 'react';
import './Bookmark.css';

function Bookmark({ icon, title, href }) {
  return (
    <a href={href} className="bookmark">
      <div>{icon}</div>
      <p>{title}</p>
    </a>
  );
}

export default Bookmark;
