import { FakeOptions, fake } from './core/core';
import { data } from './media-newspaper.json';
/**
 * Generate a random media newspaper.
 *
 * @category Media Newspaper
 *
 * @example
 *
 * randMediaNewspaper()
 *
 * @example
 *
 * randMediaNewspaper({ length: 10 })
 *
 */
export function randMediaNewspaper<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
