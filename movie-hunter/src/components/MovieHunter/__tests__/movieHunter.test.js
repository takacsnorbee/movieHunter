import React from 'react';
import { screen } from '@testing-library/react';
import MovieHunter from '../MovieHunter';
import { renderWithState } from '../../../helpers/testHelper';

describe('Artwork component test', () => {
  test('Search btn is rendered', () => {
    renderWithState(<MovieHunter />);
    const searchBtn = screen.getByTestId('searchBtn');
    expect(searchBtn).toBeInTheDocument();
  });
  test('Search input is rendered', () => {
    renderWithState(<MovieHunter />);
    const clearBtn = screen.getByTestId('searchInput');
    expect(clearBtn).toBeInTheDocument();
  });
});
