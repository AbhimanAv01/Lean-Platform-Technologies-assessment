import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Define ListItem component outside of the Popular component
function ListItem({ value, onClick }) {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <li>
      <Link to={`/category/${encodeURIComponent(value)}`} className="link" onClick={handleClick}>
        {value}
      </Link>
    </li>
  );
}

export default function Popular({ onChildValue, categoryLengths, star }) {
  const [sortedCategories, setSortedCategories] = useState([]);
///<---------Proper sorted of popular topics---------------->
  useEffect(() => {
    if (categoryLengths) {
      // Sort categories based on the number of stories
      const sorted = Object.entries(categoryLengths)
        .sort((a, b) => b[1] - a[1]) // Sort in descending order of story count
        .slice(0, 10); // Get top 10 categories

      setSortedCategories(sorted);
    }
  }, [categoryLengths]);

  return (
    <div className="popular">
      {/* Change the name of the top row from popular topic to favourite topic */}

      <h1>{star ? "Favorite Topics" : "Popular Topics"}</h1>
      <div className="list">
      {/* Dynamic routing */}

        <ul className="list-items">
          {sortedCategories.map(([category, count]) => (
            <ListItem key={category} value={category} onClick={onChildValue} />
          ))}
        </ul>
      </div>
    </div>
  );
}
