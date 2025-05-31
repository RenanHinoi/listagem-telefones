import {View, Text, StyleSheet,} from 'react-native'

interface propsContato{
    nome:string,
    telefone:string
}

export default function Contatos({nome, telefone}: propsContato){

    return(
        <>
            <View style={styles.cartao}>
                <Text style={styles.nome}>Nome:{nome}</Text>
                
                <Text style={styles.telefone}>Telefone:{telefone} </Text>
                

            </View>

            
        </>
        
    )
}
const styles = StyleSheet.create({
    cartao: {
    backgroundColor: '#6C7B8B', 
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 50,
    borderRadius: 25,
    marginBottom: 0,
    marginTop: 20,
  },

    nome:{
        color: '#c11b1b',
        fontSize: 15,
        
    },

    telefone:{
        color: 'white',
    }
});