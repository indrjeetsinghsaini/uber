import React, { createContext } from 'react';
import { io } from 'socket.io-client';

// 1. Use the VITE_API_URL environment variable we've been discussing.
const ENDPOINT = import.meta.env.VITE_API_URL;

// 2. Initialize the socket. The variable should be passed directly.
//    I've also added transports for better connection reliability.
export const socket = io(ENDPOINT, {
    transports: ['websocket', 'polling']
});

// 3. Create the context.
export const SocketContext = createContext();

// 4. Create the provider component that will wrap your app.
export const SocketProvider = ({ children }) => {

    // You can keep these logs to check for a connection in the browser console.
    socket.on('connect', () => {
        console.log(`✅ Socket connected successfully to: ${ENDPOINT}`);
    });

    socket.on('disconnect', () => {
        console.log('Socket disconnected.');
    });

    // 5. This was the missing part: The provider must return the SocketContext.Provider
    //    This makes the 'socket' object available to any child component.
    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    );
};
