import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';

class StoryGlobe extends React.Component {
    render () {
        return (
            <View style={styles.storyContainer}>
                <View style={styles.globeBorder}>
                    <Image style={styles.storyGlobe} source={{uri: this.props.profile}}/>
                </View>
                <Text
                   numberOfLines={1} 
                   ellipsizeMode={'tail'}
                   style={styles.storyText}
                >{this.props.username}</Text>
            </View>
        )
    }
}

export default StoryGlobe;

const styles = StyleSheet.create({
    storyContainer: {
        width: 85,
        justifyContent: 'center',
        alignItems: 'center'
    },
    globeBorder: {
        height: 64,
        width: 64,
        borderRadius: 32,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#DD2A7B'
    },
    storyGlobe: {
        height: 56,
        width: 56,
        borderRadius: 28
    },
    storyText: {
        marginHorizontal: 5,
        fontSize: 13
    }
})