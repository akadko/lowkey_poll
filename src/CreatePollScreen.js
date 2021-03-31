import React, { useReducer, useCallback } from 'react'
import { View, Modal, StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LinearGradient from 'react-native-linear-gradient'
import TextField from './components/TextField';
import SelectEditor from './components/SelectEditor';
import { NavBar } from './components/NavBar'
import SwitchSetting from './components/SwitchSetting';

const gradientColors = [
    'rgba(36,103,244,0.13)',
    '#14131B00',
    'rgba(36,103,244,0.12)',
]

function reducer(state, action) {
    switch (action.type) {
        case 'update_question':
            return {
                ...state,
                question: action.question,
            }
        case 'update_options':
            return {
                ...state,
                options: action.options,
            }
        case 'toggle_is_anonymous':
            return {
                ...state,
                isAnonymous: !state.isAnonymous,
            }
        case 'toggle_is_extensible':
            return {
                ...state,
                isExtensible: !state.isExtensible,
            }
        default:
            return state
    }
}

const initialState = {
    question: null,
    options: [],
    isAnonymous: false,
    isExtensible: false,
}

function isPollValid(poll) {
    const isOptionsValid =
        poll.options.filter((option) => !!option.text).length > 0
    return !!poll.question && isOptionsValid
}

const CreatePollScreen = () => {
    const [poll, dispatch] = useReducer(reducer, initialState)
    const onCreatePress = useCallback(() => {
        alert(
            `New poll created!\nQuestion: ${
                poll.question
            }\nOptions:\n${poll.options.map((o) => '- ' + o.text).join('\n')}`
        )
    }, [poll])
    return (
        <Modal animationType="formSheet" visible transparent>
            <View style={styles.container}>
                <View style={styles.sheet}>
                    <LinearGradient
                        colors={gradientColors}
                        useAngle
                        angle={154}
                        style={StyleSheet.absoluteFillObject}
                    />
                    <NavBar
                        title="New Poll"
                        buttonText="Create"
                        buttonEnabled={isPollValid(poll)}
                        onButtonPress={onCreatePress}
                    />
                    <KeyboardAwareScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <TextField
                            label="Question"
                            maxCharCount={140}
                            placeholder="Ask a question"
                            onChange={(question) =>
                                dispatch({ type: 'update_question', question })
                            }
                        />
                        <SelectEditor
                            label="Options"
                            maxOptionCount={8}
                            onChange={(options) =>
                                dispatch({ type: 'update_options', options })
                            }
                        />
                        <SwitchSetting
                            icon="incognito"
                            label="Anonymous voting"
                            isEnabled={poll.isAnonymous}
                            onChange={() =>
                                dispatch({
                                    type: 'toggle_is_anonymous',
                                })
                            }
                        />
                        <SwitchSetting
                            icon="filter-variant-plus"
                            label="Ability to add more options"
                            isEnabled={poll.isExtensible}
                            onChange={() =>
                                dispatch({
                                    type: 'toggle_is_extensible',
                                })
                            }
                        />
                    </KeyboardAwareScrollView>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingTop: 44,
    },
    sheet: {
        height: '100%',
        width: '100%',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingTop: 18,
        paddingHorizontal: 20,
        paddingBottom: 32,
        overflow: 'hidden',
    },
})

export default CreatePollScreen
