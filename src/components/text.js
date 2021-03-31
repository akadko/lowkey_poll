import React from 'react'
import { Text, TextInput, StyleSheet } from 'react-native'

export const BaseText = ({ children, defaultStyle, style, ...props }) => {
    return (
        <Text style={[styles.base, defaultStyle, style]} {...props}>
            {children}
        </Text>
    )
}

export const BaseTextInput = React.forwardRef(
    ({ style = {}, ...props }, ref) => (
        <TextInput ref={ref} style={[styles.textInput, style]} {...props} />
    )
)

export const Label = ({ children, bold = false, ...props }) => {
    return (
        <BaseText
            defaultStyle={[styles.label, bold && styles.semibold]}
            {...props}
        >
            {children}
        </BaseText>
    )
}

export const BodyText = ({ children, ...props }) => {
    return (
        <BaseText defaultStyle={styles.body} {...props}>
            {children}
        </BaseText>
    )
}

export const NavTitle = ({ children, ...props }) => {
    return (
        <BaseText defaultStyle={styles.navTitle} {...props}>
            {children}
        </BaseText>
    )
}

const styles = StyleSheet.create({
    base: {
        fontFamily: 'Poppins',
        color: 'white',
    },
    label: {
        fontSize: 12,
        color: '#7e7a9a',
    },
    semibold: {
        fontWeight: '600',
    },
    body: {
        fontSize: 15,
    },
    navTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    textInput: {
        backgroundColor: '#1c1b2a',
        fontSize: 15,
        color: 'white',
        fontFamily: 'Poppins',
    },
})
