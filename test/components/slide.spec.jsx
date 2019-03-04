import React from 'react';

import Slide from '../../src/components/slide';

const sandbox = sinon.createSandbox();
const testProps = {
    id: '1',
    tags: "sdsd",
    index: 1,
	PreviewUrl: 'slide.png',
	user: 'test user',
	likes: 20};

describe('Given a Slide component', () => {
	describe('When component is rendered', () => {
		let wrapper;

		beforeEach(() => wrapper = shallow(<Slide image= { testProps } />));

		it('should render the Slide', () => {
			expect(wrapper).to.have.length(1);
        });
        
        it('should have an image', () => {
			expect(wrapper.find('img')).to.have.length(1);
        });
        
        it('should have a title', () => {
			expect(wrapper.find('h4')).to.have.length(1);
        });
        
	});
});