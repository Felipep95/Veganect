import * as React from 'react';
import { View, Text, Modal } from 'react-native';
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';

import styles from './styles';

export interface AlertCustomProps {
    title?: string;
    visible: boolean;
    children:any;
    onConfirm();
    onCancel();
}

export function AlertCustom (props: AlertCustomProps) {
    return (
     <Modal 
         animationType="slide"
         transparent
         visible={props.visible}
         >
        <View style={styles.modal}>  
             <View style={styles.container}> 
                 {props.title  && <Text style={styles.title}>{props.title}</Text>}
                 {props.children}
                <View style={styles.btns}>
                     <Button title="Confirmar" onPress={props.onConfirm} type="clear" />
                     <Button title="Cancelar" onPress={props.onCancel} type="clear" />
                 </View>
            </View>
         </View>
     </Modal>
     );
 }

 export interface AlertInputProps {
    onChangeText:any;
    placeholder: string;
    onBlur:any
    error?:any;
    password?: boolean;
    touched?: any;
    noBorder?: boolean;
}
 
 export function AlertInput (props: AlertInputProps) {
    return (
     <View style={[styles.input, (props.noBorder ? {} : styles.borderBottom)]}>
        <TextInput placeholder={props.placeholder} onChangeText={props.onChangeText} onBlur={props.onBlur} secureTextEntry={props.password} />
        {props.touched && props.error && <Text style={styles.erro}>{props.error}</Text>}
     </View>
     );
}

