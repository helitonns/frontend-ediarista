import { Button } from '@material-ui/core';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import DataList from './DataList';

export default {
    title: 'data-display/DataList',
    component: DataList,
    argTypes: {},
} as ComponentMeta<typeof DataList>;

const Template: ComponentStory<typeof DataList> = () => (
    <DataList
        header={
            <div>
                Data: 02/03/2021
                <br />
                Lipeza simples
            </div>
        }
        body={
            <div>
                Cidade: São Paulo
                <br />
                Número de cômodos
            </div>
        }
        actions={
            <>
                <Button variant="contained" color={'secondary'}>
                    Se candidatar
                </Button>
            </>
        }
    />
);

export const Default = Template.bind({});
Default.args = {};
