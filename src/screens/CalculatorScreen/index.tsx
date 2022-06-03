import React, { useState } from 'react';
import { View, Text, Image} from 'react-native';
import { ButtonCalculator } from '../../components/ButtonCalculator';

import { styles } from '../../theme';

export const CalculatorScreen = () => {
  const [previousNumber, setPreviousNumber] = useState('0');
  const [ number, setNumber ] = useState( '0' );

  const clear = () => {
    setNumber( '0' );
  }

  const addNumber = ( numberText: string ) => {

    //não aceitar dois pontos
      if( number.includes('.') && numberText === '.' ) return; 
      
      //se o número for 0 ou -0, usuário não pode digitar mais nada
      if( number.startsWith('0') || number.startsWith('-0')) {
        
        // ponto decimal
        if( numberText === '.' ) {
          setNumber(  number + numberText );

          //avaliar se tem um ponto e numero atual
         } else if (numberText === '0' && number.includes('.')) {
              setNumber( number + numberText );

          //avaliar se é diferente de zero e não tem um ponto
         } else if (numberText !== '0' && !number.includes('.')) {
              setNumber( numberText );

            //0000.0
         } else if( numberText === '0' && !number.includes('.') ) {
              setNumber( number + numberText );

              //qualquer numero depois do '0.'
         } else {
              setNumber( number + numberText );
         }
        
      } else {
        setNumber( number + numberText );
      }
  }

  const positiveNegative = () => {
    if( number.includes( '-' ) ) {
      setNumber( number.replace( '-', '' ));
    } else {
      setNumber( '-' + number );
    }
  }

  const btnDelete = () => {
    let negativo = '';
    let numeroTemp = number;
    if ( number.includes('-') ) {
        negativo = '-';
        numeroTemp = number.substring(1);
    }
    if ( numeroTemp.length > 1 ) {
        setNumber( negativo + numeroTemp.slice(0,-1) );
    } else {
        setNumber('0');
    }
  }

  return (
    <View style={styles.calculatorContainer}>
      <View style={styles.viewimage}>
        <Image
          style={styles.image}
          source={require('../../assets/leaomosaico.png')}
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
          <ButtonCalculator text="C" color="#1e5b9c"  action={ clear }/>
          <ButtonCalculator text="+/-" color="#1e5b9c"  action={ positiveNegative }/>
          <ButtonCalculator text="del" color="#1e5b9c"  action={ btnDelete }/>
          <ButtonCalculator text="÷" color="#f24236"  action={() => {}}/>
      </View>

      <View style={styles.row}>
          <ButtonCalculator text="7" color="#030b19"  action={ addNumber }/>
          <ButtonCalculator text="8" color="#030b19"  action={ addNumber }/>
          <ButtonCalculator text="9" color="#030b19"  action={ addNumber }/>
          <ButtonCalculator text="x" color="#f24236"  action={() => {}}/>
      </View>

      <View style={styles.row}>
          <ButtonCalculator text="4" color="#030b19"  action={ addNumber }/>
          <ButtonCalculator text="5" color="#030b19"  action={ addNumber }/>
          <ButtonCalculator text="6" color="#030b19"  action={ addNumber }/>
          <ButtonCalculator text="-" color="#f24236"  action={() => {}}/>
      </View>

      <View style={styles.row}>
          <ButtonCalculator text="1" color="#030b19"  action={ addNumber }/>
          <ButtonCalculator text="2" color="#030b19"  action={ addNumber }/>
          <ButtonCalculator text="3" color="#030b19"  action={ addNumber }/>
          <ButtonCalculator text="+" color="#f24236"  action={() => {}}/>
      </View>

      <View style={styles.row}>
          <ButtonCalculator text="0" color="#030b19" width={true} action={ addNumber }/>
          <ButtonCalculator text="." color="#030b19"  action={ addNumber }/>
          <ButtonCalculator text="=" color="#f24236"  action={() => {}}/>
      </View>

    </View>
  );
}