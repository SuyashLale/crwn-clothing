// Import Libraries
import { connect } from "react-redux";
import { compose } from "redux";

// Import Components
import CollectionPage from "./collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

// Import Selectors
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";

const mapStateToProps = (state) => ({
  isLoading: !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
