// Bookmark Component Implementation 


// Dependencies 
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

// Components & Necessary Files 


// Bookmark Component 
function Bookmark() {

    const [bookmarks, setBookmarks] = useState([]);

    // Function to add a bookmark
    const addBookmark = (item) => {
        // Check if the item is already bookmarked
        const isBookmarked = bookmarks.some((bookmark) => bookmark.airline_id === item.airline_id);
        
        if (!isBookmarked) {
            // Add the item to bookmarks
            setBookmarks([...bookmarks, item]);
        }
    };

    return (
        <div className="bookmark-container">
            <h1>Bookmarks</h1>
            <ul>
                {bookmarks.map((bookmark, index) => (
                    <li key={index}>
                        {bookmark.airline_name} - {bookmark.airline_id}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Bookmark;