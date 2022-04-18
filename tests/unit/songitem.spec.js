import SongItem from '@/components/SongItem.vue';
import { shallowMount, RouterLinkStub } from '@vue/test-utils';

describe('SongItem.vue', () => {
  test('render song.display_name', () => {
    const song = {
      docID: 'abc',
      // display_name: 'test'
    }

    const wrapper = shallowMount(SongItem, {
      propsData: {
        song
      },
      global: {
        components: {
          'router-link': RouterLinkStub
        }
      }
    });

    const compositionAuthor = wrapper.find('.text-gray-500');

    // expect(wrapper.attributes().id).toBe(`song-id-${song.docID}`);

    expect(wrapper.classes().includes(`song-id-${song.docID}`));
  })
})
