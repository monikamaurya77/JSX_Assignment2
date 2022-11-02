import logo from '../assets/airbnb_logo.png';

const Main = _ => {
    return(
        <div>
<div className="main-content">
    <h1>The Evolution of </h1>
    <h1>Airbnb's Frontend </h1>
</div>
<div className="sub-main-content">
    <h4>@spikebrehm</h4>
</div>
<div className="img">
 <img src={logo} alt="logo"></img>
</div>
        </div>
    );
}

export default Main;