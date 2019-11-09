import React from 'react';
import { StatusBar } from 'react-native'; // resp. por mudar a cor do relogio e demais coisas do aparelho.

import './config/ReactotronConfig';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}
