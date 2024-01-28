import LoadUserInfo from '../../utils/LoadUserInfo';

const HomePage = () => {
  LoadUserInfo();
  
  return (
    <div id="body">
      <img src="/images/goMusic.png" alt="not found"/>
      <div>웰컴 투 고-뮤직</div>
    </div>
  );
};

export default HomePage;