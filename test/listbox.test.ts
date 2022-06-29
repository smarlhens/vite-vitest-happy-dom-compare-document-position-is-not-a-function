import type { RenderResult } from '@testing-library/vue';
import {fireEvent, render} from '@testing-library/vue';
import { afterEach, describe, expect, it } from 'vitest';

import Listbox from '../src/components/listbox.vue';

describe('listbox.vue', () => {
  let wrapper: RenderResult;
  const mountOptions = {
    props: {
      modelValue: 20,
    },
  };

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render', async () => {
    wrapper = render(Listbox, mountOptions);

    const { getByText, html } = wrapper;
    const button = getByText('Wade Cooper');
    await fireEvent.click(button);
    expect(html()).toMatchSnapshot();
  });


  it('should trigger an event on size change', async () => {
    wrapper = render(Listbox, mountOptions);

    const { getByText, findByText } = wrapper;
    const button = getByText('Wade Cooper');
    await fireEvent.click(button);

    const option = await findByText('Arlene Mccoy');
    await fireEvent.click(option);
    await findByText('Arlene Mccoy');
  });
});
