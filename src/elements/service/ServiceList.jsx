import React ,{ Component }from "react";
import { FiCast , FiLock , FiUsers , FiMonitor, FiDollarSign } from "react-icons/fi";

const ServiceList = [
    { 
        icon: <FiMonitor />,
        title: 'Unlisted Shares.',
        description: 'Now get an opportunity to invest in top performing unlisted companies before they get public.'
    },
    
    {
        icon: <FiCast />,
        title: 'Equity  Broking',
        description: 'Open your Demat and Trading account for free, and start your investment journey.'
    },
    {
        icon: <FiLock />,
        title: 'Private Equity',
        description: 'Maximize your financial potential through our specialized Private Equity services. Explore lucrative investment opportunities and unlock exceptional growth with our expert guidance. '
    },
    {
        icon: <FiUsers />,
        title: 'Insurance',
        description: 'Attain peace of mind by investing in Insurance policies, because life is very uncertain, and our loved ones can depend on us even after we are gone!!!'
    },
    { 
        icon: <FiDollarSign />,
        title: 'Financial Advisory',
        description: 'Navigate complex financial landscapes with confidence through our comprehensive Financial Advisory services. Optimize your capital, access strategic insights, and achieve your financial goals with our trusted expertise.'
    },
    {
        icon: <FiUsers />,
        title: 'Associate Program',
        description: 'Now earn money from your comfort zone just by referring clients, get empaneled now!!',
       
    },
    
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href={val.link}>
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                        
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
