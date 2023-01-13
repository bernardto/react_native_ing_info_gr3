function add(section, item) {
  return {
    type: 'LIBRARY_ADD',
    section,
    item,
  };
}

function remove(section, item) {
  return {
    type: 'LIBRARY_REMOVE',
    section,
    item,
  };
}


export function favoritesAdd(item) {
  return add('favorites', item);
}

export function favoritesRemove(item) {
  return remove('favorites', item);
}
