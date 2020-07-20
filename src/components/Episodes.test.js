import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import Episodes from './Episodes';

test("Episodes Renders without errors", () =>{
    render(<Episodes episodes={[]} />)
})