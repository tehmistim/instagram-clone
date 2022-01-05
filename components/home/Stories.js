import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import { USERS } from '../../data/users';


const Stories = () => {
    return (
        <View style={{ marginBottom: 13 }}>
            <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
            >
                {USERS.map((story, index) => (
                    <Image source={{uri: story.image}} style={styles.story} />
                ))}

            </ScrollView>
            <Text style={{ color: 'white' }}>Stories</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 2,
        borderColor: '#ff8501',

    },
})

export default Stories
