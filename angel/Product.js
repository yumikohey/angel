import React from 'react-native';

const {
    View,
    TouchableHighlight,
    Text,
} = React;

const styles = React.StyleSheet.create({
    container: {
        paddingTop: 20,
        backgroundColor: '#F7F7F7',
        flex: 1,
        justifyContent: 'flex-start',
    },
    header: {
        height: 45,
        alignSelf: 'stretch',
        margin: 0,
        backgroundColor: '#05A5D1',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    button: {
        height: 60,
        borderColor: '#05A5D1',
        borderWidth: 2,
        backgroundColor: '#333',
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FAFAFA',
        fontSize: 20,
        fontWeight: '600',
    },
});

class Product extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    style={styles.header}
                >
                    <Text
                        style={styles.buttonText}
                    >
                        Angel
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default Product;