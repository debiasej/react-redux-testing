import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    const props = { comments: ['A comment', 'Other stuff'] };
    component = renderComponent(CommentList, null, props);
  });

  it('shows an LI for each comment', () => {
    expect(component.find('li').length).to.equals(2);
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('A comment');
    expect(component).to.contain('Other stuff');
  });
});
