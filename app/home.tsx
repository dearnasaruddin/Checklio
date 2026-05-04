import { View, Text, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Image } from 'expo-image'
import TaskList from '@/components/home/TaskList'

export default function home() {
  return (
    <View className="flex-1 relative">
      <StatusBar style="dark" />
      <Image source={require('../assets/images/corner_shape.webp')} style={{ width: 200, height: 180, position: 'absolute', top: 0, left: 0, zIndex: 50 }} />

      {/* ========== Profile Image ========== */}
      <View className=" pt-[132px] pb-8 items-center bg-[#50C2C9]">
        <Image source={require('../assets/images/profile.webp')} style={{ width: 100, height: 100 }} />
        <Text className="text-center text-lg font-poppins-bold text-white mt-4">Welcome Jeegar goyani</Text>
      </View>

      {/* ========== Clock ========== */}
      <View className='pt-[26px] pb-8 px-6'>
        <Text className='text-right mb-1.5 font-poppins-semibold text-xs text-black'>Good Afternoon</Text>
        <Image source={require('../assets/images/clock.webp')} style={{ width: 120, height: 120, alignSelf: 'center' }} />
      </View>

      {/* ========== Task List ========== */}
      <View className='px-6'>
        <Text className='mb-9 font-poppins-semibold text-sm text-black'>Task list</Text>
        <TaskList />
      </View>
    </View>
  )
}