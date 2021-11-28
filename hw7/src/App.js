import {Layout, Menu} from "antd";
import {Link, Route, Switch, withRouter} from "react-router-dom";
import {MainPage} from "./Components/MainPage";
import {AboutPage} from "./Components/AboutPage";
import {Component} from "react";

const {Header, Content, Footer} = Layout;

class App extends Component {
  render() {
      let selectedKeys
      let path = this.props.location.pathname
      if (path === '/') {
          selectedKeys = ['main']
      } else
          if (path === '/about') {
              selectedKeys = ['about']
          } else {
              throw new Error('Unexpected state!')
          }

          return (
              <Layout>
                  <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                      <div className="logo" />
                      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} selectedKeys={selectedKeys}>
                          <Menu.Item key="main">
                              <Link to='/'>Главная</Link>
                          </Menu.Item>
                          <Menu.Item key="about">
                              <Link to="/about">О нас</Link>
                          </Menu.Item>
                      </Menu>
                  </Header>
                  <Content>
                      <div className="main-container">
                          <Switch>
                              <Route exact path='/'>
                                  <MainPage/>
                              </Route>
                              <Route path='/about'>
                                  <AboutPage/>
                              </Route>,
                          </Switch>
                      </div>
                  </Content>
                  <Footer style={{ textAlign: 'center' }}>created by Dmitry Bushmanov, 2021</Footer>
              </Layout>
          );
  }
}

export default withRouter(App);
