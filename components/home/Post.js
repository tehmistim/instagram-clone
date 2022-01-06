import React from 'react';
import { View, Text } from 'react-native';
import { Divider } from 'react-native-elements';

const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 30 }}>
             <Divider width={1} orientation='vertical' />

        </View>
    )
}

const PostHeader = ({post}) => (
    <View>
        <View>
            <Image />
            <Text>POST</Text>
        </View>
    </View>
)

export default Post
