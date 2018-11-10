import React, { Component} from 'react';
import NewsItemListing from '../presentation/NewsItemListing';
import { connect } from 'react-redux'
import { fetchNews } from '../../actions/actions'


class News extends Component {

    componentDidMount(){

        var fakeNews = [{
            id: '1',
            title: 'Mad owl chases car',
            teaser: 'Mad owl seen tormenting drivers in Morecambe'
        }, {
            id: '2',
            title: 'Owl stowaway',
            teaser: 'Despicable owl impersonates passenger to board flight to Luton'
        }];

        this.props.dispatch(fetchNews(fakeNews));
    }
    
export default connect(mapStateToProps)(News)
