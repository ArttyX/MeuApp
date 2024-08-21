import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, ScrollView} from "react-native"
import StyledButton from "../components/button"
import Section from "../components/section"

const handleLogin = () => {
    router.replace('./');
}

export default function Home() {
    return (
        <>
    <ScrollView contentContainerStyle={styles.container}>
            <Section
            imageSource={require('../assets/images/Knight.png') }
            text="O cavaleiro é a classe mais comum dos RPGs, simples porém eficiente em combater os inimigos e se manter na linha de frente!"
            />
            <Section
            imageSource={require('../assets/images/Ranger.png')}
            text="O Arqueiro é uma classe para se manter na retaguarda, enquanto oferece plena visão dos campos de batalha e finaliza ameaças poderosas com sua precisão mortal!"
            />
            <Section
            imageSource={require('../assets/images/Mage.png')}
            text="O mago é uma classe complexa para mentes criativas. Compensa a falta de atributos físicos com mágias poderosas e com muita utilidade na maioria dos cenários!"
            />
    </ScrollView>
            <StyledButton text="Voltar ao Login" onClick={handleLogin} color='red'></StyledButton>
            <StatusBar style="auto" 
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 50, 
    },
});
