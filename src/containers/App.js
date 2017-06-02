import React, {Component} from 'react';
import {
    StyleSheet,
    TabBarIOS
} from 'react-native';
import {bind} from '../utils/utils';
import BrandsTab from './BrandsTab';
import SearchTab from './SearchTab';


class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedTab: 'brands'
        };
        bind(this)('_searchOnPress', '_brandsOnPress');
    }

    _brandsOnPress() {
        this.setState({
            selectedTab: 'brands'
        })
    }

    _searchOnPress() {
        this.setState({
            selectedTab: 'search'
        })
    }

    render() {
        return (
            <TabBarIOS
                selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    title="Brands"
                    selected={this.state.selectedTab === 'brands'}
                    onPress={this._brandsOnPress}>
                    <BrandsTab />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="Search"
                    selected={this.state.selectedTab === 'search'}
                    systemIcon="search"
                    onPress={this._searchOnPress}>
                    <SearchTab />
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


export default App;
