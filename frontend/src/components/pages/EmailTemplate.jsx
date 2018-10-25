import React, { Component } from 'react';
import logo from '../../static/greenhorn_logo_dark.svg';

const tableStyle = {
  minWidth: '740px',
};
const thStyle = {
  textAlign: 'center',
  width: '958px',
  borderTop: '1px solid #488869',
  borderRight: '1px solid #488869',
  borderLeft: '1px solid #488869',
  paddingTop: '35px',
  verticalAlign: 'middle',
  height: '150px',
  padding: '25px 0 25px 0',
};
// const thStyle = {
//   text-align: center;
//   width: 958px;
//   border-top: 1px solid #488869;
//   border-right: 1px solid #488869;
//   border-left: 1px solid #488869;
//   padding-top: 35px;
//   vertical-align: middle;
//   height: 150px;
//   padding: 25px 0 25px 0;
// };
const logoStyle = {
  width: '50%',
};
const logInButton = {
  background: '#488869 no-repeat',
  margin: '100px auto 30px auto',
  width: '150px',
  WebkitBorderRadius: '10px',
  MozBorderRadius: '10px',
  borderRadius: '10px',
  color: '#f3f3f3',
};
// const logInButton = {
//   background: #488869 no-repeat;
//   margin: 100px auto 30px auto;
//   width: 150px;
//   webkit-border-radius: 10px;
//   moz-border-radius: 10px;
//   border-radius: 10px;
//   color: #f3f3f3;
// };
const hrefStyle = {
  fontWeight: 'bold',
  letterSpacing: 'normal',
  lineHeight: '100%',
  textAlign: 'center',
  padding: '15px 20px 15px 20px',
  textDecoration: 'none',
  color: '#f3f3f3',
  display: 'block',
};
// const hrefStyle = {
//   font-weight: bold;
//   letter-spacing: normal;
//   line-height: 100%;
//   text-align: center;
//   padding: 15px 20px 15px 20px;
//   text-decoration: none;
//   color: #f3f3f3;
//   display: block;
// };
const bodyStyle = {
  textAlign: 'center',
  verticalAlign: 'middle',
  width: '738px',
  borderRight: '1px solid #488869',
  borderLeft: '1px solid #488869',
  height: '300px',
  padding: '25px 0 25px 0',
};
// const bodyStyle = {
//   text-align: center;
//   vertical-align: middle;
//   width: 738px;
//   border-right: 1px solid #488869;
//   border-left: 1px solid #488869;
//   height: 300px;
//   padding: 25px 0 25px 0;
// };
const helloTextStyle = {
  lignHeight: '1.5em',
  fontSize: '17px',
  padding: '25px 25px 25px 25px',
  color: '#303030',
};
// const helloTextStyle = {
//   lign-height: 1.5em;
//   font-size: 17px;
//   padding: 25px 25px 25px 25px;
//   color: #303030;
// };
const additionalInfoStyle = {
  width: '738px',
  borderRight: '1px solid #488869',
  borderLeft: '1px solid #488869',
};
// const additionalInfoStyle = {
//   width: 738px;
//   border-right: 1px solid #488869;
//   border-left: 1px solid #488869;
// };
const additionalInfoTableStyle = {
  fontSize: '11px',
  width: '100%',
  color: '#303030',
  paddingRight: '20px',
  paddingLeft: '20px',
  paddingTop: '10px',
  paddingBottom: '10px',
  fontWeight: 'normal!important',
  lineHeight: '16px',
};
// const additionalInfoTableStyle = {
//   font-size: 11px;
//   width: 100%;
//   color: #303030;
//   padding-right: 20px;
//   padding-left: 20px;
//   padding-top: 10px;
//   padding-bottom: 10px;
//   font-weight: normal!important;
//   line-height: 16px;
// };
const bottomStyle = {
  textAlign: 'center',
  width: '100%',
  borderRight: '1px solid #488869',
  borderLeft: '1px solid #488869',
  backgroundColor: '#488869',
  verticalAlign: 'middle',
  height: '150px',
  padding: '25px 0 25px 0',
  color: '#f3f3f3',
};
// const bottomStyle = {
//   text-align: center;
//   width: 100%;
//   border-right: 1px solid #488869;
//   border-left: 1px solid #488869;
//   background-color: #488869;
//   vertical-align: middle;
//   height: 150px;
//   padding: 25px 0 25px 0;
//   color: #f3f3f3;
// };

export default class EmailTemplate extends Component {
  render() {
    return (
      <table
        width="740px"
        border="0"
        cellpadding="0"
        cellspacing="0"
        bgcolor="#FFFFFF"
        style={tableStyle}
      >
        <thead>
          <tr valign="top">
            <td style={thStyle}>
              <img style={logoStyle} src={logo} alt="Greenhorn logo" />
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td valign="top" style={bodyStyle}>
              <p style={helloTextStyle}>
                You have been granted access to the Greenhorn App. Please make
                and affort and discover what Greenhorn app can bring to you. You
                will find we can help you to get over your first steps in the
                company.
              </p>
              <div style={logInButton}>
                <a
                  style={hrefStyle}
                  title="Log in"
                  href="https://vse.us15.list-manage.com/track/click?u=d607a7d47ab2d595415b38719&amp;id=8a94b38895&amp;e=8bc6a9cb59"
                  target="_blank"
                  rel="noopener"
                >
                  Log in &rarr;
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td style={additionalInfoStyle}>
              <table border="0" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>
                    <td align="left" style={additionalInfoTableStyle}>
                      Pokud není řečeno jinak, tento email není
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td valign="top" style={bottomStyle}>
              <p>
                Copyright &copy; 1998-2018 CN Group. Všechna práva vyhrazena.{' '}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
