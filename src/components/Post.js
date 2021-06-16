import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

const screenDimensions = Dimensions.get('window');

class Post extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.postHeader}>
                    <View style={styles.userContainer}>
                        <Image style={styles.profilePicture} source={{uri: this.props.profile}}/>
                        <View style={styles.headerTextContainer}>
                            <Text style={styles.username}>{this.props.username}</Text>
                            <Text style={styles.location}>{this.props.location}</Text>
                        </View>
                    </View>
                    <View style={styles.iconContainer}>
                        <Ionicons name='md-more' size={26} color='black' />
                    </View>
                </View>
                <Image 
                    style={styles.postPicture}
                    source={{uri: this.props.post}}
                />
                <View style={styles.actionsRow}>
                    <View style={styles.leftIcons}>
                        <Ionicons style={{marginLeft: 12}} name='md-heart-empty' size={28} color='black' />
                        <MaterialIcon style={{marginLeft: 12}} name='chat-bubble-outline' size={28} color='black' />
                        <Ionicons style={{marginLeft: 12}} name='md-paper-plane' size={28} color='black' />
                    </View>
                    <View>
                        <MaterialIcon style={{marginRight: 10}} name='bookmark-border' size={28} color='black' />
                    </View>
                </View>
                <View style={styles.postInfoContainer}>
                    <View style={styles.likesRow}>
                        <Text style={styles.likesText}>{this.props.likes}</Text><Text style={styles.likesText}>likes</Text>
                    </View>
                    <Text style={styles.descriptionRow}>
                        <Text style={styles.likesText}>{this.props.username} </Text><Text>{this.props.description}</Text>
                    </Text> 
                    <Text style={styles.comments}>View all {this.props.commentsCount} comments</Text>
                    <Text style={styles.uploadDate}>{this.props.uploadDate}</Text>
                </View>
            </View>
        )
    }
}

export default Post

const styles = StyleSheet.create({
    postHeader: {
        height: 52,
        width: null,
        flexDirection: 'row',
    },
    userContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
    },
    profilePicture: {
        width: 32,
        height: 32,
        borderRadius: 16
    },
    headerTextContainer: {
        marginLeft: 10
    },
    username: {
        fontWeight: '700',
        fontSize: 14,
        marginBottom: -3
    },
    location: {
        fontSize: 12,
        fontWeight: '600'
    },
    iconContainer: {
        height: null,
        width: 25,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    postPictureContainer: {
        flex: 1,
    },
    postPicture: {
        width: screenDimensions.width,
        height: screenDimensions.width,
        resizeMode: 'cover'
    },
    actionsRow: {
        height: 46,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftIcons: {
        flexDirection: 'row',
    },
    postInfoContainer:{
        marginHorizontal: 10,
        paddingBottom: 5
    },
    likesRow: {
        flexDirection: 'row',
        height: 24,
        alignItems: 'center',
    },
    likesText: {
        paddingRight: 3,
        fontWeight: '700',
        fontSize: 14
    },
    descriptionRow: {
        flexDirection: 'row',
        paddingBottom: 5
    },
    comments: {
        color: '#909090'
    },
    uploadDate: {
        color: '#909090',
        fontSize: 10,
        paddingVertical: 5
    }
})