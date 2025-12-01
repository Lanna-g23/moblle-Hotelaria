import { global } from '@/components/ui/styles';
import { View } from 'react-native';
import ReserveCard from '../ui/ReserveCard';
import RoomCard from '../ui/RoomCard';
import AuthContainer from '../ui/AuthContainer';


const RenderReserve = () => {
  return (
    <AuthContainer>
      <View style={global.container}> 
        <View style={{borderBottomWidth:2}}>
          <RoomCard/>
          <ReserveCard/>
        </View>
        <View style={{borderBottomWidth:2}}>
          <RoomCard/>
          <ReserveCard/>
        </View>
      </View>
    </AuthContainer>
  )
}  
export default RenderReserve;