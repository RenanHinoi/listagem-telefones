import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Contatos from './componentes/contatos';
const contatos = [
  {id:"1",nome:" Renan de Andrade Hinoi",Telefone: " (11) 95709-3174"},
  {id:"2",nome:" Luara Michelle da Silva",Telefone: " (13) 97898-6784"},
  {id:"3",nome:" Leonice Timoteo de Andrade Hinoi",Telefone: " (11) 96890-9881"},
  {id:"4",nome:" Eduardo Candido Hinoi",Telefone: " (11) 95787-5684"},
  {id:"5",nome:" Rian de Andrade Hinoi",Telefone: " (13) 96874-5647"},
  {id:"6",nome:" João Vitor de Andrade Hinoi",Telefone: " (13) 97898-6784"},
  {id:"7",nome:" Vera Lucia Cruz Andrade",Telefone: " (11) 9784-8745"},
  {id:"8",nome:" Antonio Timote de Andrade",Telefone: " (11) 96578-5412"},
  {id:"9",nome:" Renan de Andrade Hinoi",Telefone: " (11) 95709-3174"},
  {id:"10",nome:" Luara Michelle da Silva",Telefone: " (13) 97898-6784"},
  {id:"11",nome:" Leonice Timoteo de Andrade Hinoi",Telefone: " (11) 96890-9881"},
  {id:"12",nome:" Eduardo Candido Hinoi",Telefone: " (11) 95787-5684"},
  {id:"13",nome:" Rian de Andrade Hinoi",Telefone: " (13) 96874-5647"},
  {id:"14",nome:" João Vitor de Andrade Hinoi",Telefone: " (13) 97898-6784"},
  {id:"15",nome:" Vera Lucia Cruz Andrade",Telefone: " (11) 9784-8745"},
  {id:"16",nome:" Antonio Timote de Andrade",Telefone: " (11) 96578-5412"}
]

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>Lista de Contatos</Text>

    <View style={styles.lista}>
    <FlatList
      data={contatos}
      keyExtractor={item=>item.id}
      renderItem={({item}) => <Contatos telefone= {item.Telefone} nome={item.nome} />}
    />
    </View>

     
      

      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F4F4F',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  header: {
    backgroundColor:'white',
    marginBottom: 35,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: 50,
    borderRadius: 20,
    color: 'balck',
    fontSize: 30,
    marginTop: -150,
    borderWidth: 3, 
    borderColor: 'black',
  },

  lista:{
    height: 500,
    width: 350,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 3, 
    borderColor: 'black', 
    
  }

});
