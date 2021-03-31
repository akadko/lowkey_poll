import React from 'react'
import { View, Switch, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { BaseText } from './text'

const SwitchSetting = ({ icon, label, isEnabled, onChange }) => {
    return (
        <View style={styles.container}>
            {Icon.hasIcon(icon) && <Icon name={icon} size={24} color="#fff" />}
            <BaseText style={styles.label}>{label}</BaseText>
            <Switch
                trackColor={{ false: '#14141c', true: '#1C6EF2' }}
                thumbColor={isEnabled ? '#fff' : '#7E7A9A'}
                ios_backgroundColor="#14131B"
                onValueChange={onChange}
                value={isEnabled}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 8,
    },
    label: {
        flex: 1,
        fontSize: 14,
        paddingHorizontal: 15,
        fontWeight: '500',
    },
})

export default SwitchSetting
