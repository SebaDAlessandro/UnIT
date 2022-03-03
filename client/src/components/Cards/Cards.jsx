import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCandidates } from '../../redux/actions'
import { useEffect } from 'react';
import Card from '../Card/Card'
import styles from '../Cards/Cards.module.css'

const Cards = () => {

    let dispatch = useDispatch();
    const candidates = useSelector(state => state.candidates)

    useEffect(() => {
        dispatch(getAllCandidates());
    }, [])

    console.log(candidates)

  return (
    <div className={styles.globalCont}>

    <div className={styles.container}>

        {candidates.map((c) => <Card
        name={c.name}
        lastname={c.lastname}
        location={c.location}
        id={c.id}
        image={c.image}
        />) }
    </div>
    </div>
  )
}

export default Cards;