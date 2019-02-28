import { bindActionCreators } from 'redux';
import * as carouselAction from '../actions/carousel';

const mapDispatchToProps = (dispatch) => bindActionCreators(carouselAction, dispatch);

export default mapDispatchToProps;