//import liraries
import React, { Component } from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import styles from '../utils/styles';
import { Container, Content, Form, Header, Left, Button, Right, Body, Title, Icon, Item, Label, Input } from 'native-base';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
// create a component
class Home extends Component {

    static navigationOptions = {
        header: null,
        drawerLabel: 'Dashboard',
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="ios-home" size={30} color={tintColor} />
        ),
      };

    render() {
        return (
            <Container style={styles.containerFluid}>
                <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                    <Header style={styles.header}>
                        <Left style={{flex: 2}}>
                            <Title style={styles.logo}>Pallystar</Title>
                        </Left>
                        <Body style={{flex: 4}}>
                            <Form style={{width: '100%'}}>
                                <Item style={{width: '100%', borderBottomColor: 'transparent'}}>
                                    <Input
                                        placeholder="Artist, Celebrities..."
                                        returnKeyType="go"
                                    />
                                    <Icon name='ios-search' style={styles.icon} />
                                </Item>
                            </Form>
                        </Body>
                        <Right style={{flex: 1}}>
                            <Button transparent>
                                <Icon name='ios-arrow-down' style={styles.icon} />
                            </Button>
                        </Right>
                    </Header>
                    <View style={styles.cards}>
                        <Image style={styles.img} source={require('../../assets/images/bg.jpg')} />
                    </View>

                    {/* <FlatList style={{flex: 1, width: '100%', height: 'auto'}} showsVerticalScrollIndicator={false}>
                        data={[
                            {key: 'Devin'},
                            {key: 'Jackson'},
                            {key: 'James'},
                            {key: 'Joel'},
                            {key: 'John'},
                            {key: 'Jillian'},
                            {key: 'Jimmy'},
                            {key: 'Julie'},
                        ]}
                        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                    </FlatList> */}
                </ScrollView>
            </Container>
        );
    }
}

//make this component available to the app
export default Home;
