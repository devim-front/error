import { assert } from 'chai';

import { ArgumentError } from './ArgumentError';

describe('ArgumentError', () => {
  describe('constructor', () => {
    it('should generates a valid message', () => {
      const error = new ArgumentError('foo', 'bar', '"bar"', 'xyz');
      assert.equal(
        error.message,
        'foo(bar) must be "bar"; got: [string] "xyz"'
      );
    });
  });
});
