import { useEffect } from 'react';
import './App.css'
import Quiz from './components/Quiz';

const App = () => {

  // cuando las propieades que reciben cambian
  // cuando el valor de uno de sus estados cambian
  // cuando el compoennte padre llaama a la funcion re-render
  useEffect(() => {
    console.log('useeffect del app cambiado hoy martes 19 de marzo');
  }, []);

  return (
    <Quiz/>
  );
};

export default App;
