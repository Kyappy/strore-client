import {Component, Prop, Vue} from 'vue-property-decorator';

/**
 * Hello world component.
 */
@Component
export default class HelloWorld extends Vue {
	/**
	 * Greeting message.
	 */
	@Prop() private msg!: string;
}
