import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';

import state from '../store';

import { CustomButton } from '../compenents';

const Home = () => {
    const snap = useSnapshot(state);
    return (
        <AnimatePresence>
            {snap.intro &&
                <motion.div className='home' {...slideAnimation('left')}>
                    <motion.header {...slideAnimation('down')}>
                        <img src='./threejs.png'
                            alt='logo'
                            className='w-8 h-8 object-contain'
                        />

                        <motion.div className='home-content'{...headTextAnimation}>
                            <h1>
                                <motion.div className="head-text">
                                    LET'S <br className='xl:block hidden' /> DO IT.
                                </motion.div>
                            </h1>
                        </motion.div>
                        <motion.div {...headContentAnimation}
                            className='flex flex-col gap-5'>
                            <p className='max-w-md font-normal text-gray-600 text-base'>
                                Create your unique and exclusive shirt with our brand-new 3D customization tool.<strong>
                                    Unleash your imagination </strong>{" "}
                                and define your own style.
                            </p>
                            <CustomButton
                                type="filled"
                                title="Customize it"
                                handleClick={() =>
                                    state.intro = false
                                }

                                customStyles="w-fit px-4 py-2.5 font-bold text-sm" />
                        </motion.div>
                    </motion.header>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default Home