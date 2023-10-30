import { Pressable, Switch, Text, View, ScrollView, Alert } from 'react-native';
import { lightStyle, darkStyle } from './styles/Styles.js'
import NumericInput from 'react-native-numeric-input'
import { useState } from 'react';
import { RadioButton, TextInput } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons'


export default function App() {

  const [darkTheme, setDarkTheme] = useState(false)
  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [hours, setHours] = useState(0)
  const [gender, setGender] = useState(0.6)
  const [result, setResult] = useState()
  const [icon, setIcon] = useState([])

  const litres = Number(bottles) * 0.33
  const grams = litres * 8 * 4.5
  const burning = weight / 10
  const gramsLeft = grams - (burning * hours)
  const totalResult = (gramsLeft / (weight * gender)).toFixed(2)


  const Calculate = () => {

    if (weight) {
      if (totalResult === 0) {
        setIcon({name: 'smile', color: 'green'})
      } else if (totalResult < 0.5) {
        setIcon({name: 'meh', color: 'yellow'})
      } else {
        setIcon({name: 'frown', color: 'red'})
      }
      setResult('Your blood alcohol level: ' + (totalResult < 0 ? 0 : totalResult))
    } else {
      Alert.alert('Oops!', 'You have to set weight')
    }

  }

  return (
    <ScrollView contentContainerStyle={darkTheme ? darkStyle.container : lightStyle.container}>
      <Switch value={darkTheme} onValueChange={() => setDarkTheme(previousState => !previousState)} />
      <Text style={darkTheme ? darkStyle.header : lightStyle.header}>Alcometer</Text>
      <TextInput label='Weight' mode='outlined' style={lightStyle.textInput} keyboardType='numeric' onChangeText={setWeight} />
      <View style={lightStyle.view}>
        <Text style={darkTheme ? darkStyle.text : lightStyle.text}>Bottles</Text>
        <NumericInput

          rounded
          value={bottles}
          onChange={b => setBottles(b)}
          minValue={0} />
      </View>
      <View style={lightStyle.view}>
        <Text style={darkTheme ? darkStyle.text : lightStyle.text}>Hours</Text>
        <NumericInput
          rounded
          value={hours}
          onChange={h => setHours(h)}
          minValue={0} />
      </View>

      <RadioButton.Group style={lightStyle.view} onValueChange={g => setGender(Number(g))} value={gender}>
        <View style={lightStyle.radio}>
          <RadioButton value={0.6} />
          <Text style={darkTheme ? darkStyle.text : lightStyle.text}>Female</Text>
        </View>
        <View style={lightStyle.radio}>
          <RadioButton value={0.7} />
          <Text style={darkTheme ? darkStyle.text : lightStyle.text}>Male</Text>
        </View>
      </RadioButton.Group>

      <View>
        <Pressable onPress={() => Calculate()}>
          <Text style={darkTheme ? darkStyle.button : lightStyle.button}>CALCULATE</Text>
        </Pressable>
      </View>

      <View style={lightStyle.view}>
        <Text style={darkTheme ? darkStyle.text : lightStyle.text}>{result}</Text>
        <FontAwesome5 name={icon.name} size={50} color={icon.color}/>
      </View>
    </ScrollView>
  );

}
