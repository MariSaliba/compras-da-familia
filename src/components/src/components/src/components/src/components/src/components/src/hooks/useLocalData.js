import { useState, useEffect } from 'react';

const STORAGE_KEY = 'compras-familia-data';

// Dados iniciais (seed)
const INITIAL_DATA = {
  expenses: [
    {
      id: 'exp-1',
      description: 'Compras do mercado - Janeiro',
      amount: 450.00,
      date: '2025-01-15',
      status: 'approved',
      createdAt: '2025-01-15T10:30:00Z',
    },
    {
      id: 'exp-2',
      description: 'Farmácia - Remédios',
      amount: 120.50,
      date: '2025-01-20',
      status: 'approved',
      createdAt: '2025-01-20T14:20:00Z',
    },
    {
      id: 'exp-3',
      description: 'Feira - Frutas e Verduras',
      amount: 85.00,
      date: '2025-01-28',
      status: 'pending',
      createdAt: '2025-01-28T08:15:00Z',
    },
  ],
};

export function useLocalData() {
  const [data, setData] = useState(INITIAL_DATA);

  // Carregar dados do localStorage na inicialização
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setData(parsed);
      } else {
        // Se não houver dados salvos, usar os iniciais
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DATA));
      }
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    }
  }, []);

  // Função para salvar dados
  const saveData = (newData) => {
    try {
      setData(newData);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
    }
  };

  return [data, saveData];
}
