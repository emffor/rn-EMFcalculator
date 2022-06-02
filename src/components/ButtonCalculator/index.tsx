import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../theme';

interface Props {
    text:string;
    color?: string;
    width?: boolean;
    action: ( numberText: string ) => void;
}

export const ButtonCalculator = ({ 
    text, 
    color = '#2D2D2D', 
    width = false, 
    action
 }: Props) => {
    return (
        <TouchableOpacity
            onPress={ () => action( text ) }
        >
            <View style={{ 
                ...styles.button ,
                backgroundColor: color,
                width: ( width ) ? 180 : 80
            }}>
                <Text style={{ 
                    ...styles.buttonText,
                    color: ( color === '#9B9B9B' ) ? 'black' : 'white',
                    paddingRight: ( width === true ) ? 95 : 10
                }}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}