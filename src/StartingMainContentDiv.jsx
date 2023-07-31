import { useState } from "react"
import Ul from "./Ul"

function StartingMainContentDiv() {
    const [text, setText] = useState("")
    const [items, setItems] = useState(0)
    

    const modifyText = (e) => {
        setText(e.target.value)
        
    }

    const keyPress = (e) => {
        if(e.key === 'Enter') {
            const newLi = document.createElement("li")
            const newDiv = document.createElement('div')
            const newInput = document.createElement('input')
            const newImg = document.createElement('img')
            const existingUl = document.querySelector('ul')
            const newP = document.createElement('p')
            newP.textContent = text
            
            newInput.type = "checkbox"
            newDiv.classList.add('before-check')
            newInput.classList.add("textarea-div-check")
            const deleteIcon = document.createElement('img')
            deleteIcon.src = "/icon-cross.svg"
            newImg.src = "/icon-check.svg"
            newImg.classList.add('checkicon')
            newInput.addEventListener('change', (a) => {
                if(a.target.checked) {
                   a.target.parentElement.parentElement.style.textDecoration = "line-through"
                   a.target.parentElement.parentElement.style.opacity = "0.7"
                   newLi.classList.add('completed')
                } else {
                    a.target.parentElement.parentElement.style.textDecoration = "none"
                    a.target.parentElement.parentElement.style.opacity = "1"
                    newLi.classList.remove('completed')
                }
            })

            deleteIcon.addEventListener("click", (d) => {
                d.target.parentElement.remove()
                setItems(document.querySelectorAll('li').length)
            })
            newLi.classList.add('all')
            deleteIcon.classList.add('deleteIcon')
            newLi.append(newDiv)
            newDiv.append(newInput)
            newDiv.append(newImg)
            existingUl.append(newLi)
            newLi.append(newP)
            newLi.append(deleteIcon)
            setItems(document.querySelectorAll('li').length)
            e.target.checked = false
            document.querySelector('.write').value = ""
        }
    }
    
    const createNewLi = (e) => {
        if(e.target.checked && text.length > 0) {
            const newLi = document.createElement("li")
            const newDiv = document.createElement('div')
            const newInput = document.createElement('input')
            const newImg = document.createElement('img')
            const existingUl = document.querySelector('ul')
            const newP = document.createElement('p')
            newP.textContent = text
            
            newInput.type = "checkbox"
            newDiv.classList.add('before-check')
            newInput.classList.add("textarea-div-check")
            const deleteIcon = document.createElement('img')
            deleteIcon.src = "/icon-cross.svg"
            newImg.src = "/icon-check.svg"
            newImg.classList.add('checkicon')
            newInput.addEventListener('change', (a) => {
                if(a.target.checked) {
                   a.target.parentElement.parentElement.style.textDecoration = "line-through"
                   a.target.parentElement.parentElement.style.opacity = "0.7"
                   newLi.classList.add('completed')
                } else {
                    a.target.parentElement.parentElement.style.textDecoration = "none"
                    a.target.parentElement.parentElement.style.opacity = "1"
                    newLi.classList.remove('completed')
                }
            })

            deleteIcon.addEventListener("click", (d) => {
                d.target.parentElement.remove()
                setItems(document.querySelectorAll('li').length)
            })
            newLi.classList.add('all')
            deleteIcon.classList.add('deleteIcon')
            newLi.append(newDiv)
            newDiv.append(newInput)
            newDiv.append(newImg)
            existingUl.append(newLi)
            newLi.append(newP)
            newLi.append(deleteIcon)
            setItems(document.querySelectorAll('li').length)
            e.target.checked = false
            document.querySelector('.write').value = ""
            
        } 
    }

    

    const selectAll = (e) => {
        const all = document.querySelectorAll('.all')
       
        all.forEach((alls) => {
            alls.style.display = "flex"
            
        })
        
        
        e.target.style.color = "#3A7CFD"
        document.querySelector('.activep').style.color = "#9495A5"
        document.querySelector('.completedp').style.color = "#9495A5"
    }

    const selectActive = (e) => {
        e.target.style.color = "#3A7CFD"
        document.querySelector('.allp').style.color = "#9495A5"
        document.querySelector('.completedp').style.color = "#9495A5"
        const all = document.querySelectorAll('.all')
        
        all.forEach((alls) => {
            alls.style.display = "flex"
            
        })
        const completed = document.querySelectorAll('.completed')
        completed.forEach((completeds) => {
            completeds.style.display = "none"
        })
        setItems(document.querySelectorAll('.all').length)
    }

    
    const selectCompleted = (e) => {
        e.target.style.color = "#3A7CFD"
        document.querySelector('.allp').style.color = "#9495A5"
        document.querySelector('.activep').style.color = "#9495A5"
        const all = document.querySelectorAll('.all')
        
        all.forEach((alls) => {
            alls.style.display = "none"
            
        })

        const completed = document.querySelectorAll('.completed')
        completed.forEach((completeds) => {
            completeds.style.display = "flex"
        })

        

    }


    const shitsuo = (b) => {
        if(b.target.classList.contains("clear-completed")) {
            
        }
    }

    const clearCompleted = () => {
        document.querySelectorAll('.completed').forEach((completes) => {
            completes.remove()
        })
        setItems(document.querySelectorAll('.all').length)
    }

    const selectAll1 = (e) => {
        const all = document.querySelectorAll('.all')
        
        all.forEach((alls) => {
            alls.style.display = "flex"
            
        })
        
        
        e.target.style.color = "#3A7CFD"
        document.querySelector('.activep1').style.color = "#9495A5"
        document.querySelector('.completedp1').style.color = "#9495A5"
    }

    const selectActive1 = (e) => {
        e.target.style.color = "#3A7CFD"
        document.querySelector('.allp1').style.color = "#9495A5"
        document.querySelector('.completedp1').style.color = "#9495A5"
        const all = document.querySelectorAll('.all')
       
        all.forEach((alls) => {
            alls.style.display = "flex"
            
        })
        const completed = document.querySelectorAll('.completed')
        completed.forEach((completeds) => {
            completeds.style.display = "none"
        })
        setItems(document.querySelectorAll('.all').length)
    }


    const selectCompleted1 = (e) => {
        e.target.style.color = "#3A7CFD"
        document.querySelector('.allp1').style.color = "#9495A5"
        document.querySelector('.activep1').style.color = "#9495A5"
        const all = document.querySelectorAll('.all')
        
        all.forEach((alls) => {
            alls.style.display = "none"
            
        })

        const completed = document.querySelectorAll('.completed')
        completed.forEach((completeds) => {
            completeds.style.display = "flex"
        })

        

    }

    return(
        <>
        <div className="textarea-div">
        <div className="before-check">
        <input onChange={createNewLi}  className="textarea-div-check" type="checkbox" name="" id="" />
        <img className="checkicon" src="/icon-check.svg" alt="" />
        </div>
        <input onChange={modifyText} onKeyDown={keyPress} className="write" type="text" placeholder="Create a new todo..." />
    </div>
    <div className="div-for-ul">
            <ul>
                
            </ul>
            <div className="items-left">
                <p className="leftover">{items} items left</p>
                <div className="selectionone">
            <p className="allp1" onClick={selectAll1}>All</p>
            <p className="activep1" onClick={selectActive1}>Active</p>
            <p className="completedp1" onClick={selectCompleted1}>Completed</p>
        </div>
                <button onClick={clearCompleted} className="clear-completed">Clear Completed</button>
            </div>
        </div>
        <div className="selection">
            <p className="allp" onClick={selectAll}>All</p>
            <p className="activep" onClick={selectActive}>Active</p>
            <p className="completedp" onClick={selectCompleted}>Completed</p>
        </div>
        </>
    )
}

export default StartingMainContentDiv