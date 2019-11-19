import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  // __DEV__ executa enquanto estiver em modo de desenvolvimento
  const tron = Reactotron.configure() // {host: '192.168.1.3', apenas se estiver utilizando USB}
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
