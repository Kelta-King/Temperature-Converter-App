import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground } from 'react-native';
import { appStyle } from './App.style';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import WorkSpace from "./Components/WorkSpace";
import hotBackground from "./assets/hot.png";

export default function App() {
    return (
        <ImageBackground source={hotBackground} style={appStyle.backgroundImage}>
            <SafeAreaProvider>
                <SafeAreaView style={appStyle.root}>
                    <WorkSpace />
                </SafeAreaView>
            </SafeAreaProvider>
        </ImageBackground>
    );
}
