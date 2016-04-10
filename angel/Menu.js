const React = require('react-native');
const {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableHighlight,
} = React;

const window = Dimensions.get('window');
const uri = 'http://pickaface.net/includes/themes/clean/img/slide2.png';

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
});

class Menu extends React.Component {

  render() {
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{ uri, }}/>
          <Text style={styles.name}>Yumiko</Text>
        </View>

        <TouchableHighlight
            onPress={() => this.props.onItemSelected('profile')}
        >
            <Text
                style={styles.item}
            >
                Profile
            </Text>
        </TouchableHighlight>

        <Text
          onPress={() => this.props.onItemSelected('orders')}
          style={styles.item}>
          Orders
        </Text>

        <Text
          onPress={() => this.props.onItemSelected('setting')}
          style={styles.item}>
          Setting
        </Text>
      </ScrollView>
    );
  }
};

export default Menu;
