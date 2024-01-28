import LoadUserInfo from '../../utils/LoadUserInfo';

const AboutPage = () => {
  LoadUserInfo();

  return (
    <div className="mt-5" id="body">
      <h3 className="mb-4">About the Go Music Store</h3>
      <p>Go music is a modern online musical instruments store</p>
      <p>Explore how you can combine the power of React and Go, to build a fast and beautiful looking online store.</p>
      <p>We will cover how to build this website step by step.</p>
    </div>
  );
};

export default AboutPage;