import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from '../controls/ScrollToTop';
import Blog from '../features/blog/Blog';
import AddBlog from '../features/blog/AddBlog';
import BlogPost from '../features/blog/BlogPost';
import ContactUs from '../features/contact-us/ContactUs';
import FAQs from '../features/FAQs/FAQs';
import Home from '../features/home/Home';
import Login from '../features/login/Login';
import NotFound from '../features/not-found/NotFound';
import PrivacyPolicy from '../features/privacyPolicy/PrivacyPolicy';
import AddUpdateTeamMember from '../features/team/AddUpdateTeamMember';
import Team from '../features/team/Team';
import TeamMember from '../features/team/TeamMember';
import WhitePaper from '../features/whitepaper/WhitePaper';
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';

const CustomRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={['/login']} exact>
                    <AuthLayout>
                        <Route path={'/login'} exact component={() => <Login />} />
                    </AuthLayout>
                </Route>
                <Route
                    path={['', '/whitepaper', '/team', '/team/:id', '/team/new', '/blog', '/blog/new', '/blog/:id', '/privacypolicy', '/faqs', '/contactus',]}
                    exact>
                    <MainLayout>
                        {/* <PrivateRoute path={['', '/articles']} exact component={() => <Articles />} />
                        <PrivateRoute path={'/articles/:id'} exact component={() => <Article />} /> */}
                        <Route path={'/whitepaper'} exact component={() => <WhitePaper />} />
                        <Route path={'/team'} exact component={() => <Team />} />
                        <Switch>
                            <Route path={'/team/new'} exact component={() => <AddUpdateTeamMember />} />
                            <Route path={'/team/edit'} exact component={() => <AddUpdateTeamMember />} />
                            <Route path={'/team/:id'} exact component={() => <TeamMember />} />
                        </Switch>
                        <Route path={'/blog'} exact component={() => <Blog />} />
                        <Route path={'/blog/new'} exact component={() => <AddBlog />} />
                        <Route path={'/blog/:id'} exact component={() => <BlogPost />} />
                        <Route path={'/privacypolicy'} exact component={() => <PrivacyPolicy />} />
                        <Route path={'/faqs'} exact component={() => <FAQs />} />
                        <Route path={'/contactus'} exact component={() => <ContactUs />} />
                        <Route path={'/'} exact component={() => <Home />} />
                    </MainLayout>
                </Route>
                <Route component={() => <NotFound />}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default CustomRoutes
