import { randMediaTvStation } from '../lib/media-tv-station';
import { randMediaRadioStation } from '../lib/media-radio-station';
import { randMediaNewspaper } from '../lib/media-newspaper';
import { randMediaMagazine } from '../lib/media-magazine';
import { randMediaOwner } from '../lib/media-owner';

describe('tv station', () => {
  it('should create one tv station', () => {
    expect(typeof randMediaTvStation()).toBe('string');
  });
});

describe('radio station', () => {
  it('should create one radio station', () => {
    expect(typeof randMediaRadioStation()).toBe('string');
  });
});

describe('newspaper', () => {
  it('should create one newspaper', () => {
    expect(typeof randMediaNewspaper()).toBe('string');
  });
});

describe('magazine', () => {
  it('should create one magazine', () => {
    expect(typeof randMediaMagazine()).toBe('string');
  });
});

describe('media owner', () => {
  it('should create one media owner', () => {
    expect(typeof randMediaOwner()).toBe('string');
  });
});
