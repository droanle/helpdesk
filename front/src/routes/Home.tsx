import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from '../views/pages/home/home';
import Dashboard from '../views/pages/dashboard/dashboard';
import Usuarios from '../views/pages/usuarios/usuarios';
import Graficos from '../views/pages/graficos/graficos';
import Arquivos from '../views/pages/arquivos/arquivos';
import Configuracoes from '../views/pages/configuracoes/configuracoes';



const HomeRout = () => (
   <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Usuarios" element={<Usuarios />} />
      <Route path="/Graficos" element={<Graficos />} />
      <Route path="/Arquivos" element={<Arquivos />} />
      <Route path="/Configuracoes" element={<Configuracoes />} />
      {/* <Route path="/notificações" element={<Notificações />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/favoritos" element={<Favorito />} />
      */}
   </Routes>

);

export default HomeRout;