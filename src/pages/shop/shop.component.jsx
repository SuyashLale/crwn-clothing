import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverviewContainer from "../../components/collections-overview/collection-overview.container";
import CollectionPageContainer from "../../pages/collection/collection.container";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

// Since the ShopPage component is a routed component through our app.js,
// it will get passed 3 props -> match, location and history
class ShopPage extends React.Component {
  // Leverage the lifecycle method to get the collections data from the DB when the component mounts.
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;

    //Call this as soon as the component mounts
    fetchCollectionsStart();

    //#region Methods to call Firestore
    // Promise pattern to get data from Firestore.
    /*
     ** The get() method in firestore returns a promise,
     ** which we then use to transform the snapshot in to the collectionsMap,
     ** and then fire off the updateCollections action in our shop reducer.
     */
    /* collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({
        isLoading: false,
      });
    }); */
    // USE THE COLLECTION REFERENCE TO SUBSCRIBE TO THE SNAPSHOT
    /* this.unSubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
        this.setState({
          isLoading: false,
        });
      }
    ); */
    //#endregion
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
