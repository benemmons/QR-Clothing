import React from 'react';
import {Page} from '@shopify/polaris';

import App from '../App';

import {mountWithAppProvider} from './utils/enzyme';

test('renders page', () => {
  const wrapper = mountWithAppProvider(<App />);
  expect(wrapper.find(Page).exists()).toBe(true);
});
