import { mount } from '@vue/test-utils'
  
  import teste from '../teste.vue'
  
  describe('teste.vue', () => {
    const wrapper = mount(teste)
  
    it('Should render component', () => {
      expect(wrapper.exists()).toBeTruthy()
    })
  })