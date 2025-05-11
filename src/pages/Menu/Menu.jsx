import React, { useState, useEffect } from 'react';
import './Menu.css';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import { motion } from 'framer-motion';
import cocktailsEN from '../../utils/cocktails.en';
import cocktailsES from '../../utils/cocktails.es';
import mealsEN from '../../utils/meals.en';
import mealsES from '../../utils/meals.es';
import drinksEN from '../../utils/drinks.en';
import drinksES from '../../utils/drinks.es';
import { Link } from 'react-router-dom';

function Menu({ lng }) {
  const [sections, setSections] = useState([]);
  useEffect(() => {
    const language = lng === 'es' ? 'es' : 'en';
    const sectionList = [
      { name: 'Cocktails', items: cocktailsEN, lng: 'en' },
      { name: 'Cócteles', items: cocktailsES, lng: 'es' },
      { name: 'Drinks', items: drinksEN, lng: 'en' },
      { name: 'Bebidas', items: drinksES, lng: 'es' },
      { name: 'Meals', items: mealsEN, lng: 'en' },
      { name: 'Comidas', items: mealsES, lng: 'es' },
    ].filter((section) => section.lng === language);
    setSections(sectionList);
  }, [lng]);
  return (
    <div className='menu-page'>
      <header className='height-50 mt-5'>
        <motion.div
          className='container h-100 d-flex align-items-center justify-content-center'
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-light'>Menu</h1>
        </motion.div>
      </header>
      {sections.map((section, index) => {
        const number = index + 1;
        const isEven = number % 2 === 0;
        return <div className={`${!isEven ? 'my-5' : 'py-5 bg-dark text-light'}`} key={index}>
          <div className='container'>
            <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>{section.name}</h2>
            {index === 0 && <div className='d-flex justify-content-center'>
              {lng === 'es' && <Link to={`/en`} className='btn btn-success text-light fs-5 text-uppercase'>
                Show in English
              </Link>}
              {lng === 'en' && <Link to={`/es`} className='btn btn-success text-light fs-5 text-uppercase'>
                Mostrar en Español
              </Link>}
            </div>}
            <div className={`row ${!isEven ? 'flex-column-reverse flex-lg-row' : ''}`}>
              <motion.div
                className='d-flex flex-column justify-content-around'
                initial={{ opacity: 0, x: 350 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                {section.items.map((item, i) => (
                  <div key={i} className='d-flex row'>
                    <motion.div
                      className='col-lg-6 mb-5 col-12 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center '
                      initial={{ opacity: 0, x: -300 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }}
                    >
                      <img src={item.image} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                    </motion.div>
                    <div className='d-flex justify-content-center align-items-center col-lg-6 col-12 col-sm-12 col-xs-12'>
                      <Card className='border-0'>
                        <CardBody>
                          <CardTitle className='text-center fs-3 text-capitalize'>
                            {item.name}
                          </CardTitle>
                          <CardText className='text-center fs-5'>
                            {item.description}
                          </CardText>
                          <CardText className='text-center fs-3 fw-bold text-success'>
                            {item.price}
                          </CardText>
                        </CardBody>
                      </Card>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      })}

      <motion.div
        className="container my-5 pt-5 d-flex justify-content-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
      </motion.div>
    </div>
  )
}

export default Menu;