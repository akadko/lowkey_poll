import React from 'react'
import { StyleSheet } from 'react-native'
import { BaseText } from './text'

export const NavButton = ({ onPress, text, enabled = true }) => (
    <BaseText
        onPress={onPress}
        style={[styles.button, enabled && styles.enabled]}
    >
        {text}
    </BaseText>
)

const styles = StyleSheet.create({
    button: {
        fontSize: 14,
        color: '#7e7a9a',
        fontWeight: '500',
    },
    enabled: {
        color: '#1e6ef2',
    },
})
