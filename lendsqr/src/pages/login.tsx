import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Select } from 'antd';
import { Icon } from '@iconify/react';
import Logo from '../assets/Image/logo-lendsqr.png'
// The four icons for the cards
import CardIcon1 from '../assets/Image/cardImage/one.png'
import CardIcon2 from '../assets/Image/cardImage/two.png'
import CardIcon3 from '../assets/Image/cardImage/three.png'
import CardIcon4 from '../assets/Image/cardImage/four.png'
import '../Scss/search-header.css'
// import CollapseMenu from '../pages/collapse-menu'
import Cards from '../pages/card'
import '../Scss/search-header.css'
import HeaderAvarta from '../assets/Image/avatar.png'
import '../Scss/search-header.css'
import { Link } from 'react-router-dom';
import '../Scss/login.css';

import { Input } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
const { Search } = Input;
// import { Collapse } from 'antd';
import '../Scss/collapse-menu.css'; 


const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);


const { Header, Content, Footer, Sider } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header className='header-wrap'>
        <div className="logo-image">
          <img className='logo' src={Logo} alt="logo" />
        </div>
        <Search className='search-input' placeholder="input search text" onSearch={onSearch} enterButton />
        {/* <nav className='link-nav'>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
          </ul>
        </nav> */}
        <nav>
          <span>    <li>
            <Link to="/">Docs</Link>
          </li></span>
          <span>
            <Icon icon="gala:bell" width="20" height="32" />
          </span>
          <span>
            <img className='avarta'  src={HeaderAvarta} alt="avarta" />
          </span>
          <span>
     
           <Select
              // placeholder="Adedeji"
              value="Adedeji"
              variant="borderless"
              style={{ flex: 1 }}
              options={[
                { value: 'Harrison', label: 'Harrison' },
                { value: 'Adedeji', label: 'Adedeji' },
                { value: 'Improve', label: 'Improve' },
              ]}
            />
          </span>
        </nav>
      </Header>
      <Content style={{ padding: '0 48px', border: '5px solid red' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          style={{ padding: '24px 0', border: '5px solid blue', background: colorBgContainer, borderRadius: borderRadiusLG }}
        >
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={items2}
            />
            {/* <CollapseMenu /> */}
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <div className="contents-wrap">
              <h1>User</h1>
              <div className="cards-wrap">
                <div className="card-image"></div>
                <div className="card-users"></div>
                <div className="card-number"></div>
              </div>
            </div>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Lendsqr_Test ©{new Date().getFullYear()} Created by Asegu Harrison
      </Footer>
    </Layout>
  );
};

export default App;



// import React from 'react';

// import { Link } from 'react-router-dom';
// import '../Scss/login.css';


// export default function loginPage() {
//   return (
//     <div className="login-wrap">
//       <div className="navigation">
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Login</Link>
//             </li>
//             <li>
//               <Link to="/dashboard">Dashboard</Link>
//             </li>
//             <li>
//               <Link to="/user">User</Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       <h1>Login-Page</h1>
//     </div>
//   )
// }

