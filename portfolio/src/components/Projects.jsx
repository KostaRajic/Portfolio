/* eslint-disable react/jsx-no-target-blank */
import caffeAcademyImg from '../assets/Images/caffeAcademyImg.png'
import loginFormImg from '../assets/Images/LoginFormImg.png'
import healthyNatureImg from '../assets/Images/HealthyNatureImg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';


export const Projects = ({goBack}) => {
  return (
    <div className="projectsClass">
        <FontAwesomeIcon
          icon={faCircleXmark}
          size="2x"
          className='closeBtn1'
          onClick={() => goBack(false)}
        />
        <FontAwesomeIcon
          icon={faCircleXmark}
          size="2x"
          className='closeBtn2'
          onClick={() => goBack(false)}
        />
      <div>
        <a href="https://caffe-academy.vercel.app/" target="_blank">
        <img src={caffeAcademyImg} alt="Caffe Academy Img" />
        <h4>Caffe Academy</h4>
        <p>The site is built for mobile, using the React JavaScript framework. It contains a registration/login form (data is stored in local-storage) and the ability to add various coffees to the cart.</p>
        </a>
      </div>
      <div>
      <a href="https://login-form-eight-sandy.vercel.app/" target="_blank">
        <img src={loginFormImg} alt="Login Form Img" />
        <h4>Login Form</h4>
        <p>Login form made in React 18, contains all advanced React techniques, router, validation, pagination, tokens, as well as working with the backend (fetching APIs)</p>
        </a>
      </div>
      <div>
      <a href="https://zdravapriroda.online/" target="_blank">
        <img src={healthyNatureImg} alt="Caffe Academy Img" />
        <h4>Healthy Nature</h4>
        <p>A site where you can learn all about your favorite plant and compare the nutrients of a particular plant with another.</p>
        </a>
      </div>
    </div>
  );
};
