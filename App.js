import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import CreatePollScreen from './src/CreatePollScreen'

const App = () => {
    return (
        <>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={styles.safeArea}>
                <CreatePollScreen />
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#14131B',
    },
})

export default App
