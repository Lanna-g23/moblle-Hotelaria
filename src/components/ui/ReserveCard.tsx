import { Text, TouchableOpacity, View } from 'react-native';

const ReserveCard = () => {
  return (
    <View style={{ maxWidth: 320, margin: 10, borderRadius: 20, backgroundColor: '#6b93f7ff' }}>
      <TouchableOpacity style={{borderRadius:20, padding:10}}>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>
            quarto 1
          </Text>
          <Text style={{ color: '#020296ff', fontSize: 14 }}>
            Data CheckIn  -  Data do CheckOut
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default ReserveCard;