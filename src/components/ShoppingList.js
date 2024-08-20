import React, { useState } from 'react';
import ItemForm from './ItemForm';
import Filter from './Filter';
import Item from './Item';
import { v4 as uuid } from 'uuid';

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [newItemName, setNewItemName] = useState('');
  const [newItemCategory, setNewItemCategory] = useState('Produce');

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch; // Filter by both category and search term
  });

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function onItemFormSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: newItemName,
      category: newItemCategory,
    };
    setItems([...items, newItem]);
    setNewItemName('');
    setNewItemCategory('Produce');
  }

  return (
    <div className="ShoppingList">
      <ItemForm
        setItems={setItems}
        items={items}
        onItemFormSubmit={onItemFormSubmit}
        newItemName={newItemName}
        newItemCategory={newItemCategory}
        setNewItemName={setNewItemName}
        setNewItemCategory={setNewItemCategory}
      />
      <Filter
        search={search}
        onSearchChange={handleSearch}
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
