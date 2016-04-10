const React = require('react-native');
const {
  StyleSheet,
  View,
  Image,
  Text,
  ImagePickerIOS,
  TouchableHighlight,
} = React;

const uri = 'https://github.com/bonniee/learning-react-native/blob/master/WeatherProject/ios/WeatherProject/Images.xcassets/flowers.imageset/flowers.png';

const styles = StyleSheet.create({
    background: {
        backgroundColor:'#fff',
        flex: 2,
    },
    previewPhoto: {
        position: 'absolute',
        top: 50,
        width: 450,
        height: 280,
    },
    button: {
        position: 'absolute',
        backgroundColor: '#57e7fd',
        color: '#555',
        width: 120,
        padding: 26,
        borderRadius: 5,
        top: 400,
        left: 150,
        fontSize: 20,
    },
});

const UploadSelfie = React.createClass({
    getInitialState() {
        return {
            photoSource: require('image!flowers')
        }
    },

    _pickImage() {
        ImagePickerIOS.openCameraDialog(
            {},
            (data) => {
                this.setState({
                    photoSource: {uri: data}
                });
            },
            () => {
                console.log('User canceled the action');
            }
        );
    },

    render() {
        return (
            <View
                style={styles.background}
            >
                <Image 
                    style={styles.previewPhoto}
                    source={require('./img/flowers.png')}>
                </Image>
                <View>
                    <Text
                        style={styles.button}
                        onPress={this._pickImage}>
                        Upload
                    </Text>
                </View> 
            </View>
        );
    }
});

export default UploadSelfie;
