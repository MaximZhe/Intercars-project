import { useState } from 'react';

const LanguagePanel = () => {
    const [isOpen, setIsOpen] = useState(false); // Состояние для открытия/закрытия выпадающего списка
    const [selectedLanguage, setSelectedLanguage] = useState('RUS'); // Начальное значение языка
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLanguageChange = (language: string) => {
        setSelectedLanguage(language);
        setIsOpen(false);
    };

    return (
        <div className="header__dropdown">
            <div className={`dropdown ${isOpen ? 'open' : ''}`}>
                <div className="dropdown__language" onClick={toggleDropdown}>
                    {selectedLanguage}
                </div>
                {isOpen && (
                    <div className="dropdown-menu">
                        <button type='button'
                            className={`dropdown-item ${selectedLanguage === 'RUS' ? 'active' : ''}`}
                            onClick={() => handleLanguageChange('RUS')}>
                            Русский
                        </button>
                        <button type='button'
                            className={`dropdown-item ${selectedLanguage === 'EN' ? 'active' : ''}`}
                            onClick={() => handleLanguageChange('EN')}>
                            English
                        </button>
                        <button type='button'
                            className={`dropdown-item ${selectedLanguage === 'PL' ? 'active' : ''}`}
                            onClick={() => handleLanguageChange('PL')}>
                            Polski
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LanguagePanel;