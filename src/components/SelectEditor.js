import React, { useState, useCallback } from 'react'
import { View, StyleSheet } from 'react-native'
import { BodyText, Label } from './text'
import OptionView from './OptionView'

const SelectEditor = ({ label, maxOptionCount, onChange }) => {
    const [options, setOptions] = useState([])
    const [lastKey, setLastKey] = useState(0)
    const updateOptions = useCallback(
        (newOptions) => {
            setOptions(newOptions)
            onChange && onChange(newOptions.filter((o) => !!o.text))
        },
        [onChange]
    )

    const onAddOptionPress = useCallback(() => {
        updateOptions([...options, { key: lastKey + 1, text: '' }])
        setLastKey(lastKey + 1)
    }, [updateOptions, options, lastKey])

    const onChangeOptionText = useCallback(
        (key, text) => {
            const option = options.find((o) => o.key === key)
            if (option) {
                option.text = text
                updateOptions(options)
            }
        },
        [options, updateOptions]
    )
    const onDeleteOption = useCallback(
        (key) => {
            updateOptions([...options.filter((o) => o.key !== key)])
        },
        [options, updateOptions]
    )
    return (
        <View style={styles.container}>
            <View style={styles.labelWrapper}>
                <Label>{label}</Label>
                <Label>
                    {options.length}/{maxOptionCount}
                </Label>
            </View>
            <View>
                {options.map((option) => (
                    <OptionView
                        text={option.text}
                        key={option.key}
                        index={option.key}
                        onChange={onChangeOptionText}
                        onDelete={onDeleteOption}
                    />
                ))}
                {options.length < maxOptionCount && (
                    <View style={styles.addButton}>
                        <BodyText
                            style={styles.addButtonText}
                            onPress={onAddOptionPress}
                        >
                            Add an option
                        </BodyText>
                    </View>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingBottom: 24,
    },
    labelWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 8,
    },
    addButton: {
        width: '100%',
        backgroundColor: '#1c1b2a',
        borderRadius: 12,
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: 4,
    },
    addButtonText: {
        color: '#1e6ef2',
    },
})

export default SelectEditor
