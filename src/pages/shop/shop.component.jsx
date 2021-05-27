import React from 'react';
import {Route} from 'react-router-dom';

import CollectiosOverview from '../../components/collections-overview/collection.overview';
import CollectionPage from '../collection/collection';

const ShopPage = ({  match }) => (
  
      <div className='shop-page'>
      <Route exact path={`${match.path}`} component={ CollectiosOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    );



export default ShopPage;