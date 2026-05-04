import { View, Text, TouchableOpacity } from 'react-native'

export default function TaskItem({ task, isCompleted }: { task: string, isCompleted: boolean }) {
    return (
        <View className='flex-row items-center gap-2'>
            <TouchableOpacity className={`size-4 border-black border-2 ${isCompleted ? 'bg-[#50C2C9]' : 'bg-transparent'}`} />
            <Text className='font-poppins-semibold text-xs text-black/70'>{task}</Text>
        </View>
    )
}