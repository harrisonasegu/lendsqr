import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

const customCollapseStyles = () => {
  return {
    border: '4px solid green'
  }
}
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

const layoutSlider: React.FC = () => <Collapse style={customCollapseStyles} className="custome-collapse" defaultActiveKey={['1']} ghost items={items} />;

export default layoutSlider;