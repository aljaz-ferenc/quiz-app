import { motion } from 'framer-motion'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { difficultyActions } from '../redux/difficulty/difficultySlice'
import { useSelector, useDispatch} from 'react-redux'

const containerVariants ={
    initial: {
        x: '-150vw',
    },
    animate: {
        x: 0
    },
    exit: {
        x: '-150vw',
    }
}

export default function WelcomePage() {
    const dispatch = useDispatch()

    function resetHandler(){
        dispatch(difficultyActions.reset())
    }

    return (
        <motion.div 
            variants={containerVariants}
            exit='exit'
            initial="initial"
            animate="animate"
        >
            <div>WelcomePage</div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos libero, et expedita provident nesciunt impedit esse eaque fugiat distinctio illo numquam dolor magnam consequuntur eos non aspernatur culpa fuga quis pariatur enim debitis accusamus unde. Deserunt quae eligendi consequatur maxime facilis architecto iure voluptate, vitae qui, dicta nemo accusamus quibusdam recusandae repellendus. Incidunt harum, molestiae autem, laborum iure blanditiis fugit necessitatibus repudiandae a libero alias, nobis quod aut quis perferendis quasi. Quia suscipit, dolores tenetur assumenda explicabo doloremque tempore unde porro. Accusamus facere nulla quisquam dolor omnis deleniti veniam, dolores eius ducimus sit ipsam maiores saepe alias itaque ex doloribus aspernatur tempora sint assumenda at possimus vitae facilis neque harum! Provident voluptatibus consectetur sit culpa libero illo veniam rerum cum recusandae quas cupiditate non ad explicabo, facere iste repellendus. Id alias voluptatum pariatur quaerat atque ducimus optio ipsa asperiores, magnam soluta exercitationem veritatis molestiae maxime veniam corrupti necessitatibus, officia placeat dolorum, porro molestias deleniti consequuntur. Laborum quas temporibus esse quisquam! Iure natus at rerum eveniet! Nostrum a sapiente, quod aperiam asperiores beatae cumque molestias saepe ducimus, inventore debitis. Alias odit, tempora, nesciunt nisi repudiandae voluptatibus sunt nihil adipisci sequi consequuntur earum accusantium voluptates reiciendis. Deleniti alias commodi nostrum sunt neque!</p>
            <Link to='/quiz' onClick={resetHandler}>Start!</Link>
        </motion.div>
    )
}
