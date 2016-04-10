import React from 'react-native';

const {
    View,
    ListView,
    TouchableHighlight,
    Text,
} = React;

import TaskRow from './TaskRow';

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

class TaskList extends React.Component {
    constructor(props, context) {
        super(props, context);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });

        this.state = {
            dataSource: ds.cloneWithRows(props.todos),
        };
    }

    componentWillReceiveProps(nextProps) {
        const dataSource = this
            .state
            .dataSource
            .cloneWithRows(nextProps.todos);

        this.setState({ dataSource });
    }

    renderRow(todo) {
        return (
            <TaskRow
                onDone={this.props.onDone}
                todo={todo}
            />
        );
    }

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
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
        );
    }
}

TaskList.propTypes = {
    onAddStarted: React.PropTypes.func.isRequired,
    onDone: React.PropTypes.func.isRequired,
    todos: React.PropTypes
        .arrayOf(React.PropTypes.object).isRequired,
};

export default TaskList;
