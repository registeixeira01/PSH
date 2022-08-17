import React from 'react';
import reactDom from 'react-dom';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

export default function Welcome() {
    return (
        <View style={styles.container}>

        <View style={styles.containerLogo}>
            <Image
            source={require('../../assets/logo.png')}
            style={{ width: '100%' }}
            resizeMode="contain"
            />
        </View>

        <View style={styles.containerForms}>
            <Text style={styles.title}>Juntos por uma causa, aqui sua ajuda vale muito!</Text>
            <Text style={styles.text}>Faça o login para começar</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
        </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#1E90FF'
    },
    containerLogo:{
        flex: 2,
        backgroundColor: '#1E90FF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForms: {
        flex:1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    }
})

