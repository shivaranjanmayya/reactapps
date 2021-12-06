import './style.css';

let Song = props =>


    <div className="divStyle">
        <p>
            <span style={{ color: 'yellow', fontSize: '20px', fontWeight:'bold' }}>{props.name} <span style={{color:'black',fontSize:'20px'}}>:</span> </span>
            <span style={{ color: 'darkblue', fontSize: '20px', fontWeight:'bold' }}> {props.year} <span style={{color:'black',fontSize:'20px'}}> : </span> </span>
            <span style={{ color: 'darkgreen', fontSize: '20px', fontWeight:'bold' }}>{props.artistName}</span>
        </p>
    </div >


export default Song;