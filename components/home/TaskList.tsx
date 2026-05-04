import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import TaskItem from './TaskItem';


export default function TaskList() {

    const dummyData = [
        {
            id: 1,
            task: 'Learning Programming by 12PM',
            isCompleted: true
        },
        {
            id: 2,
            task: 'Learn how to cook by 1PM',
            isCompleted: false
        },
        {
            id: 3,
            task: 'Learn how to play at 2PM',
            isCompleted: false
        },
        {
            id: 4,
            task: 'Have lunch at 4PM',
            isCompleted: false
        },
        {
            id: 5,
            task: 'Going to travel 6PM',
            isCompleted: false
        }
    ]

    return (
        <View className='px-6 pt-5 pb-[68px] bg-white rounded-xl shadow-lg'>

            {/* =========== Heading & Add btn =========== */}
            <View className='flex-row items-center justify-between mb-12'>
                <Text className='font-poppins-semibold text-sm text-black'>Task list</Text>
                <TouchableOpacity>
                    <FontAwesome6 name="plus" size={24} color="#50C2C9" />
                </TouchableOpacity>
            </View>

            {/* =========== List items =========== */}
            <View className='gap-3'>
                {dummyData.map((task) => (
                    <TaskItem key={task.id} task={task.task} isCompleted={task.isCompleted} />
                ))}
            </View>

        </View>
    )
}