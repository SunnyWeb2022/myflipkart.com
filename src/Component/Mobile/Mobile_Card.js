
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './Mobile_Card.css';

const Mobile_Card = (props) => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row mobile_box'>
                    <div className='col-md-3 mobile_img'>
                       <img src={props.imgsrc} className="py-2 img-fluid " alt="Mobile_photo" />
                    </div>
                    <div className='col-md-5 mobile_info'>
                        <h4>{props.title}</h4>
                        <ul>
                            <li>{props.storage}</li>
                            <li>{props.display}</li>
                            <li>{props.camera}</li>
                            <li>{props.bettery}</li>
                            <li>{props.warranty}</li>
                        </ul>
                    </div>
                    <div className='col-md-2 price'>
                           <h5><CurrencyRupeeIcon />{props.current_price}</h5>
                           <del><h6><CurrencyRupeeIcon />{props.old_price}</h6></del>
                    </div>
                    <hr className='my-4'/>  
                </div>
                 
            </div>

        </>
    )
}

export default Mobile_Card