import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ICoinItem } from '@models';
import styles from './styles';

interface Props {
  coin: ICoinItem;
  onClose: () => void;
}

export const CoinListItem: React.FC<Props> = ({ coin, onClose }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Image source={{ uri: coin.image }} style={styles.image} />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{coin.name}</Text>
          <Text style={styles.symbol}>{coin.symbol}</Text>
        </View>
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.name}>{`$${coin.current_price}`}</Text>
        <View style={styles.percentageContainer}>
          <Icon
            name={
              coin.price_change_percentage_24h > 0
                ? 'arrow-top-right'
                : 'arrow-bottom-left'
            }
            color={coin.price_change_percentage_24h > 0 ? '#117B54' : '#E2412D'}
            size={16}
          />
          <Text
            style={[
              styles.symbol,
              {
                color:
                  coin.price_change_percentage_24h > 0 ? '#117B54' : '#E2412D',
              },
            ]}
          >
            {`${Math.abs(coin.price_change_percentage_24h)}%`}
          </Text>
        </View>
      </View>
      <View style={styles.removeButtonContainer}>
        <TouchableOpacity onPress={onClose}>
          <Icon name="close" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
