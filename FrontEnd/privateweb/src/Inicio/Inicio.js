import React, { useState } from 'react'
import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from './TabSelector.tsx';
import './Inicio.css'
import Subir from './Subir/Subir';
import Editar from './Editar/Editar';
import Registros from './Registros/Registros';

const Inicio = (props) => {
    const [selectedTab, setSelectedTab] = useTabs(['Subir', 'Editar', 'Registros', 'Salir']);
    return (
        <>
        <nav className="flex border-b border-gray-300">
          <TabSelector
            isActive={selectedTab === 'Subir'}
            onClick={() => setSelectedTab('Subir')}
          >
            Subir
          </TabSelector>
          <TabSelector
            isActive={selectedTab === 'Editar'}
            onClick={() => setSelectedTab('Editar')}
          >
            Editar
          </TabSelector>
          <TabSelector
            isActive={selectedTab === 'Registros'}
            onClick={() => setSelectedTab('Registros')}
          >
            Registros
          </TabSelector>
          <TabSelector
            isActive={selectedTab === 'Salir'}
            onClick={() => props.isLogged(false)}
          >
            Salir
          </TabSelector>
        </nav>
        <div className="p-4">
          <TabPanel hidden={selectedTab !== 'Subir'}>
          <Subir/>
          </TabPanel>
          <TabPanel hidden={selectedTab !== 'Editar'}>
          <Editar/>
          </TabPanel>
          <TabPanel hidden={selectedTab !== 'Registros'}>
          <Registros/>
          </TabPanel>
        </div>
      </>
    );
}

export default Inicio;