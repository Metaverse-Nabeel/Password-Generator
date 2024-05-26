import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

//Form validation 
import * as Yup from 'yup'

const PasswordScehma = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be a minimum of four characters')
    .max(16, 'Should be a maximum of sixteen characters')
    .required('Length is required')
})

const App = () => {
  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)
  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const gereratePasswordString = (passwordLength: number) => {
    let charactersList = '';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_-+=';

    if (upperCase) {
      charactersList += upperCaseChars;
    }
    if (lowerCase) {
      charactersList += lowerCaseChars;
    }
    if (numbers) {
      charactersList += digitChars;
    }
    if (symbols) {
      charactersList += specialChars;
    }

    const passwordResult = createPassword(charactersList, passwordLength);
    setPassword(passwordResult);
    setIsPassGenerated(true);
  }

  const createPassword = (characters: string, passwordLength: number) => {
    let result = ''
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex);
    }
    return result;
  }

  const resetPassword = () => {
    setPassword('');
    setIsPassGenerated(false);
    setUpperCase(false);
    setLowerCase(true);
    setNumbers(false);
    setSymbols(false);
  }

  return (
    <View>
      <Text className='my-2 text-center text-2xl font-bold text-[#000]'>Password Generator App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default App