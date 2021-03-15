import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import SocialProfile from '../../components/social-profile/social-profile';
import FooterWrapper, {
  FooterWrapperInner,
  FooterCol,
  Logo,
  Infos,
  FooterTitle,
  FooterContent,
  Menu,
} from './footer.style';
import LogoImage from '../../images/logo.svg';

import {
  IoLogoInstagram,
} from 'react-icons/io';

type FooterProps = {
  children: React.ReactNode;
};

const Footer: React.FunctionComponent<FooterProps> = ({
  children,
  ...props
}) => {
  const data = useStaticQuery(graphql`
    query {
      allWpCategory(filter: {slug: {ne: "uncategorized"}}) {
        edges {
          node {
            id
            name
            uri
          }
        }
      }
    }
  `);

  const categories = data.allWpCategory.edges;

  return (
    <FooterWrapper {...props}>
      <FooterWrapperInner>
        <FooterCol>
          <Logo>
            <Link to="/">
              <img src={LogoImage} alt="logo" width="150" />
            </Link>
          </Logo>

          <Infos>
            &copy; Copyright 2021 Erika Kurzawa
          </Infos>
        </FooterCol>

        {/* <FooterCol>
        </FooterCol> */}

        {/* <FooterCol>
          <FooterTitle>Quick Links</FooterTitle>

          <FooterContent>
            {MenuItems.map((item, index) => (
              <Menu key={index} to={item.url}>
                {item.label}
              </Menu>
            ))}
          </FooterContent>
        </FooterCol> */}

        {/* <FooterCol>
          <FooterTitle>Category</FooterTitle>

          <FooterContent>
            {categories.map((category: any) => (
              <Menu key={category.node.id} to={category.node.uri}>
                {category.node.name}
              </Menu>
            ))}
          </FooterContent>
        </FooterCol> */}
      </FooterWrapperInner>
    </FooterWrapper>
  );
};

export default Footer;
