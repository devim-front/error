import { assert } from 'chai';

import { CustomError } from './CustomError';

describe('CustomError', () => {
  describe('name', () => {
    it('should be equal to one passed into constructor', () => {
      const name = 'TestErrorName';

      class TestError extends CustomError {
        public constructor() {
          super(name, '');
        }
      }

      try {
        throw new TestError();
      } catch (error) {
        assert.equal(error.name, name);
      }
    });
  });

  describe('instanceof', () => {
    it('should checks correctly', () => {
      class TestError extends CustomError {
        public constructor() {
          super('TestError', 'foo');
        }
      }

      try {
        throw new TestError();
      } catch (error) {
        assert.isTrue(error instanceof TestError);
      }
    });
  });
});
