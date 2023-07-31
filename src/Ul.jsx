import { useState } from "react"


function Ul ({items}) {
    
    


    const selectAll = (e) => {
        const all = document.querySelectorAll('.all')
        console.log(all)
        all.forEach((alls) => {
            alls.style.display = "flex"
            
        })
        
        
        e.target.style.color = "#3A7CFD"
        document.querySelector('.activep1').style.color = "#9495A5"
        document.querySelector('.completedp1').style.color = "#9495A5"
    }

    const selectActive = (e) => {
        e.target.style.color = "#3A7CFD"
        document.querySelector('.allp1').style.color = "#9495A5"
        document.querySelector('.completedp1').style.color = "#9495A5"
        const all = document.querySelectorAll('.all')
        console.log(all)
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
        document.querySelector('.allp1').style.color = "#9495A5"
        document.querySelector('.activep1').style.color = "#9495A5"
        const all = document.querySelectorAll('.all')
        console.log(all)
        all.forEach((alls) => {
            alls.style.display = "none"
            
        })

        const completed = document.querySelectorAll('.completed')
        completed.forEach((completeds) => {
            completeds.style.display = "flex"
        })

        

    }
    
    const clearCompleted = () => {
        document.querySelectorAll('.completed').forEach((completes) => {
            completes.remove()
        })

        
        
    }
    

    return(
        <>

        <div className="div-for-ul">
            <ul>
                
            </ul>
            <div className="items-left">
                <p>{items} items left</p>
                <div className="selectionone">
            <p className="allp1" onClick={selectAll}>All</p>
            <p className="activep1" onClick={selectActive}>Active</p>
            <p className="completedp1" onClick={selectCompleted}>Completed</p>
        </div>
                <button onClick={clearCompleted} className="clear-completed">Clear Completed</button>
            </div>
        </div>



        </>
    )
}

export default Ul