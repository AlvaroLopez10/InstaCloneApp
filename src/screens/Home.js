import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import firebase from 'firebase'

import StoryGlobe from '../components/StoryGlobe'
import Post from '../components/Post'

const logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png'
const IGTVIcon = 'https://seeklogo.com/images/I/igtv-logo-BD616E2F49-seeklogo.com.png'

class Home extends React.Component{
    constructor () {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        var ref = firebase.database().ref('users')

        ref.on("value", snapshot => {
            this.setState({
                users: snapshot.val()
            })
        }, function (error) {
            alert('Oops! Something happened')
        })
    }

    render() {
        return (
            <View>
                <View style={styles.headerContainer}>
                    <View style={styles.leftSide}>
                        <Ionicons name='logo-instagram' size={32} color='black' />
                        <Image style={styles.logo} source={{uri: logo}}/>
                    </View>
                    <View style={styles.rightSide}>
                        <View style={styles.igtvContainer}>
                            <Image style={styles.igtv} source={{uri: IGTVIcon}}/>
                        </View>
                        <Ionicons name='md-paper-plane' size={32} color='black' />
                    </View>
                </View>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    style={{marginBottom: 45}}
                >
                    <View style={styles.storiesContainer}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            {
                                this.state.users.map((data, key) => {
                                    return(
                                        <StoryGlobe key={key} {...data}/>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                    {
                        this.state.users.map((data, key) => {
                            if(typeof(data.posts) !== 'undefined'){
                                return(
                                    <View key={key}>
                                        {
                                            data.posts.map((postData, postKey) => {
                                                return(
                                                    <Post key={postKey} {...data} {...postData} />
                                                )
                                            })
                                        }
                                    </View>
                                )
                            }
                        })
                    }
                </ScrollView>
            </View>
        )
    }
}

export default Home;

const styles = StyleSheet.create({
    headerContainer: {
        height: 50,
        width: null,
        backgroundColor: '#F0F0F0',
        shadowColor: '#000',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    leftSide: {
        flex: 1,
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        height: 30,
        width: 85,
        marginHorizontal: 10
    },
    rightSide: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 10
    },
    igtvContainer: {
        justifyContent: 'center',
        paddingRight: 20
    },
    igtv: {
        height: 28,
        width: 24
    },
    storiesContainer: {
        height: 96,
        width: null,
        borderBottomWidth: .5,
        borderBottomColor: '#DFDFDF'
    }
})