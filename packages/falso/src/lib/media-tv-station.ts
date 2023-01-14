import { FakeOptions, fake } from './core/core';
import { data } from './media-tv-station.json';
/**
 * Generate a random media TV station.
 *
 * @category Media TV Station
 *
 * @example
 *
 * randMediaTvStation()
 *
 * @example
 *
 * randMediaTvStation({ length: 10 })
 *
 */
export function randMediaTvStation<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
