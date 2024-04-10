import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import '../Scss/login.css';


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
      <Header>
         <nav className='link-nav'>
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
         </nav>
      </Header>
      <Content style={{ padding: '0 48px', border: '5px solid red' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          style={{ padding: '24px 0', border: '5px solid blue',background: colorBgContainer, borderRadius: borderRadiusLG }}
        >
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={items2}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <div className="wrap">
              <h1>Harrisonnnnnnnnnnnnnnnnn</h1>
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

