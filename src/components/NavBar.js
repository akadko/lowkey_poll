import React from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavTitle } from './text'
import { NavButton } from './buttons'

export const NavBar = ({
    title,
    buttonText,
    buttonEnabled = false,
    onButtonPress,
}) => (
    <View style={styles.container}>
        <View style={styles.sideElement}>
            <Icon name="close" size={34} color="#fff" />
        </View>
        <View style={styles.titleWrapper}>
            <NavTitle>{title}</NavTitle>
        </View>
        {!!buttonText && (
            <View style={styles.sideElement}>
                <NavButton
                    text={buttonText}
                    enabled={buttonEnabled}
                    onPress={onButtonPress}
                />
            </View>
        )}
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 16,
    },
    sideElement: {
        width: 54,
    },
})
