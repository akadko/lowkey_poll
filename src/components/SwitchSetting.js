import React from 'react'
import { View, Switch, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const SwitchSetting = ({ icon, label, isEnabled, onChange }) => {
    return (
        <View style={styles.container}>
            {Icon.hasIcon(icon) && <Icon name={icon} size={24} color="#fff" />}
            <Text style={styles.label}>{label}</Text>
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
        color: '#fff',
        fontSize: 14,
        paddingHorizontal: 15,
    },
})

export default SwitchSetting
