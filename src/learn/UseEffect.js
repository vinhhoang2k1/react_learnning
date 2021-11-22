import React, { useEffect, useState } from 'react'
const lessons = [
    {
        id: 1,
        name: 'lesson1'
    },
    {
        id: 2,
        name: 'lesson2'
    },
    {
        id: 3,
        name: 'lesson3'
    },

]
function UseEffect() {

    const [lessonId, setLessonId] = useState(1)
    const handleComent = ({ detail }) => {
        console.log(detail);

    }
    useEffect(() => {
        window.addEventListener(`lesson${lessonId}`, handleComent)

        return () => {
            window.removeEventListener(`lesson${lessonId}`, handleComent)
        }
    }, [lessonId])

    return (
        <div>
            {lessons.map((les) => {
                return (
                    <>
                        <li
                            key={les.id}
                            style={{ color: les.id === lessonId ? 'red' : 'black' }}
                            onClick={() => { setLessonId(les.id) }} >
                            {les.name}

                        </li >

                    </>)
            })}

        </div >
    )
}

export default UseEffect
