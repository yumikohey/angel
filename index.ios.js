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
import UploadSelfie from './angel/UploadSelfie';
import Product from './angel/Product';

const SideMenu = require('react-native-side-menu');
const Icon = require('react-native-vector-icons/Ionicons');

class angel extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            todos: [
                {
                    task: 'Learn React Native',
                    url: "http://s24.postimg.org/m17pnn5hf/image.png"
                },
                {
                    task: 'Learn Redux',
                    url: "http://s23.postimg.org/7xujipcbd/image.png"
                },
                {
                    task: 'Learn React Native',
                    url: "http://s24.postimg.org/pyuzd1sar/image.png"
                },
                {
                    task: 'Learn Redux',
                    url: "http://s24.postimg.org/g43u6tocj/image.png"
                },
                {
                    task: 'Learn React Native',
                    url: "http://s24.postimg.org/yxpn3tmkj/image.png"
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
        this.nav.pop();
    }

    onAdd(task) {
        this.state.todos.push({ task });
        this.setState({ todos: this.state.todos });
        this.nav.pop();
    }

    onDone(todo) {
        const filteredTodos =
            this.state.todos.filter((filterTodo) => {
                return filterTodo !== todo;
            });
        this.setState({ todos: filteredTodos });
    }

    productPage() {
        console.log('click');
        this.nav.push({
          name: 'product',
        });
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
        case 'uploadselfie':
            return (
                <UploadSelfie/>
            );
        case 'product':
            return (
              <Product/>
            );
        default:
            return (
                <TaskList
                    onAddStarted={this.onAddStarted.bind(this)}
                    onDone={this.onDone.bind(this)}
                    todos={this.state.todos}
                    productPage={this.productPage.bind(this)}
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
                    <UploadSelfie>
                    </UploadSelfie>   
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
                       <TaskForm
                           onAdd={this.onAdd.bind(this)}
                           onCancel={this.onCancel.bind(this)}
                       />
                  </Icon.TabBarItemIOS>
                </TabBarIOS>
            </SideMenu>
        );
    }
}

AppRegistry.registerComponent('angel', () => angel);
