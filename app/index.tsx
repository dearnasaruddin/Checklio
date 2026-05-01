import { Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from 'expo-status-bar'
import { Image } from "expo-image";
import { router } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 relative">
      <StatusBar style="dark" />
      <Image source={require('../assets/images/corner_shape.webp')} style={{ width: 200, height: 180, position: 'absolute', top: 0, left: 0 }} />
      <View className=" flex-1 justify-end items-center">
        <Image source={require('../assets/images/get_started.webp')} style={{ width: 254, height: 194 }} />
        <Text className="text-center text-lg font-poppins-bold text-black mt-16 mb-4">Gets things with TODs</Text>
        <Text className="text-center px-8 font-poppins leading-[157%] text-black/80]">Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod. Consequat urna quam felis interdum quisque. Malesuada adipiscing tristique ut eget sed.</Text>
        <View className="px-7 w-full mt-[120px] mb-[72px]">
          <TouchableOpacity onPress={() => router.push('/login')} className="py-4 bg-[#50C2C9] rounded-lg" >
            <Text className="font-poppins-semibold text-lg text-white text-center">Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
