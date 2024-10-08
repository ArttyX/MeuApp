import { View, Image, StyleSheet } from "react-native"
import { router } from "expo-router"
import StyledButton from "../components/button"
import StyledInput from "../components/input"
import { StatusBar } from "expo-status-bar"
import React from "react"
import { Button, ButtonText } from "@/components/ui/button"
import { Text } from "@/components/ui/text"

const handleLogin = () => {
    router.replace('home');
}

export default function Login() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/D20.png')}
                style={styles.logo}
            />
            <Text style={styles.title} bold={true}>RPG Classes Overview</Text>
            <StyledInput
                placeholder="E-mail"
                onChangeText={(text) => console.log(text)}
            />
            <StyledInput
                placeholder="Senha"
                onChangeText={(text) => console.log(text)}
            />
            <Button size='md' variant='solid' onPress={handleLogin} className='bg-red-500'>
                <ButtonText>Login</ButtonText>
            </Button>     
            {/*<StyledButton text="Voltar ao Login" onClick={handleLogin} color='red'></StyledButton>*/}
            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center",
        padding: 20, 
    },
    logo: {
        width: 100, 
        height: 100, 
        marginBottom: 20, 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});
