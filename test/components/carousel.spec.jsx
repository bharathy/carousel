import React from 'react';

import Carousel from '../../src/components/carousel';

const sandbox = sinon.createSandbox();
const images = [{
	PreviewUrl: 'slide.png',
	user: 'test user',
	likes: 20}];
const testProps = {
	images: images,
	fetchImages: sandbox.stub(),
	store: { getState: sandbox.stub().returns(images),
	subscribe: sandbox.spy() }
}

describe('Given a carousel component', () => {
	describe('When component is rendered', () => {
		let wrapper;

		beforeEach(() => wrapper = shallow(<Carousel { ...testProps} />));

		it('should render the carosusel', () => {
			expect(wrapper).to.have.length(1);
		});
	});
});