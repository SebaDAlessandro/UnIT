import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCandidates } from '../../redux/actions'
import { useEffect } from 'react';
import Card from '../Card/Card'
import styles from '../Cards/Cards.module.css'

const Cards = () => {

    let dispatch = useDispatch();
    const candidates = useSelector(state => state.mostrar)

    console.log(candidates, 'Candidatos cards')

    useEffect(() => {
        dispatch(getAllCandidates());
    }, [])

  return (
    <div className={styles.globalCont}>

    <div className={styles.container}>

        {Array.isArray(candidates)?candidates.map((c) => <Card
            id={c.id}
             name={c.name} 
             lastname={c.lastname}
             description={c.description} 
             image={c.image} 
             location={c.location} 
             orientation={c.orientation} 
             sskill={c.sskill?.map(c => <span>{c}</span>)}
             tskill={c.tskill?.map(c => <span>{c}</span>)}
        />):
        <h1>hola</h1>
        }
    </div>
    </div>
  )
}

export default Cards;