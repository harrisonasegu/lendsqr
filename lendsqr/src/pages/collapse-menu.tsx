import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
const { Panel } = Collapse;
import '../Scss/collapse-menu.css'

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque at veritatis molestias nesciunt labore, sint rerum aut impedit consectetur amet, eligendi alias, nihil maxime magni excepturi iure recusandae atque voluptas!
    </p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: 
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ullam cum fugiat quis magni placeat, dicta nobis quibusdam id, amet impedit quam nihil, ab labore cumque praesentium corporis suscipit voluptate?</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores libero eum saepe perspiciatis, sequi a quo commodi, aspernatur voluptatem reiciendis quos suscipit assumenda nobis ducimus architecto nostrum sunt dolorem doloremque.
    </p>,
  },
];

// const layoutSlider: React.FC = () => <Collapse style={customCollapseStyles} className="custome-collapse" defaultActiveKey={['1']} ghost items={items} />;

const layoutSlider: React.FC = () => {
  return (
    <Collapse style={{ backgroundColor: 'white', border: '1px solid rgba(0, 0, 0, 0.100)' }}>
      <Panel header="panel" key="1">
        Content of anel 1
      </Panel>
      <Panel header="Panel 2" key="2">
        Content of panel 2
      </Panel>
      <Panel header="Panel 2" key="2">
        Content of panel 2
      </Panel>
      <Panel header="Panel 2" key="2">
        Content of panel 2
      </Panel>
      <Panel header="Panel 2" key="2">
        Content of panel 2
      </Panel>
      <Panel header="Panel 2" key="2">
        Content of panel 2
      </Panel>
    </Collapse>
  );
};

export default layoutSlider;