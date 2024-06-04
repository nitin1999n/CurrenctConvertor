import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
} from 'react-native';

// constants
import { currencyByRupee } from './Constants'; 
// component
import CurrencyButton from './components/CurrencyButton';

const { width } = Dimensions.get('window');

function App(): React.JSX.Element {

  const [inputValue, setInputValue] = useState('');
  const [resultValues, setResultValues] = useState<{[key: string]: string}>({});

  const updateResultValues = (value: string) => {
    const inputAmount = parseFloat(value);
    if (!isNaN(inputAmount)) {
      const newResultValues: {[key: string]: string} = {};
      currencyByRupee.forEach(currency => {
        const convertedValue = inputAmount * currency.value;
        newResultValues[currency.name] = `${currency.symbol} ${convertedValue.toFixed(2)}`;
      });
      setResultValues(newResultValues);
    } else {
      setResultValues({});
    }
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
    updateResultValues(value);
  };

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
              maxLength={14}
              value={inputValue}
              clearButtonMode='always'
              onChangeText={handleInputChange}
              keyboardType='number-pad'
              placeholder='Enter amount in rupee'
              placeholderTextColor="#666"
              style={styles.inputAmountField}
            />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={2}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <View style={styles.currencyContainer}>
                <Pressable
                  style={styles.button}
                >
                  <CurrencyButton {...item} />
                </Pressable>
                {resultValues[item.name] && (
                  <Text style={styles.resultTxt}>
                    {resultValues[item.name]} ({item.name})
                  </Text>
                )}
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  resultTxt: {
    fontSize: width * 0.04,
    color: '#FFFFFF',
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 10,
  },
  rupee: {
    fontSize: width * 0.06,
    color: '#FFFFFF',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  inputAmountField: {
    height: 40,
    width: width * 0.6,
    padding: 8,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    marginLeft: 10,
    color: '#000000',
    fontSize: 16,
  },
  bottomContainer: {
    flex: 3,
    paddingHorizontal: 20,
  },
  currencyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  button: {
    width: width * 0.4,
    height: width * 0.2,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
