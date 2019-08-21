import HelloWorld from '@/components/hello-world/hello-world';
import {shallowMount, Wrapper} from '@vue/test-utils';
import {expect} from 'chai';
import {CombinedVueInstance} from 'vue/types/vue';

describe('hello-world.vue', () => {
	it('renders props.msg when passed', () => {
		const msg: string = 'new message';
		const wrapper: Wrapper<CombinedVueInstance<HelloWorld, object, object, object, Record<never, object>>> = shallowMount(HelloWorld, {
			propsData: {msg}
		});
		expect(wrapper.text()).to.include(msg);
	});
});
