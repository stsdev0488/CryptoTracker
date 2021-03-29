/* Coin List Home Screen */
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ActivityIndicator,
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { CoinListItem } from './components/CoinListItem';
import { getCoinList } from '@actions/coinListActions';
import { removeCoin } from '@actions/userCoinActions';
import { RootState } from '@reducers';
import { Status } from '@reducers/enum';
import { styles } from './styles';

export const Home: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const coinListState = useSelector((state: RootState) => state.coinList);
  const userCoinListState = useSelector(
    (state: RootState) => state.userCoinList,
  );

  const renderCoinListItem = (item: string) => {
    const coin = coinListState.coins.find(coinItem => coinItem.id === item);
    if (!coin) {
      return null;
    }
    return <CoinListItem coin={coin} onClose={() => removeUserCoin(coin.id)} />;
  };

  const removeUserCoin = (id: string) => {
    dispatch(removeCoin(id));
  };

  const renderDivider = () => {
    return <View style={styles.divider} />;
  };

  useEffect(() => {
    dispatch(getCoinList());
    const timer = setInterval(() => dispatch(getCoinList()), 300000);
    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar backgroundColor="#385774" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>CryptoTracker Pro</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddCrypto')}>
          <Icon name="plus-circle-outline" color="#FFFFFF" size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        {coinListState.status === Status.LOADING ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator color="#385774" size="small" />
          </View>
        ) : (
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={userCoinListState.userCoins}
            renderItem={({ item }) => renderCoinListItem(item)}
            keyExtractor={item => item}
            ItemSeparatorComponent={renderDivider}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
