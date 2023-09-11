import React from 'react';
import { ReactComponent as VisaIcon } from '../../../assets/icons/visa-card.svg';
import { ReactComponent as MasterCardIcon } from '../../../assets/icons/master-card.svg';
import { ReactComponent as MirIcon } from '../../../assets/icons/mir-card.svg';
import { ReactComponent as AlphaIcon } from '../../../assets/icons/alpha-card.svg';
import './PaymentOption.scss';


const PaymentOption = ({className}:{className:string}) => {
    return (
        <div className={`payment ${className}`}>
            <VisaIcon className='payment__image'/>
            <MasterCardIcon className='payment__image'/>
            <MirIcon className='payment__image'/>
            <AlphaIcon className='payment__image'/>
        </div>
    );
};

export default PaymentOption;