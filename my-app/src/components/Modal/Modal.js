import {useState} from 'react'
import c from './Modal.module.css'

const Modal = (props) => {

    const [name1, setName1] = useState('')
    const [name2, setName2] = useState('')
    const [alert, setAlert] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name1 && name2) {
            console.log('success', `Player 1 name = ${name1} Player 2 name = ${name2}`)
            props.getPlayerNames(name1, name2)
            setAlert(null)
        } else {
            console.log('denied')
            setAlert("перед началом игры заполните все поля")
        }
    }

    return(
        <div className={c.body}>

            <div className={c.wrapper}>
                <form>

                    <div className={c.item}>
                        <label htmlFor="test">Имя первого игрока</label>
                    </div>
                        <input value={name1} onChange={ e => setName1(e.target.value) } type="text" required placeholder='крестики' />
                    

                    <div className={c.item}>
                        <label htmlFor="test">Имя второго игрока</label>
                    </div>
                        <input value={name2} onChange={ e => setName2(e.target.value) } type="text" required placeholder='нолики'/>

                    <div className={c.alert}>{alert}</div>
                    
                    <div className={c.item}>
                        <button type="submit" onClick={handleSubmit} >Начать игру!</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Modal