import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { Link, router } from 'expo-router'
import { Image } from 'expo-image'
import { StatusBar } from 'expo-status-bar'

export default function login() {

  const handleLogin = () => {
    router.push('/home')
  }

  return (
    <View className="flex-1 relative">

      <StatusBar style="dark" />
      <Image source={require('../assets/images/corner_shape.webp')} style={{ width: 200, height: 180, position: 'absolute', top: 0, left: 0 }} />

      <View className=" flex-1 justify-end items-center">
        <Text className="text-center text-lg font-poppins-bold text-black mb-[52px]">Welcome Back</Text>
        <Image source={require('../assets/images/login.webp')} style={{ width: 184, height: 138 }} />

        <View className='mt-[88px] mx-6 items-center gap-[30px]'>
          <TextInput className='w-[380px] rounded-[100px] py-4 px-6 bg-white' placeholder='Enter your Email' />
          <TextInput secureTextEntry className='w-[380px] rounded-[100px] py-4 px-6 bg-white' placeholder='Enter your Password' />
        </View>

        <Text className='font-poppins text-sm leading-[157%] text-[#50C2C9] my-12'>Forgot password?</Text>

        <View className="px-6 w-full mb-5">
          <TouchableOpacity onPress={handleLogin} className="py-4 bg-[#50C2C9] rounded-lg" >
            <Text className="font-poppins-semibold text-lg text-white text-center">Login</Text>
          </TouchableOpacity>
        </View>

        <Text className='font-poppins text-base leading-[157%] mb-[30px]'>Don't have an account? <Link href="/signup" className='text-[#50C2C9]'>Sign Up</Link></Text>
      </View>
    </View>
  )
}