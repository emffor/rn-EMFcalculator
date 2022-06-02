import React from 'react';
import { View, Text, Image} from 'react-native';
import { ButtonCalculator } from '../../components/ButtonCalculator';

import { styles } from '../../theme';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <View style={styles.viewimage}>
        <Image
          style={styles.image}
          source={require('../../assets/leaomosaico.png')}
        />
      </View>

        <Text style={styles.resultSmall}>1,500.00</Text>
        <Text style={styles.result}>1,500.00</Text>

      <View style={styles.row}>
          <ButtonCalculator text="C" color="#1e5b9c"  action={() => {}}/>
          <ButtonCalculator text="+/-" color="#1e5b9c"  action={() => {}}/>
          <ButtonCalculator text="del" color="#1e5b9c"  action={() => {}}/>
          <ButtonCalculator text="÷" color="#f24236"  action={() => {}}/>
      </View>

      <View style={styles.row}>
          <ButtonCalculator text="7" color="#030b19"  action={() => {}}/>
          <ButtonCalculator text="8" color="#030b19"  action={() => {}}/>
          <ButtonCalculator text="9" color="#030b19"  action={() => {}}/>
          <ButtonCalculator text="x" color="#f24236"  action={() => {}}/>
      </View>

      <View style={styles.row}>
          <ButtonCalculator text="4" color="#030b19"  action={() => {}}/>
          <ButtonCalculator text="5" color="#030b19"  action={() => {}}/>
          <ButtonCalculator text="6" color="#030b19"  action={() => {}}/>
          <ButtonCalculator text="-" color="#f24236"  action={() => {}}/>
      </View>

      <View style={styles.row}>
          <ButtonCalculator text="1" color="#030b19"  action={() => {}}/>
          <ButtonCalculator text="2" color="#030b19"  action={() => {}}/>
          <ButtonCalculator text="3" color="#030b19"  action={() => {}}/>
          <ButtonCalculator text="+" color="#f24236"  action={() => {}}/>
      </View>

      <View style={styles.row}>
          <ButtonCalculator text="0" color="#030b19" width={true} action={() => {}}/>
          <ButtonCalculator text="." color="#030b19"  action={() => {}}/>
          <ButtonCalculator text="=" color="#f24236"  action={() => {}}/>
      </View>

    </View>
  );
}