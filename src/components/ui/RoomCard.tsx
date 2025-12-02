import { Image, Text, TouchableOpacity, View } from 'react-native';
const RoomCard = () => {
  return (
    <View style={{ maxWidth: 320, margin: 10, borderRadius: 20, backgroundColor: '#89a8f8ff' }}>
      <TouchableOpacity style={{borderRadius: 20, padding: 20}}>
        <Image
          source={require('../../../assets/images/casalCinzaLuxo.webp')}
          style={{ borderRadius: 10, height: 150, width: '100%' }}
          resizeMode="cover"
        />
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>
            quarto 1
          </Text>
          <Text style={{ color: '#1400f1ff', fontSize: 18 }}>
            exceto a Antártida
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default RoomCard;