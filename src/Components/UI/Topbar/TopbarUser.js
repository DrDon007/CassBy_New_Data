import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Popover from '../uielements/popover';
import IntlMessages from '../utility/intlMessages';
import userpic from '../../../assets/images/user3.png';
//import userpic1 from '../../../assets/images/user3.png'
//import authAction from '@iso/redux/auth/actions';
import TopbarDropdownWrapper from './TopbarDropdown.styles';

//const { logout } = authAction;

export default function TopbarUser() {
  const [visible, setVisibility] = React.useState(false);
  const dispatch = useDispatch();
  function handleVisibleChange() {
    setVisibility(visible => !visible);
  }

  const content = (
    <TopbarDropdownWrapper className="isoUserDropdown">
      <Link className="isoDropdownLink" to={'/dashboard/my-profile'}>
        <IntlMessages id="topbar.myprofile" />
      </Link>
      <a className="isoDropdownLink" href="# ">
        <IntlMessages id="themeSwitcher.settings" />
      </a>
      <a className="isoDropdownLink" href="# ">
        <IntlMessages id="sidebar.feedback" />
      </a>
      <a className="isoDropdownLink" href="# ">
        <IntlMessages id="topbar.help" />
      </a>
      <div className="isoDropdownLink" onClick={() => 
        //dispatch(logout())
        console.log('top bar')
        }>
        <IntlMessages id="topbar.logout" />
      </div>
    </TopbarDropdownWrapper>
  );

  return (
    <Popover
      content={content}
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
      arrowPointAtCenter={true}
      placement="bottomLeft"
    >
      <div className="isoImgWrapper">
        <img alt="user" src={userpic} />
        <span className="userActivity online" />
      </div>
    </Popover>
  );
}
