import React, { useState, useCallback } from 'react'
import { View, StyleSheet } from 'react-native'
import { BaseTextInput, Label } from './text'

const TextField = ({ label, maxCharCount, onChange, ...props }) => {
    const [value, setValue] = useState('')
    const onChangeText = useCallback(
        (newValue) => {
            setValue(newValue)
            onChange && onChange(newValue)
        },
        [onChange]
    )
    return (
        <View style={styles.container}>
            <View style={styles.labelWrapper}>
                <Label bold>{label}</Label>
                <Label
                    style={[value.length >= maxCharCount && styles.warningText]}
                >
                    {value.length}/{maxCharCount}
                </Label>
            </View>
            <BaseTextInput
                value={value}
                onChangeText={onChangeText}
                maxLength={maxCharCount}
                placeholderTextColor="#7e7a9a"
                style={styles.textInput}
                multiline={true}
                numberOfLines={2}
                {...props}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 16,
    },
    labelWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    textInput: {
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 14,
        borderRadius: 12,
        marginVertical: 8,
        maxHeight: 84,
    },
    warningText: {
        color: 'red',
    },
})

export default TextField
