import React from 'react';
function ItemForm(props) {
  function handleNewItemNameChange(e) {
    props.setNewItemName(e.target.value);
  }
  function handleNewItemCategoryChange(e) {
    props.setNewItemCategory(e.target.value);
  }
  return (
    <form className="NewItem" onSubmit={props.onItemFormSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={props.newItemName}
          onChange={handleNewItemNameChange}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={props.newItemCategory}
          onChange={handleNewItemCategoryChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
