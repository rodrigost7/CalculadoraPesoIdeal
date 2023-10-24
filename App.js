import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState(''); //iniciando a variavel peso com valor branco
  const [altura, setAltura] = useState('');
  const [sexo, setSexo] = useState('');
  const [resposta, setResposta]=useState([]); 
  
  function executarCalculos() {
    //const alt = altura / 100;
    //const imc = peso / (alt * alt);
    //const imcFinal = parseFloat(imc.toFixed(2));
    //const pesoIdeal = 0;
    
    
    if (sexo === 'm') { //--> MASCULINO
        const pesoIdealM = 52+(0.75*(altura-152.4)); //calculo do peso ideal
        const PesoIdealAjustado=((peso-pesoIdealM)*0.25)+pesoIdealM; //CALCULO PESO IDEAL AJUSTADO
        setResposta('Peso Ideal: '+pesoIdealM.toFixed(2)+ ' Kg \n'+'Peso Ajustado: '+PesoIdealAjustado.toFixed(2)+' Kg'); //ARMAZENANDO RESPOSTA
    }
    if (sexo==='f') { //--> FEMININO
        const pesoIdealF = 52+(0.67*(altura-152.4)); //CALCULO PESO IDEAL
        const PesoIdealAjustado=((peso-pesoIdealF)*0.25)+pesoIdealF; //CALCULO PESO IDEAL AJUSTADO
        setResposta('Peso Ideal: '+pesoIdealF.toFixed(2)+ ' Kg \n'+'Peso Ajustado: '+PesoIdealAjustado.toFixed(2)+' Kg'); //ARMAZENANDO RESPOSTA
    }
    setAltura(''); /** LIMPANDO OS DADOS DOS IMPUTS */
    setPeso('');
    setSexo('');

  }
  
  return (
    <View>
      <Text style={estilo.title}>Calculadora Peso Ideal</Text>
      <TextInput
        style={estilo.input}
        value={peso}         //valor dentro do componente
        onChangeText={setPeso} //toda vez que o campo mudar ele é salvo
        placeholder="Peso (Kg)"
        keyboardType='numeric'
      />
      <TextInput
        style={estilo.input}
        value={altura}
        onChangeText={setAltura}
        placeholder="Altura (cm)"
        keyboardType='numeric'
      />
      <TextInput
        style={estilo.input}
        value={sexo}
        onChangeText={setSexo}
        placeholder="Sexo (m/f)"
        keyboardType='ascii-capable'
      />
      <TouchableOpacity style={estilo.botao}
        onPress={executarCalculos}>
        <Text style={estilo.textBotao}>Calcular</Text>
      </TouchableOpacity>
      <Text style={estilo.Respota}>
        {resposta}        
      </Text>

    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 30
  },
  input: {
    backgroundColor: '#DDD',
    borderRadius: 5,
    margin: 15,
    padding: 10,
    color: '#000',
    fontSize: 23
  },
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#41AEF4',
    borderRadius: 5,
    padding: 10
  },
  textBotao: {
    color: '#fff',
    fontSize: 25,
  },
  Respota:{
    marginLeft: 15,
    fontSize: 18,
  }
});