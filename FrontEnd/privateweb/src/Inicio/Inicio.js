import React from 'react'
import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from './TabSelector.tsx';
import './Inicio.css'

function Inicio() {
    const [selectedTab, setSelectedTab] = useTabs(['Subir', 'Editar', 'Registros']);
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
        </nav>
        <div className="p-4">
          <TabPanel hidden={selectedTab !== 'Subir'}>
          Subir
          </TabPanel>
          <TabPanel hidden={selectedTab !== 'Editar'}>
          Editar
          </TabPanel>
          <TabPanel hidden={selectedTab !== 'Registros'}>
          Registros
          </TabPanel>
        </div>
      </>
    );
}

export default Inicio;