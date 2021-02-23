import React from 'react';

import { Text } from './Text';

export default {
    title: 'Example/Text',
    component: Text,
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
};

const Template = (args) => <Text {...args} />;

export const HelloText = Template.bind({});
HelloText.args = {
//   ...HeaderStories.LoggedOut.args,
};