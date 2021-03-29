/* Add Coin Screen */
import React, { useMemo, useState } from 'react';
import Autocomplete from 'react-native-autocomplete-input';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addCoin } from '@actions/userCoinActions';
import { ICoinItem } from '@models';
import { RootState } from '@reducers';
import styles from './styles';

export const AddCrypto: React.FC = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState<string>('');
  const [id, setId] = useState<string>('');
  const coinListState = useSelector((state: RootState) => state.coinList);

  const comp = (a: string, b: string) =>
    a.toLowerCase().trim() === b.toLowerCase().trim();

  const coins = useMemo(() => {
    if (query === '') {
      return [];
    }
    return coinListState.coins.filter(
      item =>
        item.name.toLowerCase().includes(query.toLowerCase().trim()) ||
        item.symbol.toLowerCase().includes(query.toLowerCase().trim()),
    );
  }, [coinListState.coins, query]);

  const enabled = useMemo(() => {
    if (query === '') {
      return false;
    }
    let validate = false;
    coinListState.coins.forEach(item => {
      if (item.name === query) {
        validate = true;
        return;
      }
    });
    return validate;
  }, [coinListState.coins, query]);

  const renderInputItem = (item: ICoinItem) => {
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => {
          setQuery(item.name);
          setId(item.id);
        }}
      >
        <Text style={styles.listItemName}>{item.name}</Text>
        <Text style={styles.listItemSymbol}>{item.symbol}</Text>
      </TouchableOpacity>
    );
  };

  const onAdd = () => {
    dispatch(addCoin(id));
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View>
        <Text style={styles.title}>Add a Cryptocurrency</Text>
        {Platform.OS === 'ios' ? (
          <Autocomplete
            placeholder="Use a name or ticket symbol."
            value={query}
            onChangeText={setQuery}
            data={coins.length >= 1 && comp(query, coins[0].name) ? [] : coins}
            renderItem={({ item }) => renderInputItem(item)}
            keyExtractor={item => item.id}
            style={styles.input}
            inputContainerStyle={{ borderWidth: 0 }}
          />
        ) : (
          <View style={styles.androidInputContainer}>
            <Autocomplete
              placeholder="Use a name or ticket symbol."
              value={query}
              onChangeText={setQuery}
              data={
                coins.length >= 1 && comp(query, coins[0].name) ? [] : coins
              }
              renderItem={({ item }) => renderInputItem(item)}
              keyExtractor={item => item.id}
              style={styles.input}
              inputContainerStyle={{ borderWidth: 0 }}
            />
          </View>
        )}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            disabled={!enabled}
            onPress={onAdd}
          >
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
