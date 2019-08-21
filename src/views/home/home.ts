import HelloWorld from '@/components/hello-world/hello-world';
import {Component, Vue} from 'vue-property-decorator';

/**
 * Home component.
 */
@Component({
	components: {
		HelloWorld
	}
})
export default class Home extends Vue {
}
