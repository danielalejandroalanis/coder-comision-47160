import React from 'react'
import FormComponent from '../components/FormComponent/FormComponent'

import {doc, getFirestore, updateDoc} from 'firebase/firestore';


//ABM: ALTA - BAJA - MODIFICACION (CRUD: CREATE - READ - UPDATE - DELETE)
const CreateProducts = () => {

  React.useEffect(() => {
    const db = getFirestore();
    
    const docToUpdate = doc(db, "products", "LjDyYKygt4T4OjWteuVI");

    updateDoc(docToUpdate, {price: 1000});

  }, [])

  return (
    <FormComponent />
  )
}

export default CreateProducts