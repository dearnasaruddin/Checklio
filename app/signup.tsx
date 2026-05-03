import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { Link, router } from 'expo-router'
import { Image } from 'expo-image'
import { StatusBar } from 'expo-status-bar'

export default function signup() {
  return (
    <View className="flex-1 relative">

      <StatusBar style="dark" />
      <Image source={require('../assets/images/corner_shape.webp')} style={{ width: 200, height: 180, position: 'absolute', top: 0, left: 0 }} />

      <View className=" flex-1 justify-end items-center">
        <Text className="text-center text-lg font-poppins-bold text-black mb-[30px]">Welcome to Onbooard!</Text>
        <Text className="text-center text-sm font-poppins leading-[157%] max-w-[200px] text-[rgba(0,0,0,0.7)] mb-[90px]">Let’s help to meet up your tasks.</Text>


        <View className='mx-6 items-center mb-[72px] gap-[30px]'>
          <TextInput className='w-[380px] rounded-[100px] py-4 px-6 bg-white' placeholder='Enter your full name' />
          <TextInput className='w-[380px] rounded-[100px] py-4 px-6 bg-white' placeholder='Enter your email' />
          <TextInput secureTextEntry className='w-[380px] rounded-[100px] py-4 px-6 bg-white' placeholder='Enter password' />
          <TextInput secureTextEntry className='w-[380px] rounded-[100px] py-4 px-6 bg-white' placeholder='Confirm password' />
        </View>

        <View className="px-6 w-full mb-5">
          <TouchableOpacity onPress={() => router.push('/login')} className="py-4 bg-[#50C2C9] rounded-lg" >
            <Text className="font-poppins-semibold text-lg text-white text-center">Register</Text>
          </TouchableOpacity>
        </View>

        <Text className='font-poppins text-base leading-[157%] mb-[30px]'>Already have an account? <Link href="/login" className='text-[#50C2C9]'>Sign In</Link></Text>
      </View>
    </View>
  )
}