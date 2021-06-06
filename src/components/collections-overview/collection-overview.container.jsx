import { connect } from "react-redux";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import CollectionsOverview from "./collections-overview.component";
import WithSpinner from "../with-spinner/with-spinner.component";

const mapStateToProps = (state) => ({
  isLoading: selectIsCollectionFetching(state),
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
