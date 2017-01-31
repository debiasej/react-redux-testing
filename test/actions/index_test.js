import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';
// webpack loads the index.js
import { saveComment } from '../../src/actions';

describe('actions', () => {
  describe('saveComment', () => {
    it('has the correct type', () => {
      const action = saveComment();
      expect(action.type).to.equal(SAVE_COMMENT);
    });

    it('has the correct payload', () => {
      const action = saveComment("It's a simple comment");
      expect(action.payload).to.equals("It's a simple comment");
    });
  });
});
