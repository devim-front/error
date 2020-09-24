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
    it('should works correctly', () => {
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

  describe('stack trace', () => {
    it("should includes only last constructor's call", () => {
      class TestErrorA extends CustomError {}

      class TestErrorB extends TestErrorA {}

      class TestErrorC extends TestErrorB {
        public constructor() {
          super('TestErrorC', 'foo');
        }
      }

      try {
        throw new TestErrorC();
      } catch (error) {
        const { stack } = error;

        const fileName = 'CustomError.test.ts';
        const { length } = fileName;

        let count = 0;
        let index = 0;

        while (index >= 0) {
          index = (stack as string).indexOf('CustomError.test.ts', index);

          if (index >= 0) {
            index += length;
            count += 1;
          }
        }

        assert.equal(count, 1);
      }
    });
  });
});
