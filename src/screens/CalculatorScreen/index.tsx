import React from 'react';
import { View, Text, Image} from 'react-native';
import { useCalculator } from '../../hooks';

import { styles } from '../../theme';

import { ButtonCalculator } from '../../components/ButtonCalculator';

export const CalculatorScreen = () => {

  const { 
    number,
    previousNumber,
    handleClear,
    handleAddNumber,
    handlePositiveNegative,
    handleBtnDelete,
    handleDiv,
    handleMul,
    handleSub,
    handleSum,
    calculate
   } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      <View style={styles.viewimage}>
        <Image
          style={styles.image}
          source={require('../../assets/mosaico.png')}
        />
      </View>

        <Text style={styles.resultSmall}>{ previousNumber }</Text>
        <Text 
          style={styles.result}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          { number }
        </Text>

      <View style={styles.row}>
          <ButtonCalculator text="C" color="#1e5b9c"  action={ handleClear }/>
          <ButtonCalculator text="+/-" color="#1e5b9c"  action={ handlePositiveNegative }/>
          <ButtonCalculator text="del" color="#1e5b9c"  action={ handleBtnDelete }/>
          <ButtonCalculator text="÷" color="#ec1638"  action={ handleDiv }/>
      </View>

      <View style={styles.row}>
          <ButtonCalculator text="7" color="#030b19"  action={ handleAddNumber }/>
          <ButtonCalculator text="8" color="#030b19"  action={ handleAddNumber }/>
          <ButtonCalculator text="9" color="#030b19"  action={ handleAddNumber }/>
          <ButtonCalculator text="x" color="#ec1638"  action={ handleMul }/>
      </View>

      <View style={styles.row}>
          <ButtonCalculator text="4" color="#030b19"  action={ handleAddNumber }/>
          <ButtonCalculator text="5" color="#030b19"  action={ handleAddNumber }/>
          <ButtonCalculator text="6" color="#030b19"  action={ handleAddNumber }/>
          <ButtonCalculator text="-" color="#ec1638"  action={ handleSub }/>
      </View>

      <View style={styles.row}>
          <ButtonCalculator text="1" color="#030b19"  action={ handleAddNumber }/>
          <ButtonCalculator text="2" color="#030b19"  action={ handleAddNumber }/>
          <ButtonCalculator text="3" color="#030b19"  action={ handleAddNumber }/>
          <ButtonCalculator text="+" color="#ec1638"  action={ handleSum }/>
      </View>

      <View style={styles.row}>
          <ButtonCalculator text="0" color="#030b19" width={true} action={ handleAddNumber }/>
          <ButtonCalculator text="." color="#030b19"  action={ handleAddNumber }/>
          <ButtonCalculator text="=" color="#ec1638"  action={ calculate }/>
      </View>

    </View>
  );
}