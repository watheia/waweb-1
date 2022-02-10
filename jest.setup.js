require('dotenv').config();
require('jest-fetch-mock').enableMocks();

global.___loader = {
  enqueue: jest.fn(),
};
