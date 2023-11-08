import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input, CheckBox, Header} from '@rneui/themed'
import {Button} from "@rneui/base";
import Icon from "react-native-vector-icons/dist/MaterialCommunityIcons";


export default class Personal extends Component {
    render() {
        return (
            <>
                <Header
                    leftComponent={<Icon name='menu' onPress={() => this.props.navigation.openDrawer()}/>}
                    centerComponent={{text: 'Personal', style: {color: '#fff'}}}
                    rightComponent={<Icon name='home' onPress={() => this.props.navigation.navigate('Home')}
                    />}
                />
            <View style={styles.container}>

                <View style={styles.content}>
                    <Text>Personal</Text>
                </View>

                <Button
                    buttonStyle={{ width: 150 }}
                    containerStyle={{ margin: 5 }}
                    disabledStyle={{
                        borderWidth: 2,
                        borderColor: "#00ff2a"
                    }}
                    disabledTitleStyle={{ color: "#006fff" }}
                    linearGradientProps={null}
                    icon={
                        <Icon name="arrow-right"
                              size={15}
                              color="#006FFFFF" />
                    }
                    iconContainerStyle={{ background: "#00ff2a" }}
                    iconRight
                    loadingProps={{ animating: true }}
                    loadingStyle={{}}
                    onPress={() => alert("click")}
                    title="Personal Profile"
                    titleProps={{}}
                    titleStyle={{ marginHorizontal: 5 }}
                    type="clear"
                />
            </View>
            </>
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