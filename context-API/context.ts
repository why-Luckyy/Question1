import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CounterContextType {
  count: number;
  step: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  updateStep: (val: number) => void;
}
const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number>(0);
  const [step, setStep] = useState<number>(1); 
  const increment = () => setCount((prev) => prev + step);
  const decrement = () => setCount((prev) => prev - step);
  
  const reset = () => {
    setCount(0);
    setStep(1);
  };

  const updateStep = (val: number) => setStep(val);
  return (
    <CounterContext.Provider value={{ count, step, increment, decrement, reset, updateStep }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) throw new Error("useCounter must be used within CounterProvider");
  return context;
};