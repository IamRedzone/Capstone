import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import React from 'react';

// Mock props
const mockAvailableTimes = ['09:00', '10:00', '11:00'];
const mockDispatch = jest.fn();

test('renders "Book Now" text in the BookingForm component', () => {
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);

  // Find the element containing the text "Book Now"
  const bookNowText = screen.getByText(/book now/i);
  
  // Assert that the text exists in the document
  expect(bookNowText).toBeInTheDocument();
});


