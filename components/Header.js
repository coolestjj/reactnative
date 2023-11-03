import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Header</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height:60,
        backgroundColor: 'darkslateblue',
        padding: 15,
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 23,
    },
});

export default Header;