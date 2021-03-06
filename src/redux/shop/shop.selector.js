import {createSelector} from 'reselect';




const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
     [selectCollections],
     collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam =>
  createSelector(
      [selectCollections],
      //find collection.id matching the url parameter of our colletion id map. 
      collections =>
        collections[collectionUrlParam]
  );