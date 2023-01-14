import { FakeOptions, fake } from './core/core';
import { data } from './media-magazine.json';
/**
 * Generate a random media magazine.
 *
 * @category Media Magazine
 *
 * @example
 *
 * randMediaMagazine()
 *
 * @example
 *
 * randMediaMagazine({ length: 10 })
 *
 */
export function randMediaMagazine<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
