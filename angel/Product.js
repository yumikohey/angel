import React from 'react-native';

const {
    View,
    TouchableHighlight,
    Text,
    Image,
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
    feed: {
        paddingTop: 20,
        flexDirection: 'row',
    },
    feedImg: {
        margin: 5,
        width: 325,
        height: 280,
    },
    labelRow: {
        marginTop: 10,
        flex: 2,
        alignItems: 'flex-end',
    },
    detailRow: {
        marginTop: 10,
        flex: 2,
        alignItems: 'flex-start',
    },
    brandLabel: {
        width: 120,
        borderRadius: 2,
        borderColor: '#57e7fd',
        borderWidth: 2,
        backgroundColor: '#fff',
        paddingLeft: 15,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 15,
    },
    buyButton: {
        marginRight: 2,
        padding:10,
        backgroundColor: '#57e7fd',
        borderColor: '#57e7fd',
        color: '#555',
        fontWeight: '600',
        borderRadius: 10,
    },
    feedContainer: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E7E7E7',
        padding: 20,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        height: 450,
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
                <View style={styles.feedContainer}>
                    <View style={styles.feed}>
                        <Image
                            style={styles.feedImg}
                            source={require('./img/mk_1.png')}/>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.buyButton}>
                            CONFIRM
                        </Text>
                    </View>
                    <View style={styles.labelRow}>
                        <TouchableHighlight
                            onPress={this.props.productPage}
                            >
                            <Text style={styles.buyButton}>
                                CONFIRM
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}

export default Product;