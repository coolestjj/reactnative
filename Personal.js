import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input, CheckBox, Icon, Header} from '@rneui/themed'
import {Button} from "@rneui/base";


export default class Personal extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={<Icon name='menu' onPress={() => this.props.navigation.openDrawer()}/>}
                    centerComponent={{text: 'Personal', style: {color: '#fff'}}}
                    rightComponent={<Icon name='home' onPress={() => this.props.navigation.navigate('Home')}/>}
                />
                <View style={styles.content}>
                    <Text>Personal</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 100,
        paddingHorizontal: 10,
    }
})