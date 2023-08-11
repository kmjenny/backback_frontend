import { useRouter } from 'next/router';
import React from 'react';
import RouterLink from '../../components/core/RouterLink';


const Header: React.FC = () => {
    const router = useRouter();
    const handleGoBack = () => {
      router.back();
    };

  return (
    <div style={{ height: '50px', width: '100%', maxWidth: '500px', backgroundColor: 'skyblue', padding: '10px', position:'absolute', bottom:'0px'}}>
        <div style={{display:'flex', justifyContent:'space-around'}}>
            <div><span onClick={handleGoBack}>뒤로가기</span></div>
            <RouterLink href="/">홈</RouterLink>
            <RouterLink href="/testing">스크랩</RouterLink>
            <RouterLink href="/testing2">프로필</RouterLink>
        </div>
    </div>
  );
};

export default Header;
