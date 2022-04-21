import React from 'react'
import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from './TabSelector.tsx';
import './Inicio.css'
import Fotos from './Fotos/Fotos';
import Detector from './Detector/Detector';
import Chatbot_spa from './Chatbots/Chatbot_spa';
import Chatbot_eng from './Chatbots/Chatbot_eng';
import Chatbot_rus from './Chatbots/Chatbot_rus';
import Chatbot_jap from './Chatbots/Chatbot_jap';

function Inicio() {
    const [selectedTab, setSelectedTab] = useTabs(['detector', 'fotos', 'chatbot']);
    const [selectedCompanyTab, setSelectedCompanyTab] = useTabs([
      'Chatbot_spa',
      'Chatbot_eng',
      'Chatbot_rus',
      'Chatbot_jap',
    ]);
    return (
        <>
        <nav className="flex border-b border-gray-300">
          <TabSelector
            isActive={selectedTab === 'detector'}
            onClick={() => setSelectedTab('detector')}
          >
            Detector
          </TabSelector>
          <TabSelector
            isActive={selectedTab === 'fotos'}
            onClick={() => setSelectedTab('fotos')}
          >
            Criminales
          </TabSelector>
          <TabSelector
            isActive={selectedTab === 'chatbot'}
            onClick={() => setSelectedTab('chatbot')}
          >
            ChatBots
          </TabSelector>
        </nav>
        <div className="p-4">
          <TabPanel hidden={selectedTab !== 'detector'}>
            <Detector/>
          </TabPanel>
          <TabPanel hidden={selectedTab !== 'fotos'}>
            <Fotos/>
          </TabPanel>
          <TabPanel hidden={selectedTab !== 'chatbot'}>
            <nav className="flex border-b border-gray-300">
              <TabSelector
                isActive={selectedCompanyTab === 'Chatbot_spa'}
                onClick={() => setSelectedCompanyTab('Chatbot_spa')}
              >
                Español
              </TabSelector>
              <TabSelector
                isActive={selectedCompanyTab === 'Chatbot_eng'}
                onClick={() => setSelectedCompanyTab('Chatbot_eng')}
              >
                English
              </TabSelector>
              <TabSelector
                isActive={selectedCompanyTab === 'Chatbot_rus'}
                onClick={() => setSelectedCompanyTab('Chatbot_rus')}
              >
                Русский
              </TabSelector>
              <TabSelector
                isActive={selectedCompanyTab === 'Chatbot_jap'}
                onClick={() => setSelectedCompanyTab('Chatbot_jap')}
              >
                日本
              </TabSelector>
            </nav>
            <div className="p-4">
              <TabPanel hidden={selectedCompanyTab !== 'Chatbot_spa'}>
                <Chatbot_spa/>
              </TabPanel>
              <TabPanel hidden={selectedCompanyTab !== 'Chatbot_eng'}>
                <Chatbot_eng/>
              </TabPanel>
              <TabPanel hidden={selectedCompanyTab !== 'Chatbot_rus'}>
                <Chatbot_rus/>
              </TabPanel>
              <TabPanel hidden={selectedCompanyTab !== 'Chatbot_jap'}>
                <Chatbot_jap/>
              </TabPanel>
            </div>
          </TabPanel>
        </div>
      </>
    );
}

export default Inicio;