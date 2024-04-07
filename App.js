import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground } from 'react-native';
import { appStyle } from './App.style';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import WorkSpace from "./Components/WorkSpace";
import hotBackground from "./assets/hot.png";
import coldBackground from "./assets/cold.png";
import { useEffect, useState } from 'react';

export default function App() {
    const [isCold, setIsCold] = useState(false);
    return (
        <ImageBackground source={isCold ? coldBackground : hotBackground} style={appStyle.backgroundImage}>
            <SafeAreaProvider>
                <SafeAreaView style={appStyle.root}>
                    <WorkSpace isCold={isCold} setIsCold={setIsCold} />
                </SafeAreaView>
            </SafeAreaProvider>
        </ImageBackground>
    );
}
