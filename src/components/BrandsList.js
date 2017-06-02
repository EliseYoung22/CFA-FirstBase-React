import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    ListView,
    TouchableHighlight,
    NavigatorIOS
} from 'react-native';
import {bind} from '../utils/utils';
import Brand from '../components/Brand';
import BrandDetails from '../components/BrandDetails';

class BrandsList extends Component {

    constructor(props, context) {
        super(props, context);
        bind(this)('_renderRow', '_rowOnPress')
    }

    static propTypes = {
        dataSource: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired
    };

    _renderRow(rowData, sectionId, rowId, highlightRow) {
        const _rowHighlightOnPress = () => {
            this._rowOnPress(rowData);
            highlightRow(sectionId, rowId)
        };

        return (
            <TouchableHighlight onPress={_rowHighlightOnPress}>
                <View style={styles.flex1}>
                    <Brand brand={rowData}/>
                </View>
            </TouchableHighlight>
        )
    }

    _rowOnPress(brand) {
        this.props.navigator.push({
            title: `${brand.name}`,
            component: BrandDetails,
            passProps: {brand}
        })
    }

    render() {
        return (
            <ListView
                dataSource={this.props.dataSource}
                renderRow={this._renderRow}/>
        )
    }
}

const styles = StyleSheet.create({
    flex1: {
        flex: 1
    }
});

export default BrandsList;
