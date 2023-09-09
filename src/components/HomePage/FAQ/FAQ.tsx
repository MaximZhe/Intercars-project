import React, { useState } from 'react';
import { ReactComponent as ArrowIcon } from '../../../assets/icons/Arrow Icon.svg';

export interface AccordionItem {
    title: string;
    content: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordionItem = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className='accordion'>
            <div className='container-fluid'>
                {items.map((item, index) => (
                    <div className='accordion__item'
                        key={index}
                        onClick={() => toggleAccordionItem(index)}
                        style={{ marginBottom: '10px', cursor: 'pointer' }}
                    >
                        <div className='accordion__inner'>
                            <div className='accordion__wrapper'>
                                <ArrowIcon className='accordion__icon' />
                            </div>
                            <h3 className='accordion__title'>{item.title}</h3>
                        </div>

                        {activeIndex === index &&
                            <p className='accordion__text'>{item.content}</p>
                        }
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Accordion;