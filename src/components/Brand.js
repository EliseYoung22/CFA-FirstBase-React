import React, {PropTypes} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

const Brand = ({brand}) => {
    return (
      <View style={styles.brand}>
          <View style={styles.info}>
            <Text style={styles.name}>
                {`${brand.name}`}
            </Text>
          </View>
      </View>
    )
};

Brand.propTypes = {
    ...View.propTypes
};

const styles = StyleSheet.create({
    employee: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#DDDDDD',
        borderBottomWidth: 1
    },
    cover: {
        flex: 1,
        width: 150,
        height: 150,
        marginLeft: 10,
        resizeMode: 'contain'
    },
    info: {
        flex: 3,
        alignItems: 'flex-end',
        flexDirection: 'column',
        alignSelf: 'center',
        padding: 20
    },
    name: {
        marginBottom: 12,
        fontSize: 16,
        fontWeight: '700',
        color: '#222222'
    }
});

export default Brand;
