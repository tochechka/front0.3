import React from 'react';
import '../../styles/Modal.css';

const DeleteCrExp = ({active, setActive, crimeExp, remove}) => {
    return (
        <div className={active ? 'modal active' : 'modal'}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                Желаете удалить запись?
                <button className='confirm-button' onClick={() => remove(crimeExp)}>Да</button>
                <button className='deny-button' onClick={() => setActive(false)}>Нет</button>
            </div>
        </div>
    );
};

export default DeleteCrExp;
