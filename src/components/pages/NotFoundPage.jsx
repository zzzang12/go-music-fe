import LoadUserInfo from '../../utils/LoadUserInfo';

const NotFoundPage = () => {
  LoadUserInfo();
  
  return (
    <div id="body">
      <img src="/images/notFound.png" alt="not found"/>
      <div>그런 페이지는 업소용</div>
    </div>
  );
};

export default NotFoundPage;