import { assert } from 'chai';

import { ExpectationError } from './ExpectationError';

describe('ExpectationError', () => {
  describe('formatActual', () => {
    it('should works with undefined', () => {
      const value = ExpectationError.formatActual(undefined);
      assert.equal(value, '[undefined]');
    });

    it('should works with null', () => {
      const value = ExpectationError.formatActual(null);
      assert.equal(value, '[object] null');
    });

    it('should works with number', () => {
      const value = ExpectationError.formatActual(1);
      assert.equal(value, '[number] 1');
    });

    it('should works with infinity', () => {
      const value = ExpectationError.formatActual(1 / 0);
      assert.equal(value, '[number] Infinity');
    });

    it('should works with negative infinity', () => {
      const value = ExpectationError.formatActual(-1 / 0);
      assert.equal(value, '[number] -Infinity');
    });

    it('should works with NaN', () => {
      const value = ExpectationError.formatActual(Number('foo'));
      assert.equal(value, '[number] NaN');
    });

    it('should works with BigInt', () => {
      const value = ExpectationError.formatActual(BigInt(1));
      assert.equal(value, '[bigint] 1');
    });

    it('should works with false', () => {
      const value = ExpectationError.formatActual(false);
      assert.equal(value, '[boolean] false');
    });

    it('should works with true', () => {
      const value = ExpectationError.formatActual(true);
      assert.equal(value, '[boolean] true');
    });

    it('should works with Symbol', () => {
      const value = ExpectationError.formatActual(Symbol());
      assert.equal(value, '[symbol] Symbol()');
    });

    it('should works with Symbol(foo)', () => {
      const value = ExpectationError.formatActual(Symbol('foo'));
      assert.equal(value, '[symbol] Symbol(foo)');
    });

    it('should works with function', () => {
      const value = ExpectationError.formatActual(() => {});
      assert.equal(value, '[function]');
    });

    it('should works with array', () => {
      const value = ExpectationError.formatActual([]);
      assert.equal(value, '[array]');
    });

    it('should works with object', () => {
      const value = ExpectationError.formatActual({});
      assert.equal(value, '[object]');
    });

    it('should works with string', () => {
      const value = ExpectationError.formatActual('foo');
      assert.equal(value, '[string] "foo"');
    });
  });

  describe('constructor', () => {
    it('should has a valid properties', () => {
      const subject = 'foo';
      const expected = '"foo"';
      const actual = 'bar';

      const error = new ExpectationError(subject, expected, actual);

      assert.equal(error.subject, subject);
      assert.equal(error.expected, expected);
      assert.equal(error.actual, actual);
    });

    it('should generates a valid message', () => {
      const error = new ExpectationError('foo', '"foo"', 'bar');
      assert.equal(error.message, 'foo must be "foo"; got: [string] "bar"');
    });

    it('should generates a custom message', () => {
      const error = new ExpectationError('foo', '"foo"', 'bar', 'xyz');
      assert.equal(error.message, 'xyz');
    });
  });
});
