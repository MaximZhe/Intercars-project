import React, { useState } from 'react';
import { ReactComponent as ArrowIcon } from '../../../assets/icons/Arrow Icon.svg';
import './FAQ.scss';
export interface AccordionItem {
    id: number,
    title: string;
    content: string;
}

interface AccordionProps {
    itemsLeft: AccordionItem[];
    itemsRight: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ itemsLeft, itemsRight }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordionItem = (id: number) => {
        setActiveIndex((prevIndex) => (prevIndex === id ? null : id));
    };

    return (
        <div className='accordion'>
            <div className='container-fluid'>
                <div className='accordion__box'>
                    <h2 className='accordion__main-title'>
                        Часто задаваемые вопросы
                    </h2>
                    <div className='accordion-columns'>
                        <div className='accordion-column__left'>
                            {itemsLeft.map((item) => (
                                <div className='accordion__item'
                                    key={item.id}
                                    onClick={() => toggleAccordionItem(item.id)}
                                >
                                    <div className='accordion__inner'>
                                        <div
                                            className={`accordion__wrapper ${activeIndex === item.id ? 'active' : ''}`} >
                                            <ArrowIcon className='accordion__icon' />
                                        </div>
                                        <h3 className='accordion__title'>{item.title}</h3>
                                    </div>

                                    {activeIndex === item.id ?
                                        <p
                                            className={`accordion__text ${activeIndex === item.id ? 'active' : ''}`}>
                                            {item.content}
                                        </p>
                                        : null
                                    }
                                </div>
                            ))}
                        </div>
                        <div className='accordion-column__right'>
                            {itemsRight.map((item) => (
                                <div className='accordion__item'
                                    key={item.id}
                                    onClick={() => toggleAccordionItem(item.id)}
                                >
                                    <div className='accordion__inner'>
                                        <div
                                            className={`accordion__wrapper ${activeIndex === item.id ? 'active' : ''}`} >
                                            <ArrowIcon className='accordion__icon' />
                                        </div>
                                        <h3 className='accordion__title'>{item.title}</h3>
                                    </div>

                                    {activeIndex === item.id ?
                                        <p
                                            className={`accordion__text ${activeIndex === item.id ? 'active' : ''}`}>
                                            {item.content}
                                        </p>
                                        : null
                                    }
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Accordion;