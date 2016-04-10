import React from 'react-native';
const {
    Text,
    Image,
    View,
    TouchableHighlight,
} = React;

const uri = 'http://pickaface.net/includes/themes/clean/img/slide2.png';

const styles = React.StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E7E7E7',
        padding: 20,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        height: 450,
    },
    label: {
        flex:1,
        fontSize: 14,
    },
    doneButton: {
        borderRadius: 5,
        backgroundColor: '#EAEAEA',
        padding: 5,
    },
    user: {
        height: 50,
        flex: 2,
        flexDirection: 'row',
    },
    userLogo: {
        marginLeft: 5,
        height: 50,
        width: 50,
        borderRadius: 25,
        borderColor: '#CCC',
        borderWidth: 1,
        marginBottom: 5,
        marginTop: 5,
    },
    userName: {
      position: 'absolute',
      left: 80,
      top: 20,
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
        alignItems: 'flex-end'
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
});

class TaskRow extends React.Component {
    onDonePressed() {
        this.props.onDone(this.props.todo);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.user}>
                    <Image
                      style={styles.userLogo}
                      source={{uri}}/>
                    <Text style={styles.userName}>Yumiko</Text>
                </View>
                <View style={styles.feed}>
                    <Image
                        style={styles.feedImg}
                        source={{uri:this.props.todo.url}}/>
                    <Text style={styles.label}>
                        {this.props.todo.task}
                    </Text>
                </View>
                <View style={styles.labelRow}>
                    <TouchableHighlight
                        onPress={this.props.productPage}
                        >
                        <Text style={styles.buyButton}>
                            BUY
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

TaskRow.propTypes = {
    onDone: React.PropTypes.func.isRequired,
    todo: React.PropTypes.shape({
        task: React.PropTypes.string.isRequired,
    }).isRequired,
};

export default TaskRow;
