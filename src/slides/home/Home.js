import './Home.css';
import myImage from './zack.png';

const Home = () => {
  return (
    <div className='container'>
      <div className='wording'>
        <div className='introduction'>
                Let me bring your Dream into reality.Am zakaria irungu a software developer
        </div>
        <div className='sub-introduction'>Skilled,Experience and problem solver</div>
        <div className='btn-column'>
            <div>Button</div>
            <div>Text</div>
        </div>
      </div>
      <div className='my-photo'>
        <img src={myImage}alt='myImage'/>
      </div>
    </div>
  );
}

export default Home;