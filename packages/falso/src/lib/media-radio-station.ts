import { FakeOptions, fake } from './core/core';
import { data } from './media-radio-station.json';
/**
 * Generate a random media radio station.
 *
 * @category Media Radio Station
 *
 * @example
 *
 * randMediaRadioStation()
 *
 * @example
 *
 * randMediaRadioStation({ length: 10 })
 *
 */
export function randMediaRadioStation<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
