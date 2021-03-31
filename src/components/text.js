import React from 'react'
import { Text, StyleSheet } from 'react-native'

export const Label = ({ children, style = {} }) => {
    return <Text style={[styles.label, style]}>{children}</Text>
}

export const BodyText = ({ children, style = {}, ...props }) => {
    return (
        <Text style={[styles.body, style]} {...props}>
            {children}
        </Text>
    )
}

export const NavTitle = ({ children, style = {} }) => {
    return <Text style={[styles.navTitle, style]}>{children}</Text>
}

const styles = StyleSheet.create({
    label: {
        fontSize: 12,
        color: '#7e7a9a',
    },
    body: {
        fontSize: 15,
        color: 'white',
    },
    navTitle: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
})
