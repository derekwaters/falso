import { randMediaOutlet } from '../lib/media-outlet';

describe('outlet', () => {
  it('should create one outlet', () => {
    expect(typeof randMediaOutlet()).toBe('string');
  });
});
