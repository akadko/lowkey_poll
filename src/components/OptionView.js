import React, { useEffect, useRef, useState, useCallback } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { BaseTextInput } from './text'

const OptionView = ({ text, index: key, onChange, onDelete }) => {
    const [value, setValue] = useState(text)
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current && inputRef.current.focus()
    }, [])

    const onEndEditing = useCallback(() => {
        onChange && onChange(key, value)
    }, [onChange, value, key])
    const onDeletePress = useCallback(() => {
        onDelete && onDelete(key)
    }, [onDelete, key])

    return (
        <View style={styles.container}>
            <BaseTextInput
                ref={inputRef}
                value={value}
                onChangeText={setValue}
                onEndEditing={onEndEditing}
                placeholderTextColor="#7e7a9a"
                style={styles.textInput}
                multiline={false}
            />
            <TouchableOpacity
                style={styles.deleteButton}
                onPress={onDeletePress}
            >
                <Icon name="close" size={20} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
    },
    textInput: {
        padding: 16,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        marginVertical: 4,
        flex: 1,
    },
    deleteButton: {
        width: 50,
        backgroundColor: '#1c233f',
        marginVertical: 4,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default OptionView
