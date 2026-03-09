import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

type Props = {
  roomName: string;
  roomType?: string;
  checkIn: string;
  checkOut: string;
  guests: {
    adults: number;
    children?: number;
  };
  totalPrice: number;
  nights: number;
  status?: 'confirmado' | 'pendente' | 'cancelado';
  features?: string[];
  onPress?: () => void;
};

const ReserveCard = ({
  roomName,
  roomType = '',
  checkIn,
  checkOut,
  guests,
  totalPrice,
  nights,
  status = 'confirmado',
  features = ['🛁', '📺', '❄️'],
  onPress,
}: Props) => {
  
  const formatDate = (date: string) => {
  const parsed = new Date(date);
    if (!isNaN(parsed.getTime())) {
    return parsed.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
    });
  }
  return date;
};

  const getColor = () => {
    switch (status) {
      case 'confirmado':
        return '#4CAF50';
      case 'pendente':
        return '#FFC107';
      case 'cancelado':
        return '#F44336';
      default:
        return '#4CAF50';
    }
  };

  const guestText = `${guests.adults}A${guests.children ? ` • ${guests.children}C` : ''}`;

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.9} onPress={onPress}>
      <View style={styles.imageContainer}>
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imageText}>🛏️</Text>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.roomName}>{roomName}</Text>
          <View style={[styles.statusBadge, { backgroundColor: getColor() + '20' }]}>
            <Text style={[styles.status, { color: getColor() }]}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Text>
          </View>
        </View>

        {roomType ? <Text style={styles.roomSubtitle}>{roomType}</Text> : null}

        <View style={styles.detailsRow}>
          <View style={styles.detailItem}>
            <Text style={styles.detailIcon}>📅</Text>
            <Text style={styles.detailText}>
              {formatDate(checkIn)} - {formatDate(checkOut)} • {nights} {nights === 1 ? 'noite' : 'noites'}
            </Text>
          </View>
          
          <View style={styles.detailItem}>
            <Text style={styles.detailIcon}>👥</Text>
            <Text style={styles.detailText}>{guestText}</Text>
          </View>
        </View>

        <View style={styles.footerRow}>
          <View style={styles.roomFeatures}>
            {features.map((feature, index) => (
              <Text key={index} style={styles.feature}>{feature}</Text>
            ))}
          </View>
          
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Total</Text>
            <Text style={styles.price}>
              R$ {totalPrice.toFixed(2).replace('.', ',')}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ReserveCard;