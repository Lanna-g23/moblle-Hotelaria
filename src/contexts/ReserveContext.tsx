import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

export type ReserveItem = {
  roomId: number;
  roomName: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  pricePerNight: number;
  totalPrice: number;
  nights: number;
  selected?: boolean;
};

type ReserveContextProps = {
  pendingReserves: ReserveItem[];
  selectedReserves: ReserveItem[];
  addReserve: (reserve: ReserveItem) => Promise<void>;
  removeReserve: (roomId: number) => Promise<void>;
  toggleSelectReserve: (roomId: number) => void;
  selectAllReserves: () => void;
  clearSelectedReserves: () => void;
  clearAllReserves: () => Promise<void>;
  confirmSelectedReserves: () => Promise<void>;
  loading: boolean;
  totalSelectedPrice: number;
  totalSelectedNights: number;
  totalSelectedGuests: number;
};

const ReserveContext = createContext<ReserveContextProps | undefined>(undefined);

export const ReserveProvider = ({ children }: { children: React.ReactNode }) => {
  const [pendingReserves, setPendingReserves] = useState<ReserveItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPendingReserves();
  }, []);

  const loadPendingReserves = async () => {
    try {
      setLoading(true);
      const savedReserves = await AsyncStorage.getItem('@pending_reserves');
      if (savedReserves) {
        const reserves = JSON.parse(savedReserves);
        const reservesWithSelected = reserves.map((r: ReserveItem) => ({
          ...r,
          selected: !!r.selected
        }));
        setPendingReserves(reservesWithSelected);
      }
    } catch (error) {
      console.error('Erro ao carregar reservas:', error);
    } finally {
      setLoading(false);
    }
  };

  const savePendingReserves = async (reserves: ReserveItem[]) => {
    try {
      await AsyncStorage.setItem('@pending_reserves', JSON.stringify(reserves));
      setPendingReserves(reserves);
    } catch (error) {
      console.error('Erro ao salvar reservas:', error);
    }
  };

  const addReserve = async (reserve: ReserveItem) => {
    try {
      const exists = pendingReserves.some(
        r =>
          r.roomId === reserve.roomId &&
        r.checkIn === reserve.checkIn &&
        r.checkOut === reserve.checkOut);
        
      if (!exists) {
        const newReserve = { ...reserve, selected: true };
        const updatedReserves = [...pendingReserves, newReserve];
        await savePendingReserves(updatedReserves);
      } else {
       toggleSelectReserve(reserve.roomId);
      }
    } catch (error) {
      console.error('Erro ao adicionar reserva:', error);
    }
  };

  const removeReserve = async (roomId: number) => {
    const updatedReserves = pendingReserves.filter(r => r.roomId !== roomId);
    await savePendingReserves(updatedReserves);
  };

  const toggleSelectReserve = async (roomId: number) => {
    const updatedReserves = pendingReserves.map(r => 
      r.roomId === roomId ? { ...r, selected: !r.selected } : r
  );

    await savePendingReserves(updatedReserves);
  };
  
  const selectAllReserves = async () => {
    const updatedReserves = pendingReserves.map(r => ({ ...r, selected: true }));
    await savePendingReserves(updatedReserves);
  };

  const clearSelectedReserves = async () => {
    const updatedReserves = pendingReserves.filter(r => !r.selected);
    await savePendingReserves(updatedReserves);
  };

  const clearAllReserves = async () => {
    await savePendingReserves([]);
  };

  const confirmSelectedReserves = async () => {
    const selected = pendingReserves.filter(r => r.selected);
    
    if (selected.length === 0) return;

    try {

      const remainingReserves = pendingReserves.filter(r => !r.selected);
      await savePendingReserves(remainingReserves);
      
    } catch (error) {
      console.error('Erro ao confirmar reservas:', error);
      throw error;
    }
  };

  // Calcula totais das reservas selecionadas
  const selectedReserves = React.useMemo(
  () => pendingReserves.filter(r => r.selected),
  [pendingReserves]
);

const totalSelectedPrice = React.useMemo(
  () => selectedReserves.reduce((sum, r) => sum + r.totalPrice, 0),
  [selectedReserves]
);

const totalSelectedNights = React.useMemo(
  () => selectedReserves.reduce((sum, r) => sum + r.nights, 0),
  [selectedReserves]
);

const totalSelectedGuests = React.useMemo(
  () => selectedReserves.reduce((sum, r) => sum + r.guests, 0),
  [selectedReserves]
);
  return (
    <ReserveContext.Provider 
      value={{ 
        pendingReserves,
        selectedReserves,
        addReserve,
        removeReserve,
        toggleSelectReserve,
        selectAllReserves,
        clearSelectedReserves,
        clearAllReserves,
        confirmSelectedReserves,
        loading,
        totalSelectedPrice,
        totalSelectedNights,
        totalSelectedGuests
      }}
    >
      {children}
    </ReserveContext.Provider>
  );
};

export const useReserve = () => {
  const context = useContext(ReserveContext);
  if (!context) {
    throw new Error('useReserve deve ser usado dentro de ReserveProvider');
  }
    return context;
};