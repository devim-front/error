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
});
