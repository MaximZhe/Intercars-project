
import { ReactNode } from 'react';
import './EmailContacts.scss';
const EmailContacts = ({className, href, children} : {className:string, href:string, children:ReactNode}) => {
    return (
        <a href={href} className={`contacts-item-email ${className}`}>
            {children}
        </a>
    );
};

export default EmailContacts;