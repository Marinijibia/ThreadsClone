import { supabase } from '@/src/lib/superbase';
import { useAuth } from '@/src/providers/AuthProvider';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, SafeAreaView, Text, TextInput, View } from 'react-native';

const CreateNewPost  = () => {
  const [text, setText] = useState("");
  const { user } = useAuth();


  const onSubmit = async () => {
    if (!text || !user) return;

    const {data, error} = await supabase
      .from("posts")
      .insert({ content: text, user_id: user.id });

    if (error) {
      console.error("Error creating post: ", error.message);
    }

    setText("");
  }

  return (
    <SafeAreaView className='p-4 flex-1 bg-neutral-900'>
      <KeyboardAvoidingView 
        className='flex-1 p-4' 
        behavior={Platform.OS === "ios" ? "padding" : "height"} style={{gap: 10}}
        keyboardVerticalOffset={100}
      >
      <Text className='text-white text-lg font-bold'>Username</Text>
      <TextInput 
        value={text}
        onChangeText={setText}
        placeholder='What is on your mind?'
        placeholderTextColor={"#dbdbdb"}
        style={{color: "white"}}
        multiline
        numberOfLines={4}
      />

      <View className='mt-auto'>
        <Pressable 
          onPress={onSubmit}
          disabled={!text} 
          className='bg-white self-end p-3 px-6 rounded-full'
        >
          <Text className='text-black font-bold'>Post</Text>
        </Pressable>
      </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default CreateNewPost;