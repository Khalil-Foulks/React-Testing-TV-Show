import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test("App renders without errors", () => {
    render(<App/>);
});