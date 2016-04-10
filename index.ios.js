const React = require('react-native');
const {
    AppRegistry,
    Component,
    Navigator,
    TabBarIOS,
} = React;
import TaskList from './angel/TaskList';
import TaskForm from './angel/TaskForm';
import Menu from './angel/Menu';

const SideMenu = require('react-native-side-menu');
const Icon = require('react-native-vector-icons/Ionicons');

class angel extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            todos: [
                {
                    task: 'Learn React Native',
                },
                {
                    task: 'Learn Redux',
                },
            ],
            selectedTab: 'welcome',
        };
    }

    onAddStarted() {
        this.nav.push({
            name: 'taskform',
        });
    }

    onCancel() {
        console.log('cancelled!');
        this.nav.pop();
    }

    onAdd(task) {
        console.log('a task was added: ', task);
        this.state.todos.push({ task });
        this.setState({ todos: this.state.todos });
        this.nav.pop();
    }

    onDone(todo) {
        console.log('todo was completed: ', todo.task);
        const filteredTodos =
            this.state.todos.filter((filterTodo) => {
                return filterTodo !== todo;
            });
        this.setState({ todos: filteredTodos });
    }

    renderScene(route, nav) {
        switch (route.name) {
        case 'taskform':
            return (
                <TaskForm
                    onAdd={this.onAdd.bind(this)}
                    onCancel={this.onCancel.bind(this)}
                />
            );
        default:
            return (
                <TaskList
                    onAddStarted={this.onAddStarted.bind(this)}
                    onDone={this.onDone.bind(this)}
                    todos={this.state.todos}
                />
            );
        }
    }

    state = {
      isOpen: false,
      selectedItem: 'profile',
    };

    updateMenuState(isOpen) {
      this.setState({ isOpen, });
    }

    onMenuItemSelected = (item) => {
      this.setState({
        isOpen: !this.state.isOpen,
        selectedItem: item,
      });
      this.nav.push({
          name: 'taskform',
      });
    }

    configureScene() {
        return Navigator.SceneConfigs.FloatFromBottom;
    }

    render() {
        const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

        return (
            <SideMenu menu={menu}>
                <TabBarIOS 
                  selectedTab={this.state.selectedTab}
                  tintColor="white"
                  barTintColor="darkslateblue"
                >
                  <Icon.TabBarItemIOS
                    title='Featured'
                    iconName="ios-home-outline"
                    selectedIconName="ios-home"
                    selected={this.state.selectedTab === 'welcome'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'welcome',
                        });
                    }}>
                      <Navigator
                          configureScene={this.configureScene}
                          initialRoute={{ name: 'tasklist', index: 0 }}
                          ref={((nav) => {
                              this.nav = nav;
                          })}
                          renderScene={this.renderScene.bind(this)}
                      />
                  </Icon.TabBarItemIOS>
                  <Icon.TabBarItemIOS
                    title='Upload'
                    iconName="ios-camera-outline"
                    selectedIconName="ios-camera"
                    selected={this.state.selectedTab === 'post'}
                    onPress={() => {
                          this.setState({
                              selectedTab: 'post',
                          });
                    }}>
                       <Navigator
                           configureScene={this.configureScene}
                           initialRoute={{ name: 'tasklist', index: 0 }}
                           ref={((nav) => {
                               this.nav = nav;
                           })}
                           renderScene={this.renderScene.bind(this)}
                       />
                  </Icon.TabBarItemIOS>
                  <Icon.TabBarItemIOS
                    title='Thoughts'
                    iconName="ios-compose-outline"
                    selectedIconName="ios-compose"
                    selected={this.state.selectedTab === 'more'}
                    onPress={() => {
                          this.setState({
                              selectedTab: 'more',
                          });
                    }}>
                       <Navigator
                           configureScene={this.configureScene}
                           initialRoute={{ name: 'tasklist', index: 0 }}
                           ref={((nav) => {
                               this.nav = nav;
                           })}
                           renderScene={this.renderScene.bind(this)}
                       />
                  </Icon.TabBarItemIOS>
                </TabBarIOS>
            </SideMenu>
        );
    }
}

AppRegistry.registerComponent('angel', () => angel);
