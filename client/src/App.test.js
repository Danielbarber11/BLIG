import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue({ message: 'Hello from the backend!' }),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('renders the backend message', async () => {
  render(<App />);
  const messageElement = await screen.findByText(/Hello from the backend!/i);
  expect(messageElement).toBeInTheDocument();
});