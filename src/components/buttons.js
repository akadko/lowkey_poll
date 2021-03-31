import React from 'react'
import { Text, StyleSheet } from 'react-native'

export const NavButton = ({ onPress, text, enabled = true }) => (
    <Text onPress={onPress} style={[styles.button, enabled && styles.enabled]}>
        {text}
    </Text>
)

const styles = StyleSheet.create({
    button: {
        fontSize: 14,
        color: '#7e7a9a',
    },
    enabled: {
        color: '#1e6ef2',
    },
})
