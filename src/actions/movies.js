//Dans ce fichier  nous définissons des actions pour ajouter et retirer des films:

function add(section, item) {
  return {
    type: 'FILM_ADD',
    section,
    item,
  };
}

function remove(section, item) {
  return {
    type: 'FILM_REMOVE',
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
