import React, { createContext, useContext, useState, ReactNode } from 'react';

type UserProfileContextType = {
  selectedNavItem: string;
  setSelectedNavItem: React.Dispatch<React.SetStateAction<string>>;
};

const UserProfileContext = createContext<UserProfileContextType | undefined>(undefined);

type UserProfileProviderProps = {
  children: ReactNode;
};

export const UserProfileProvider: React.FC<UserProfileProviderProps> = ({ children }) => {
  const [selectedNavItem, setSelectedNavItem] = useState<string>('setting');

  return (
    <UserProfileContext.Provider value={{ selectedNavItem, setSelectedNavItem }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export const useUserProfile = () => {
  const context = useContext(UserProfileContext);
  if (context === undefined) {
    throw new Error('useUserProfile must be used within a UserProfileProvider');
  }
  return context;
};