import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";

// Generating new components using our HOC.
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// Since the ShopPage component is a routed component through our app.js,
// it will get passed 3 props -> match, location and history
class ShopPage extends React.Component {
  // Leverage the lifecycle method to get the collections data from the DB when the component mounts.
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;

    //Call this as soon as the component mounts
    fetchCollectionsStartAsync();

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
    const { match, isCollectionsLoaded, isCollectionFetching } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isCollectionsLoaded: selectIsCollectionsLoaded(state),
  isCollectionFetching: selectIsCollectionFetching(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
