import DateSelector from '@/components/ui/DataSelector';
import { global } from '@/components/ui/styles';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RoomCard from '../ui/RoomCard';


const RenderExplorer = () => {
  return (
    <ScrollView>
      <SafeAreaView style={global.safeArea}>
        <View style={global.content}> 
          <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#043bbcff", borderRadius: 10 }}>
            <DateSelector/>
            <DateSelector/>
          </View>
          
          <ScrollView
          horizontal={true}
          >
            <RoomCard/>
            <RoomCard/>
            <RoomCard/>
            <RoomCard/>
            <RoomCard/>
          </ScrollView>
    
          <ScrollView
          horizontal={true}
          >
            <RoomCard/>
            <RoomCard/>
            <RoomCard/>
            <RoomCard/>
            <RoomCard/>
          </ScrollView>
        </View>
      
    </SafeAreaView>
    </ScrollView>
  )
}  

export default RenderExplorer;