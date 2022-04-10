import {  render, screen } from '@testing-library/react';

import Home from './Home';


it('should render the component onto the screen', () => {
    render(<Home />);
    expect(screen.getByTestId('add-word-input')).toBeInTheDocument();
   
});