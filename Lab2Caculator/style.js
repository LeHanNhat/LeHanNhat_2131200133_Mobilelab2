import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    display: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 20,
    },
    displayText: {
        fontSize: 48,
        color: '#000',
    },
    buttonContainer: {
        paddingBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    button: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    zeroButton: {
        width: 70,
    },
    equalsButton: {
        backgroundColor: '#FF9500',
    },
    buttonText: {
        fontSize: 24,
        color: '#000',
    },
    equalsText: {
        color: '#fff',
    },
});