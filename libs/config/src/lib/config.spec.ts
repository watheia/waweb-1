import config from './config.json';

describe('waweb/config', () => {
  it('should render successfully', () => {
    expect(config.legalName).toEqual('Watheia Labs, LLC');
  });
});
