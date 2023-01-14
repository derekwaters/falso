import { FakeOptions, fake } from './core/core';
import { data } from './media-outlet.json';
/**
 * Generate a random media outlet.
 *
 * @category Media Outlet
 *
 * @example
 *
 * randMediaOutlet()
 *
 * @example
 *
 * randMediaOutlet({ length: 10 })
 *
 */
export function randMediaOutlet<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
