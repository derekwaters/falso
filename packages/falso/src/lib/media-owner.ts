import { FakeOptions, fake } from './core/core';
import { data } from './media-owner.json';
/**
 * Generate a random media owner.
 *
 * @category Media Owner
 *
 * @example
 *
 * randMediaOwner()
 *
 * @example
 *
 * randMediaOwner({ length: 10 })
 *
 */
export function randMediaOwner<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
