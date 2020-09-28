// import $ from 'jquery'
import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'


import '../../sass/app.scss'

function Button ({start, children}) {
    const [counter, setCounter] = useState(start)

    const handleClick = () => {
        setCounter((c) => c + 1)
    }

    /*useEffect(() => {
        window.setInterval(() => {
            handleClick()
        }, 1000)
    })*/

    return <button onClick={handleClick}>{children}: {counter}</button>
}


ReactDOM.render(<React.Fragment>
    <Button start={0}>Un bouton</Button>
    <Button start={20}>Un deuxidème bouton</Button>
</React.Fragment>, document.querySelector('#js-app'))
