import React from 'react';

interface profileImgI{
    label?: string;
    src?: string;
}
const ProfileWithLabel: React.FC<profileImgI> = ({ label = 'Vishav Sharma', src = './assets/images/profile.svg' }): JSX.Element => (
  <div className="flex text-left">
    <img src={src} alt="user_profile" />
    <h6 className="pl-2  leading-4 text-xss">
      with
      <p className="text-sm font-semibold leading-4 ">{label}</p>

    </h6>
  </div>
);

export default ProfileWithLabel;
