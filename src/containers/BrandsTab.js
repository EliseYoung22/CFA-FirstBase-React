import React from 'react';
import {
    NavigatorIOS,
    StyleSheet
} from 'react-native';
import Brands from './Brands';


const BrandsTab = ({props}) => (
    <NavigatorIOS
        style={styles.container}
        initialRoute={{
            title: 'Brands list',
            component: Brands
        }}/>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default BrandsTab;
