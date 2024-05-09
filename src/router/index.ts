import { createRouter, createWebHistory } from 'vue-router'
import ShallowZj from '@/pages/ShallowZj.vue'
import ReadonlyZj from '@/pages/ReadonlyZj.vue'
import RawZj from '@/pages/RawZj.vue'
import CustomRefZj from '@/pages/CustomRefZj.vue'


export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/shallow',
			component: ShallowZj
		},
    {
			path: '/readonly',
			component: ReadonlyZj
		},
    {
			path: '/raw',
			component: RawZj
		},
		{
			path: '/customRef',
			component: CustomRefZj
		},
	]
})
