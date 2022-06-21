import React from "react"
import FooterCont from "./components/FooterCont/FooterCont"
import Layout from "./components/Layout/Layout"
import ProfileSec from "./components/Profile/Profile"
import Repos from "./components/Repos/Repos"
import GithubProvider from "./providers/github-provider"


function GithubApp() {

  return (
    <GithubProvider>
    <Layout>
      <ProfileSec />
      <Repos />
    </Layout>
    <FooterCont />
    </GithubProvider>
  );
}

export default GithubApp;
