import React, { useRef, useState } from 'react';

enum Operators {
    sum, sub, mul, div
}

export const useCalculator = () => {
    const [previousNumber, setPreviousNumber] = useState('0');
    const [ number, setNumber ] = useState( '0' );
  
    const lastOperation = useRef<Operators>();
  
    const handleClear = () => {
      setNumber( '0' );
      setPreviousNumber( '0' );
    }
  
    const handleAddNumber = ( numberText: string ) => {
  
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
  
    const handlePositiveNegative = () => {
      if( number.includes( '-' ) ) {
        setNumber( number.replace( '-', '' ));
      } else {
        setNumber( '-' + number );
      }
    }
  
    const handleBtnDelete = () => {
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
  
    const handleChangeNumberPrevious = () => {
      //endsWith() retorna true se o final da string for igual ao parâmetro passado
      if( number.endsWith('.') ) {
        //slice retorna uma cópia da string, começando do índice 0 até o índice -1
        setPreviousNumber( number.slice(0,-1) );
      } else {
        setPreviousNumber( number );
      }
      setNumber('0');
    }
  
    const handleDiv = () => {
      handleChangeNumberPrevious();
      lastOperation.current = Operators.div;
    }
  
    const handleMul = () => {
      handleChangeNumberPrevious();
      lastOperation.current = Operators.mul;
    }
  
    const handleSub = () => {
      handleChangeNumberPrevious();
      lastOperation.current = Operators.sub;
    }
  
    const handleSum = () => {
      handleChangeNumberPrevious();
      lastOperation.current = Operators.sum;
    }
  
    const calculate = () => {
  
      const num1 = Number( number );
      const num2 = Number( previousNumber );
  
      switch ( lastOperation.current ) {
  
          case Operators.sum:
              setNumber( `${ num1 + num2 }` );
              break;
  
          case Operators.sub:
              setNumber( `${ num2 - num1 }` );
              break;
  
          case Operators.mul:
              setNumber( `${ num1 * num2 }` );
              break;
  
          case Operators.div:
              setNumber( `${ num2 / num1 }` );
              break;
      }
      setPreviousNumber( '0' );
  }

    return {
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
    }
}