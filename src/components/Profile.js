//import liraries
import React, { Component } from 'react';
import { 
View, 
Text, 
ActivityIndicator, 
AsyncStorage, 
StatusBar, 
Image, 
ProgressBarAndroid, 
TouchableOpacity,
TouchableHighlight,
} from 'react-native';

import { 
Container, 
Content, 
Card, 
Right, 
Icon, 
Button, 
TabHeading, 
Left, 
ActionSheet, 
Header, 
Tabs, 
Tab, 
Body 
} from 'native-base';

import styles from '../utils/styles';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import Charts from './Tabs/Chart';
import Rating from './Tabs/Rating';
import Rewards from './Tabs/Rewards';


var BUTTONS = ["Background Image", "Profile Image", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

// create a component
class Profile extends Component {
    static navigationOptions = {
        tabBarLabel: '',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-person" size={35} color={tintColor} />
        )
      };

   constructor(props) {
       super(props)
        this. state = {
            isLoading: false,
            username: '',
            action: {}
        }

        setTimeout(() => {
          this.setState(()=> ({isLoading: false}))
        }, 5000);
    }

    // componentWillMount() {
    //     AsyncStorage.getItem('username').then((value) => {
    //           this.setState({ username: value });
    //     })
    // }

    render() {
        // const { navigation } = this.props;
        // const data = navigation.getParam('response', 'NO user');

        if (this.state.isLoading) {
            return (
                <Container style={styles.container}>
                    <ActivityIndicator size="large" color="#319dfa" />
                </Container>
            )
        } else {

            return (
                <Container style={styles.containerFluid}>
                    <StatusBar backgroundColor="#056cc7" barStyle="light-content"/>
                    <ScrollView style={{flex: 1, width: '100%', height: 'auto'}} showsVerticalScrollIndicator={false}>
                       <View style={styles.content}>
                            <View style={styles.dpHeader}>
                                <Button iconLeft transparent style={{position: 'absolute', bottom: 5, right: 10, zIndex: 3}} 
                                onPress={() =>
                                ActionSheet.show(
                                {
                                    options: BUTTONS,
                                    cancelButtonIndex: CANCEL_INDEX,
                                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                },
                                buttonIndex => {
                                    this.setState({ clicked: BUTTONS[buttonIndex] });
                                }
                                )}
                                >
                                    <Ionicons name="ios-camera" size={30} color="#fff" />
                                    {/* <Icon name="camera" size={20} style={{color: 'white'}}/> */}
                                    <Text style={{paddingHorizontal: 10, color: '#fff'}}>Edit</Text>
                                </Button>
                                <Image source={require('../../assets/images/bg.jpg')} style={styles.img} />
                            </View>
                            <TouchableHighlight style={styles.dp} onPress={this._onPressButton}>
                                <Image source={require('../../assets/images/peters.jpg')} style={styles.img} />
                            </TouchableHighlight>
                            <View style={styles.dpFooter}>
                                
                            </View>
                            <View style={styles.bar}>
                                <Text style={styles.h3}>Peters Chikezie</Text>
                                <Text note>Level 8</Text>
                            </View>
                            <View style={styles.progress}>
                                <Left>
                                    <Text style={styles.p}>250XP</Text>
                                </Left>
                                <Body style={{flex: 3}}>
                                    <ProgressBarAndroid
                                    styleAttr="Horizontal"
                                    indeterminate={false}
                                    progress={0.5}
                                    style={{width: '100%'}}
                                    />
                                </Body>
                                <Right>
                                    <Text style={styles.p}>5000XP</Text>
                                </Right>
                            </View>
                            <View style={styles.bar}>
                                {/* <Header hasTabs/> */}
                                <Tabs 
                                    tabBarUnderlineStyle={{backgroundColor: '#319dfa'}}
                                    tabContainerStyle={{ elevation:0 }}
                                >
                                    <Tab 
                                        heading={ 
                                            <TabHeading style={{backgroundColor: 'white'}}>
                                                <Ionicons name="ios-analytics" size={25} color="#319dfa"  />
                                            </TabHeading>
                                        }
                                        activeTabStyle={{ backgroundColor: "green" }}
                                        inActiveTabStyle={{ backgroundColor: "red" }}
                                    >
                                        <Charts />
                                    </Tab>
                                    <Tab heading={ 
                                            <TabHeading style={{backgroundColor: 'white'}}>
                                                <Ionicons name="md-star-outline" size={25} color="#319dfa" />
                                            </TabHeading>
                                        }
                                    >
                                        <Rating />
                                    </Tab>
                                    <Tab 
                                        heading={ 
                                            <TabHeading style={{backgroundColor: 'white'}}>
                                                <Ionicons name="ios-ribbon" size={25} color="#319dfa" />
                                            </TabHeading>
                                        }
                                    >
                                        <Rewards />
                                    </Tab>
                                </Tabs>
                            </View>
                       </View>
                    </ScrollView>
                </Container>
            );
        }
    }
        
}

//make this component available to the app
export default Profile;
